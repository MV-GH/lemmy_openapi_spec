# Welcome to the contribution guidelines

## How does it work
First we generate a file with all datatypes (as TS) from the backend. We get these from the [lemmy-js-client](https://github.com/LemmyNet/lemmy-js-client) submodule.

The script `gen_types.ts` reads all the types from the submodule and turns it into one file.
This file `auto_gen_types.ts` gets used by the `gen_components.ts` script which leverages [typeconv](https://github.com/grantila/typeconv) 
to generates all the components for the OpenAPI document which is saved as `components.yaml`

Then we have a handwritten `api_routes.yaml` which contains all the api routes from the Lemmy API.

Using [Redocly](https://github.com/Redocly/redocly-cli) we merge those into one file called `lemmy_spec.yaml`
I also use this tool to generate the API docs.

So do not touch the following files: `components.yaml`, `auto_gen_types.ts`, `lemmy_spec.yaml`

## How to run it

- Clone the repository `git clone --recurse-submodules https://github.com/MV-GH/lemmy_openapi_spec`
- Install the dependencies `yarn install`

You can change the version of the lemmy-js-client submodule by doing `cd lemmy-js-client && git checkout <tag>`

Generate the types from the submodule by doing `yarn gen_types`

Generate the components from the types by doing `yarn gen_components`

Build the full spec by doing `yarn gen_spec`

You can check if it passes the lint by doing `yarn lint_spec`

You can preview your changes by doing `yarn preview_docs`

## Questions?
Don't hesitate to make a issue/discussion

