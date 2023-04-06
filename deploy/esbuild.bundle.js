import esbuild from "esbuild";
import cssModulesPlugin from "esbuild-css-modules-plugin"

esbuild.build({
    entryPoints: ['./src/bundle.ts'],
    outfile: './build/widget.js',
    platform: "browser",
    format: "iife",
    globalName: "starter_bundle_test",
    bundle: true,
    minify: true,
    logLevel: "info",
    plugins: [cssModulesPlugin()],
    footer: {
        js: "var StarterBundleTest = starter_bundle_test.default"
    }
}).catch(e => {
    console.log("Error while building", e);
    process.exit(1)
})
