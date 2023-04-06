import * as fs from 'fs';
import { createComponentData, replace, importsRegex } from "@viscircle-org/ui-config-common";
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = _traverse.default;
const metadata = {
    "name": "Starter Bundle Test",
    "version": "1.0.0",
    "patchnote": ""
}

export function exportComponentJson() {
    let dir = './src/components';
    fs.readdir(dir, (err, files) => {
        let request = [];
        let components = [];
        files.forEach(file => {
            request.push(readMetadata(components, dir, file));
        });
        Promise.all(request).then(() => {
            let bundle = {
                name: metadata.name,
                version: metadata.version,
                patchnote: metadata.patchnote,
                components: components
            }
            fs.writeFileSync('./build/data.json', JSON.stringify(bundle, null, 2))
        })
    });
}

function readMetadata(array, path, file) {
    return new Promise((res, rej) => {
        fs.readFile(path + "/" + file + "/Metadata.json", (err, d) => {
            let data
            if (err) {
                data = { "description": "", "type": "Element" };
            }
            else {
                data = JSON.parse(d.toString());
            }
            fs.readFile(path + "/" + file + "/" + file + ".tsx", (err, compomentCode) => {
                try {
                    const codeToTranspile = replace(compomentCode.toString(), importsRegex)
                    // the magic sauce used to transpile the code
                    const options = { presets: ['es2015-loose', 'react'] }
                    const ast = parse(codeToTranspile, { sourceType: 'module', sourceFilename: "example.tsx", plugins: ["jsx", "typescript", "classProperties", "exportNamespaceFrom"] })
                    let nodeArray = []
                    traverse(ast, {
                        enter(path) {
                            nodeArray.push(path.node)
                        },
                    });
                    let comp = createComponentData(nodeArray)
                    if (data.stylingMode) {
                        comp.classCollection.forEach((c) => {
                            let restriction = data.stylingMode.find(e => e.name === c.name);
                            if (restriction) {
                                c.restriction = restriction.restriction;
                            }
                        })
                    }
                    if (comp) {
                        array.push({
                            name: file,
                            description: data.metadata.description,
                            metadata: data.metadata,
                            componentCode: comp
                        })
                    }
                    res();
                }
                catch (e) {
                    console.log(e);
                    res()
                }
            })
        })
    })
}