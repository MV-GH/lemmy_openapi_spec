// This script reads the summaries from the lemmy-js-client source files and writes them to the api_routes.yaml spec.

import ts from "typescript"
import fs from "fs"
import {parseDocument, YAMLMap} from 'yaml'
import {forEachComment} from "tsutils"

interface Summary {
    summary: string,
    method: string,
    route: string,
}

const targetFile = "partials/api_routes.yaml"
const sourceFile = "./lemmy-js-client/src/http.ts"
const classWithRoutes = "LemmyHttp"

// this function reads the source file as AST and returns the comments as string
function getComments(): string[] {
    const source = fs.readFileSync(sourceFile, "utf8")
    const sourceFileObj = ts.createSourceFile(sourceFile, source, ts.ScriptTarget.ES2015, true)

    const lemmyHttpComments = [];

    // Traverse the AST to find comments.
    ts.forEachChild(sourceFileObj, (node) => {
        // Only look at the LemmyHttp class.
        if (ts.isClassDeclaration(node) && node.name?.text === classWithRoutes) {
            forEachComment(node, (fullText, commentRange) => {
                lemmyHttpComments.push(fullText.substring(commentRange.pos, commentRange.end));
            });
        }
    });

    return lemmyHttpComments;
}

// This regex matches the summary and route from a comment.
const rgxSummaryRoute = /\/\*\*\s*\*(.*)[\s*]*`(\S*)\s*(.*)`.*\s*\*\//


function getSummaries(comments: string[]): Summary[] {
    const summaries: Summary[] = []

    for (const comment of comments) {

        const match = rgxSummaryRoute.exec(comment)

        if (match) {
            summaries.push({
                summary: match[1].trim(),
                method: match[2].slice(5).toLowerCase(), // Remove "HTTP."
                route: match[3]
            })
        } else {
            console.log(`No match: [${comment}]`)
        }
    }

    return summaries
}

function writeSummaries(summaries: Summary[]) {
    const file = fs.readFileSync(targetFile, 'utf8')
    const doc = parseDocument(file)

    const paths = doc.get("paths") as YAMLMap

    for (const summary of summaries) {
        const route = paths.get(summary.route) as YAMLMap
        if (route === undefined) {
            console.log("Route not found: " + summary.route)
        } else if (route.get(summary.method) === undefined) {
            console.log(`[${summary.route}] Method not found: ${summary.method}`)
        } else {
            const routeMethod = route.get(summary.method) as YAMLMap
            routeMethod.set("summary", summary.summary)
        }
    }

    fs.writeFileSync(targetFile, doc.toString())
}

writeSummaries(getSummaries(getComments()))

