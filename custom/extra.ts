import {convertTypeScriptToCoreTypes, FromTsOptions} from "./core-types-ts/index.js";
import {Reader} from "typeconv";

export function getTypeScriptReaderV2(tsOptions?: FromTsOptions): Reader {
    return {
        kind: 'ts',
        read(source, {warn, filename}) {
            return convertTypeScriptToCoreTypes(
                source,
                {
                    warn,
                    ...tsOptions,
                }
            );
        }
    };
}