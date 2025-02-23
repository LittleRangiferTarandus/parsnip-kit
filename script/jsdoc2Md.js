// Copyright (c) 2024 chouchouji
// Original Project: @binbinji/jsdoctomd
// Project URL: https://github.com/chouchouji/jsdoctomd.git
// License: MIT

import { parse } from 'comment-parser';
import esprima from 'esprima';

function formatType(types) {
  if (types.includes('|')) {
    return types.split('|').map((type) => type.trim());
  }
  return [types];
}
function generateMD(func) {
  const { version, refer, functionName, content, needContent, args, returnType, lang, example } = func;
  return `
# ${functionName}
      
${func[lang + 'Description'] || func.description}${
  version ? `\n\n> Added in v${version}\n\n`: ''
}

${
  example ? `### Usage\n\n${example}\n\n`: ''
}${
  needContent ? `### Source\n\n\`\`\`typescript\n${content}\n\`\`\`\n\n`: ''
}${
  refer || returnType || args?.length ? '### API\n\n' : ''
}${
  args?.length ? `#### Arguments\n\n| Arg | Type | Optional | Default | Description |\n| --- | --- | --- | --- | --- |\n${args.map((item) => `| \`${item.name}\` | ${'`' + formatType(item.type).join(' \\| ') + '`'} | \`${item.optional}\` | \`${item.default}\` | ${item[lang + 'Desc'] || item.desc} |`).join('\n')}\n\n` : ''
}${
  returnType ? `#### Returns\n\n| Type |\n| ---  |\n| \`${returnType}\`  |\n\n` : ''
}${
  refer ? `#### Reference\n\n${refer}` : ''
}
`;
}

function isEmpty(val) {
  return val === void 0 || val === null || val === '' || Array.isArray(val) && !val.length;
}
function formatExample(sources) {
  if (isEmpty(sources)) {
    return '';
  }
  return sources.filter((item) => !item.includes('@example')).map((item) => item.slice(3)).join('\n');
}

const langArr = ['zh', 'en', 'jp']

function getFormatJsdoc(comment) {
  if (!comment) {
    return {}
  }
  const [jsdoc] = parse(comment, { spacing: 'preserve' });
  const returns = jsdoc.tags.find((item) => item.tag === 'returns');
  const refer = jsdoc.tags.find((item) => item.tag === 'refer');
  const example = jsdoc.tags.find((item) => item.tag === 'example');
  const version = jsdoc.tags.find((item) => item.tag === 'version');
  const args = jsdoc.tags.filter((item) => item.tag === 'param').map((item) => {
    const arr = item.description.split(/@(\w+)\s/).filter(Boolean)
    const ans = {
      name: item.name,
      type: item.type,
      optional: item.optional,
      default: item.default,
      desc: item.description,
    }
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      ans[arr[i * 2] + 'Desc'] = arr[i * 2 + 1]
    }
    return ans
  })
  const funcDesc = jsdoc.description
  const ans = {
    description: funcDesc,
    returnType: returns
      ? returns.type ? returns.type.replace(/\|/g, '\\|') : 'void'
      : '',
    example: example?.source ? formatExample(example.source.map((item) => item.source)) : '',
    args,
    version: version ? [version.name, version.description].filter(Boolean).join(' ') : '',
    refer: refer ? [refer.name, refer.description].filter(Boolean).join(' ') : ''
  }
  langArr.forEach(langStr => {
    const textItem = jsdoc.tags.find((item) => item.tag === langStr)
    if (textItem) {
      ans[langStr + 'Description'] = [textItem.name, textItem.description].filter(Boolean).join(' ')
    }
  })
  return ans
}
function getFunctionName(content) {
  const tokens = esprima.tokenize(content);
  let functionName = '';
  let lastToken = { type: '', value: '' };
  for (let i = 0; i < tokens.length; i++) {
    if (i >= 1) {
      lastToken = tokens[i - 1];
    }
    const { type, value } = lastToken;
    const isFunction2 =
      type === 'Keyword' && ['function', 'const', 'type'].includes(value)
      || type === 'Identifier' && ['interface', 'type'].includes(value);
    if (tokens[i].type === 'Identifier' && isFunction2) {
      functionName = tokens[i].value;
      break;
    }
  }
  return functionName;
}
function parseFile(file) {
  const codes = file.split(/\r\n|\n/);
  const length = codes.length - 1;
  const result = [];
  let comment = '';
  let content = '';
  codes.forEach((code, idx) => {
    if (code === '/**' || idx === length) {
      if (content || comment) {
        result.push({
          comment,
          content
        });
      }
      comment = '/**\n';
      content = '';
    } else if (comment && (code == ' *' || code.startsWith(' * ') || code.startsWith(' */'))) {
      comment += `${code}
`;
    } else if (!(code == ' *' || code.startsWith(' * ') || code.startsWith(' */'))) {
      content += `${code}
`;
    }
  });
  return result.filter(Boolean);
}
function jsdocToMD(options) {
  const { input, extname, lang, needContent } = options;
  const parsedFiles = parseFile(input);
  const mds = parsedFiles.map((file) => {
    const { comment, content } = file;
    const formatJsdoc = getFormatJsdoc(comment);
    const functionName = getFunctionName(content);
    if (!comment) {
      return ''
    }
    const ans = generateMD({
      ...formatJsdoc, content, lang, functionName, needContent
    }).trim()
    return ans
  });
  return mds.filter(Boolean).join('\n').trim();
}
export {
  jsdocToMD
}
