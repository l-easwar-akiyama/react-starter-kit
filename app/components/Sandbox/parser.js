import { transform, transformFromAst } from '@babel/standalone';

function generateFileMap(files) {
  const fileMap = {};
  files.forEach(({ name, code }) => {
    fileMap[name] = { name, code };
  });
  return fileMap;
}

export default function(files, entry = 'index.js') {
  const transformedMap = generateFileMap(files);
  const dependencyOrder = [];

  function resolveFileToUrl(name, chain = []) {
    const { url, code } = transformedMap[name];
    if (url) {
      return url;
    }

    const { ast } = transform(code, {
      ast: true,
      sourceType: 'module',
      presets: ['react'],
    });

    ast.program.body = ast.program.body.map(node => {
      if (node.type === 'ImportDeclaration') {
        if (node.source.value.startsWith('./')) {
          const choppedName = node.source.value.substring(2);
          if (chain.includes(choppedName)) {
            throw new Error(
              `Circular dependency detected between ${name} and ${node.source.value}`
            );
          }
          return {
            ...node,
            source: {
              ...node.source,
              value: resolveFileToUrl(choppedName, [...chain, name]),
            },
          };
        }
        return {
          ...node,
          source: {
            ...node.source,
            value: `https://unsafe-production.jspm.io/${node.source.value}`,
          },
        };
      }
      return node;
    });

    const { code: transformedCode } = transformFromAst(ast, code, {
      sourceType: 'module',
      presets: ['react'],
      minified: true,
    });

    transformedMap[name].url = URL.createObjectURL(
      new Blob([transformedCode], { type: 'application/javascript' })
    );
    dependencyOrder.push(name);
    return transformedMap[name].url;
  }

  resolveFileToUrl(entry);

  return dependencyOrder.map(name => ({ name, url: transformedMap[name].url }));
}
