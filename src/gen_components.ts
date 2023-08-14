import {
    getTypeScriptReader,
    getOpenApiWriter,
    makeConverter,
} from 'typeconv'

const reader = getTypeScriptReader();

const writer = getOpenApiWriter({
    format: 'yaml',
    title: 'Unofficial Lemmy Documentation',
    version: 'v0.18.3',
    schemaVersion: "3.0.3"
}
)

const {convert} = makeConverter(reader, writer);


await convert(
    {filename: "partials/auto_gen_types.ts", cwd: "../"},  {filename: "components.yaml"}
);
