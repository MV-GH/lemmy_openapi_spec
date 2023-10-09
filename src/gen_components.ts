import {
    getOpenApiWriter,
    makeConverter,
} from 'typeconv'
import {getTypeScriptReaderV2} from "../custom/extra.js";

const reader = getTypeScriptReaderV2({unsupported: "warn"});

const writer = getOpenApiWriter({
        format: 'yaml',
        title: 'Unofficial Lemmy Documentation',
        version: 'v0.19.0',
        schemaVersion: "3.0.3"
    },
)

const {convert} = makeConverter(reader, writer);


await convert(
    {filename: "partials/auto_gen_types.ts", cwd: "../"}, {filename: "partials/components.yaml"}
);
