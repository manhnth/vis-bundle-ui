# UI bundle template

NEVER git this project. Download it and create your own project from it.

## IMPORTANT

Choose a unique name for you UI Bundle. The name should be unique, at least unique among all other Bundles installed in your projects.

First go to esbuild.bundle.js and rename the var of footer and global name to that name, then go to build.js and rename the 'name' of the metadata to be the same but camel case.

Example: 'My First Bundle" in the metadata name, my_first_bundle as golbal name and 'var MyFirstBundle = my_first_bundle.default' in footer (esbuild.bundle.js).

Before build please check if you already export every component in src/bundle.ts. If you forget to export that Component will not exist in the built widget.

There is a demo "Button" component in src/components/Button. Delete it when you no longer need.

## Getting started

This is the bundle tepmlate. Read more on [How to create a bundle](https://app.clickup.com/24312709/v/dc/q5yw5-14021/q5yw5-102601) 

src/components is where you should put components

## Command

```
npm run build-bundle (build widget.js)
npm run export-json (build data.json)
npm run start (local testing)
```

data built at /build/

## Change UI bundle name

This is not adviced and should only do this with permission. You can change name at deploy/esbuild.bundle.js

## TODO

Add some dummy website to run at localhost here so you can test the plugin locally.
