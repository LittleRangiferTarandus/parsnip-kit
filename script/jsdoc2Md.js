// Copyright (c) 2024 chouchouji
// Original Project: @binbinji/jsdoctomd
// Project URL: https://github.com/chouchouji/jsdoctomd.git
// License: MIT

import { parse } from "comment-parser";
import esprima from "esprima";

function formatType(types) {
  if (types.includes("|")) {
    return types.split("|").map((type) => type.trim());
  }
  return [types];
}
function generateMD(func) {
  const { functionName, description, content, args, returnType, extname, example } = func;
  return `
# ${functionName}
      
${description}

### Usage

${example}
      
### Arguments
      
| Arg | Type | Optional | Default | Description |
| --- | --- | --- | --- | --- |
${args.map((item) => `| \`${item.name}\` | ${"`" + formatType(item.type).join(" \\| ") + "`"} | \`${item.optional}\` | \`${item.default}\` | \`${item.desc}\` |`).join("\n")}
      
### Returns

| Type |
| ---  |
| \`${returnType}\`  |
`;
}

function isEmpty(val) {
  return val === void 0 || val === null || val === "" || Array.isArray(val) && !val.length;
}
function isFunction(val) {
  return typeof val === "function";
}

function formatExample(sources) {
  if (isEmpty(sources)) {
    return "";
  }
  return sources.filter((item) => !item.includes("@example")).map((item) => item.slice(3)).join("\n");
}
function getFormatJsdoc(comment) {
  const [jsdoc] = parse(comment);
  const returns = jsdoc.tags.find((item) => item.tag === "returns");
  const example = jsdoc.tags.find((item) => item.tag === "example");
  const args = jsdoc.tags.filter((item) => item.tag === "param").map((item) => ({
    name: item.name,
    type: item.type,
    optional: item.optional,
    default: item.default,
    desc: item.description
  }));
  return {
    description: jsdoc.description,
    returnType: returns?.type || "void",
    example: example?.source ? formatExample(example.source.map((item) => item.source)) : "",
    args
  };
}
function getFunctionName(content) {
  const tokens = esprima.tokenize(content);
  let functionName = "";
  let lastToken = { type: "", value: "" };
  for (let i = 0; i < tokens.length; i++) {
    if (i >= 1) {
      lastToken = tokens[i - 1];
    }
    const { type, value } = lastToken;
    const isFunction2 = type === "Keyword" && ["function", "const"].includes(value);
    if (tokens[i].type === "Identifier" && isFunction2) {
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
  let comment = "";
  let content = "";
  codes.forEach((code, idx) => {
    if (code === "/**" || idx === length) {
      if (content && comment) {
        result.push({
          comment,
          content
        });
      }
      comment = "/**\n";
      content = "";
    } else if (comment && (code.startsWith(" * ") || code.startsWith(" */"))) {
      comment += `${code}
`;
    } else if (!code.startsWith(" * ") || !code.startsWith(" */")) {
      content += `${code}
`;
    }
  });
  return result.filter(Boolean);
}
function jsdocToMD(options) {
  const { input, extname, generate } = options;
  const parsedFiles = parseFile(input);
  const mds = parsedFiles.map((file) => {
    const { comment, content } = file;
    const { description, returnType, args, example } = getFormatJsdoc(comment);
    const functionName = getFunctionName(content);
    if (isFunction(generate)) {
      return generate({ functionName, content, description, returnType, args, extname, example });
    }
    return generateMD({ functionName, content, description, returnType, args, extname, example });
  });
  return mds.join("\n").trim();
}
export {
  jsdocToMD
};
