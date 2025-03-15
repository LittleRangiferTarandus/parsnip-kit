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
  let {
    templateFile,
    templates,
    version,
    functionName,
    description,
    content,
    args,
    returnType,
  } = func;

  const descReg = new RegExp(`\\[\\[\\[desc ${functionName}([\\d\\D]*?)\\]\\]\\]`)
  const matchDesc = templateFile.match(descReg)
  if (matchDesc) {
    templateFile = templateFile.slice(0, matchDesc.index)
      + (matchDesc[1]?.split(/\n|\r\n/).map(e => e.trim()).join('\n').trim() || description)
      + templateFile.slice(matchDesc.index + matchDesc[0].length)
  }
  
  const matchVersion = templateFile.match(new RegExp(`\\[\\[\\[version ${functionName}([\\d\\D]*?)\\]\\]\\]`))
  if (matchVersion) {
    templateFile = templateFile.slice(0, matchVersion.index)
      + (version ? `\n\n> Added in v${version}\n\n`: '')
      + templateFile.slice(matchVersion.index + matchVersion[0].length)
  }
  
  const matchTemplate = templateFile.match(new RegExp(`\\[\\[\\[template ${functionName}([\\d\\D]*?)\\]\\]\\]`))
  if (matchTemplate) {
    const dict = {}
    if (matchTemplate[1]) {
      let rows = matchTemplate[1].trim().split(/\n|\r\n/)
      rows = rows.forEach(row => {
        const idx = row.indexOf(':')
        if (idx === -1) {
          return
        }
        const key = row.slice(0, idx)
        const value = row.slice(idx + 1)
        dict[key.trim()] = value.trim()
      })
    }
    const text = templates?.length
      ? `\n\n| Arg | Type | Description |\n| --- | --- | --- |\n${
        templates.map((item) => `| \`${
          item.name
        }\` | ${
          '`' + (formatType(item.type).join(' \\| ') || ' ') + '`'
        } | ${dict[item.name] || item.desc} |`).join('\n')
      }\n\n` : ''
      
    templateFile = templateFile.slice(0, matchTemplate.index)
      + text
      + templateFile.slice(matchTemplate.index + matchTemplate[0].length)
  }

  const matchParams = templateFile.match(new RegExp(`\\[\\[\\[params ${functionName}([\\d\\D]*?)\\]\\]\\]`))
  if (matchParams) {
    const dict = {}
    if (matchParams[1]) {
      let rows = matchParams[1].trim().split(/\n|\r\n/)
      rows = rows.forEach(row => {
        const idx = row.indexOf(':')
        if (idx === -1) {
          return
        }
        const key = row.slice(0, idx)
        const value = row.slice(idx + 1)
        dict[key.trim()] = value.trim()
      })
    }
    const text = args?.length
      ? `\n\n| Arg | Type | Optional | Default | Description |\n| --- | --- | --- | --- | --- |\n${
        args.map((item) => `| \`${item.name}\` | ${
          '`' + formatType(item.type).join(' \\| ') + '`'
        } | \`${
          item.optional
        }\` | \`${
          item.default
        }\` | ${
          dict[item.name] || item.desc
        } |`).join('\n')
      }\n\n` : ''
      
    templateFile = templateFile.slice(0, matchParams.index)
      + text
      + templateFile.slice(matchParams.index + matchParams[0].length)
  }

  const matchReturns = templateFile.match(new RegExp(`\\[\\[\\[returns ${functionName}([\\d\\D]*?)\\]\\]\\]`))
  if (matchReturns) {
    templateFile = templateFile.slice(0, matchReturns.index)
      + (returnType ? `\n\n| Type |\n| ---  |\n| \`${returnType}\`  |\n\n` : '')
      + templateFile.slice(matchReturns.index + matchReturns[0].length)
  }

  const sourceReg = new RegExp(`\\[\\[\\[source ${functionName}([\\d\\D]*?)\\]\\]\\]`)
  const matchSource = templateFile.match(sourceReg)
  if (matchSource) {
    templateFile = templateFile.slice(0, matchSource.index)
      + `\n\n\`\`\`typescript\n${content}\`\`\``
      + templateFile.slice(matchSource.index + matchSource[0].length)
  }
  return templateFile
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

function getFormatJsdoc(comment) {
  if (!comment) {
    return {}
  }
  const [jsdoc] = parse(comment, { spacing: 'preserve' });
  const returns = jsdoc.tags.find((item) => item.tag === 'returns');
  const version = jsdoc.tags.find((item) => item.tag === 'version');
  const templates = jsdoc.tags.filter((item) => item.tag === 'template')?.map((item) => {
    const ans = {
      name: item.name,
      type: item.type,
      optional: item.optional,
      default: item.default,
      desc: item.description,
    }
    return ans
  }) || ''
  const args = jsdoc.tags.filter((item) => item.tag === 'param').map((item) => {
    const ans = {
      name: item.name,
      type: item.type,
      optional: item.optional,
      default: item.default,
      desc: item.description,
    }
    return ans
  })
  const funcDesc = jsdoc.description
  const ans = {
    description: funcDesc,
    returnType: returns
      ? returns.type ? returns.type.replace(/\|/g, '\\|') : 'void'
      : '',
    args,
    templates,
    version: version ? [version.name, version.description].filter(Boolean).join(' ') : '',
  }
  return ans
}
function getFunctionName(content) {
  const tokens = esprima.tokenize(content);
  let functionName = '';
  let lastToken = { type: '', value: '' };
  let tokenType = 'variable'
  for (let i = 0; i < tokens.length; i++) {
    if (i >= 1) {
      lastToken = tokens[i - 1];
    }
    const { type, value } = lastToken;
    const isFunction2 =
      type === 'Keyword' && ['function', 'const'].includes(value)
      || type === 'Identifier' && ['interface', 'type'].includes(value);
    if (tokens[i].type === 'Identifier' && isFunction2) {
      functionName = tokens[i].value;
      if (type === 'Identifier' && ['interface', 'type'].includes(value)) {
        tokenType = 'type'
      }
      break;
    }
  }
  return {
    functionName,
    type: tokenType
  };
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
  const { input, extname, lang, needContent, template: templateFile } = options;
  const parsedFiles = parseFile(input);
  const md = parsedFiles.reduce((pre, file) => {
    const { comment, content } = file;
    const formatJsdoc = getFormatJsdoc(comment);
    const { functionName, type } = getFunctionName(content);
    if (!comment) {
      return pre
    }
    const ans = generateMD({
      ...formatJsdoc,
      content,
      functionName,
      templateFile: pre
    }).trim()
    return ans
  }, templateFile);
  return md
}
export {
  jsdocToMD
}
