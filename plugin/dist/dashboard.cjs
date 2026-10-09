"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/kind-of/index.js
var require_kind_of = __commonJS({
  "node_modules/kind-of/index.js"(exports2, module2) {
    var toString = Object.prototype.toString;
    module2.exports = function kindOf(val) {
      if (val === void 0) return "undefined";
      if (val === null) return "null";
      var type = typeof val;
      if (type === "boolean") return "boolean";
      if (type === "string") return "string";
      if (type === "number") return "number";
      if (type === "symbol") return "symbol";
      if (type === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
      }
      if (isArray(val)) return "array";
      if (isBuffer(val)) return "buffer";
      if (isArguments(val)) return "arguments";
      if (isDate(val)) return "date";
      if (isError(val)) return "error";
      if (isRegexp(val)) return "regexp";
      switch (ctorName(val)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        // Set, Map, WeakSet, WeakMap
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        // 8-bit typed arrays
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        // 16-bit typed arrays
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        // 32-bit typed arrays
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if (isGeneratorObj(val)) {
        return "generator";
      }
      type = toString.call(val);
      switch (type) {
        case "[object Object]":
          return "object";
        // iterators
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function ctorName(val) {
      return typeof val.constructor === "function" ? val.constructor.name : null;
    }
    function isArray(val) {
      if (Array.isArray) return Array.isArray(val);
      return val instanceof Array;
    }
    function isError(val) {
      return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
    }
    function isDate(val) {
      if (val instanceof Date) return true;
      return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
    }
    function isRegexp(val) {
      if (val instanceof RegExp) return true;
      return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
    }
    function isGeneratorFn(name, val) {
      return ctorName(name) === "GeneratorFunction";
    }
    function isGeneratorObj(val) {
      return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
    }
    function isArguments(val) {
      try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
          return true;
        }
      } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
          return true;
        }
      }
      return false;
    }
    function isBuffer(val) {
      if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/extend-shallow/index.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_extendable();
    module2.exports = function extend(o) {
      if (!isObject(o)) {
        o = {};
      }
      var len = arguments.length;
      for (var i = 1; i < len; i++) {
        var obj = arguments[i];
        if (isObject(obj)) {
          assign(o, obj);
        }
      }
      return o;
    };
    function assign(a, b) {
      for (var key in b) {
        if (hasOwn(b, key)) {
          a[key] = b[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/section-matter/index.js
var require_section_matter = __commonJS({
  "node_modules/section-matter/index.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var extend = require_extend_shallow();
    module2.exports = function(input, options2) {
      if (typeof options2 === "function") {
        options2 = { parse: options2 };
      }
      var file = toObject(input);
      var defaults = { section_delimiter: "---", parse: identity };
      var opts = extend({}, defaults, options2);
      var delim = opts.section_delimiter;
      var lines = file.content.split(/\r?\n/);
      var sections = null;
      var section = createSection();
      var content = [];
      var stack = [];
      function initSections(val) {
        file.content = val;
        sections = [];
        content = [];
      }
      function closeSection(val) {
        if (stack.length) {
          section.key = getKey(stack[0], delim);
          section.content = val;
          opts.parse(section, sections);
          sections.push(section);
          section = createSection();
          content = [];
          stack = [];
        }
      }
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var len = stack.length;
        var ln = line.trim();
        if (isDelimiter(ln, delim)) {
          if (ln.length === 3 && i !== 0) {
            if (len === 0 || len === 2) {
              content.push(line);
              continue;
            }
            stack.push(ln);
            section.data = content.join("\n");
            content = [];
            continue;
          }
          if (sections === null) {
            initSections(content.join("\n"));
          }
          if (len === 2) {
            closeSection(content.join("\n"));
          }
          stack.push(ln);
          continue;
        }
        content.push(line);
      }
      if (sections === null) {
        initSections(content.join("\n"));
      } else {
        closeSection(content.join("\n"));
      }
      file.sections = sections;
      return file;
    };
    function isDelimiter(line, delim) {
      if (line.slice(0, delim.length) !== delim) {
        return false;
      }
      if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
      }
      return true;
    }
    function toObject(input) {
      if (typeOf(input) !== "object") {
        input = { content: input };
      }
      if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
      }
      input.content = input.content.toString();
      input.sections = [];
      return input;
    }
    function getKey(val, delim) {
      return val ? val.slice(delim.length).trim() : "";
    }
    function createSection() {
      return { key: "", data: "", content: "" };
    }
    function identity(val) {
      return val;
    }
    function isBuffer(val) {
      if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/js-yaml/lib/js-yaml/common.js
var require_common = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/common.js"(exports2, module2) {
    "use strict";
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
      if (Array.isArray(sequence)) return sequence;
      else if (isNothing(sequence)) return [];
      return [sequence];
    }
    function extend(target, source) {
      var index, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }
      return target;
    }
    function repeat(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    module2.exports.isNothing = isNothing;
    module2.exports.isObject = isObject;
    module2.exports.toArray = toArray;
    module2.exports.repeat = repeat;
    module2.exports.isNegativeZero = isNegativeZero;
    module2.exports.extend = extend;
  }
});

// node_modules/js-yaml/lib/js-yaml/exception.js
var require_exception = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/exception.js"(exports2, module2) {
    "use strict";
    function YAMLException(reason, mark) {
      Error.call(this);
      this.name = "YAMLException";
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ": ";
      result += this.reason || "(unknown reason)";
      if (!compact && this.mark) {
        result += " " + this.mark.toString();
      }
      return result;
    };
    module2.exports = YAMLException;
  }
});

// node_modules/js-yaml/lib/js-yaml/mark.js
var require_mark = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/mark.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    function Mark(name, buffer, position2, line, column) {
      this.name = name;
      this.buffer = buffer;
      this.position = position2;
      this.line = line;
      this.column = column;
    }
    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;
      if (!this.buffer) return null;
      indent = indent || 4;
      maxLength = maxLength || 75;
      head = "";
      start = this.position;
      while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
          head = " ... ";
          start += 5;
          break;
        }
      }
      tail = "";
      end = this.position;
      while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
          tail = " ... ";
          end -= 5;
          break;
        }
      }
      snippet = this.buffer.slice(start, end);
      return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
    };
    Mark.prototype.toString = function toString(compact) {
      var snippet, where = "";
      if (this.name) {
        where += 'in "' + this.name + '" ';
      }
      where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
      if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
          where += ":\n" + snippet;
        }
      }
      return where;
    };
    module2.exports = Mark;
  }
});

// node_modules/js-yaml/lib/js-yaml/type.js
var require_type = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type.js"(exports2, module2) {
    "use strict";
    var YAMLException = require_exception();
    var TYPE_CONSTRUCTOR_OPTIONS = [
      "kind",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "defaultStyle",
      "styleAliases"
    ];
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    function compileStyleAliases(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function(style) {
          map[style].forEach(function(alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    function Type(tag, options2) {
      options2 = options2 || {};
      Object.keys(options2).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.tag = tag;
      this.kind = options2["kind"] || null;
      this.resolve = options2["resolve"] || function() {
        return true;
      };
      this.construct = options2["construct"] || function(data) {
        return data;
      };
      this.instanceOf = options2["instanceOf"] || null;
      this.predicate = options2["predicate"] || null;
      this.represent = options2["represent"] || null;
      this.defaultStyle = options2["defaultStyle"] || null;
      this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    module2.exports = Type;
  }
});

// node_modules/js-yaml/lib/js-yaml/schema.js
var require_schema = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/schema.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Type = require_type();
    function compileList(schema, name, result) {
      var exclude = [];
      schema.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name, result);
      });
      schema[name].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });
        result.push(currentType);
      });
      return result.filter(function(type, index) {
        return exclude.indexOf(index) === -1;
      });
    }
    function compileMap() {
      var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;
      function collectType(type) {
        result[type.kind][type.tag] = result["fallback"][type.tag] = type;
      }
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    function Schema(definition) {
      this.include = definition.include || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];
      this.implicit.forEach(function(type) {
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
      });
      this.compiledImplicit = compileList(this, "implicit", []);
      this.compiledExplicit = compileList(this, "explicit", []);
      this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
      var schemas, types;
      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;
        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;
        default:
          throw new YAMLException("Wrong number of arguments for Schema.create function");
      }
      schemas = common.toArray(schemas);
      types = common.toArray(types);
      if (!schemas.every(function(schema) {
        return schema instanceof Schema;
      })) {
        throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      }
      if (!types.every(function(type) {
        return type instanceof Type;
      })) {
        throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      return new Schema({
        include: schemas,
        explicit: types
      });
    };
    module2.exports = Schema;
  }
});

// node_modules/js-yaml/lib/js-yaml/type/str.js
var require_str = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/str.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function(data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/seq.js
var require_seq = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/seq.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function(data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/map.js
var require_map = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/map.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function(data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/schema/failsafe.js
var require_failsafe = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/null.js
var require_null = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/null.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlNull(data) {
      if (data === null) return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(object) {
      return object === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function() {
          return "~";
        },
        lowercase: function() {
          return "null";
        },
        uppercase: function() {
          return "NULL";
        },
        camelcase: function() {
          return "Null";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/bool.js
var require_bool = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/bool.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlBoolean(data) {
      if (data === null) return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    module2.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function(object) {
          return object ? "true" : "false";
        },
        uppercase: function(object) {
          return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
          return object ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/int.js
var require_int = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/int.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    function resolveYamlInteger(data) {
      if (data === null) return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max) return false;
      ch = data[index];
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      if (ch === "0") {
        if (index + 1 === max) return true;
        ch = data[++index];
        if (ch === "b") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_") continue;
            if (ch !== "0" && ch !== "1") return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_") continue;
            if (!isHexCode(data.charCodeAt(index))) return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_") continue;
          if (!isOctCode(data.charCodeAt(index))) return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "_") return false;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (ch === ":") break;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_") return false;
      if (ch !== ":") return true;
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
    }
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base, digits = [];
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0") return 0;
      if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }
      if (value.indexOf(":") !== -1) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
          value += d * base;
          base *= 60;
        });
        return sign * value;
      }
      return sign * parseInt(value, 10);
    }
    function isInteger(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function(obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
          return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function(obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/float.js
var require_float = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/float.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    function resolveYamlFloat(data) {
      if (data === null) return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    function constructYamlFloat(data) {
      var value, sign, base, digits;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      digits = [];
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      } else if (value.indexOf(":") >= 0) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseFloat(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
          value += d * base;
          base *= 60;
        });
        return sign * value;
      }
      return sign * parseFloat(value, 10);
    }
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object, style) {
      var res;
      if (isNaN(object)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object)) {
        return "-0.0";
      }
      res = object.toString(10);
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/schema/json.js
var require_json = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/schema/json.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_failsafe()
      ],
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/schema/core.js
var require_core = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/schema/core.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_json()
      ]
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/timestamp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    function resolveYamlTimestamp(data) {
      if (data === null) return false;
      if (YAML_DATE_REGEXP.exec(data) !== null) return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
      return false;
    }
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date2;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null) throw new Error("Date resolve error");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-") delta = -delta;
      }
      date2 = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta) date2.setTime(date2.getTime() - delta);
      return date2;
    }
    function representYamlTimestamp(object) {
      return object.toISOString();
    }
    module2.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/merge.js
var require_merge = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/merge.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: resolveYamlMerge
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/binary.js
var require_binary = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/binary.js"(exports2, module2) {
    "use strict";
    var NodeBuffer;
    try {
      _require = require;
      NodeBuffer = _require("buffer").Buffer;
    } catch (__) {
    }
    var _require;
    var Type = require_type();
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
      if (data === null) return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64) continue;
        if (code < 0) return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      if (NodeBuffer) {
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
      }
      return result;
    }
    function representYamlBinary(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object);
    }
    module2.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/omap.js
var require_omap = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/omap.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
      if (data === null) return true;
      var objectKeys = {}, index, length, pair, pairKey, pairHasKey, object = data;
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]") return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true;
            else return false;
          }
        }
        if (!pairHasKey) return false;
        if (_hasOwnProperty.call(objectKeys, pairKey)) return false;
        Object.defineProperty(objectKeys, pairKey, { value: true });
      }
      return true;
    }
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    module2.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/pairs.js
var require_pairs = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/pairs.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
      if (data === null) return true;
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    function constructYamlPairs(data) {
      if (data === null) return [];
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    module2.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/set.js
var require_set = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/set.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
      if (data === null) return true;
      var key, object = data;
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null) return false;
        }
      }
      return true;
    }
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    module2.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/schema/default_safe.js
var require_default_safe = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_core()
      ],
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/js/undefined.js
var require_undefined = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptUndefined() {
      return true;
    }
    function constructJavascriptUndefined() {
      return void 0;
    }
    function representJavascriptUndefined() {
      return "";
    }
    function isUndefined(object) {
      return typeof object === "undefined";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/undefined", {
      kind: "scalar",
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/js/regexp.js
var require_regexp = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptRegExp(data) {
      if (data === null) return false;
      if (data.length === 0) return false;
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        if (modifiers.length > 3) return false;
        if (regexp[regexp.length - modifiers.length - 1] !== "/") return false;
      }
      return true;
    }
    function constructJavascriptRegExp(data) {
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }
      return new RegExp(regexp, modifiers);
    }
    function representJavascriptRegExp(object) {
      var result = "/" + object.source + "/";
      if (object.global) result += "g";
      if (object.multiline) result += "m";
      if (object.ignoreCase) result += "i";
      return result;
    }
    function isRegExp(object) {
      return Object.prototype.toString.call(object) === "[object RegExp]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/regexp", {
      kind: "scalar",
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/type/js/function.js
var require_function = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/type/js/function.js"(exports2, module2) {
    "use strict";
    var esprima;
    try {
      _require = require;
      esprima = _require("esprima");
    } catch (_) {
      if (typeof window !== "undefined") esprima = window.esprima;
    }
    var _require;
    var Type = require_type();
    function resolveJavascriptFunction(data) {
      if (data === null) return false;
      try {
        var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    function constructJavascriptFunction(data) {
      var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
      if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
      }
      ast.body[0].expression.params.forEach(function(param2) {
        params.push(param2.name);
      });
      body = ast.body[0].expression.body.range;
      if (ast.body[0].expression.body.type === "BlockStatement") {
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      return new Function(params, "return " + source.slice(body[0], body[1]));
    }
    function representJavascriptFunction(object) {
      return object.toString();
    }
    function isFunction(object) {
      return Object.prototype.toString.call(object) === "[object Function]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/function", {
      kind: "scalar",
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/schema/default_full.js
var require_default_full = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/schema/default_full.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = Schema.DEFAULT = new Schema({
      include: [
        require_default_safe()
      ],
      explicit: [
        require_undefined(),
        require_regexp(),
        require_function()
      ]
    });
  }
});

// node_modules/js-yaml/lib/js-yaml/loader.js
var require_loader = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/loader.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Mark = require_mark();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CONTEXT_FLOW_IN = 1;
    var CONTEXT_FLOW_OUT = 2;
    var CONTEXT_BLOCK_IN = 3;
    var CONTEXT_BLOCK_OUT = 4;
    var CHOMPING_CLIP = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP = 3;
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    function setProperty(object, key, value) {
      if (key === "__proto__") {
        Object.defineProperty(object, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value
        });
      } else {
        object[key] = value;
      }
    }
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    function State(input, options2) {
      this.input = input;
      this.filename = options2["filename"] || null;
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.onWarning = options2["onWarning"] || null;
      this.legacy = options2["legacy"] || false;
      this.json = options2["json"] || false;
      this.listener = options2["listener"] || null;
      this.maxTotalMergeKeys = typeof options2["maxTotalMergeKeys"] === "number" ? options2["maxTotalMergeKeys"] : 1e4;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.totalMergeKeys = 0;
      this.documents = [];
    }
    function generateError(state, message) {
      return new YAMLException(
        message,
        new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart)
      );
    }
    function throwError(state, message) {
      throw generateError(state, message);
    }
    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }
    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
          throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          throwWarning(state, "unsupported YAML version of the document");
        }
      },
      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        state.tagMap[handle] = prefix;
      }
    };
    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state, "expected valid JSON character");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
      }
    }
    function chargeMergeWork(state) {
      state.totalMergeKeys += 1;
      if (state.maxTotalMergeKeys !== -1 && state.totalMergeKeys > state.maxTotalMergeKeys) {
        throwError(state, "merge keys exceeded maxTotalMergeKeys (" + state.maxTotalMergeKeys + ")");
      }
    }
    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
      }
      chargeMergeWork(state);
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        chargeMergeWork(state);
        if (!_hasOwnProperty.call(destination, key)) {
          setProperty(destination, key, source[key]);
          overridableKeys[key] = true;
        }
      }
    }
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, "nested arrays are not supported inside keys");
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          if (valueNode.length > 100) {
            throwError(state, "abnormal merge sequence size");
          }
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.position = startPos || state.position;
          throwError(state, "duplicated mapping key");
        }
        setProperty(_result, keyNode, valueNode);
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    function readLineBreak(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++;
      } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++;
        }
      } else {
        throwError(state, "a line break is expected");
      }
      state.line += 1;
      state.lineStart = state.position;
    }
    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (is_EOL(ch)) {
          readLineBreak(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
      }
      return lineBreaks;
    }
    function testDocumentSeparator(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += " ";
      } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
      }
    }
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state.kind = "scalar";
      state.result = "";
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state.input.charCodeAt(state.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break;
          }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;
        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);
          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, captureEnd, false);
      if (state.result) {
        return true;
      }
      state.kind = _kind;
      state.result = _result;
      return false;
    }
    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;
        } else if (ch === 92) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state, "expected hexadecimal character");
              }
            }
            state.result += charFromCodepoint(hexResult);
            state.position++;
          } else {
            throwError(state, "unknown escape sequence");
          }
          captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state, nodeIndent) {
      var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(++state.position);
      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? "mapping" : "sequence";
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, "missed comma between flow collection entries");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }
        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }
      throwError(state, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, "repeat of a chomping mode identifier");
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, "repeat of an indentation width identifier");
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }
        if (state.lineIndent < textIndent) {
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " ";
            }
          } else {
            state.result += common.repeat("\n", emptyLines);
          }
        } else {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
      }
      return true;
    }
    function readBlockSequence(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (ch !== 45) {
          break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
      }
      return false;
    }
    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        _pos = state.position;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
          }
          state.position += 1;
          ch = following;
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              ch = state.input.charCodeAt(++state.position);
              if (!is_WS_OR_EOL(ch)) {
                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
              }
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;
            } else if (detected) {
              throwError(state, "can not read an implicit mapping pair; a colon is missed");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else {
          break;
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }
        if (state.lineIndent > nodeIndent && ch !== 0) {
          throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
      }
      return detected;
    }
    function readTagProperty(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33) return false;
      if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
      }
      ch = state.input.charCodeAt(++state.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
      } else {
        tagHandle = "!";
      }
      _position = state.position;
      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, "unexpected end of the stream within a verbatim tag");
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, "named tag handle cannot contain such characters");
              }
              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, "tag suffix cannot contain exclamation marks");
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, "tag suffix cannot contain flow indicator characters");
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
      }
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }
      return true;
    }
    function readAnchorProperty(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38) return false;
      if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
      }
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
      }
      state.anchor = state.input.slice(_position, state.position);
      return true;
    }
    function readAlias(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42) return false;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
      }
      alias = state.input.slice(_position, state.position);
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }
      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state);
      }
      state.tag = null;
      state.anchor = null;
      state.kind = null;
      state.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                throwError(state, "alias node should not have any properties");
              }
            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?";
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }
      if (state.tag !== null && state.tag !== "!") {
        if (state.tag === "?") {
          if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
          }
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state.implicitTypes[typeIndex];
            if (type.resolve(state.result)) {
              state.result = type.construct(state.result);
              state.tag = type.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
          if (state.result !== null && type.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
          }
          if (!type.resolve(state.result)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
          } else {
            state.result = type.construct(state.result);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else {
          throwError(state, "unknown tag !<" + state.tag + ">");
        }
      }
      if (state.listener !== null) {
        state.listener("close", state);
      }
      return state.tag !== null || state.anchor !== null || hasContent;
    }
    function readDocument(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = {};
      state.anchorMap = {};
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          throwError(state, "directive name must not be less than one character in length");
        }
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !is_EOL(ch));
            break;
          }
          if (is_EOL(ch)) break;
          _position = state.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }
      skipSeparationSpace(state, true, -1);
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
      }
      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);
      if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
      }
      state.documents.push(state.result);
      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }
      if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
      } else {
        return;
      }
    }
    function loadDocuments(input, options2) {
      input = String(input);
      options2 = options2 || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new State(input, options2);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
      }
      state.input += "\0";
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      while (state.position < state.length - 1) {
        readDocument(state);
      }
      return state.documents;
    }
    function loadAll(input, iterator, options2) {
      if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options2);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    function load2(input, options2) {
      var documents = loadDocuments(input, options2);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException("expected a single document in the stream, but found more");
    }
    function safeLoadAll(input, iterator, options2) {
      if (typeof iterator === "object" && iterator !== null && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    function safeLoad(input, options2) {
      return load2(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.loadAll = loadAll;
    module2.exports.load = load2;
    module2.exports.safeLoadAll = safeLoadAll;
    module2.exports.safeLoad = safeLoad;
  }
});

// node_modules/js-yaml/lib/js-yaml/dumper.js
var require_dumper = __commonJS({
  "node_modules/js-yaml/lib/js-yaml/dumper.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33;
    var CHAR_DOUBLE_QUOTE = 34;
    var CHAR_SHARP = 35;
    var CHAR_PERCENT = 37;
    var CHAR_AMPERSAND = 38;
    var CHAR_SINGLE_QUOTE = 39;
    var CHAR_ASTERISK = 42;
    var CHAR_COMMA = 44;
    var CHAR_MINUS = 45;
    var CHAR_COLON = 58;
    var CHAR_EQUALS = 61;
    var CHAR_GREATER_THAN = 62;
    var CHAR_QUESTION = 63;
    var CHAR_COMMERCIAL_AT = 64;
    var CHAR_LEFT_SQUARE_BRACKET = 91;
    var CHAR_RIGHT_SQUARE_BRACKET = 93;
    var CHAR_GRAVE_ACCENT = 96;
    var CHAR_LEFT_CURLY_BRACKET = 123;
    var CHAR_VERTICAL_LINE = 124;
    var CHAR_RIGHT_CURLY_BRACKET = 125;
    var ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    var DEPRECATED_BOOLEANS_SYNTAX = [
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "on",
      "On",
      "ON",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "off",
      "Off",
      "OFF"
    ];
    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null) return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    function encodeHex(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
      }
      return "\\" + handle + common.repeat("0", length - string.length) + string;
    }
    function State(options2) {
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.indent = Math.max(1, options2["indent"] || 2);
      this.noArrayIndent = options2["noArrayIndent"] || false;
      this.skipInvalid = options2["skipInvalid"] || false;
      this.flowLevel = common.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
      this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
      this.sortKeys = options2["sortKeys"] || false;
      this.lineWidth = options2["lineWidth"] || 80;
      this.noRefs = options2["noRefs"] || false;
      this.noCompatMode = options2["noCompatMode"] || false;
      this.condenseFlow = options2["condenseFlow"] || false;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(string, spaces) {
      var ind = common.repeat(" ", spaces), position2 = 0, next = -1, result = "", line, length = string.length;
      while (position2 < length) {
        next = string.indexOf("\n", position2);
        if (next === -1) {
          line = string.slice(position2);
          position2 = length;
        } else {
          line = string.slice(position2, next + 1);
          position2 = next + 1;
        }
        if (line.length && line !== "\n") result += ind;
        result += line;
      }
      return result;
    }
    function generateNextLine(state, level) {
      return "\n" + common.repeat(" ", state.indent * level);
    }
    function testImplicitResolving(state, str2) {
      var index, length, type;
      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str2)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
    }
    function isNsChar(c) {
      return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev) {
      return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
    }
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    var STYLE_PLAIN = 1;
    var STYLE_SINGLE = 2;
    var STYLE_LITERAL = 3;
    var STYLE_FOLDED = 4;
    var STYLE_DOUBLE = 5;
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char, prev_char;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
      if (singleLineOnly) {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
      } else {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
              i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
      }
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    function writeScalar(state, string, level, iskey) {
      state.dump = (function() {
        if (string.length === 0) {
          return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
          return "'" + string + "'";
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
          return testImplicitResolving(state, string2);
        }
        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"';
          default:
            throw new YAMLException("impossible error: invalid scalar style");
        }
      })();
    }
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
      var clip = string[string.length - 1] === "\n";
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    function foldString(string, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = (function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      })();
      var prevMoreIndented = string[0] === "\n" || string[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    function foldLine(line, width) {
      if (line === "" || line[0] === " ") return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    function escapeString(string) {
      var result = "";
      var char, nextChar;
      var escapeSeq;
      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        if (char >= 55296 && char <= 56319) {
          nextChar = string.charCodeAt(i + 1);
          if (nextChar >= 56320 && nextChar <= 57343) {
            result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
            i++;
            continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
      }
      return result;
    }
    function writeFlowSequence(state, level, object) {
      var _result = "", _tag = state.tag, index, length;
      for (index = 0, length = object.length; index < length; index += 1) {
        if (writeNode(state, level, object[index], false, false)) {
          if (index !== 0) _result += "," + (!state.condenseFlow ? " " : "");
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state, level, object, compact) {
      var _result = "", _tag = state.tag, index, length;
      for (index = 0, length = object.length; index < length; index += 1) {
        if (writeNode(state, level + 1, object[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state, level);
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = _result || "[]";
    }
    function writeFlowMapping(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (index !== 0) pairBuffer += ", ";
        if (state.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
          continue;
        }
        if (state.dump.length > 1024) pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function");
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = _result || "{}";
    }
    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes;
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          state.tag = explicit ? type.tag : "?";
          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
            }
            state.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null;
      state.dump = object;
      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }
      var type = _toString.call(state.dump);
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object Array]") {
          var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
          if (block && state.dump.length !== 0) {
            writeBlockSequence(state, arrayLevel, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            writeScalar(state, state.dump, level, iskey);
          }
        } else {
          if (state.skipInvalid) return false;
          throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
          state.dump = "!<" + state.tag + "> " + state.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(object, state) {
      var objects = [], duplicatesIndexes = [], index, length;
      inspectNode(object, objects, duplicatesIndexes);
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }
    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);
          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    function dump(input, options2) {
      options2 = options2 || {};
      var state = new State(options2);
      if (!state.noRefs) getDuplicateReferences(input, state);
      if (writeNode(state, 0, input, true, true)) return state.dump + "\n";
      return "";
    }
    function safeDump(input, options2) {
      return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.dump = dump;
    module2.exports.safeDump = safeDump;
  }
});

// node_modules/js-yaml/lib/js-yaml.js
var require_js_yaml = __commonJS({
  "node_modules/js-yaml/lib/js-yaml.js"(exports2, module2) {
    "use strict";
    var loader = require_loader();
    var dumper = require_dumper();
    function deprecated(name) {
      return function() {
        throw new Error("Function " + name + " is deprecated and cannot be used.");
      };
    }
    module2.exports.Type = require_type();
    module2.exports.Schema = require_schema();
    module2.exports.FAILSAFE_SCHEMA = require_failsafe();
    module2.exports.JSON_SCHEMA = require_json();
    module2.exports.CORE_SCHEMA = require_core();
    module2.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_FULL_SCHEMA = require_default_full();
    module2.exports.load = loader.load;
    module2.exports.loadAll = loader.loadAll;
    module2.exports.safeLoad = loader.safeLoad;
    module2.exports.safeLoadAll = loader.safeLoadAll;
    module2.exports.dump = dumper.dump;
    module2.exports.safeDump = dumper.safeDump;
    module2.exports.YAMLException = require_exception();
    module2.exports.MINIMAL_SCHEMA = require_failsafe();
    module2.exports.SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_SCHEMA = require_default_full();
    module2.exports.scan = deprecated("scan");
    module2.exports.parse = deprecated("parse");
    module2.exports.compose = deprecated("compose");
    module2.exports.addConstructor = deprecated("addConstructor");
  }
});

// node_modules/js-yaml/index.js
var require_js_yaml2 = __commonJS({
  "node_modules/js-yaml/index.js"(exports2, module2) {
    "use strict";
    var yaml2 = require_js_yaml();
    module2.exports = yaml2;
  }
});

// node_modules/gray-matter/lib/engines.js
var require_engines = __commonJS({
  "node_modules/gray-matter/lib/engines.js"(exports, module) {
    "use strict";
    var yaml = require_js_yaml2();
    var engines = exports = module.exports;
    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    };
    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function(obj, options2) {
        const opts = Object.assign({ replacer: null, space: 2 }, options2);
        return JSON.stringify(obj, opts.replacer, opts.space);
      }
    };
    engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          if (wrap !== false) {
            str = "(function() {\nreturn " + str.trim() + ";\n}());";
          }
          return eval(str) || {};
        } catch (err) {
          if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
            return parse(str, options, false);
          }
          throw new SyntaxError(err);
        }
      },
      stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
      }
    };
  }
});

// node_modules/strip-bom-string/index.js
var require_strip_bom_string = __commonJS({
  "node_modules/strip-bom-string/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(str2) {
      if (typeof str2 === "string" && str2.charAt(0) === "\uFEFF") {
        return str2.slice(1);
      }
      return str2;
    };
  }
});

// node_modules/gray-matter/lib/utils.js
var require_utils = __commonJS({
  "node_modules/gray-matter/lib/utils.js"(exports2) {
    "use strict";
    var stripBom = require_strip_bom_string();
    var typeOf = require_kind_of();
    exports2.define = function(obj, key, val) {
      Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
      });
    };
    exports2.isBuffer = function(val) {
      return typeOf(val) === "buffer";
    };
    exports2.isObject = function(val) {
      return typeOf(val) === "object";
    };
    exports2.toBuffer = function(input) {
      return typeof input === "string" ? Buffer.from(input) : input;
    };
    exports2.toString = function(input) {
      if (exports2.isBuffer(input)) return stripBom(String(input));
      if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
      }
      return stripBom(input);
    };
    exports2.arrayify = function(val) {
      return val ? Array.isArray(val) ? val : [val] : [];
    };
    exports2.startsWith = function(str2, substr, len) {
      if (typeof len !== "number") len = substr.length;
      return str2.slice(0, len) === substr;
    };
  }
});

// node_modules/gray-matter/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/gray-matter/lib/defaults.js"(exports2, module2) {
    "use strict";
    var engines2 = require_engines();
    var utils = require_utils();
    module2.exports = function(options2) {
      const opts = Object.assign({}, options2);
      opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
      if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
      }
      opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
      opts.engines = Object.assign({}, engines2, opts.parsers, opts.engines);
      return opts;
    };
  }
});

// node_modules/gray-matter/lib/engine.js
var require_engine = __commonJS({
  "node_modules/gray-matter/lib/engine.js"(exports2, module2) {
    "use strict";
    module2.exports = function(name, options2) {
      let engine = options2.engines[name] || options2.engines[aliase(name)];
      if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name + '" is not registered');
      }
      if (typeof engine === "function") {
        engine = { parse: engine };
      }
      return engine;
    };
    function aliase(name) {
      switch (name.toLowerCase()) {
        case "js":
        case "javascript":
          return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
          return "coffee";
        case "yaml":
        case "yml":
          return "yaml";
        default: {
          return name;
        }
      }
    }
  }
});

// node_modules/gray-matter/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/gray-matter/lib/stringify.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(file, data, options2) {
      if (data == null && options2 == null) {
        switch (typeOf(file)) {
          case "object":
            data = file.data;
            options2 = {};
            break;
          case "string":
            return file;
          default: {
            throw new TypeError("expected file to be a string or object");
          }
        }
      }
      const str2 = file.content;
      const opts = defaults(options2);
      if (data == null) {
        if (!opts.data) return file;
        data = opts.data;
      }
      const language = file.language || opts.language;
      const engine = getEngine(language, opts);
      if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
      }
      data = Object.assign({}, file.data, data);
      const open = opts.delimiters[0];
      const close = opts.delimiters[1];
      const matter2 = engine.stringify(data, options2).trim();
      let buf = "";
      if (matter2 !== "{}") {
        buf = newline(open) + newline(matter2) + newline(close);
      }
      if (typeof file.excerpt === "string" && file.excerpt !== "") {
        if (str2.indexOf(file.excerpt.trim()) === -1) {
          buf += newline(file.excerpt) + newline(close);
        }
      }
      return buf + newline(str2);
    };
    function newline(str2) {
      return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
    }
  }
});

// node_modules/gray-matter/lib/excerpt.js
var require_excerpt = __commonJS({
  "node_modules/gray-matter/lib/excerpt.js"(exports2, module2) {
    "use strict";
    var defaults = require_defaults();
    module2.exports = function(file, options2) {
      const opts = defaults(options2);
      if (file.data == null) {
        file.data = {};
      }
      if (typeof opts.excerpt === "function") {
        return opts.excerpt(file, opts);
      }
      const sep = file.data.excerpt_separator || opts.excerpt_separator;
      if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file;
      }
      const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
      const idx = file.content.indexOf(delimiter);
      if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx);
      }
      return file;
    };
  }
});

// node_modules/gray-matter/lib/to-file.js
var require_to_file = __commonJS({
  "node_modules/gray-matter/lib/to-file.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var stringify = require_stringify();
    var utils = require_utils();
    module2.exports = function(file) {
      if (typeOf(file) !== "object") {
        file = { content: file };
      }
      if (typeOf(file.data) !== "object") {
        file.data = {};
      }
      if (file.contents && file.content == null) {
        file.content = file.contents;
      }
      utils.define(file, "orig", utils.toBuffer(file.content));
      utils.define(file, "language", file.language || "");
      utils.define(file, "matter", file.matter || "");
      utils.define(file, "stringify", function(data, options2) {
        if (options2 && options2.language) {
          file.language = options2.language;
        }
        return stringify(file, data, options2);
      });
      file.content = utils.toString(file.content);
      file.isEmpty = false;
      file.excerpt = "";
      return file;
    };
  }
});

// node_modules/gray-matter/lib/parse.js
var require_parse = __commonJS({
  "node_modules/gray-matter/lib/parse.js"(exports2, module2) {
    "use strict";
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(language, str2, options2) {
      const opts = defaults(options2);
      const engine = getEngine(language, opts);
      if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
      }
      return engine.parse(str2, opts);
    };
  }
});

// node_modules/gray-matter/index.js
var require_gray_matter = __commonJS({
  "node_modules/gray-matter/index.js"(exports2, module2) {
    "use strict";
    var fs18 = require("fs");
    var sections = require_section_matter();
    var defaults = require_defaults();
    var stringify = require_stringify();
    var excerpt = require_excerpt();
    var engines2 = require_engines();
    var toFile = require_to_file();
    var parse2 = require_parse();
    var utils = require_utils();
    function matter2(input, options2) {
      if (input === "") {
        return { data: {}, content: input, excerpt: "", orig: input };
      }
      let file = toFile(input);
      const cached = matter2.cache[file.content];
      if (!options2) {
        if (cached) {
          file = Object.assign({}, cached);
          file.orig = cached.orig;
          return file;
        }
        matter2.cache[file.content] = file;
      }
      return parseMatter(file, options2);
    }
    function parseMatter(file, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      const close = "\n" + opts.delimiters[1];
      let str2 = file.content;
      if (opts.language) {
        file.language = opts.language;
      }
      const openLen = open.length;
      if (!utils.startsWith(str2, open, openLen)) {
        excerpt(file, opts);
        return file;
      }
      if (str2.charAt(openLen) === open.slice(-1)) {
        return file;
      }
      str2 = str2.slice(openLen);
      const len = str2.length;
      const language = matter2.language(str2, opts);
      if (language.name) {
        file.language = language.name;
        str2 = str2.slice(language.raw.length);
      }
      let closeIndex = str2.indexOf(close);
      if (closeIndex === -1) {
        closeIndex = len;
      }
      file.matter = str2.slice(0, closeIndex);
      const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
      if (block === "") {
        file.isEmpty = true;
        file.empty = file.content;
        file.data = {};
      } else {
        file.data = parse2(file.language, file.matter, opts);
      }
      if (closeIndex === len) {
        file.content = "";
      } else {
        file.content = str2.slice(closeIndex + close.length);
        if (file.content[0] === "\r") {
          file.content = file.content.slice(1);
        }
        if (file.content[0] === "\n") {
          file.content = file.content.slice(1);
        }
      }
      excerpt(file, opts);
      if (opts.sections === true || typeof opts.section === "function") {
        sections(file, opts.section);
      }
      return file;
    }
    matter2.engines = engines2;
    matter2.stringify = function(file, data, options2) {
      if (typeof file === "string") file = matter2(file, options2);
      return stringify(file, data, options2);
    };
    matter2.read = function(filepath, options2) {
      const str2 = fs18.readFileSync(filepath, "utf8");
      const file = matter2(str2, options2);
      file.path = filepath;
      return file;
    };
    matter2.test = function(str2, options2) {
      return utils.startsWith(str2, defaults(options2).delimiters[0]);
    };
    matter2.language = function(str2, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      if (matter2.test(str2)) {
        str2 = str2.slice(open.length);
      }
      const language = str2.slice(0, str2.search(/\r?\n/));
      return {
        raw: language,
        name: language ? language.trim() : ""
      };
    };
    matter2.cache = {};
    matter2.clearCache = function() {
      matter2.cache = {};
    };
    module2.exports = matter2;
  }
});

// src/dashboard/main.ts
var import_node_path18 = __toESM(require("node:path"), 1);

// src/dashboard/autoconnect.ts
var import_node_fs3 = __toESM(require("node:fs"), 1);
var import_node_path3 = __toESM(require("node:path"), 1);

// src/dashboard/connect.ts
var import_node_child_process = require("node:child_process");
var import_node_fs2 = __toESM(require("node:fs"), 1);
var import_node_os = __toESM(require("node:os"), 1);
var import_node_path2 = __toESM(require("node:path"), 1);

// src/dashboard/setup.ts
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
function setupInfo(webDir) {
  const plugin = import_node_path.default.resolve(webDir, "../..");
  const repo = import_node_path.default.dirname(plugin);
  const file = (p) => {
    try {
      return import_node_fs.default.statSync(p).isFile();
    } catch {
      return false;
    }
  };
  const installers = [import_node_path.default.join(repo, "scripts/codex-install.mjs"), import_node_path.default.join(plugin, "scripts/codex-install.mjs")];
  return {
    platform: process.platform,
    node: process.execPath,
    codexInstaller: file(import_node_path.default.join(plugin, "dist/mcp.cjs")) ? installers.find(file) ?? null : null,
    marketplace: file(import_node_path.default.join(repo, ".claude-plugin/marketplace.json")) ? repo : null,
    pluginDirectory: file(import_node_path.default.join(plugin, ".claude-plugin/plugin.json")) ? plugin : null
  };
}

// src/dashboard/connect.ts
var GITHUB_MARKETPLACE = "binkgo";
var GITHUB_REPO = "watcharaponthod-code/binkgo-plugin";
var BUNDLED_MARKETPLACE = "binkgo-local";
var win = process.platform === "win32";
var quote = (a) => /[\s"&|<>^()]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a;
var realRunner = (cmd, args, env) => {
  const r = win ? (0, import_node_child_process.spawnSync)([cmd, ...args].map(quote).join(" "), { shell: true, encoding: "utf8", timeout: 9e4, env: { ...process.env, ...env } }) : (0, import_node_child_process.spawnSync)(cmd, args, { encoding: "utf8", timeout: 9e4, env: { ...process.env, ...env } });
  return { code: r.status ?? 1, out: `${r.stdout ?? ""}${r.stderr ?? ""}` };
};
var onPath = (run, cmd) => run(win ? "where" : "which", [cmd]).code === 0;
function pick(info, hasNode) {
  if (hasNode) return { source: GITHUB_REPO, name: GITHUB_MARKETPLACE, other: BUNDLED_MARKETPLACE };
  return info.marketplace && info.pluginDirectory ? { source: info.marketplace, name: BUNDLED_MARKETPLACE, other: GITHUB_MARKETPLACE } : null;
}
var claudeCommands = (use) => use ? [`claude plugin marketplace add ${quote(use.source)}`, `claude plugin install binkgo@${use.name} --scope user`] : null;
function codexConnected() {
  try {
    return import_node_fs2.default.readFileSync(import_node_path2.default.join(import_node_os.default.homedir(), ".codex", "config.toml"), "utf8").includes("[mcp_servers.binkgo");
  } catch {
    return false;
  }
}
function connectStatus(webDir, run = realRunner) {
  const hasClaude = onPath(run, "claude");
  return {
    claude: { installed: hasClaude, connected: hasClaude && /binkgo@/i.test(run("claude", ["plugin", "list"]).out) },
    codex: { installed: onPath(run, "codex") || import_node_fs2.default.existsSync(import_node_path2.default.join(import_node_os.default.homedir(), ".codex")), connected: codexConnected() },
    claudeCommands: claudeCommands(pick(setupInfo(webDir), onPath(run, "node")))
  };
}
function connectClaude(webDir, run = realRunner) {
  const use = pick(setupInfo(webDir), onPath(run, "node"));
  const commands = claudeCommands(use) ?? void 0;
  if (!use) return { ok: false, reason: "missing_files", detail: "The plugin files are missing from this copy of Binkgo." };
  if (!onPath(run, "claude")) return { ok: false, reason: "not_installed", detail: "Claude Code was not found on this computer.", commands };
  const fail = (r) => ({ ok: false, reason: "failed", detail: r.out.trim().slice(-400), commands });
  run("claude", ["plugin", "uninstall", `binkgo@${use.other}`]);
  run("claude", ["plugin", "marketplace", "remove", BUNDLED_MARKETPLACE]);
  const added = run("claude", ["plugin", "marketplace", "add", use.source]);
  if (added.code !== 0 && !/already/i.test(added.out)) return fail(added);
  run("claude", ["plugin", "marketplace", "update", use.name]);
  const installed = run("claude", ["plugin", "install", `binkgo@${use.name}`, "--scope", "user"]);
  if (installed.code === 0) return { ok: true };
  if (!/already installed/i.test(installed.out)) return fail(installed);
  const updated = run("claude", ["plugin", "update", `binkgo@${use.name}`]);
  return updated.code === 0 ? { ok: true } : fail(updated);
}
function connectCodex(webDir, run = realRunner) {
  const info = setupInfo(webDir);
  if (!info.codexInstaller) return { ok: false, reason: "missing_files", detail: "The Codex installer is missing from this copy of Binkgo." };
  const r = run(process.execPath, [info.codexInstaller, "--global"], { ELECTRON_RUN_AS_NODE: "1" });
  return r.code === 0 ? { ok: true } : { ok: false, reason: "failed", detail: r.out.trim().slice(-400) };
}

// src/dashboard/autoconnect.ts
function shouldAutoConnect(state, ranVersion, version) {
  return state.installed && ranVersion !== version;
}
function readMarker(file) {
  try {
    const m = JSON.parse(import_node_fs3.default.readFileSync(file, "utf8"));
    return typeof m.version === "string" ? m.version : null;
  } catch {
    return null;
  }
}
function writeMarker(file, version) {
  import_node_fs3.default.mkdirSync(import_node_path3.default.dirname(file), { recursive: true });
  const marker = { version, at: (/* @__PURE__ */ new Date()).toISOString() };
  import_node_fs3.default.writeFileSync(file, JSON.stringify(marker));
}
function autoConnect(webDir, version, markerFile, run = realRunner, log = () => {
}) {
  const done = [];
  const ran = readMarker(markerFile);
  if (ran === version) return done;
  const status = connectStatus(webDir, run);
  const targets = [
    { name: "Claude Code", state: status.claude, connect: connectClaude },
    { name: "Codex", state: status.codex, connect: connectCodex }
  ];
  for (const t of targets) {
    if (!shouldAutoConnect(t.state, ran, version)) continue;
    const r = t.connect(webDir, run);
    if (r.ok) done.push(t.name);
    else log(`auto-connect ${t.name}: ${r.reason} ${r.detail}`);
  }
  try {
    writeMarker(markerFile, version);
  } catch (e) {
    log(`auto-connect marker: ${e.message}`);
  }
  return done;
}

// src/dashboard/browser.ts
var import_node_child_process2 = require("node:child_process");
function openBrowser(url) {
  if (!/^https?:\/\//i.test(url) || url.includes('"')) return;
  const [cmd, args] = process.platform === "win32" ? ["cmd", ["/c", "start", '""', `"${url}"`]] : process.platform === "darwin" ? ["open", [url]] : ["xdg-open", [url]];
  try {
    const child = (0, import_node_child_process2.spawn)(cmd, args, { stdio: "ignore", detached: true, windowsHide: true, windowsVerbatimArguments: process.platform === "win32" });
    child.on("error", () => {
    });
    child.unref();
  } catch {
  }
}

// src/dashboard/launcher.ts
var import_node_child_process3 = require("node:child_process");
var import_node_http = __toESM(require("node:http"), 1);
var import_node_path14 = __toESM(require("node:path"), 1);

// package.json
var package_default = {
  name: "binkgo",
  version: "1.0.11",
  private: true,
  type: "module",
  engines: {
    node: ">=20"
  },
  scripts: {
    pretest: "node scripts/build.mjs --test-seam",
    test: "vitest run",
    typecheck: "tsc --noEmit && tsc --noEmit -p web",
    build: "node scripts/build.mjs && vite build web",
    dashboard: "node plugin/dist/dashboard.cjs",
    "codex:install": "node scripts/codex-install.mjs",
    "build:web": "vite build web",
    "seed:demo": "node scripts/seed-demo.mjs",
    overhead: "node scripts/overhead.mjs",
    "bench:tokens": "node scripts/bench-tokens.mjs",
    "desktop:install": "node scripts/desktop-install.mjs",
    "build:desktop": "npm run build && npm run desktop:install",
    "desktop:uninstall": "node scripts/desktop-install.mjs --uninstall"
  },
  dependencies: {
    "@fontsource-variable/anuphan": "^5.3.0",
    "@modelcontextprotocol/sdk": "^1.31.0",
    "gray-matter": "^4.0.3",
    zod: "^3.25.76"
  },
  devDependencies: {
    "@dnd-kit/core": "^6.3.1",
    "@dnd-kit/sortable": "^10.0.0",
    "@dnd-kit/utilities": "^3.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.23",
    "@radix-ui/react-checkbox": "^1.3.11",
    "@radix-ui/react-dialog": "^1.1.23",
    "@radix-ui/react-dropdown-menu": "^2.1.24",
    "@radix-ui/react-label": "^2.1.15",
    "@radix-ui/react-popover": "^1.1.23",
    "@radix-ui/react-scroll-area": "^1.2.18",
    "@radix-ui/react-select": "^2.3.7",
    "@radix-ui/react-separator": "^1.1.15",
    "@radix-ui/react-slot": "^1.3.3",
    "@radix-ui/react-tabs": "^1.1.21",
    "@radix-ui/react-tooltip": "^1.2.16",
    "@tailwindcss/vite": "^4.3.3",
    "@types/node": "^20.19.43",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.1",
    "class-variance-authority": "^0.7.1",
    clsx: "^2.1.1",
    cmdk: "^1.1.1",
    dompurify: "^3.4.16",
    esbuild: "^0.28.2",
    jsdom: "^29.1.1",
    "lucide-react": "^1.49.0",
    marked: "^18.0.14",
    react: "^19.3.0",
    "react-day-picker": "^10.0.2",
    "react-dom": "^19.3.0",
    recharts: "^3.10.1",
    sonner: "^2.0.8",
    "tailwind-merge": "^3.7.0",
    tailwindcss: "^4.3.3",
    "tw-animate-css": "^1.4.0",
    typescript: "^7.0.2",
    vite: "^8.3.1",
    vitest: "^4.1.11"
  }
};

// src/license/key.ts
var LICENSE_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEA0UXJpq5QTNgNaPMB3ZhdyRQo6C7vz36zgXHoqt4oBF0=
-----END PUBLIC KEY-----
`;
var SUPABASE_URL = "https://jbcavoqjkwaopczxwlpf.supabase.co";
var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiY2F2b3Fqa3dhb3Bjenh3bHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwOTQ1NTMsImV4cCI6MjEwNjY3MDU1M30.r_9zurcbhFvQq2OV7vLIZoWEXmDuTNA2y8NfPLqcfDI";
var siteUrl = () => (process.env.BINKGO_SITE_URL || "https://binkgo.vercel.app").replace(/\/+$/, "");

// src/license/verify.ts
var import_node_crypto = require("node:crypto");
function isPayload(x) {
  if (typeof x !== "object" || x === null) return false;
  const p = x;
  return p.v === 1 && typeof p.sub === "string" && typeof p.email === "string" && (p.kind === "trial" || p.kind === "full") && typeof p.max_major === "number" && Number.isFinite(p.max_major) && (p.trial_until === null || typeof p.trial_until === "string") && typeof p.device_id === "string";
}
function verifyLicense(token, publicKeyPem = LICENSE_PUBLIC_KEY) {
  try {
    if (typeof token !== "string") return null;
    const parts = token.split(".");
    if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
    const key = typeof publicKeyPem === "string" ? (0, import_node_crypto.createPublicKey)(publicKeyPem) : publicKeyPem;
    if (!(0, import_node_crypto.verify)(null, Buffer.from(parts[0]), key, Buffer.from(parts[1], "base64url"))) return null;
    const payload = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    return isPayload(payload) ? payload : null;
  } catch {
    return null;
  }
}

// src/license/store.ts
var import_node_crypto4 = require("node:crypto");
var import_node_fs7 = __toESM(require("node:fs"), 1);
var import_node_os4 = __toESM(require("node:os"), 1);
var import_node_path7 = __toESM(require("node:path"), 1);

// src/vault/io.ts
var import_node_fs5 = __toESM(require("node:fs"), 1);
var import_node_path5 = __toESM(require("node:path"), 1);
var import_node_crypto3 = require("node:crypto");
var import_gray_matter = __toESM(require_gray_matter(), 1);

// src/vault/paths.ts
var import_node_fs4 = __toESM(require("node:fs"), 1);
var import_node_os2 = __toESM(require("node:os"), 1);
var import_node_path4 = __toESM(require("node:path"), 1);
var import_node_crypto2 = require("node:crypto");
var VAULT_DIRNAME = ".binkgo";
var RESERVED = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/;
function canonicalPath(p) {
  const full = import_node_path4.default.resolve(p);
  const tail = [];
  let dir = full;
  for (; ; ) {
    try {
      return import_node_path4.default.join(import_node_fs4.default.realpathSync.native(dir), ...tail);
    } catch {
      const parent = import_node_path4.default.dirname(dir);
      if (parent === dir) return full;
      tail.unshift(import_node_path4.default.basename(dir));
      dir = parent;
    }
  }
}
function findProjectRoot(cwd) {
  const start = canonicalPath(cwd);
  let dir = start;
  for (; ; ) {
    const parent = import_node_path4.default.dirname(dir);
    if (import_node_fs4.default.existsSync(import_node_path4.default.join(dir, VAULT_DIRNAME, "project.md")) && parent !== dir && !samePath(dir, import_node_os2.default.homedir())) return dir;
    if (import_node_fs4.default.existsSync(import_node_path4.default.join(dir, ".git"))) return dir;
    if (parent === dir) return start;
    dir = parent;
  }
}
var TWO_SEPARATORS = /^[\\/]{2}/;
var escapes = (relative) => relative === ".." || relative.startsWith(".." + import_node_path4.default.sep) || import_node_path4.default.isAbsolute(relative);
function resolveInside(root, rel) {
  try {
    if (typeof rel !== "string" || rel === "" || rel.includes("\0")) return null;
    if (TWO_SEPARATORS.test(rel) || import_node_path4.default.isAbsolute(rel) || /^[a-zA-Z]:/.test(rel)) return null;
    const base = canonicalPath(root);
    const joined = import_node_path4.default.resolve(base, rel);
    const lexical = import_node_path4.default.relative(base, joined);
    if (lexical === "" || escapes(lexical)) return null;
    const real = canonicalPath(joined);
    if (TWO_SEPARATORS.test(real)) return null;
    const relative = import_node_path4.default.relative(base, real);
    if (relative === "" || escapes(relative)) return null;
    return real;
  } catch {
    return null;
  }
}
function vaultDir(root) {
  return import_node_path4.default.join(root, VAULT_DIRNAME);
}
function samePath(a, b) {
  const x = canonicalPath(a);
  const y = canonicalPath(b);
  return process.platform === "win32" ? x.toLowerCase() === y.toLowerCase() : x === y;
}
function slugify(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "");
  if (!slug) return (0, import_node_crypto2.createHash)("sha1").update(title).digest("hex").slice(0, 6);
  return RESERVED.test(slug) ? `${slug}-x` : slug;
}
function uniqueId(dir, base) {
  let id = base;
  let n = 2;
  while (import_node_fs4.default.existsSync(import_node_path4.default.join(dir, `${id}.md`))) id = `${base}-${n++}`;
  return id;
}

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path: path19, errorMaps, issueData } = params;
  const fullPath = [...path19, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path19, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path19;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options2) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options2) });
  }
  ip(options2) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options2) });
  }
  cidr(options2) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options2) });
  }
  datetime(options2) {
    if (typeof options2 === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options2
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options2?.precision === "undefined" ? null : options2?.precision,
      offset: options2?.offset ?? false,
      local: options2?.local ?? false,
      ...errorUtil.errToObj(options2?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options2) {
    if (typeof options2 === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options2
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options2?.precision === "undefined" ? null : options2?.precision,
      ...errorUtil.errToObj(options2?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options2) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options2?.position,
      ...errorUtil.errToObj(options2?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options2 = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options2.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options2) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options2, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options2) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options: options2,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// src/vault/time.ts
var pad = (n) => String(Math.abs(n)).padStart(2, "0");
function localIso(d) {
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${sign}${pad(Math.floor(Math.abs(off) / 60))}:${pad(Math.abs(off) % 60)}`;
}
function isValidDate(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = /* @__PURE__ */ new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}
function dateStamp(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// src/vault/schema.ts
var dateToString = (v) => v instanceof Date ? localIso(v) : v;
var iso = external_exports.preprocess(dateToString, external_exports.string().min(1));
var isoOpt = external_exports.preprocess(dateToString, external_exports.string().nullable().default(null));
var optStr = external_exports.string().nullable().default(null);
var dateOnly = external_exports.preprocess(
  (v) => v instanceof Date && !Number.isNaN(v.getTime()) ? v.toISOString().slice(0, 10) : v,
  external_exports.string().regex(/^\d{4}-\d{2}-\d{2}$/)
);
var maybeDate = dateOnly.nullish();
var maybeIso = external_exports.preprocess(dateToString, external_exports.string().min(1)).nullish();
var PRIORITIES = ["urgent", "high", "medium", "low"];
var MILESTONE_STATUSES = ["planned", "active", "done"];
var HISTORY_FIELDS = ["status", "title", "topic", "priority", "due", "start", "estimate", "milestone", "parent", "blocked_by", "labels"];
var historyItem = external_exports.object({
  at: iso,
  field: external_exports.string(),
  from: external_exports.string().nullable().default(null),
  to: external_exports.string().nullable().default(null),
  by: external_exports.enum(["agent", "person"]).default("agent")
});
var toolGroup = external_exports.object({ calls: external_exports.number().default(0), resultTokens: external_exports.number().default(0) });
var usageSchema = external_exports.object({
  input: external_exports.number().default(0),
  cache_read: external_exports.number().default(0),
  cache_write: external_exports.number().default(0),
  output: external_exports.number().default(0),
  subagent_total: external_exports.number().default(0),
  context_last: external_exports.number().default(0),
  context_peak: external_exports.number().default(0),
  context_baseline: external_exports.number().default(0),
  compactions: external_exports.array(
    external_exports.object({
      at: isoOpt,
      // Index in the stored `series` of the first point after this compaction; absent in older files or when that point was not kept.
      series_at: external_exports.number().int().nonnegative().optional(),
      trigger: optStr,
      pre: external_exports.number().nullable().default(null),
      post: external_exports.number().nullable().default(null)
    })
  ).default([]),
  series: external_exports.array(external_exports.tuple([external_exports.number(), external_exports.number()])).default([]),
  // Number of model responses in the main conversation (each one re-reads the whole context); absent in older files.
  turns: external_exports.number().optional(),
  // Derived from the transcript, main conversation only; absent in files written before it existed. See transcript/usage.ts.
  activity: external_exports.object({
    exploring: toolGroup,
    editing: toolGroup,
    binkgo: toolGroup,
    other: toolGroup,
    binkgoInjectedTokens: external_exports.number().default(0)
  }).optional()
});
var failureSchema = external_exports.object({
  command: external_exports.string(),
  excerpt: external_exports.string().default(""),
  at: iso,
  fixed_at: isoOpt
});
var TASK_STATUSES = ["todo", "doing", "done", "blocked"];
var ARTIFACT_KINDS = ["spec", "plan", "doc", "image", "html", "code", "other"];
var entry = (shape) => external_exports.object(shape).passthrough();
var lax = (schema) => external_exports.preprocess((v) => v === null ? void 0 : v, schema);
var SCHEMAS = {
  project: entry({
    name: external_exports.string().min(1),
    goal: lax(external_exports.string().default("")),
    status: external_exports.enum(["active", "paused", "done"]).default("active"),
    focus: lax(external_exports.string().default("")),
    created: iso,
    updated: iso
  }),
  topic: entry({
    title: external_exports.string().min(1),
    goal: lax(external_exports.string().default("")),
    status: external_exports.enum(["active", "done"]).default("active"),
    start: maybeDate,
    target: maybeDate,
    color: external_exports.number().int().min(0).max(7).nullish(),
    created: iso,
    updated: iso
  }),
  task: entry({
    title: external_exports.string().min(1),
    topic: optStr,
    status: external_exports.enum(TASK_STATUSES).default("todo"),
    acceptance: lax(external_exports.array(external_exports.string()).default([])),
    session: optStr,
    // Position within a status column, set when a task is moved on the dashboard; absent in older files.
    rank: lax(external_exports.number().finite().optional()),
    priority: external_exports.enum(PRIORITIES).nullish(),
    due: maybeDate,
    start: maybeDate,
    estimate: external_exports.number().finite().min(0).nullish(),
    labels: lax(external_exports.array(external_exports.string()).optional()),
    parent: external_exports.string().nullish(),
    blocked_by: lax(external_exports.array(external_exports.string()).optional()),
    // Older files: a former "sprint" reference. It reads as the milestone and is dropped the next time the task is written.
    sprint: external_exports.string().nullish(),
    milestone: external_exports.string().nullish(),
    completed: maybeIso,
    history: lax(external_exports.array(historyItem).optional()),
    created: iso,
    updated: iso
  }),
  milestone: entry({
    title: external_exports.string().min(1),
    // Older files had `sprint` or `milestone` here. It is ignored, and dropped the next time the milestone is written.
    kind: lax(external_exports.string().optional()),
    goal: lax(external_exports.string().default("")),
    start: maybeDate,
    end: maybeDate,
    status: external_exports.enum(MILESTONE_STATUSES).default("planned"),
    created: iso,
    updated: iso
  }),
  // A note about one file or folder of the project, so a later session need not rediscover it. `stamp` records how the
  // path looked when the note was saved (see map.ts), so a later read can tell that it has changed since.
  map: entry({
    path: external_exports.string().min(1),
    summary: external_exports.string().default(""),
    stamp: external_exports.string().nullish(),
    updated: iso
  }),
  session: entry({
    session_id: external_exports.string().min(1),
    started: iso,
    ended: isoOpt,
    model: optStr,
    files_touched: lax(external_exports.array(external_exports.string()).default([])),
    summary_written: external_exports.boolean().default(false),
    usage: usageSchema.default({}),
    failures: lax(external_exports.array(failureSchema).optional())
  }),
  decision: entry({
    title: external_exports.string().min(1),
    status: external_exports.enum(["active", "superseded"]).default("active"),
    supersedes: optStr,
    topic: optStr,
    session: optStr,
    created: iso
  }),
  fix: entry({
    title: external_exports.string().min(1),
    status: external_exports.enum(["active", "reverted", "superseded"]).default("active"),
    files: lax(external_exports.array(external_exports.string()).default([])),
    verified: external_exports.boolean().default(false),
    supersedes: optStr,
    session: optStr,
    created: iso
  }),
  artifact: entry({
    title: external_exports.string().min(1),
    kind: external_exports.enum(ARTIFACT_KINDS).default("other"),
    path: external_exports.string().default(""),
    stored: external_exports.boolean().default(false),
    task: optStr,
    session: optStr,
    created: iso
  })
};
var KINDS = ["project", "topic", "task", "session", "decision", "fix", "artifact", "milestone", "map"];
var DIRS = {
  project: "",
  topic: "topics",
  task: "tasks",
  session: "sessions",
  decision: "decisions",
  fix: "fixes",
  artifact: "artifacts",
  milestone: "milestones",
  map: "map"
};
var SECTIONS = {
  project: ["Overview"],
  topic: ["Notes"],
  task: ["Notes"],
  session: ["Summary", "Done", "Next"],
  decision: ["Decision", "Why", "Alternatives"],
  fix: ["Symptom", "Cause", "Fix"],
  artifact: ["Description"],
  milestone: ["Notes"],
  map: ["Details"]
};
function effectiveMilestone(d) {
  return d.milestone || d.sprint || null;
}

// src/vault/io.ts
var sleepBuffer = new Int32Array(new SharedArrayBuffer(4));
function sleepMs(ms) {
  Atomics.wait(sleepBuffer, 0, 0, ms);
}
function entryPath(root, kind, id) {
  if (kind === "project") return import_node_path5.default.join(vaultDir(root), "project.md");
  if (!id || /[\\/]|\.\./.test(id)) throw new Error(`Invalid id: ${id}`);
  return import_node_path5.default.join(vaultDir(root), DIRS[kind], `${id}.md`);
}
function entryExists(root, kind, id) {
  try {
    return import_node_fs5.default.existsSync(entryPath(root, kind, id));
  } catch {
    return false;
  }
}
var TRANSIENT = /* @__PURE__ */ new Set(["EPERM", "EACCES", "EBUSY"]);
var isTransient = (e) => TRANSIENT.has(e.code ?? "");
function writeAtomic(file, text2) {
  import_node_fs5.default.mkdirSync(import_node_path5.default.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  import_node_fs5.default.writeFileSync(tmp, text2, "utf8");
  for (let attempt = 0; ; attempt++) {
    try {
      import_node_fs5.default.renameSync(tmp, file);
      return;
    } catch (e) {
      if (!isTransient(e) || attempt >= 50) {
        try {
          import_node_fs5.default.unlinkSync(tmp);
        } catch {
        }
        throw e;
      }
      sleepMs(20);
    }
  }
}
function readText(file) {
  for (let attempt = 0; ; attempt++) {
    try {
      return import_node_fs5.default.readFileSync(file, "utf8");
    } catch (e) {
      if (!isTransient(e) || attempt >= 10) throw e;
      sleepMs(20);
    }
  }
}
var LockTimeout = class extends Error {
};
var LOCK_BUSY = "The vault is busy, try again in a moment.";
var lockStaleMs = 5e3;
var lockTimeoutMs = 8e3;
var errCode = (e) => e?.code;
function readToken(file) {
  try {
    return import_node_fs5.default.readFileSync(file, "utf8");
  } catch {
    return null;
  }
}
function pidAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return errCode(e) === "EPERM";
  }
}
function isDeadLock(lock, staleMs) {
  const token = readToken(lock);
  if (token === null) return false;
  const pid = Number.parseInt(token, 10);
  if (Number.isInteger(pid) && pid > 0 && !pidAlive(pid)) return true;
  try {
    return Date.now() - import_node_fs5.default.statSync(lock).mtimeMs > staleMs;
  } catch {
    return false;
  }
}
function removeDeadLock(lock, staleMs) {
  const guard = `${lock}.steal`;
  try {
    import_node_fs5.default.writeFileSync(guard, String(process.pid), { flag: "wx" });
  } catch {
    try {
      const pid = Number.parseInt(readToken(guard) ?? "", 10);
      const ownerGone = Number.isInteger(pid) && pid > 0 && !pidAlive(pid);
      if (ownerGone || Date.now() - import_node_fs5.default.statSync(guard).mtimeMs > staleMs * 10) import_node_fs5.default.unlinkSync(guard);
    } catch {
    }
    return;
  }
  try {
    if (isDeadLock(lock, staleMs)) import_node_fs5.default.unlinkSync(lock);
  } catch {
  } finally {
    try {
      import_node_fs5.default.unlinkSync(guard);
    } catch {
    }
  }
}
var held = /* @__PURE__ */ new Set();
function refreshLocks() {
  const now = /* @__PURE__ */ new Date();
  for (const lock of held) {
    try {
      import_node_fs5.default.utimesSync(lock, now, now);
    } catch {
    }
  }
}
function withLock(target, fn, opts = {}) {
  const staleMs = opts.staleMs ?? lockStaleMs;
  const timeoutMs = opts.timeoutMs ?? lockTimeoutMs;
  const lock = `${target}.lock`;
  const token = `${process.pid}:${(0, import_node_crypto3.randomBytes)(8).toString("hex")}`;
  import_node_fs5.default.mkdirSync(import_node_path5.default.dirname(lock), { recursive: true });
  let lastCode;
  const tryAcquire = () => {
    try {
      import_node_fs5.default.writeFileSync(lock, token, { flag: "wx" });
      return true;
    } catch (e) {
      lastCode = errCode(e);
      if (lastCode !== "EEXIST" && !TRANSIENT.has(lastCode ?? "")) throw e;
      return false;
    }
  };
  const deadline = Date.now() + timeoutMs;
  while (!tryAcquire()) {
    if (isDeadLock(lock, staleMs)) {
      removeDeadLock(lock, staleMs);
      if (tryAcquire()) break;
    }
    if (Date.now() > deadline) {
      const cause = lastCode && lastCode !== "EEXIST" ? ` (${lastCode})` : "";
      throw new LockTimeout(`lock timeout: ${target}${cause}`);
    }
    sleepMs(20);
  }
  held.add(lock);
  try {
    return fn();
  } finally {
    held.delete(lock);
    if (readToken(lock) === token) {
      try {
        import_node_fs5.default.unlinkSync(lock);
      } catch {
      }
    }
  }
}
var HEADING = /^## (.+?)\s*$/;
function parseSections(body, names) {
  const lines = {};
  let current = null;
  for (const line of body.split(/\r?\n/)) {
    const m = HEADING.exec(line);
    if (m && names.includes(m[1])) {
      current = m[1];
      lines[current] = [];
    } else if (current) {
      lines[current].push(line);
    }
  }
  const out = {};
  for (const n of names) out[n] = (lines[n] ?? []).join("\n").trim();
  return out;
}
function escapeSection(text2, names) {
  return text2.split(/\r?\n/).map((line) => {
    const m = HEADING.exec(line);
    return m && names.includes(m[1]) ? `#${line}` : line;
  }).join("\n").trim();
}
function renderEntry(kind, data, sections) {
  return renderDoc(kind, SCHEMAS[kind].parse(data), sections);
}
var withoutUndefined = (data) => Object.fromEntries(Object.entries(data).filter(([, v]) => v !== void 0));
function renderDoc(kind, data, sections) {
  const names = SECTIONS[kind];
  const body = names.map((n) => `## ${n}

${escapeSection(sections[n] ?? "", names)}
`).join("\n");
  return import_gray_matter.default.stringify(`
${body}`, withoutUndefined(data));
}
function isBroken(e) {
  return "error" in e;
}
var UNSUPPORTED = "unsupported front matter";
var refuseEngine = {
  parse() {
    throw new Error(UNSUPPORTED);
  }
};
var MATTER_OPTIONS = {
  language: "yaml",
  engines: { javascript: refuseEngine, js: refuseEngine, coffee: refuseEngine }
};
var FIRST_LINE_OK = /^\uFEFF?---(\r?\n|$)/;
function withoutKeys(text2, skip) {
  const out = [];
  let fences = 0;
  let skipping = false;
  for (const line of text2.split("\n")) {
    if (fences < 2) {
      if (/^﻿?---\s*$/.test(line)) {
        fences++;
        skipping = false;
      } else {
        const key = /^([A-Za-z_][\w-]*):/.exec(line);
        if (key) skipping = skip.includes(key[1]);
        else if (skipping && line.trim() !== "" && !/^[\s-]/.test(line)) skipping = false;
        if (skipping) continue;
      }
    }
    out.push(line);
  }
  return out.join("\n");
}
function readEntry(root, kind, id, skipKeys = []) {
  try {
    let text2 = readText(entryPath(root, kind, id));
    if (!FIRST_LINE_OK.test(text2)) throw new Error(UNSUPPORTED);
    if (skipKeys.length) text2 = withoutKeys(text2, skipKeys);
    const parsed = (0, import_gray_matter.default)(text2, { ...MATTER_OPTIONS });
    const data = SCHEMAS[kind].parse(parsed.data);
    return { kind, id, data, sections: parseSections(parsed.content, SECTIONS[kind]) };
  } catch (e) {
    return { kind, id, error: e instanceof Error ? e.message : String(e) };
  }
}
function writeEntry(root, kind, id, data, sections) {
  const valid = SCHEMAS[kind].parse(data);
  writeAtomic(entryPath(root, kind, id), renderDoc(kind, valid, sections));
}
function listIds(root, kind) {
  if (kind === "project") return ["project"];
  const dir = import_node_path5.default.join(vaultDir(root), DIRS[kind]);
  try {
    return import_node_fs5.default.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isFile() && d.name.endsWith(".md")).map((d) => d.name.slice(0, -3)).sort();
  } catch {
    return [];
  }
}
function readRaw(root, kind, id) {
  try {
    return readText(entryPath(root, kind, id));
  } catch {
    return null;
  }
}
function listEntries(root, kind) {
  return listIds(root, kind).map((id) => readEntry(root, kind, id));
}
function listGood(root, kind) {
  return listEntries(root, kind).filter((e) => !isBroken(e));
}
function createEntry(root, kind, base, data, sections) {
  const dir = import_node_path5.default.join(vaultDir(root), DIRS[kind]);
  return withLock(dir, () => {
    const id = uniqueId(dir, base);
    writeEntry(root, kind, id, data, sections);
    return id;
  });
}
function mutateEntry(root, kind, id, fn) {
  return withLock(entryPath(root, kind, id), () => {
    const e = readEntry(root, kind, id);
    if (isBroken(e)) throw new Error(`Cannot update ${kind} ${id}: ${e.error}`);
    fn(e);
    writeEntry(root, kind, id, e.data, e.sections);
    return e;
  });
}

// src/vault/registry.ts
var import_node_fs6 = __toESM(require("node:fs"), 1);
var import_node_os3 = __toESM(require("node:os"), 1);
var import_node_path6 = __toESM(require("node:path"), 1);
function binkgoHome() {
  return process.env.BINKGO_HOME || import_node_path6.default.join(import_node_os3.default.homedir(), ".binkgo");
}
function registryFile() {
  return import_node_path6.default.join(binkgoHome(), "registry.json");
}
function wellFormed(raw) {
  if (typeof raw !== "object" || raw === null) return [];
  const item = raw;
  if (typeof item.path !== "string" || item.path.trim() === "") return [];
  const name = typeof item.name === "string" && item.name !== "" ? item.name : import_node_path6.default.basename(item.path);
  return [{ path: item.path, name, lastSeen: typeof item.lastSeen === "string" ? item.lastSeen : "" }];
}
function readRegistry() {
  try {
    const json = JSON.parse(import_node_fs6.default.readFileSync(registryFile(), "utf8"));
    return Array.isArray(json.projects) ? json.projects.flatMap(wellFormed) : [];
  } catch {
    return [];
  }
}
function readRemoved() {
  try {
    const json = JSON.parse(import_node_fs6.default.readFileSync(registryFile(), "utf8"));
    return Array.isArray(json.removed) ? json.removed.filter((p) => typeof p === "string" && p !== "") : [];
  } catch {
    return [];
  }
}
function writeRegistry(projects, removed) {
  writeAtomic(registryFile(), JSON.stringify(removed.length ? { projects, removed } : { projects }, null, 2));
}
function registerProject(root, name, now, opts = {}) {
  return withLock(registryFile(), () => {
    const removed = readRemoved();
    if (opts.auto && removed.some((p) => samePath(p, root))) return false;
    const projects = readRegistry().filter((p) => !samePath(p.path, root));
    projects.push({ path: canonicalPath(root), name, lastSeen: localIso(now) });
    writeRegistry(projects, removed.filter((p) => !samePath(p, root)));
    return true;
  });
}
function unregisterProject(root) {
  return withLock(registryFile(), () => {
    const all = readRegistry();
    const kept = all.filter((p) => !samePath(p.path, root));
    if (kept.length === all.length) return false;
    const removed = readRemoved().filter((p) => !samePath(p, root));
    writeRegistry(kept, [...removed, canonicalPath(root)]);
    return true;
  });
}

// src/license/store.ts
var licenseFile = () => import_node_path7.default.join(binkgoHome(), "license.json");
var deviceFile = () => import_node_path7.default.join(binkgoHome(), "device.json");
var clockFile = () => import_node_path7.default.join(binkgoHome(), "clock.json");
function readJson(file) {
  try {
    const v = JSON.parse(import_node_fs7.default.readFileSync(file, "utf8"));
    return typeof v === "object" && v !== null && !Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}
function readLicenseToken() {
  const t = readJson(licenseFile())?.token;
  return typeof t === "string" && t !== "" ? t : null;
}
function saveLicenseToken(token) {
  import_node_fs7.default.mkdirSync(binkgoHome(), { recursive: true });
  writeAtomic(licenseFile(), JSON.stringify({ token }, null, 2) + "\n");
}
function clearLicense() {
  try {
    import_node_fs7.default.rmSync(licenseFile(), { force: true });
  } catch {
  }
}
function readDeviceFile(file) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const v = JSON.parse(import_node_fs7.default.readFileSync(file, "utf8"));
      return typeof v === "object" && v !== null && !Array.isArray(v) ? v : "unreadable";
    } catch (e) {
      if (e.code === "ENOENT") return "missing";
    }
  }
  return "unreadable";
}
function deviceInfo() {
  const device_name = import_node_os4.default.hostname() || "This computer";
  const file = readDeviceFile(deviceFile());
  if (file === "unreadable") return { device_id: (0, import_node_crypto4.createHash)("sha256").update(`unreadable:${device_name}`).digest("hex").slice(0, 32), device_name };
  const saved = file === "missing" ? void 0 : file.device_id;
  let id = typeof saved === "string" && saved !== "" ? saved : "";
  if (!id && file === "missing") {
    id = (0, import_node_crypto4.randomUUID)();
    import_node_fs7.default.mkdirSync(binkgoHome(), { recursive: true });
    writeAtomic(deviceFile(), JSON.stringify({ device_id: id }, null, 2) + "\n");
  }
  return { device_id: id || (0, import_node_crypto4.createHash)("sha256").update(`noid:${device_name}`).digest("hex").slice(0, 32), device_name };
}
var CLOCK_SLACK_MS = 60 * 60 * 1e3;
var CLOCK_WRITE_EVERY_MS = 60 * 1e3;
function trustedNow(now) {
  const t = now.getTime();
  const seen = Number(readJson(clockFile())?.seen);
  const high = Number.isFinite(seen) ? seen : null;
  const use = high !== null && t < high - CLOCK_SLACK_MS ? high : t;
  if (high === null || use > high + CLOCK_WRITE_EVERY_MS) {
    try {
      import_node_fs7.default.mkdirSync(binkgoHome(), { recursive: true });
      writeAtomic(clockFile(), JSON.stringify({ seen: use }) + "\n");
    } catch {
    }
  }
  return use;
}

// src/license/status.ts
function appMajorOf(appVersion) {
  const n = Number.parseInt(/^v?(\d+)/.exec(appVersion.trim())?.[1] ?? "", 10);
  return Number.isFinite(n) ? Math.max(1, n) : 1;
}
var isUsable = (s) => s.state === "trial" || s.state === "full";
function licenseStatus(now, appVersion, opts = {}) {
  const appMajor = appMajorOf(appVersion);
  const token = opts.token === void 0 ? readLicenseToken() : opts.token;
  const p = token ? verifyLicense(token, opts.publicKey) : null;
  if (!p || p.device_id !== deviceInfo().device_id) return { state: "none", appMajor };
  const base = { email: p.email, maxMajor: p.max_major, appMajor };
  if (p.kind === "full" && p.max_major >= 1) {
    return { ...base, state: appMajor > p.max_major ? "needs_upgrade" : "full" };
  }
  const until = p.trial_until ? Date.parse(p.trial_until) : NaN;
  const msLeft = Number.isFinite(until) ? Math.max(0, until - trustedNow(now)) : 0;
  return { ...base, state: msLeft > 0 ? "trial" : "trial_expired", msLeft, trialUntil: p.trial_until ?? void 0 };
}

// src/license/client.ts
async function call(action, body, fetchImpl) {
  const res = await fetchImpl(`${SUPABASE_URL}/functions/v1/device-auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${SUPABASE_ANON_KEY}`, apikey: SUPABASE_ANON_KEY },
    body: JSON.stringify({ action, ...body })
  });
  const json = await res.json().catch(() => ({}));
  return typeof json === "object" && json !== null ? json : {};
}
var realFetch = (url, init) => fetch(url, init);
async function startSignin(opts = {}) {
  const r = await call("start", { ...deviceInfo(), app_version: opts.appVersion ?? "" }, opts.fetch ?? realFetch);
  if (typeof r.code !== "string" || typeof r.poll_token !== "string" || typeof r.verify_url !== "string") {
    throw new Error("The sign-in service did not answer. Try again in a moment.");
  }
  return { code: r.code, poll_token: r.poll_token, verify_url: r.verify_url, interval: typeof r.interval === "number" ? r.interval : 5 };
}
async function pollSignin(pollToken, opts = {}) {
  let r;
  try {
    r = await call("poll", { poll_token: pollToken }, opts.fetch ?? realFetch);
  } catch {
    return { status: "error" };
  }
  if (r.status === "approved") {
    if (typeof r.license !== "string" || !verifyLicense(r.license, opts.publicKey)) return { status: "error" };
    saveLicenseToken(r.license);
    return { status: "approved" };
  }
  if (r.status === "denied") return { status: "denied", reason: typeof r.reason === "string" ? r.reason : "denied" };
  if (r.status === "expired") return { status: "expired" };
  return r.status === "pending" ? { status: "pending" } : { status: "error" };
}
async function refreshLicense(opts = {}) {
  const token = readLicenseToken();
  if (!token) return "none";
  let r;
  try {
    r = await call("refresh", { license: token }, opts.fetch ?? realFetch);
  } catch {
    return "offline";
  }
  if (r.error === "revoked") {
    clearLicense();
    return "revoked";
  }
  if (typeof r.license === "string" && verifyLicense(r.license, opts.publicKey)) {
    saveLicenseToken(r.license);
    return "refreshed";
  }
  return "offline";
}

// src/license/gate.ts
var dashboardGateOffForTests = () => false;

// src/vault/vault.ts
var import_node_fs10 = __toESM(require("node:fs"), 1);
var import_node_os5 = __toESM(require("node:os"), 1);
var import_node_path10 = __toESM(require("node:path"), 1);

// src/vault/refs.ts
var ID = /^[a-z0-9][a-z0-9-]*$/;
function parseRef(ref) {
  const clean2 = ref.trim().replace(/\\/g, "/").replace(/^\.binkgo\//, "").replace(/\.md$/, "");
  if (clean2 === "project") return { kind: "project", id: "project" };
  const slash = clean2.indexOf("/");
  const dir = slash === -1 ? null : clean2.slice(0, slash);
  const id = slash === -1 ? clean2 : clean2.slice(slash + 1);
  const kind = dir === null ? null : KINDS.find((k) => k !== "project" && DIRS[k] === dir) ?? null;
  if (!ID.test(id) || dir !== null && kind === null) throw new Error(`Invalid ref: ${ref}`);
  return { kind, id };
}
function idOfKind(ref, kind) {
  const parsed = parseRef(ref);
  if (parsed.kind !== null && parsed.kind !== kind) throw new Error(`Expected a ${kind} ref, got: ${ref}`);
  return parsed.id;
}

// src/vault/work.ts
var import_node_crypto6 = require("node:crypto");
var import_node_fs9 = __toESM(require("node:fs"), 1);
var import_node_path9 = __toESM(require("node:path"), 1);

// src/vault/index.ts
var import_node_crypto5 = require("node:crypto");
var import_node_fs8 = __toESM(require("node:fs"), 1);
var import_node_path8 = __toESM(require("node:path"), 1);
var VERSION = 2;
function cacheFile(root) {
  const key = (0, import_node_crypto5.createHash)("sha1").update(canonicalPath(root).toLowerCase()).digest("hex").slice(0, 16);
  return import_node_path8.default.join(binkgoHome(), "cache", `tasks-${key}.json`);
}
function load(root) {
  try {
    const json = JSON.parse(import_node_fs8.default.readFileSync(cacheFile(root), "utf8"));
    return json.v === VERSION && json.rows && typeof json.rows === "object" ? json.rows : {};
  } catch {
    return {};
  }
}
function rowOf(root, id, m, s) {
  const e = readEntry(root, "task", id, ["history"]);
  if (isBroken(e)) return { m, s, broken: true, error: e.error, status: "" };
  const d = e.data;
  const row = { m, s, status: d.status };
  if (d.topic) row.topic = d.topic;
  if (typeof d.rank === "number") row.rank = d.rank;
  if (d.parent) row.parent = d.parent;
  if (d.blocked_by?.length) row.blocked_by = d.blocked_by;
  const milestone = effectiveMilestone(d);
  if (milestone) row.milestone = milestone;
  if (d.status !== "done") row.data = d;
  return row;
}
function taskRows(root) {
  const cached = load(root);
  const out = /* @__PURE__ */ new Map();
  let changed = false;
  for (const id of listIds(root, "task")) {
    let st;
    try {
      st = import_node_fs8.default.statSync(entryPath(root, "task", id));
    } catch {
      continue;
    }
    const old = cached[id];
    if (old && old.m === st.mtimeMs && old.s === st.size) {
      out.set(id, old);
    } else {
      out.set(id, rowOf(root, id, st.mtimeMs, st.size));
      changed = true;
    }
  }
  if (changed || Object.keys(cached).length !== out.size) {
    try {
      writeAtomic(cacheFile(root), JSON.stringify({ v: VERSION, rows: Object.fromEntries(out) }));
    } catch {
    }
  }
  return out;
}

// src/vault/work.ts
var RuleError = class extends Error {
};
var rule = (message) => {
  throw new RuleError(message);
};
var ID2 = /^[a-z0-9][a-z0-9-]*$/;
var MAX_LABELS = 20;
var MAX_LABEL_LENGTH = 40;
var MAX_BLOCKERS = 50;
var MAX_HISTORY = 100;
var MAX_HISTORY_VALUE = 200;
var chars = (s) => Array.from(s).length;
function must(root, kind, id) {
  const e = readEntry(root, kind, id);
  if (isBroken(e)) throw new Error(`Cannot read ${kind} ${id}: ${e.error}`);
  return e;
}
var tasksDir = (root) => import_node_path9.default.join(vaultDir(root), DIRS.task);
var CONTROL_SINGLE_LINE = /[\x00-\x1F\x7F]/;
var CONTROL_MULTI_LINE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
function noControl(what, value, multiline = false) {
  if (typeof value === "string" && (multiline ? CONTROL_MULTI_LINE : CONTROL_SINGLE_LINE).test(value)) rule(`${what} contains control characters`);
}
function checkText(input) {
  noControl("The title", input.title);
  noControl("The topic", input.topic);
  noControl("The note", input.note, true);
  for (const item of input.acceptance ?? []) noControl("An acceptance item", item);
}
function checkDate(name, value) {
  if (typeof value !== "string" || !isValidDate(value)) rule(`${name} must be a date written YYYY-MM-DD`);
  return value;
}
function normalizeLabels(list) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const raw of list) {
    const label = typeof raw === "string" ? raw.trim() : "";
    noControl("A label", label);
    if (chars(label) < 1 || chars(label) > MAX_LABEL_LENGTH) rule(`Each label must be 1 to ${MAX_LABEL_LENGTH} characters`);
    const key = label.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(label);
  }
  if (out.length > MAX_LABELS) rule(`A task can have at most ${MAX_LABELS} labels`);
  return out;
}
function refId(kind, value, what) {
  try {
    return idOfKind(value, kind);
  } catch {
    return rule(`${what} is not a valid id`);
  }
}
function blockerGraph(root) {
  return new Map([...taskRows(root)].map(([id, r]) => [id, r.blocked_by ?? []]));
}
function checkRef(root, value) {
  const id = refId("milestone", value, "The milestone");
  if (!entryExists(root, "milestone", id)) return rule(`The milestone ${id} does not exist`);
  if (isBroken(readEntry(root, "milestone", id))) return rule(`The milestone ${id} cannot be read`);
  return id;
}
function migrateSprint(d) {
  if (d.sprint === void 0) return;
  if (!d.milestone && d.sprint) d.milestone = d.sprint;
  delete d.sprint;
}
function checkFields(root, selfId, input) {
  const out = {};
  if (input.priority !== void 0) {
    if (input.priority !== null && !PRIORITIES.includes(input.priority)) rule(`Priority must be ${PRIORITIES.join(", ")}`);
    out.priority = input.priority;
  }
  if (input.due !== void 0) out.due = input.due === null ? null : checkDate("Due date", input.due);
  if (input.start !== void 0) out.start = input.start === null ? null : checkDate("Start date", input.start);
  if (input.estimate !== void 0) {
    if (input.estimate !== null && (typeof input.estimate !== "number" || !Number.isFinite(input.estimate) || input.estimate < 0)) {
      rule("Estimate must be a number, zero or more");
    }
    out.estimate = input.estimate;
  }
  if (input.labels !== void 0) out.labels = input.labels === null ? null : normalizeLabels(input.labels);
  if (input.parent !== void 0) {
    if (input.parent === null) {
      out.parent = null;
    } else {
      const parent = refId("task", input.parent, "The parent task");
      if (parent === selfId) rule("A task cannot be its own parent");
      if (!entryExists(root, "task", parent)) rule(`The parent task ${parent} does not exist`);
      const p = readEntry(root, "task", parent);
      if (!isBroken(p) && p.data.parent) rule("A sub-task cannot have sub-tasks of its own");
      if (selfId && [...taskRows(root).values()].some((t) => t.parent === selfId)) rule("A task that has sub-tasks cannot become a sub-task");
      out.parent = parent;
    }
  }
  if (input.blocked_by !== void 0) {
    if (input.blocked_by === null) {
      out.blocked_by = null;
    } else {
      if (input.blocked_by.length > MAX_BLOCKERS) rule(`A task can wait on at most ${MAX_BLOCKERS} others`);
      const ids = [...new Set(input.blocked_by.map((v) => refId("task", v, "A task it waits on")))];
      const graph = selfId ? blockerGraph(root) : /* @__PURE__ */ new Map();
      for (const b of ids) {
        if (b === selfId) rule("A task cannot wait on itself");
        if (!entryExists(root, "task", b)) rule(`The task it waits on (${b}) does not exist`);
        if (selfId) {
          const seen = /* @__PURE__ */ new Set();
          const stack = [b];
          while (stack.length) {
            const at = stack.pop();
            if (at === selfId) rule("That would make tasks wait on each other");
            if (seen.has(at)) continue;
            seen.add(at);
            stack.push(...graph.get(at) ?? []);
          }
        }
      }
      out.blocked_by = ids;
    }
  }
  if (input.milestone !== void 0) out.milestone = input.milestone === null ? null : checkRef(root, input.milestone);
  return out;
}
var isEmpty = (v) => v === null || v === void 0 || Array.isArray(v) && v.length === 0;
function applyFields(data, patch) {
  for (const [key, value] of Object.entries(patch)) {
    if (value === void 0) continue;
    if (isEmpty(value)) delete data[key];
    else data[key] = value;
  }
}
function fieldValue(d, field) {
  const v = d[field];
  if (v === void 0 || v === null) return null;
  if (Array.isArray(v)) return v.length ? v.join(", ") : null;
  return String(v);
}
var snapshot = (d) => Object.fromEntries(HISTORY_FIELDS.map((f) => [f, fieldValue(d, f)]));
var shorten = (s) => s === null ? null : chars(s) > MAX_HISTORY_VALUE ? `${Array.from(s).slice(0, MAX_HISTORY_VALUE - 1).join("")}\u2026` : s;
function recordHistory(d, before, by, at) {
  const added = [];
  for (const field of HISTORY_FIELDS) {
    const after = fieldValue(d, field);
    if (before[field] !== after) added.push({ at, field, from: shorten(before[field]), to: shorten(after), by });
  }
  if (added.length) d.history = [...d.history ?? [], ...added].slice(-MAX_HISTORY);
}
function syncCompleted(d, was, at) {
  if (d.status === "done") {
    if (was !== "done") d.completed = at;
  } else {
    delete d.completed;
  }
}
function tasksMentioning(root, needle) {
  const found = [];
  let n = 0;
  for (const id of listIds(root, "task")) {
    if (++n % 25 === 0) refreshLocks();
    const raw = readRaw(root, "task", id);
    if (raw === null || !raw.includes(needle)) continue;
    const e = readEntry(root, "task", id);
    if (!isBroken(e)) found.push(e);
  }
  return found;
}
function topicId(title) {
  if (!/[^\x00-\x7f]/.test(title)) return slugify(title);
  const ascii = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "");
  const hash = (0, import_node_crypto6.createHash)("sha1").update(title.trim()).digest("hex").slice(0, 6);
  return ascii ? `${ascii}-${hash}` : hash;
}
function idForTitle(root, kind, title) {
  const id = topicId(title);
  if (entryExists(root, kind, id)) return id;
  const wanted = title.trim().normalize("NFC");
  return listGood(root, kind).find((e) => e.data.title.trim().normalize("NFC") === wanted)?.id ?? id;
}
function checkTopicFields(f) {
  if (typeof f.start === "string") checkDate("Start date", f.start);
  if (typeof f.target === "string") checkDate("Target date", f.target);
  if (typeof f.color === "number" && (!Number.isInteger(f.color) || f.color < 0 || f.color > 7)) rule("Colour must be a whole number from 0 to 7");
}
function applyTopic(e, f, t) {
  const d = e.data;
  if (f.title !== void 0) {
    noControl("The title", f.title);
    if (chars(f.title.trim()) < 1) rule("A topic needs a title");
    e.data.title = f.title.trim();
  }
  noControl("The goal", f.goal, true);
  if (f.goal !== void 0) e.data.goal = f.goal;
  if (f.status !== void 0) e.data.status = f.status;
  for (const key of ["start", "target", "color"]) {
    const v = f[key];
    if (v === void 0) continue;
    if (v === null) delete d[key];
    else d[key] = v;
  }
  if (e.data.start && e.data.target && e.data.start > e.data.target) rule("The target date is before the start date");
  e.data.updated = t;
}
function upsertTopic(root, input, now = /* @__PURE__ */ new Date()) {
  checkTopicFields(input);
  noControl("The title", input.title);
  const id = idForTitle(root, "topic", input.title);
  const t = localIso(now);
  const created = withLock(import_node_path9.default.join(vaultDir(root), DIRS.topic), () => {
    if (entryExists(root, "topic", id)) return false;
    const e = {
      kind: "topic",
      id,
      sections: { Notes: "" },
      data: { title: input.title, goal: "", status: "active", created: t, updated: t }
    };
    applyTopic(e, { ...input, title: void 0 }, t);
    writeEntry(root, "topic", id, e.data, e.sections);
    return true;
  });
  if (created) return must(root, "topic", id);
  return mutateEntry(root, "topic", id, (e) => applyTopic(e, { ...input, title: void 0 }, t));
}
function updateTopic(root, id, patch, now = /* @__PURE__ */ new Date()) {
  if (!ID2.test(id) || !entryExists(root, "topic", id)) throw new Error(`No topic with id ${id}`);
  checkTopicFields(patch);
  return mutateEntry(root, "topic", id, (e) => applyTopic(e, patch, localIso(now)));
}
var TOPIC_NOTE_KINDS = ["decision", "fix", "artifact"];
function repoint(root, from, into, by, now) {
  const t = localIso(now);
  withLock(tasksDir(root), () => {
    for (const task of tasksMentioning(root, from)) {
      if (task.data.topic !== from) continue;
      refreshLocks();
      mutateEntry(root, "task", task.id, (e) => {
        const before = snapshot(e.data);
        e.data.topic = into;
        recordHistory(e.data, before, by, t);
        e.data.updated = t;
      });
    }
  });
  for (const kind of TOPIC_NOTE_KINDS) {
    withLock(import_node_path9.default.join(vaultDir(root), DIRS[kind]), () => {
      let n = 0;
      for (const id of listIds(root, kind)) {
        if (++n % 25 === 0) refreshLocks();
        const raw = readRaw(root, kind, id);
        if (raw === null || !raw.includes(from)) continue;
        const e = readEntry(root, kind, id);
        if (isBroken(e) || e.data.topic !== from) continue;
        mutateEntry(root, kind, id, (m) => {
          const d = m.data;
          if (into === null) delete d.topic;
          else d.topic = into;
        });
      }
    });
  }
}
function deleteTopic(root, id, by = "agent", now = /* @__PURE__ */ new Date()) {
  if (!ID2.test(id)) throw new Error(`No topic with id ${id}`);
  const file = entryPath(root, "topic", id);
  withLock(import_node_path9.default.join(vaultDir(root), DIRS.topic), () => {
    if (!import_node_fs9.default.existsSync(file)) throw new Error(`No topic with id ${id}`);
    import_node_fs9.default.unlinkSync(file);
  });
  repoint(root, id, null, by, now);
}
function mergeTopic(root, fromId, intoId, by = "agent", now = /* @__PURE__ */ new Date()) {
  for (const id of [fromId, intoId]) {
    if (!ID2.test(id) || !entryExists(root, "topic", id)) throw new Error(`No topic with id ${id}`);
  }
  if (fromId === intoId) rule("A topic cannot be merged into itself");
  repoint(root, fromId, intoId, by, now);
  const file = entryPath(root, "topic", fromId);
  withLock(import_node_path9.default.join(vaultDir(root), DIRS.topic), () => {
    if (import_node_fs9.default.existsSync(file)) import_node_fs9.default.unlinkSync(file);
  });
  return must(root, "topic", intoId);
}
function resolveTopic(root, value, now) {
  const candidate = value.replace(/^topics\//, "");
  if (ID2.test(candidate) && entryExists(root, "topic", candidate)) return candidate;
  return upsertTopic(root, { title: value }, now).id;
}
function applyMilestone(e, f, t) {
  if (f.title !== void 0) {
    noControl("The title", f.title);
    if (chars(f.title.trim()) < 1) rule("A milestone needs a title");
    e.data.title = f.title.trim();
  }
  noControl("The goal", f.goal, true);
  if (f.goal !== void 0) e.data.goal = f.goal;
  delete e.data.kind;
  if (f.status !== void 0) {
    if (!MILESTONE_STATUSES.includes(f.status)) rule(`Milestone status must be ${MILESTONE_STATUSES.join(", ")}`);
    e.data.status = f.status;
  }
  const d = e.data;
  for (const [key, label] of [["start", "Start date"], ["end", "End date"]]) {
    const v = f[key];
    if (v === void 0) continue;
    if (v === null) delete d[key];
    else d[key] = checkDate(label, v);
  }
  if (e.data.start && e.data.end && e.data.start > e.data.end) rule("The end date is before the start date");
  e.data.updated = t;
}
function upsertMilestone(root, input, now = /* @__PURE__ */ new Date()) {
  const t = localIso(now);
  let id = input.id;
  if (!id && input.title) {
    const same = idForTitle(root, "milestone", input.title);
    if (entryExists(root, "milestone", same)) id = same;
  }
  if (id) {
    const known = refId("milestone", id, "The milestone");
    if (!entryExists(root, "milestone", known)) throw new Error(`No milestone with id ${known}`);
    return mutateEntry(root, "milestone", known, (e2) => applyMilestone(e2, input, t));
  }
  if (!input.title) throw new Error("title is required when creating a milestone");
  const e = {
    kind: "milestone",
    id: "",
    sections: { Notes: "" },
    data: { title: input.title, goal: "", status: "planned", created: t, updated: t }
  };
  applyMilestone(e, input, t);
  const made = createEntry(root, "milestone", topicId(input.title), e.data, e.sections);
  return must(root, "milestone", made);
}
function deleteMilestone(root, ref, by = "agent", now = /* @__PURE__ */ new Date()) {
  const id = refId("milestone", ref, "The milestone");
  const file = entryPath(root, "milestone", id);
  withLock(import_node_path9.default.join(vaultDir(root), DIRS.milestone), () => {
    if (!import_node_fs9.default.existsSync(file)) throw new Error(`No milestone with id ${id}`);
    import_node_fs9.default.unlinkSync(file);
  });
  withLock(tasksDir(root), () => {
    for (const task of tasksMentioning(root, id)) {
      if (effectiveMilestone(task.data) !== id) continue;
      refreshLocks();
      mutateEntry(root, "task", task.id, (e) => {
        migrateSprint(e.data);
        const before = snapshot(e.data);
        if (e.data.milestone === id) delete e.data.milestone;
        recordHistory(e.data, before, by, localIso(now));
        e.data.updated = localIso(now);
      });
    }
  });
}
function rankForMove(root, movedId, order) {
  const known = taskRows(root);
  const rows = order.map((id) => {
    const row = known.get(id);
    if (!row || row.broken) must(root, "task", id);
    return { id, rank: row?.rank };
  });
  const at = order.indexOf(movedId);
  if (at < 0) throw new Error(`order does not contain ${movedId}`);
  const others = rows.filter((r) => r.id !== movedId);
  const rising = others.every((r, k) => typeof r.rank === "number" && (k === 0 || r.rank > others[k - 1].rank));
  if (rising) {
    const prev = at > 0 ? rows[at - 1].rank : void 0;
    const next = at < rows.length - 1 ? rows[at + 1].rank : void 0;
    let rank;
    if (prev === void 0 && next === void 0) rank = rows[at].rank ?? 1e3;
    else if (prev === void 0) rank = next - 1e3;
    else if (next === void 0) rank = prev + 1e3;
    else rank = (prev + next) / 2;
    const fits = (prev === void 0 || rank > prev) && (next === void 0 || rank < next);
    if (fits) return rank;
  }
  rows.forEach((row, k) => {
    const want = (k + 1) * 1e3;
    if (row.id === movedId || row.rank === want) return;
    refreshLocks();
    mutateEntry(root, "task", row.id, (e) => {
      e.data.rank = want;
    });
  });
  return (at + 1) * 1e3;
}
function topRank(root, status) {
  const ranks = [...taskRows(root).values()].filter((t) => t.status === status).map((t) => t.rank).filter((r) => typeof r === "number");
  return ranks.length ? Math.min(...ranks) - 1e3 : 0;
}
var FIELD_KEYS = ["priority", "due", "start", "estimate", "labels", "parent", "blocked_by", "milestone"];
var fieldsOf = (input) => Object.fromEntries(FIELD_KEYS.filter((k) => input[k] !== void 0).map((k) => [k, input[k]]));
function updateLocked(root, id, input, now) {
  checkText(input);
  if (!entryExists(root, "task", id)) throw new Error(`No task with id ${id}`);
  if (input.status !== void 0 && !TASK_STATUSES.includes(input.status)) rule(`Status must be ${TASK_STATUSES.join(", ")}`);
  const patch = checkFields(root, id, fieldsOf(input));
  const topic = input.topic === null ? null : input.topic ? resolveTopic(root, input.topic, now) : void 0;
  const rank = input.order ? rankForMove(root, id, input.order) : input.rank;
  return mutateEntry(root, "task", id, (e) => changeTask(e, input, patch, topic, rank, now));
}
function changeTask(e, input, patch, topic, rank, now) {
  const t = localIso(now);
  migrateSprint(e.data);
  const noteLine = input.note ? `- ${dateStamp(now)}: ${input.note}` : "";
  const before = snapshot(e.data);
  const was = e.data.status;
  if (input.title) e.data.title = input.title;
  if (input.status) e.data.status = input.status;
  if (topic !== void 0) e.data.topic = topic;
  if (input.acceptance) e.data.acceptance = input.acceptance;
  if (rank !== void 0) e.data.rank = rank;
  applyFields(e.data, patch);
  syncCompleted(e.data, was, t);
  recordHistory(e.data, before, input.by ?? "agent", t);
  if (noteLine) e.sections.Notes = [e.sections.Notes, noteLine].filter(Boolean).join("\n");
  e.data.updated = t;
}
function syncTopics(root, ids, now, open = []) {
  const hasOpen = new Set(open);
  let rows = null;
  for (const id of new Set(ids)) {
    if (!id || !ID2.test(id) || !entryExists(root, "topic", id)) continue;
    let want;
    if (hasOpen.has(id)) {
      want = "active";
    } else {
      rows ??= taskRows(root);
      const mine = [...rows.values()].filter((r) => r.topic === id);
      if (mine.length === 0) continue;
      want = mine.every((r) => r.status === "done") ? "done" : "active";
    }
    const topic = readEntry(root, "topic", id);
    if (isBroken(topic) || topic.data.status === want) continue;
    mutateEntry(root, "topic", id, (e) => {
      e.data.status = want;
      e.data.updated = localIso(now);
    });
  }
}
function upsertTask(root, given, now = /* @__PURE__ */ new Date()) {
  const input = typeof given.title === "string" ? { ...given, title: given.title.trim() } : given;
  const t = localIso(now);
  if (input.id) {
    if (input.title === "") rule("A task needs a title");
    const id2 = idOfKind(input.id, "task");
    const { task, touched } = withLock(tasksDir(root), () => {
      const before = readEntry(root, "task", id2);
      const task2 = updateLocked(root, id2, input, now);
      const moved = !isBroken(before) && (before.data.status !== task2.data.status || (before.data.topic ?? null) !== (task2.data.topic ?? null));
      return { task: task2, touched: moved ? [before.data.topic, task2.data.topic] : [] };
    });
    syncTopics(root, touched, now, task.data.status === "done" ? [] : [task.data.topic]);
    return task;
  }
  if (!input.title) throw new Error("title is required when creating a task");
  checkText(input);
  if (input.status !== void 0 && !TASK_STATUSES.includes(input.status)) rule(`Status must be ${TASK_STATUSES.join(", ")}`);
  const patch = checkFields(root, null, fieldsOf(input));
  const status = input.status ?? "todo";
  const data = {
    title: input.title,
    topic: input.topic ? resolveTopic(root, input.topic, now) : null,
    status,
    acceptance: input.acceptance ?? [],
    session: input.session ?? null,
    ...input.rank !== void 0 ? { rank: input.rank } : {},
    ...status === "done" ? { completed: t } : {},
    created: t,
    updated: t
  };
  applyFields(data, patch);
  const noteLine = input.note ? `- ${dateStamp(now)}: ${input.note}` : "";
  const id = createEntry(root, "task", `${dateStamp(now)}-${slugify(input.title)}`, data, { Notes: noteLine });
  syncTopics(root, [data.topic], now, status === "done" ? [] : [data.topic]);
  return must(root, "task", id);
}
function deleteTask(root, ref, by = "agent", now = /* @__PURE__ */ new Date()) {
  const id = idOfKind(ref, "task");
  const file = entryPath(root, "task", id);
  const t = localIso(now);
  let topic;
  withLock(tasksDir(root), () => {
    withLock(file, () => {
      if (!import_node_fs9.default.existsSync(file)) throw new Error(`No task with id ${id}`);
      const gone = readEntry(root, "task", id);
      topic = isBroken(gone) ? null : gone.data.topic;
      import_node_fs9.default.unlinkSync(file);
    });
    const refs = [...taskRows(root)].filter(([, r]) => (r.blocked_by ?? []).includes(id) || r.parent === id).map(([k]) => k);
    for (const otherId of refs) {
      const other = readEntry(root, "task", otherId);
      if (isBroken(other)) continue;
      const waits = (other.data.blocked_by ?? []).includes(id);
      if (!waits && other.data.parent !== id) continue;
      refreshLocks();
      mutateEntry(root, "task", other.id, (e) => {
        const before = snapshot(e.data);
        if (waits) {
          const rest = (e.data.blocked_by ?? []).filter((b) => b !== id);
          if (rest.length) e.data.blocked_by = rest;
          else delete e.data.blocked_by;
        }
        if (e.data.parent === id) delete e.data.parent;
        recordHistory(e.data, before, by, t);
        e.data.updated = t;
      });
    }
  });
  syncTopics(root, [topic], now);
}
function bulkUpdateTasks(root, ids, patch, by = "agent", now = /* @__PURE__ */ new Date()) {
  const bare = ids.map((i) => idOfKind(i, "task"));
  const touched = [];
  const done = withLock(tasksDir(root), () => {
    if (patch.status !== void 0 && !TASK_STATUSES.includes(patch.status)) rule(`Status must be ${TASK_STATUSES.join(", ")}`);
    noControl("The topic", patch.topic);
    const drop = new Set((patch.labelsRemove ?? []).map((l) => l.trim().toLowerCase()));
    const plans = bare.map((id) => {
      if (!entryExists(root, "task", id)) throw new Error(`No task with id ${id}`);
      const e = readEntry(root, "task", id);
      if (isBroken(e)) throw new RuleError(`Task ${id} cannot be read; fix it first`);
      let labels;
      if (patch.labelsAdd?.length || drop.size) {
        labels = normalizeLabels([...(e.data.labels ?? []).filter((l) => !drop.has(l.toLowerCase())), ...patch.labelsAdd ?? []]);
      }
      const input = {
        id,
        status: patch.status,
        priority: patch.priority,
        milestone: patch.milestone,
        due: patch.due,
        labels,
        by
      };
      return { input, patch: checkFields(root, id, fieldsOf(input)) };
    });
    const topicsBefore = new Set(listIds(root, "topic"));
    const topic = patch.topic === null ? null : patch.topic ? resolveTopic(root, patch.topic, now) : void 0;
    const staged = plans.map(({ input, patch: fields }) => {
      const id = input.id;
      const e = must(root, "task", id);
      const was = { status: e.data.status, topic: e.data.topic ?? null };
      changeTask(e, input, fields, topic, void 0, now);
      if (was.status !== e.data.status || was.topic !== (e.data.topic ?? null)) touched.push(was.topic, e.data.topic);
      return { entry: e, file: entryPath(root, "task", id), text: renderEntry("task", e.data, e.sections), original: readRaw(root, "task", id) };
    });
    const written = [];
    try {
      for (const s of staged) {
        refreshLocks();
        writeAtomic(s.file, s.text);
        written.push(s);
      }
    } catch (err) {
      for (const s of written.reverse()) {
        try {
          if (s.original !== null) writeAtomic(s.file, s.original);
        } catch {
        }
      }
      if (typeof topic === "string" && !topicsBefore.has(topic)) {
        try {
          import_node_fs9.default.unlinkSync(entryPath(root, "topic", topic));
        } catch {
        }
      }
      throw err;
    }
    return staged.map((s) => s.entry);
  });
  syncTopics(root, touched, now, done.filter((e) => e.data.status !== "done").map((e) => e.data.topic));
  return done;
}

// src/vault/vault.ts
function must2(root, kind, id) {
  const e = readEntry(root, kind, id);
  if (isBroken(e)) throw new Error(`Cannot read ${kind} ${id}: ${e.error}`);
  return e;
}
function canHostVault(root) {
  const r = canonicalPath(root);
  if (import_node_path10.default.dirname(r) === r) return false;
  if (samePath(r, import_node_os5.default.homedir())) return false;
  return !samePath(vaultDir(r), binkgoHome());
}
function vaultExists(root) {
  return import_node_fs10.default.existsSync(entryPath(root, "project", "project"));
}
function writeGitignore(root) {
  try {
    import_node_fs10.default.writeFileSync(import_node_path10.default.join(vaultDir(root), ".gitignore"), ["*.lock", "*.steal", "*.tmp", "!artifacts/files/**", ""].join("\n"), { flag: "wx" });
  } catch (e) {
    if (e.code !== "EEXIST") throw e;
  }
}
function initVault(root, input, now = /* @__PURE__ */ new Date(), opts = {}) {
  noControl("The name", input.name);
  noControl("The goal", input.goal, true);
  if (!canHostVault(root)) throw new Error(`Binkgo cannot create a vault in ${root}`);
  for (const k of KINDS) {
    if (k !== "project" && k !== "milestone" && k !== "map") import_node_fs10.default.mkdirSync(import_node_path10.default.join(vaultDir(root), DIRS[k]), { recursive: true });
  }
  if (!vaultExists(root)) {
    const t = localIso(now);
    writeEntry(
      root,
      "project",
      "project",
      { name: input.name, goal: input.goal ?? "", status: "active", focus: "", created: t, updated: t },
      { Overview: "" }
    );
  }
  writeGitignore(root);
  let project = readProject(root);
  if (project.data.goal === "" && input.goal) project = updateProject(root, { goal: input.goal }, now);
  registerProject(root, project.data.name, now, opts);
  return project;
}
function readProject(root) {
  return must2(root, "project", "project");
}
function updateProject(root, patch, now = /* @__PURE__ */ new Date()) {
  noControl("The name", patch.name);
  noControl("The goal", patch.goal, true);
  noControl("The focus", patch.focus);
  return mutateEntry(root, "project", "project", (e) => {
    if (patch.name !== void 0) e.data.name = patch.name;
    if (patch.goal !== void 0) e.data.goal = patch.goal;
    if (patch.focus !== void 0) e.data.focus = patch.focus;
    if (patch.status !== void 0) e.data.status = patch.status;
    e.data.updated = localIso(now);
  });
}
var MAX_COPY_BYTES = 20 * 1024 * 1024;

// src/dashboard/data.ts
var import_node_fs13 = __toESM(require("node:fs"), 1);
var import_node_path13 = __toESM(require("node:path"), 1);
var import_node_crypto8 = require("node:crypto");

// src/vault/map.ts
var import_node_fs11 = __toESM(require("node:fs"), 1);
var import_node_path11 = __toESM(require("node:path"), 1);
function stampOf(root, rel) {
  const full = import_node_path11.default.join(canonicalPath(root), rel === "." ? "" : rel);
  try {
    const st = import_node_fs11.default.statSync(full);
    if (!st.isDirectory()) return `f:${st.size}:${Math.floor(st.mtimeMs)}`;
    let newest = 0;
    const names = import_node_fs11.default.readdirSync(full).filter((n) => n !== VAULT_DIRNAME && n !== ".git" && n !== "node_modules");
    for (const n of names) {
      try {
        newest = Math.max(newest, Math.floor(import_node_fs11.default.statSync(import_node_path11.default.join(full, n)).mtimeMs));
      } catch {
      }
    }
    return `d:${names.length}:${newest}`;
  } catch {
    return null;
  }
}
function stateOf(root, rel, stamp) {
  const now = stampOf(root, rel);
  if (now === null) return "missing";
  if (!stamp) return "unknown";
  return now === stamp ? "fresh" : "changed";
}
function listMapNotes(root, max = 500) {
  return listGood(root, "map").slice(0, max).map((e) => ({
    id: e.id,
    path: e.data.path,
    summary: e.data.summary,
    details: e.sections.Details ?? "",
    state: stateOf(root, e.data.path, e.data.stamp),
    updated: e.data.updated
  })).sort((a, b) => a.path.localeCompare(b.path));
}

// src/dashboard/covers.ts
var import_node_fs12 = __toESM(require("node:fs"), 1);
var import_node_path12 = __toESM(require("node:path"), 1);
var import_node_crypto7 = require("node:crypto");

// src/dashboard/cover-types.ts
var COVER_SOURCES = ["glasshouse", "birds", "upload", "none"];
var MAX_COVER_BYTES = 4 * 1024 * 1024;

// src/dashboard/covers.ts
var CoverError = class extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
  status;
};
var revisionPattern = /^[a-f0-9]{64}$/;
var position = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 100;
function directory(id) {
  if (!/^[a-f0-9]{10}$/.test(id)) throw new CoverError(404, "Project not found.");
  return import_node_path12.default.join(binkgoHome(), "appearance", id);
}
function readStored(id) {
  const file = import_node_path12.default.join(directory(id), "cover.json");
  try {
    const cover = JSON.parse(import_node_fs12.default.readFileSync(file, "utf8"));
    if (!COVER_SOURCES.includes(cover.source) || !position(cover.x) || !position(cover.y)) return;
    if (cover.source === "upload" && (!revisionPattern.test(cover.revision ?? "") || !["image/jpeg", "image/png", "image/webp"].includes(cover.mime ?? ""))) return;
    return cover;
  } catch {
    return;
  }
}
function readCover(id) {
  const cover = readStored(id);
  return cover && { source: cover.source, x: cover.x, y: cover.y, ...cover.revision ? { revision: cover.revision } : {} };
}
function decodeImage(value) {
  if (typeof value !== "string" || value.length > Math.ceil(MAX_COVER_BYTES / 3) * 4 + 64) throw new CoverError(413, "The image is too large. Choose a smaller image.");
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/]+={0,2})$/.exec(value);
  if (!match) throw new CoverError(400, "Choose a JPEG, PNG or WebP image.");
  const bytes = Buffer.from(match[2], "base64");
  if (bytes.length > MAX_COVER_BYTES) throw new CoverError(413, "The image is too large. Choose a smaller image.");
  const mime = match[1];
  const valid = mime === "image/png" ? bytes.subarray(0, 8).equals(Buffer.from("89504e470d0a1a0a", "hex")) : mime === "image/jpeg" ? bytes.subarray(0, 3).equals(Buffer.from("ffd8ff", "hex")) && bytes.subarray(-2).equals(Buffer.from("ffd9", "hex")) : bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
  if (!valid || bytes.length < 20 || bytes.toString("base64") !== match[2]) throw new CoverError(400, "This image could not be read. Choose another image.");
  return { bytes, mime };
}
function saveCover(id, input) {
  if (!COVER_SOURCES.includes(input.source) || !position(input.x) || !position(input.y)) throw new CoverError(400, "Choose a cover and a position between 0 and 100.");
  if (Object.keys(input).some((key) => !["source", "x", "y", "image"].includes(key))) throw new CoverError(400, "Unknown cover setting.");
  if (input.source !== "upload" && input.image !== void 0) throw new CoverError(400, "An image can only be saved as an uploaded cover.");
  const image = input.image === void 0 ? void 0 : decodeImage(input.image);
  const dir = directory(id);
  const file = import_node_path12.default.join(dir, "cover.json");
  return withLock(file, () => {
    const previous = readStored(id);
    const next = { source: input.source, x: input.x, y: input.y };
    if (next.source === "upload") {
      if (image) {
        next.revision = (0, import_node_crypto7.createHash)("sha256").update(image.bytes).digest("hex");
        next.mime = image.mime;
        const imageFile = import_node_path12.default.join(dir, `${next.revision}.image`);
        if (!import_node_fs12.default.existsSync(imageFile)) writeAtomic(imageFile, image.bytes);
      } else {
        if (previous?.source !== "upload" || !import_node_fs12.default.existsSync(import_node_path12.default.join(dir, `${previous.revision}.image`))) throw new CoverError(400, "Upload an image first.");
        next.revision = previous.revision;
        next.mime = previous.mime;
      }
    }
    writeAtomic(file, JSON.stringify(next));
    if (previous?.revision && previous.revision !== next.revision) {
      try {
        import_node_fs12.default.unlinkSync(import_node_path12.default.join(dir, `${previous.revision}.image`));
      } catch {
      }
    }
    return readCover(id);
  });
}
function readCoverImage(id) {
  const cover = readStored(id);
  if (cover?.source !== "upload" || !cover.revision || !cover.mime) throw new CoverError(404, "Cover image not found.");
  const file = import_node_path12.default.join(directory(id), `${cover.revision}.image`);
  try {
    if (import_node_fs12.default.statSync(file).size > MAX_COVER_BYTES) throw new Error("oversize");
    return { bytes: import_node_fs12.default.readFileSync(file), mime: cover.mime, revision: cover.revision };
  } catch {
    throw new CoverError(404, "Cover image not found.");
  }
}

// src/dashboard/data.ts
function projectId(root) {
  return (0, import_node_crypto8.createHash)("sha1").update(canonicalPath(root).toLowerCase()).digest("hex").slice(0, 10);
}
function resolveProject(id) {
  return readRegistry().find((p) => projectId(p.path) === id)?.path ?? null;
}
var time = (s) => {
  const t = s ? Date.parse(s) : NaN;
  return Number.isNaN(t) ? 0 : t;
};
var newestFirst = (items, when) => [...items].sort((a, b) => time(when(b)) - time(when(a)) || (a.id < b.id ? 1 : a.id > b.id ? -1 : 0));
function countTasks(list) {
  const c = { total: list.length, todo: 0, doing: 0, blocked: 0, done: 0 };
  for (const t of list) c[t.data.status]++;
  return c;
}
function problemCount(root) {
  return problems(root).length;
}
function bulletItems(text2) {
  return text2.split(/\r?\n/).filter((l) => l.startsWith("- ")).map((l) => l.slice(2).trim()).filter(Boolean);
}
function firstNonEmptyLine(text2) {
  const line = (text2 ?? "").split(/\r?\n/).map((l) => l.trim()).find((l) => l !== "") ?? "";
  return line.replace(/^(?:#{1,6}|[-*+>])\s+/, "").trim();
}
function topicTitles(root) {
  return new Map(listGood(root, "topic").map((t) => [t.id, t.data.title]));
}
function taskViews(root) {
  const titles = topicTitles(root);
  return listGood(root, "task").map((t) => ({
    id: t.id,
    title: t.data.title,
    status: t.data.status,
    topic: t.data.topic,
    topicTitle: t.data.topic ? titles.get(t.data.topic) ?? null : null,
    acceptance: t.data.acceptance,
    notes: t.sections.Notes ?? "",
    rank: t.data.rank ?? null,
    created: t.data.created,
    updated: t.data.updated,
    priority: t.data.priority ?? null,
    due: t.data.due ?? null,
    start: t.data.start ?? null,
    estimate: t.data.estimate ?? null,
    labels: t.data.labels ?? [],
    parent: t.data.parent ?? null,
    blocked_by: t.data.blocked_by ?? [],
    milestone: effectiveMilestone(t.data),
    completed: t.data.completed ?? null,
    session: t.data.session ?? null,
    history: t.data.history ?? []
  })).sort((a, b) => time(a.created) - time(b.created) || (a.id < b.id ? -1 : 1));
}
function listProjects() {
  const cards = readRegistry().map((item) => {
    const id = projectId(item.path);
    const base = { id, path: item.path, cover: readCover(id) };
    if (!import_node_fs13.default.existsSync(item.path) || !vaultExists(item.path)) {
      return {
        ...base,
        name: item.name,
        missing: true,
        goal: "",
        focus: "",
        status: "",
        tasks: { total: 0, todo: 0, doing: 0, blocked: 0, done: 0 },
        lastActivity: null,
        problems: 0
      };
    }
    const project = readEntry(item.path, "project", "project");
    const p = isBroken(project) ? null : project.data;
    let last = p?.updated ?? null;
    for (const s of listGood(item.path, "session")) {
      for (const t of [s.data.started, s.data.ended]) if (t && time(t) > time(last)) last = t;
    }
    return {
      ...base,
      name: p?.name ?? item.name,
      missing: false,
      goal: p?.goal ?? "",
      focus: p?.focus ?? "",
      status: p?.status ?? "",
      tasks: countTasks([...taskRows(item.path).values()].filter((r) => !r.broken).map((r) => ({ data: { status: r.status } }))),
      lastActivity: last,
      problems: problemCount(item.path)
    };
  });
  const byActivity = (a, b) => time(b.lastActivity) - time(a.lastActivity);
  return [...cards.filter((c) => !c.missing).sort(byActivity), ...cards.filter((c) => c.missing)];
}
function overview(root) {
  const project = readEntry(root, "project", "project");
  const p = isBroken(project) ? null : project;
  const views = taskViews(root);
  const topics = listGood(root, "topic");
  const known = new Set(topics.map((t) => t.id));
  const unassigned = views.filter((t) => !t.topic || !known.has(t.topic));
  const lastSession = newestFirst(listGood(root, "session"), (s) => s.data.started).find(
    (s) => s.data.summary_written || s.sections.Summary.trim() !== ""
  );
  const byUpdated = (a, b) => time(b.updated) - time(a.updated);
  return {
    project: {
      name: p?.data.name ?? import_node_path13.default.basename(root),
      goal: p?.data.goal ?? "",
      focus: p?.data.focus ?? "",
      status: p?.data.status ?? "",
      overview: p?.sections.Overview ?? ""
    },
    tasks: countTasks(views.map((t) => ({ data: t }))),
    topics: topics.map((t) => {
      const mine = views.filter((v) => v.topic === t.id);
      return {
        id: t.id,
        title: t.data.title,
        goal: t.data.goal,
        status: t.data.status,
        total: mine.length,
        done: mine.filter((v) => v.status === "done").length
      };
    }),
    unassigned: { total: unassigned.length, done: unassigned.filter((v) => v.status === "done").length },
    lastSession: lastSession ? {
      id: lastSession.id,
      started: lastSession.data.started,
      summary: lastSession.sections.Summary,
      done: bulletItems(lastSession.sections.Done),
      next: bulletItems(lastSession.sections.Next)
    } : null,
    doing: views.filter((t) => t.status === "doing").sort(byUpdated),
    blocked: views.filter((t) => t.status === "blocked").sort(byUpdated),
    problems: problemCount(root),
    map: listMapNotes(root).map((n) => ({ id: n.id, path: n.path, summary: n.summary, state: n.state, updated: n.updated }))
  };
}
function timeline(root) {
  const decisions = listGood(root, "decision");
  const fixes = listGood(root, "fix");
  const artifactEntries = listGood(root, "artifact");
  const taskEntries = listGood(root, "task");
  const refs = (list, sessionId, status) => newestFirst(list.filter((e) => e.data.session === sessionId), (e) => e.data.created).map((e) => ({ id: e.id, title: e.data.title, status: status(e) }));
  return newestFirst(listGood(root, "session"), (s) => s.data.started).map((s) => {
    const u = s.data.usage;
    return {
      id: s.id,
      started: s.data.started,
      ended: s.data.ended,
      model: s.data.model,
      summary: s.sections.Summary,
      done: bulletItems(s.sections.Done),
      next: bulletItems(s.sections.Next),
      files: s.data.files_touched,
      // total = every token the session itself consumed; subagent tokens are reported separately.
      tokens: {
        total: u.input + u.cache_read + u.cache_write + u.output,
        output: u.output,
        contextPeak: u.context_peak,
        subagent: u.subagent_total
      },
      decisions: refs(decisions, s.id, (e) => e.data.status),
      fixes: refs(fixes, s.id, (e) => e.data.status),
      artifacts: refs(artifactEntries, s.id, () => null),
      tasks: refs(taskEntries, s.id, (e) => e.data.status)
    };
  });
}
function tasks(root) {
  const views = taskViews(root);
  const topics = listGood(root, "topic");
  const known = new Set(topics.map((t) => t.id));
  const groups = topics.map((t) => ({
    id: t.id,
    title: t.data.title,
    goal: t.data.goal,
    notes: t.sections.Notes ?? "",
    status: t.data.status,
    start: t.data.start ?? null,
    target: t.data.target ?? null,
    color: t.data.color ?? null,
    tasks: views.filter((v) => v.topic === t.id)
  }));
  const loose = views.filter((v) => !v.topic || !known.has(v.topic));
  if (loose.length) groups.push({ id: null, title: "", goal: "", notes: "", status: "active", start: null, target: null, color: null, tasks: loose });
  const milestones = listGood(root, "milestone").map((m) => {
    const mine = views.filter((v) => v.milestone === m.id);
    return {
      id: m.id,
      title: m.data.title,
      goal: m.data.goal,
      status: m.data.status,
      start: m.data.start ?? null,
      end: m.data.end ?? null,
      notes: m.sections.Notes ?? "",
      total: mine.length,
      done: mine.filter((v) => v.status === "done").length
    };
  }).sort((a, b) => (a.end ?? "9999") < (b.end ?? "9999") ? -1 : (a.end ?? "9999") > (b.end ?? "9999") ? 1 : a.title < b.title ? -1 : 1);
  return { topics: groups, milestones };
}
function supersededByMap(list) {
  const m = /* @__PURE__ */ new Map();
  for (const e of list) if (e.data.supersedes) m.set(e.data.supersedes, e.id);
  return m;
}
function knowledge(root) {
  const decisions = listGood(root, "decision");
  const fixes = listGood(root, "fix");
  const titles = topicTitles(root);
  const dBy = supersededByMap(decisions);
  const fBy = supersededByMap(fixes);
  return {
    decisions: newestFirst(decisions, (d) => d.data.created).map((d) => ({
      id: d.id,
      title: d.data.title,
      status: d.data.status,
      supersedes: d.data.supersedes,
      supersededBy: dBy.get(d.id) ?? null,
      topic: d.data.topic,
      topicTitle: d.data.topic ? titles.get(d.data.topic) ?? null : null,
      session: d.data.session ?? null,
      created: d.data.created,
      decision: d.sections.Decision,
      why: d.sections.Why,
      alternatives: d.sections.Alternatives
    })),
    fixes: newestFirst(fixes, (f) => f.data.created).map((f) => ({
      id: f.id,
      title: f.data.title,
      status: f.data.status,
      verified: f.data.verified,
      files: f.data.files,
      supersedes: f.data.supersedes,
      supersededBy: fBy.get(f.id) ?? null,
      session: f.data.session ?? null,
      created: f.data.created,
      symptom: f.sections.Symptom,
      cause: f.sections.Cause,
      fix: f.sections.Fix
    }))
  };
}
var MAX_PLAN_BYTES = 5 * 1024 * 1024;
function checkboxes(file) {
  let text2;
  try {
    if (import_node_fs13.default.statSync(file).size > MAX_PLAN_BYTES) return null;
    text2 = import_node_fs13.default.readFileSync(file, "utf8");
  } catch {
    return null;
  }
  const marks = [...text2.matchAll(/^[ \t]*- \[([ xX])\]/gm)];
  if (!marks.length) return null;
  return { done: marks.filter((m) => m[1] !== " ").length, total: marks.length };
}
function superpowersDocs(root, kind, vaultPaths) {
  const rel = `docs/superpowers/${kind}s`;
  let names;
  try {
    names = import_node_fs13.default.readdirSync(import_node_path13.default.join(root, rel), { withFileTypes: true }).filter((d) => d.isFile() && d.name.toLowerCase().endsWith(".md")).map((d) => d.name);
  } catch {
    return [];
  }
  return names.sort().flatMap((name) => {
    const relPath = `${rel}/${name}`;
    if (vaultPaths.has(relPath.toLowerCase())) return [];
    const file = import_node_path13.default.join(root, rel, name);
    try {
      const heading = /^# (.+?)\s*$/m.exec(import_node_fs13.default.readFileSync(file, "utf8"));
      return [{
        id: relPath,
        title: heading?.[1] ?? name.replace(/\.md$/i, ""),
        kind,
        path: relPath,
        exists: true,
        stored: false,
        created: localIso(import_node_fs13.default.statSync(file).mtime),
        description: "",
        task: null,
        source: "superpowers",
        checkboxes: kind === "plan" ? checkboxes(file) : null
      }];
    } catch {
      return [];
    }
  });
}
function insideRoot(root, p) {
  if (typeof p !== "string" || !p || p.includes("\0") || /^[\\/]{2}/.test(p)) return null;
  let rel = p;
  if (import_node_path13.default.isAbsolute(p) || /^[a-zA-Z]:/.test(p)) {
    const lexical = [root, canonicalPath(root)].map((r) => import_node_path13.default.relative(r, import_node_path13.default.resolve(p))).find((r) => r !== "" && r !== ".." && !r.startsWith(".." + import_node_path13.default.sep) && !import_node_path13.default.isAbsolute(r));
    if (!lexical) return null;
    rel = lexical;
  }
  const abs = resolveInside(root, rel);
  if (!abs) return null;
  return { abs, rel: import_node_path13.default.relative(canonicalPath(root), abs).split(import_node_path13.default.sep).join("/") };
}
function artifacts(root) {
  const taken = /* @__PURE__ */ new Set();
  const vault = listGood(root, "artifact").map((a) => {
    const inside = insideRoot(root, a.data.path);
    if (inside) taken.add(inside.rel.toLowerCase());
    const exists = inside !== null && import_node_fs13.default.existsSync(inside.abs);
    return {
      id: a.id,
      title: a.data.title,
      kind: a.data.kind,
      path: inside ? inside.rel : a.data.path,
      exists,
      stored: a.data.stored,
      created: a.data.created,
      description: a.sections.Description,
      task: a.data.task ?? null,
      source: "vault",
      checkboxes: inside && exists && a.data.kind === "plan" ? checkboxes(inside.abs) : null
    };
  });
  const docs = [...superpowersDocs(root, "spec", taken), ...superpowersDocs(root, "plan", taken)];
  return newestFirst([...vault, ...docs], (a) => a.created);
}
function usage(root) {
  const sessions = newestFirst(listGood(root, "session"), (s) => s.data.started);
  const byDay = /* @__PURE__ */ new Map();
  for (const s of sessions) {
    const date2 = s.data.started.slice(0, 10);
    const d = byDay.get(date2) ?? { date: date2, input: 0, cache_read: 0, cache_write: 0, output: 0, subagent: 0 };
    const u = s.data.usage;
    d.input += u.input;
    d.cache_read += u.cache_read;
    d.cache_write += u.cache_write;
    d.output += u.output;
    d.subagent += u.subagent_total;
    byDay.set(date2, d);
  }
  return {
    sessions: sessions.map((s) => ({
      id: s.id,
      started: s.data.started,
      ended: s.data.ended,
      model: s.data.model,
      summary: firstNonEmptyLine(s.sections.Summary),
      fullSummary: s.sections.Summary.trim(),
      usage: s.data.usage
    })),
    daily: [...byDay.values()].sort((a, b) => a.date < b.date ? -1 : 1)
  };
}
function problems(root) {
  const rows = taskRows(root);
  return KINDS.flatMap(
    (kind) => kind === "task" ? [...rows].flatMap(([id, r]) => r.broken ? [{ kind: "task", id, error: r.error ?? "unreadable" }] : []) : listEntries(root, kind).flatMap((e) => isBroken(e) ? [{ kind: e.kind, id: e.id, error: e.error }] : [])
  );
}

// src/dashboard/launcher.ts
var PRIORITY_ORDER = ["urgent", "high", "medium", "low"];
function probeDashboard(port, timeoutMs = 1e3) {
  return new Promise((resolve) => {
    const req = import_node_http.default.get({ host: "127.0.0.1", port, path: "/api/setup", timeout: timeoutMs }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (c) => {
        if (body.length < 8192) body += c;
      });
      res.on("end", () => {
        try {
          const j = JSON.parse(body);
          resolve(res.statusCode === 200 && "codexInstaller" in j && "pluginDirectory" in j);
        } catch {
          resolve(false);
        }
      });
    });
    req.on("timeout", () => req.destroy());
    req.on("error", () => resolve(false));
  });
}
async function waitForDashboard(port, totalMs = 5e3) {
  const end = Date.now() + totalMs;
  while (Date.now() < end) {
    if (await probeDashboard(port, 500)) return true;
    await new Promise((r) => setTimeout(r, 150));
  }
  return false;
}
function spawnDetachedServer(script, argv) {
  const args = argv.filter((a) => a !== "--detach" && a !== "--open");
  const child = (0, import_node_child_process3.spawn)(process.execPath, [script, ...args], { detached: true, stdio: "ignore", windowsHide: true });
  child.on("error", () => {
  });
  child.unref();
}
var DAY_MS = 864e5;
function licenceInfo(s) {
  return {
    state: s.state,
    ...s.email ? { email: s.email } : {},
    ...s.msLeft !== void 0 ? { daysLeft: Math.ceil(s.msLeft / DAY_MS) } : {}
  };
}
function currentLicence(o) {
  const status = licenseStatus(o.now ?? /* @__PURE__ */ new Date(), o.appVersion ?? package_default.version, { publicKey: o.publicKey });
  const gate = o.gate ?? !dashboardGateOffForTests();
  return { status, usable: !gate || isUsable(status) };
}
function licenceJson(o = {}) {
  const { status, usable } = currentLicence(o);
  return { ...licenceInfo(status), siteUrl: siteUrl(), usable };
}
async function signinStartJson(o = {}) {
  const s = await startSignin({ fetch: o.fetch, appVersion: o.appVersion ?? package_default.version });
  (o.openUrl ?? openBrowser)(s.verify_url);
  return s;
}
var signinPollJson = (pollToken, o = {}) => pollSignin(pollToken, { fetch: o.fetch, publicKey: o.publicKey, appVersion: o.appVersion ?? package_default.version });
var rankOf = (t) => {
  const i = PRIORITY_ORDER.indexOf(t.priority ?? "");
  return i === -1 ? PRIORITY_ORDER.length : i;
};
function briefJson(root, port = 4319, lic = {}) {
  const { status, usable } = currentLicence(lic);
  if (!usable) return { ok: false, reason: "licence", state: status.state, siteUrl: siteUrl() };
  const dir = findProjectRoot(import_node_path14.default.resolve(root));
  if (!vaultExists(dir)) return { ok: false, reason: "no-vault" };
  const ov = overview(dir);
  const t = tasks(dir);
  const today = dateStamp(lic.now ?? /* @__PURE__ */ new Date());
  const active = t.milestones.filter((m) => m.status === "active");
  const notPast = (m) => m.end && m.end < today ? 1 : 0;
  const milestone = [...active].sort((a, b) => notPast(a) - notPast(b) || (a.end ?? "9999").localeCompare(b.end ?? "9999") || (a.id < b.id ? -1 : 1))[0];
  const todo = t.topics.flatMap((g) => g.tasks).filter((x) => x.status === "todo").sort((a, b) => rankOf(a) - rankOf(b) || (a.rank ?? Infinity) - (b.rank ?? Infinity)).slice(0, 8);
  const k = knowledge(dir);
  const recent = (list) => list.filter((x) => x.status === "active").slice(0, 5).map((x) => ({ id: x.id, title: x.title }));
  return {
    ok: true,
    licence: licenceInfo(status),
    siteUrl: siteUrl(),
    name: ov.project.name,
    goal: ov.project.goal,
    focus: ov.project.focus,
    milestone: milestone ? { title: milestone.title, ends: milestone.end, done: milestone.done, total: milestone.total } : null,
    doing: ov.doing.slice(0, 8).map((x) => ({ id: x.id, title: x.title, priority: x.priority })),
    todo: todo.map((x) => ({ id: x.id, title: x.title, priority: x.priority, due: x.due })),
    recentFixes: recent(k.fixes),
    recentDecisions: recent(k.decisions),
    dashboardUrl: `http://127.0.0.1:${port}/#/p/${projectId(dir)}`
  };
}

// src/dashboard/server.ts
var import_node_crypto9 = require("node:crypto");
var import_node_fs17 = __toESM(require("node:fs"), 1);
var import_node_http2 = __toESM(require("node:http"), 1);
var import_node_path17 = __toESM(require("node:path"), 1);

// src/vault/live.ts
var import_node_fs14 = __toESM(require("node:fs"), 1);
var import_node_path15 = __toESM(require("node:path"), 1);
var CLAUDE_WORKING_MS = 10 * 60 * 1e3;
var CODEX_WORKING_MS = 5 * 60 * 1e3;
var CLAUDE_WAITING_MS = 30 * 60 * 1e3;
var CLOSED_VISIBLE_MS = 60 * 60 * 1e3;
var LIVE_MAX_AGE_MS = 24 * 60 * 60 * 1e3;
function liveDir() {
  return import_node_path15.default.join(binkgoHome(), "live");
}
function isRecord(v) {
  if (!v || typeof v !== "object") return false;
  const r = v;
  const task = r.task;
  return (r.agent === "claude" || r.agent === "codex") && typeof r.session_id === "string" && typeof r.root === "string" && typeof r.at === "string" && (r.state === "working" || r.state === "waiting" || r.state === "closed") && (task === null || typeof task === "object" && typeof task.id === "string" && typeof task.title === "string") && (r.transcript_path === void 0 || typeof r.transcript_path === "string") && (r.pid === void 0 || typeof r.pid === "number");
}
function readFile(file) {
  try {
    const parsed = JSON.parse(import_node_fs14.default.readFileSync(file, "utf8"));
    return isRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
function allRecords() {
  let names;
  try {
    names = import_node_fs14.default.readdirSync(liveDir()).filter((n) => n.endsWith(".json"));
  } catch {
    return [];
  }
  const out = [];
  for (const name of names) {
    const rec = readFile(import_node_path15.default.join(liveDir(), name));
    if (rec) out.push(rec);
  }
  return out;
}
function deriveStatus(r, now, transcriptMtime, pidAlive3) {
  if (r.state === "closed") return "closed";
  const at = Date.parse(r.at);
  const age = now.getTime() - at;
  if (r.agent === "codex") {
    if (pidAlive3 === false) return "closed";
    return r.state === "working" && age <= CODEX_WORKING_MS ? "working" : "waiting";
  }
  const seen = Math.max(at, transcriptMtime ?? 0);
  const quiet = now.getTime() - seen;
  if (r.state === "working") return quiet <= CLAUDE_WORKING_MS ? "working" : "idle";
  return quiet <= CLAUDE_WAITING_MS ? "waiting" : "idle";
}
function pidAlive2(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e.code === "EPERM";
  }
}
function liveStatuses(now) {
  const out = [];
  for (const record of allRecords()) {
    let mtime;
    if (record.agent === "claude" && record.transcript_path) {
      try {
        mtime = import_node_fs14.default.statSync(record.transcript_path).mtimeMs;
      } catch {
      }
    }
    const alive = record.agent === "codex" && record.pid !== void 0 ? pidAlive2(record.pid) : void 0;
    const status = deriveStatus(record, now, mtime, alive);
    if (status === "closed" && now.getTime() - Date.parse(record.at) > CLOSED_VISIBLE_MS) continue;
    out.push({ record, status });
  }
  return out;
}
function pruneLive(now) {
  let names;
  try {
    names = import_node_fs14.default.readdirSync(liveDir());
  } catch {
    return;
  }
  const cutoff = now.getTime() - LIVE_MAX_AGE_MS;
  for (const name of names) {
    const file = import_node_path15.default.join(liveDir(), name);
    try {
      if (import_node_fs14.default.statSync(file).mtimeMs < cutoff) import_node_fs14.default.rmSync(file, { force: true });
    } catch {
    }
  }
}

// src/dashboard/actions.ts
var import_node_fs15 = __toESM(require("node:fs"), 1);
var import_node_path16 = __toESM(require("node:path"), 1);
var ActionError = class extends Error {
  constructor(status, message, extra = {}) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
  status;
  extra;
};
var MARKERS = [".git", "CLAUDE.md", ".claude", "AGENTS.md", ".codex", "package.json"];
var MAX_PATH = 4096;
var MAX_NAME = 80;
var MAX_GOAL = 500;
function clean(input) {
  const s = input.trim();
  return s.length >= 2 && s.startsWith('"') && s.endsWith('"') ? s.slice(1, -1).trim() : s;
}
var chars2 = (s) => Array.from(s).length;
var DRIVE_DEVICE = /^[\\/]{2}[?.][\\/][A-Za-z]:/;
var TWO_SEPARATORS2 = /^[\\/]{2}/;
var WINDOWS_DRIVE = /^([A-Za-z]:|[\\/]{2}[?.][\\/][A-Za-z]:)/;
var isNetworkPath = (p) => TWO_SEPARATORS2.test(p) && !DRIVE_DEVICE.test(p);
function vaultState(root) {
  if (vaultExists(root)) {
    try {
      readProject(root);
      return "ok";
    } catch {
      return "damaged";
    }
  }
  try {
    import_node_fs15.default.lstatSync(import_node_path16.default.join(root, VAULT_DIRNAME));
    return "damaged";
  } catch {
    return "none";
  }
}
function inspectFolder(input) {
  const raw = clean(input);
  const blank = {
    path: raw,
    exists: false,
    isDirectory: false,
    name: "",
    hasVault: false,
    markers: [],
    canCreate: false,
    reason: "missing"
  };
  if (isNetworkPath(raw)) return { ...blank, reason: "network-path" };
  if (!raw || raw.length > MAX_PATH || raw.includes("\0") || !import_node_path16.default.isAbsolute(raw)) return blank;
  if (process.platform === "win32" && !WINDOWS_DRIVE.test(raw)) return blank;
  const root = canonicalPath(raw);
  if (isNetworkPath(root)) return { ...blank, reason: "network-path" };
  const name = import_node_path16.default.basename(root) || root;
  let stat = null;
  try {
    stat = import_node_fs15.default.statSync(root);
  } catch {
  }
  if (!stat) return { ...blank, path: root, name };
  const done = (reason, extra = {}) => ({
    path: root,
    exists: true,
    isDirectory: stat.isDirectory(),
    name,
    hasVault: false,
    markers: [],
    canCreate: reason === null,
    reason,
    ...extra
  });
  if (!stat.isDirectory()) return done("not-directory");
  const markers = MARKERS.filter((m) => import_node_fs15.default.existsSync(import_node_path16.default.join(root, m)));
  if (!canHostVault(root)) return done("home-or-root", { markers });
  const insideVault = root.split(import_node_path16.default.sep).some((seg) => seg.toLowerCase() === VAULT_DIRNAME);
  if (insideVault) return done("inside-vault", { markers });
  const vault = vaultState(root);
  if (vault === "damaged") return done("damaged-vault", { markers });
  return done(null, { markers, hasVault: vault === "ok" });
}
function createProject(input) {
  if (typeof input.path !== "string") throw new ActionError(400, "path is required", { reason: "missing" });
  const folder = inspectFolder(input.path);
  if (!folder.canCreate || folder.reason) {
    throw new ActionError(400, `folder cannot be used (${folder.reason ?? "unknown"})`, { reason: folder.reason ?? "missing" });
  }
  const root = folder.path;
  if (folder.hasVault) {
    registerProject(root, readProject(root).data.name, /* @__PURE__ */ new Date());
    return { id: projectId(root), created: false };
  }
  if (typeof input.name !== "string") throw new ActionError(400, "name is required", { reason: "name" });
  if (input.goal !== void 0 && typeof input.goal !== "string") throw new ActionError(400, "goal must be text", { reason: "goal" });
  const name = input.name.trim();
  const goal = (input.goal ?? "").trim();
  if (chars2(name) < 1) throw new ActionError(400, "name is required", { reason: "name" });
  if (chars2(name) > MAX_NAME) throw new ActionError(400, `name is longer than ${MAX_NAME} characters`, { reason: "name-too-long" });
  if (chars2(goal) > MAX_GOAL) throw new ActionError(400, `goal is longer than ${MAX_GOAL} characters`, { reason: "goal" });
  initVault(root, { name, goal });
  return { id: projectId(root), created: true };
}

// src/dashboard/license.ts
function createLicenseApi(opts = {}) {
  const gateOn = opts.gate ?? !dashboardGateOffForTests();
  const version = opts.appVersion ?? package_default.version;
  const open = opts.openUrl ?? openBrowser;
  const net = { fetch: opts.fetch, publicKey: opts.publicKey, appVersion: version };
  let pending = null;
  const status = () => ({
    ...licenseStatus((opts.now ?? (() => /* @__PURE__ */ new Date()))(), version, { publicKey: opts.publicKey }),
    siteUrl: siteUrl(),
    gate: gateOn
  });
  return {
    status,
    /** Why project data is refused, or null when it may be served. */
    blocked: () => {
      if (!gateOn) return null;
      const s = licenseStatus((opts.now ?? (() => /* @__PURE__ */ new Date()))(), version, { publicKey: opts.publicKey });
      return isUsable(s) ? null : s.state;
    },
    async signin() {
      const s = await startSignin(net);
      pending = { pollToken: s.poll_token, code: s.code, verifyUrl: s.verify_url };
      open(s.verify_url);
      return { code: s.code, verify_url: s.verify_url };
    },
    async poll() {
      if (!pending) return { status: "idle" };
      const r = await pollSignin(pending.pollToken, net);
      if (r.status !== "pending" && r.status !== "error") pending = null;
      return r;
    },
    async refresh() {
      return refreshLicense(net);
    },
    signout() {
      pending = null;
      clearLicense();
    }
  };
}

// src/dashboard/writes.ts
var import_node_fs16 = __toESM(require("node:fs"), 1);
var ID3 = /^[a-z0-9][a-z0-9-]*$/;
var MAX_TITLE = 200;
var MAX_TOPIC = 200;
var MAX_ACCEPTANCE_ITEM = 500;
var MAX_ACCEPTANCE_ITEMS = 50;
var MAX_NOTE = 4e3;
var MAX_ORDER = 5e3;
var MAX_LABEL = 40;
var MAX_LABELS2 = 20;
var MAX_BLOCKERS2 = 50;
var MAX_BULK = 200;
var MAX_NAME2 = 80;
var MAX_GOAL2 = 500;
var MAX_FOCUS = 500;
var text = (what, min, max, trim, multiline = false) => external_exports.string({ invalid_type_error: `${what} must be text`, required_error: `${what} is required` }).transform((s) => trim ? s.trim() : s).pipe(
  external_exports.string().min(min, min === 1 ? `${what} cannot be empty` : `${what} is too short`).max(max, `${what} is longer than ${max} characters`)
).superRefine((v, ctx) => {
  try {
    noControl(what, v, multiline);
  } catch (err) {
    ctx.addIssue({ code: "custom", message: err.message });
  }
});
var date = (what) => external_exports.string({ invalid_type_error: `${what} must be a date written YYYY-MM-DD` }).refine(isValidDate, `${what} must be a date written YYYY-MM-DD`);
var idOf = (what) => external_exports.string({ invalid_type_error: `${what} must be an id` }).max(200, `${what} is not a valid id`).regex(ID3, `${what} is not a valid id`);
var oneOf = (what, values) => external_exports.enum(values, { errorMap: () => ({ message: `${what} must be ${values.join(", ")}` }) });
var taskFields = {
  title: text("title", 1, MAX_TITLE, true),
  status: oneOf("status", TASK_STATUSES),
  acceptance: external_exports.array(text("each acceptance item", 1, MAX_ACCEPTANCE_ITEM, true), { invalid_type_error: "acceptance must be a list of text" }).max(MAX_ACCEPTANCE_ITEMS, `acceptance has more than ${MAX_ACCEPTANCE_ITEMS} items`),
  note: text("note", 0, MAX_NOTE, false, true),
  topic: text("topic", 1, MAX_TOPIC, true).nullable(),
  priority: oneOf("priority", PRIORITIES).nullable(),
  due: date("due").nullable(),
  start: date("start").nullable(),
  estimate: external_exports.number({ invalid_type_error: "estimate must be a number" }).finite("estimate must be a number").min(0, "estimate cannot be negative").nullable(),
  labels: external_exports.array(text("each label", 1, MAX_LABEL, true), { invalid_type_error: "labels must be a list of text" }).max(MAX_LABELS2, `labels has more than ${MAX_LABELS2} entries`).nullable(),
  parent: idOf("parent").nullable(),
  blocked_by: external_exports.array(idOf("each blocked_by entry"), { invalid_type_error: "blocked_by must be a list of task ids" }).max(MAX_BLOCKERS2, `blocked_by has more than ${MAX_BLOCKERS2} entries`).nullable(),
  milestone: idOf("milestone").nullable()
};
var createTaskSchema = external_exports.object({
  title: taskFields.title,
  topic: taskFields.topic.optional(),
  status: taskFields.status.optional(),
  acceptance: taskFields.acceptance.optional(),
  note: taskFields.note.optional(),
  priority: taskFields.priority.optional(),
  due: taskFields.due.optional(),
  start: taskFields.start.optional(),
  estimate: taskFields.estimate.optional(),
  labels: taskFields.labels.optional(),
  parent: taskFields.parent.optional(),
  blocked_by: taskFields.blocked_by.optional(),
  milestone: taskFields.milestone.optional()
}).strict("unknown field in the request");
var orderField = external_exports.array(idOf("each order entry"), { invalid_type_error: "order must be a list of task ids" }).min(1, "order cannot be empty").max(MAX_ORDER, `order has more than ${MAX_ORDER} ids`).refine((ids) => new Set(ids).size === ids.length, "order lists a task twice");
var updateTaskSchema = createTaskSchema.partial().extend({ order: orderField.optional() }).strict("unknown field in the request").refine((v) => Object.values(v).some((x) => x !== void 0), { message: "give at least one field to change" });
var bulkSchema = external_exports.object({
  ids: external_exports.array(idOf("each id"), { invalid_type_error: "ids must be a list of task ids" }).min(1, "ids cannot be empty").max(MAX_BULK, `ids has more than ${MAX_BULK} entries`).refine((ids) => new Set(ids).size === ids.length, "ids lists a task twice"),
  patch: external_exports.object({
    status: taskFields.status.optional(),
    topic: taskFields.topic.optional(),
    priority: taskFields.priority.optional(),
    milestone: taskFields.milestone.optional(),
    due: taskFields.due.optional(),
    labelsAdd: external_exports.array(text("each label", 1, MAX_LABEL, true)).max(MAX_LABELS2, `labelsAdd has more than ${MAX_LABELS2} entries`).optional(),
    labelsRemove: external_exports.array(text("each label", 1, MAX_LABEL, true)).max(MAX_LABELS2, `labelsRemove has more than ${MAX_LABELS2} entries`).optional()
  }).strict("unknown field in the patch").refine((v) => Object.values(v).some((x) => x !== void 0), { message: "give at least one field to change" })
}).strict("unknown field in the request");
var color = external_exports.number({ invalid_type_error: "color must be a whole number from 0 to 7" }).int("color must be a whole number from 0 to 7").min(0, "color must be a whole number from 0 to 7").max(7, "color must be a whole number from 0 to 7");
var createTopicSchema = external_exports.object({
  title: text("title", 1, MAX_TITLE, true),
  goal: text("goal", 0, MAX_GOAL2, true, true).optional(),
  start: date("start").nullable().optional(),
  target: date("target").nullable().optional(),
  color: color.nullable().optional()
}).strict("unknown field in the request");
var updateTopicSchema = createTopicSchema.partial().extend({ status: oneOf("status", ["active", "done"]).optional() }).strict("unknown field in the request").refine((v) => Object.values(v).some((x) => x !== void 0), { message: "give at least one field to change" });
var mergeTopicSchema = external_exports.object({ into: idOf("into") }).strict("unknown field in the request");
var createMilestoneSchema = external_exports.object({
  title: text("title", 1, MAX_TITLE, true),
  goal: text("goal", 0, MAX_GOAL2, true, true).optional(),
  start: date("start").nullable().optional(),
  end: date("end").nullable().optional(),
  status: oneOf("status", MILESTONE_STATUSES).optional()
}).strict("unknown field in the request");
var updateMilestoneSchema = createMilestoneSchema.partial().strict("unknown field in the request").refine((v) => Object.values(v).some((x) => x !== void 0), { message: "give at least one field to change" });
var updateProjectSchema = external_exports.object({
  name: text("name", 1, MAX_NAME2, true).optional(),
  goal: text("goal", 0, MAX_GOAL2, true, true).optional(),
  focus: text("focus", 0, MAX_FOCUS, true).optional(),
  status: oneOf("status", ["active", "paused", "done"]).optional()
}).strict("unknown field in the request").refine((v) => Object.values(v).some((x) => x !== void 0), { message: "give at least one field to change" });
function firstProblem(error) {
  const issue = error.issues[0];
  if (issue.code === "unrecognized_keys") return `Unknown field: ${issue.keys.join(", ")}`;
  const key = [...issue.path].reverse().find((p) => typeof p === "string");
  const where = key && !issue.message.toLowerCase().startsWith(key.toLowerCase()) ? `${key}: ` : "";
  const sentence = `${where}${issue.message}`;
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
function parseBody(schema, body) {
  const parsed = schema.safeParse(body);
  if (!parsed.success) throw new ActionError(400, firstProblem(parsed.error));
  return parsed.data;
}
function guarded(fn) {
  try {
    return fn();
  } catch (err) {
    if (err instanceof RuleError) throw new ActionError(400, err.message);
    if (err instanceof Error && /^No (task|topic|milestone) with id/.test(err.message)) throw new ActionError(404, "Not found.");
    throw err;
  }
}
function usableVault(root) {
  if (!import_node_fs16.default.existsSync(root) || !vaultExists(root)) throw new ActionError(409, "This project has no readable Binkgo vault.");
  try {
    readProject(root);
  } catch {
    throw new ActionError(409, "The project vault is damaged; fix it before changing it.");
  }
}
function validId(id, label) {
  if (!ID3.test(id) || id.length > 200) throw new ActionError(404, `${label} not found.`);
}
function existing(root, kind, id, label) {
  if (!ID3.test(id) || id.length > 200 || !entryExists(root, kind, id)) throw new ActionError(404, `${label} not found.`);
  return readEntry(root, kind, id);
}
function taskResponse(root, e) {
  let topicTitle = null;
  if (e.data.topic) {
    const topic = readEntry(root, "topic", e.data.topic);
    topicTitle = isBroken(topic) ? null : topic.data.title;
  }
  const d = e.data;
  return {
    id: e.id,
    title: d.title,
    status: d.status,
    topic: d.topic,
    topicTitle,
    acceptance: d.acceptance,
    notes: e.sections.Notes ?? "",
    rank: d.rank ?? null,
    priority: d.priority ?? null,
    due: d.due ?? null,
    start: d.start ?? null,
    estimate: d.estimate ?? null,
    labels: d.labels ?? [],
    parent: d.parent ?? null,
    blocked_by: d.blocked_by ?? [],
    milestone: effectiveMilestone(d),
    completed: d.completed ?? null,
    history: d.history ?? [],
    created: d.created,
    updated: d.updated
  };
}
function topicResponse(e) {
  const d = e.data;
  return {
    id: e.id,
    title: d.title,
    goal: d.goal,
    status: d.status,
    start: d.start ?? null,
    target: d.target ?? null,
    color: d.color ?? null,
    notes: e.sections.Notes ?? "",
    created: d.created,
    updated: d.updated
  };
}
function milestoneResponse(e) {
  const d = e.data;
  return {
    id: e.id,
    title: d.title,
    goal: d.goal,
    status: d.status,
    start: d.start ?? null,
    end: d.end ?? null,
    notes: e.sections.Notes ?? "",
    created: d.created,
    updated: d.updated
  };
}
function projectUpdate(root, body) {
  const input = parseBody(updateProjectSchema, body);
  usableVault(root);
  const p = guarded(() => updateProject(root, input));
  return {
    id: projectId(root),
    name: p.data.name,
    goal: p.data.goal,
    focus: p.data.focus,
    status: p.data.status,
    overview: p.sections.Overview ?? "",
    created: p.data.created,
    updated: p.data.updated
  };
}
function taskCreate(root, body) {
  const input = parseBody(createTaskSchema, body);
  usableVault(root);
  const task = guarded(
    () => upsertTask(root, { ...input, note: input.note || void 0, rank: topRank(root, input.status ?? "todo"), by: "person" })
  );
  return taskResponse(root, task);
}
function checkOrder(root, taskId, status, order) {
  if (!order.includes(taskId)) throw new ActionError(400, "order must include the task being moved");
  const column = new Map([...taskRows(root)].map(([id, r]) => [id, r.status]));
  for (const id of order) {
    if (id === taskId) continue;
    const have = column.get(id);
    if (have === void 0) throw new ActionError(400, `order names a task that does not exist: ${id}`);
    if (have !== status) throw new ActionError(400, `order names a task that is not in the ${status} column: ${id}`);
  }
}
function taskUpdate(root, taskId, body) {
  validId(taskId, "Task");
  const input = parseBody(updateTaskSchema, body);
  usableVault(root);
  const found = existing(root, "task", taskId, "Task");
  if (isBroken(found)) throw new ActionError(409, "This task file cannot be read; fix it before changing it.");
  if (input.order) checkOrder(root, taskId, input.status ?? found.data.status, input.order);
  const task = guarded(() => upsertTask(root, { ...input, id: taskId, note: input.note || void 0, by: "person" }));
  return taskResponse(root, task);
}
function taskDelete(root, taskId) {
  usableVault(root);
  existing(root, "task", taskId, "Task");
  guarded(() => deleteTask(root, taskId, "person"));
}
function taskBulk(root, body) {
  const input = parseBody(bulkSchema, body);
  usableVault(root);
  for (const id of input.ids) {
    const found = existing(root, "task", id, "Task");
    if (isBroken(found)) throw new ActionError(409, `The task file ${id} cannot be read; fix it before changing it.`);
  }
  const tasks2 = guarded(() => bulkUpdateTasks(root, input.ids, input.patch, "person"));
  return tasks2.map((t) => taskResponse(root, t));
}
function topicCreate(root, body) {
  const input = parseBody(createTopicSchema, body);
  usableVault(root);
  if (entryExists(root, "topic", idForTitle(root, "topic", input.title))) throw new ActionError(409, "A topic with this name already exists.");
  return topicResponse(guarded(() => upsertTopic(root, input)));
}
function topicUpdate(root, id, body) {
  validId(id, "Topic");
  const input = parseBody(updateTopicSchema, body);
  usableVault(root);
  if (isBroken(existing(root, "topic", id, "Topic"))) throw new ActionError(409, "This topic file cannot be read; fix it before changing it.");
  return topicResponse(guarded(() => updateTopic(root, id, input)));
}
function topicDelete(root, id) {
  usableVault(root);
  existing(root, "topic", id, "Topic");
  guarded(() => deleteTopic(root, id, "person"));
}
function topicMerge(root, id, body) {
  validId(id, "Topic");
  const input = parseBody(mergeTopicSchema, body);
  usableVault(root);
  existing(root, "topic", id, "Topic");
  if (input.into === id) throw new ActionError(400, "A topic cannot be merged into itself");
  if (isBroken(existing(root, "topic", input.into, "Target topic"))) throw new ActionError(409, "The topic to merge into cannot be read; fix it first.");
  return topicResponse(guarded(() => mergeTopic(root, id, input.into, "person")));
}
function milestoneCreate(root, body) {
  const input = parseBody(createMilestoneSchema, body);
  usableVault(root);
  if (entryExists(root, "milestone", idForTitle(root, "milestone", input.title))) throw new ActionError(409, "A milestone with this name already exists.");
  return milestoneResponse(guarded(() => upsertMilestone(root, input)));
}
function milestoneUpdate(root, id, body) {
  validId(id, "Milestone");
  const input = parseBody(updateMilestoneSchema, body);
  usableVault(root);
  if (isBroken(existing(root, "milestone", id, "Milestone"))) throw new ActionError(409, "This milestone file cannot be read; fix it before changing it.");
  return milestoneResponse(guarded(() => upsertMilestone(root, { ...input, id })));
}
function milestoneDelete(root, id) {
  usableVault(root);
  existing(root, "milestone", id, "Milestone");
  guarded(() => deleteMilestone(root, id, "person"));
}

// src/dashboard/picker.ts
var import_node_child_process4 = require("node:child_process");
var PickerUnavailable = class extends Error {
  constructor() {
    super("no folder picker on this platform");
  }
};
var PICK_TIMEOUT_MS = 5 * 60 * 1e3;
var WINDOWS_PICKER_TYPE = `
using System;
using System.Runtime.InteropServices;
public static class BinkgoFolderPicker {
  [ComImport, Guid("DC1C5A9C-E88A-4dde-A5A1-60F82A20AEF7")] private class FileOpenDialog {}
  [ComImport, Guid("43826D1E-E718-42EE-BC55-A1E261C37BFE"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
  private interface IShellItem {
    void BindToHandler(IntPtr pbc, ref Guid bhid, ref Guid riid, out IntPtr ppv);
    void GetParent(out IShellItem ppsi);
    void GetDisplayName(uint sigdnName, [MarshalAs(UnmanagedType.LPWStr)] out string ppszName);
  }
  [ComImport, Guid("42F85136-DB7E-439C-85F1-E4075D135FC8"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
  private interface IFileDialog {
    [PreserveSig] int Show(IntPtr parent);
    void SetFileTypes(uint cFileTypes, IntPtr rgFilterSpec);
    void SetFileTypeIndex(uint iFileType);
    void GetFileTypeIndex(out uint piFileType);
    void Advise(IntPtr pfde, out uint pdwCookie);
    void Unadvise(uint dwCookie);
    void SetOptions(uint fos);
    void GetOptions(out uint pfos);
    void SetDefaultFolder(IShellItem psi);
    void SetFolder(IShellItem psi);
    void GetFolder(out IShellItem ppsi);
    void GetCurrentSelection(out IShellItem ppsi);
    void SetFileName([MarshalAs(UnmanagedType.LPWStr)] string pszName);
    void GetFileName([MarshalAs(UnmanagedType.LPWStr)] out string pszName);
    void SetTitle([MarshalAs(UnmanagedType.LPWStr)] string pszTitle);
    void SetOkButtonLabel([MarshalAs(UnmanagedType.LPWStr)] string pszText);
    void SetFileNameLabel([MarshalAs(UnmanagedType.LPWStr)] string pszLabel);
    void GetResult(out IShellItem ppsi);
  }
  [DllImport("user32.dll")] private static extern IntPtr GetForegroundWindow();
  public static string Pick(string title, string button, IntPtr fallbackOwner) {
    IFileDialog dialog = (IFileDialog)new FileOpenDialog();
    uint options; dialog.GetOptions(out options);
    dialog.SetOptions(options | 0x20u | 0x40u | 0x800u); // pick folders, file system only, path must exist
    dialog.SetTitle(title);
    dialog.SetOkButtonLabel(button);
    IntPtr owner = GetForegroundWindow(); // the browser the person just clicked in: the window opens over it
    if (owner == IntPtr.Zero) owner = fallbackOwner;
    if (dialog.Show(owner) != 0) return null; // cancelled
    IShellItem item; dialog.GetResult(out item);
    string path; item.GetDisplayName(0x80058000u, out path); // file system path
    return path;
  }
}`;
var WINDOWS_SCRIPT = [
  "Add-Type -AssemblyName System.Windows.Forms",
  "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8",
  // A topmost owner window keeps the dialog in front when no foreground window is found.
  "$owner = New-Object System.Windows.Forms.Form",
  "$owner.TopMost = $true",
  "$title = 'Choose the project folder (the folder you open with Claude Code)'",
  "$modern = $false",
  "try {",
  `  Add-Type -TypeDefinition @'${WINDOWS_PICKER_TYPE}
'@`,
  "  $chosen = [BinkgoFolderPicker]::Pick($title, 'Choose folder', $owner.Handle)",
  "  $modern = $true",
  "} catch { }",
  "if ($modern) {",
  "  if ($chosen) { [Console]::Out.Write($chosen) }",
  "} else {",
  // Machines where the modern window cannot be opened (locked-down PowerShell) still get the older folder box.
  "  $dialog = New-Object System.Windows.Forms.FolderBrowserDialog",
  "  $dialog.Description = $title",
  "  $dialog.ShowNewFolderButton = $true",
  "  if ($dialog.ShowDialog($owner) -eq [System.Windows.Forms.DialogResult]::OK) { [Console]::Out.Write($dialog.SelectedPath) }",
  "}"
].join("\n");
var MAC_SCRIPT = 'POSIX path of (choose folder with prompt "Choose the project folder")';
function pickerCommand(platform) {
  if (platform === "win32") {
    return {
      file: "powershell.exe",
      args: ["-NoProfile", "-NonInteractive", "-STA", "-EncodedCommand", Buffer.from(WINDOWS_SCRIPT, "utf16le").toString("base64")]
    };
  }
  if (platform === "darwin") return { file: "osascript", args: ["-e", MAC_SCRIPT] };
  return null;
}
var openPicker = null;
function stopOsPicker() {
  openPicker?.kill();
  openPicker = null;
}
var osFolderPicker = () => {
  const cmd = pickerCommand(process.platform);
  if (!cmd) return Promise.reject(new PickerUnavailable());
  return new Promise((resolve, reject) => {
    const child = (0, import_node_child_process4.execFile)(
      cmd.file,
      cmd.args,
      { encoding: "buffer", timeout: PICK_TIMEOUT_MS, windowsHide: false, maxBuffer: 1024 * 1024 },
      (err, stdout) => {
        if (openPicker === child) openPicker = null;
        if (err) {
          if (process.platform === "darwin" && err.code === 1) return resolve(null);
          return reject(err);
        }
        const chosen = stdout.toString("utf8").replace(/^\uFEFF/, "").trim();
        resolve(chosen || null);
      }
    );
    openPicker = child;
  });
};

// src/dashboard/server.ts
var MAX_FILE = 5 * 1024 * 1024;
var MAX_BODY = 16 * 1024;
var MAX_TASK_BODY = 64 * 1024;
var MAX_MOVE_BODY = 512 * 1024;
var SEG = "([^/?#\\\\]+)";
var projectPattern = (rest) => new RegExp(`^/api/projects/${SEG}${rest}$`);
var work = (op, sub) => (m) => ({ kind: "work", op, id: m[1], ...sub ? { sub: m[2] } : {} });
var POST_PATTERNS = [
  [/^\/api\/folder\/inspect$/, () => ({ kind: "inspect" })],
  [/^\/api\/folder\/pick$/, () => ({ kind: "pick" })],
  [/^\/api\/projects$/, () => ({ kind: "create" })],
  [/^\/api\/connect\/(claude|codex)$/, (m) => ({ kind: "connect", agent: m[1] })],
  [/^\/api\/license\/(signin|refresh|signout)$/, (m) => ({ kind: "license", op: m[1] })],
  [projectPattern("/remove"), (m) => ({ kind: "remove", id: m[1] })],
  [projectPattern("/cover"), (m) => ({ kind: "cover", id: m[1] })],
  [projectPattern(""), work("projectUpdate", false)],
  [projectPattern("/tasks"), work("taskCreate", false)],
  [projectPattern("/tasks/bulk"), work("taskBulk", false)],
  // before /tasks/:taskId: a task cannot be named "bulk"
  [projectPattern(`/tasks/${SEG}`), work("taskUpdate", true)],
  [projectPattern(`/tasks/${SEG}/delete`), work("taskDelete", true)],
  [projectPattern("/topics"), work("topicCreate", false)],
  [projectPattern(`/topics/${SEG}`), work("topicUpdate", true)],
  [projectPattern(`/topics/${SEG}/delete`), work("topicDelete", true)],
  [projectPattern(`/topics/${SEG}/merge`), work("topicMerge", true)],
  [projectPattern("/milestones"), work("milestoneCreate", false)],
  [projectPattern(`/milestones/${SEG}`), work("milestoneUpdate", true)],
  [projectPattern(`/milestones/${SEG}/delete`), work("milestoneDelete", true)]
];
var bodyLimit = (r) => r.kind === "cover" ? Math.ceil(MAX_COVER_BYTES / 3) * 4 + 1024 : r.kind !== "work" ? MAX_BODY : r.op === "taskUpdate" ? MAX_MOVE_BODY : r.op.startsWith("task") ? MAX_TASK_BODY : MAX_BODY;
function matchPost(target) {
  for (const [pattern, make] of POST_PATTERNS) {
    const m = pattern.exec(target);
    if (m) return make(m);
  }
  return null;
}
var LOOPBACK_HOSTS = /* @__PURE__ */ new Set(["127.0.0.1", "localhost", "::1"]);
var LOOPBACK_ADDRESS = /^(::1|(::ffff:)?127\.\d+\.\d+\.\d+)$/;
var KEY_COOKIE = "binkgo_key";
var OWNER_ONLY = /* @__PURE__ */ new Set(["connect", "license", "pick", "create", "remove", "inspect"]);
var GATED = /^\/api\/(projects|folder)(\/|$)/;
var DEBOUNCE_MS = 300;
var HEARTBEAT_MS = 25e3;
var REGISTRY_POLL_MS = 1e4;
var IGNORED_EVENT = /\.(lock|steal|tmp)$/;
var VIEWS = {
  overview,
  timeline,
  tasks,
  knowledge,
  artifacts,
  usage,
  problems
};
var FILE_TYPES = {
  ".md": "text/plain; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "text/plain; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp"
};
var FILE_CSP = "sandbox; default-src 'none'; style-src 'unsafe-inline'; img-src data:; font-src data:";
function pageCsp(filesBase) {
  return `sandbox; default-src 'none'; style-src 'unsafe-inline' ${filesBase}; img-src ${filesBase} data:; font-src ${filesBase} data:; media-src ${filesBase}`;
}
var APP_HEADERS = {
  "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer"
};
var STATIC_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json"
};
var HttpError = class extends Error {
  constructor(status, message, extra = {}) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
  status;
  extra;
};
function sendJson(res, status, body) {
  const text2 = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(text2),
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  res.end(text2);
}
function decode(s) {
  try {
    const out = decodeURIComponent(s);
    if (out.includes("\0")) throw new Error("nul");
    return out;
  } catch {
    throw new HttpError(400, "bad request encoding");
  }
}
function param(raw) {
  const value = decode(raw);
  if (value === "" || value === "." || value === ".." || /[\\/]/.test(value)) throw new HttpError(404, "not found");
  return value;
}
function projectRoot(id) {
  const root = resolveProject(id);
  if (!root || !import_node_fs17.default.existsSync(root) || !vaultExists(root)) throw new HttpError(404, "project not found");
  return root;
}
function readBody(req, res, limit) {
  return new Promise((resolve, reject) => {
    const tooBig = () => {
      res.setHeader("Connection", "close");
      reject(new HttpError(413, "request body too large"));
    };
    if (Number(req.headers["content-length"] ?? 0) > limit) return tooBig();
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > limit) {
        chunks.length = 0;
        req.removeAllListeners("data");
        req.resume();
        tooBig();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}
function parseObject(raw) {
  let value;
  try {
    value = JSON.parse(raw.length === 0 ? "{}" : raw.toString("utf8"));
  } catch {
    throw new HttpError(400, "malformed JSON");
  }
  if (typeof value !== "object" || value === null || Array.isArray(value)) throw new HttpError(400, "expected a JSON object");
  return value;
}
function sameToken(given, expected) {
  const digest = (v) => (0, import_node_crypto9.createHash)("sha256").update(v).digest();
  return (0, import_node_crypto9.timingSafeEqual)(digest(given), digest(expected));
}
function serveProjectFile(res, root, rel, csp = FILE_CSP) {
  if (!rel) throw new HttpError(400, "path is required");
  const target = resolveInside(root, rel);
  if (!target) throw new HttpError(403, "outside the project");
  const base = canonicalPath(root);
  const hasGit = (p) => import_node_path17.default.relative(base, p).split(import_node_path17.default.sep).some((seg) => seg.toLowerCase() === ".git");
  if (hasGit(import_node_path17.default.resolve(base, rel)) || hasGit(target)) throw new HttpError(403, "forbidden");
  let st;
  try {
    st = import_node_fs17.default.statSync(target);
  } catch {
    throw new HttpError(404, "file not found");
  }
  if (!st.isFile()) throw new HttpError(404, "file not found");
  if (st.size > MAX_FILE) throw new HttpError(413, "file too large");
  const body = import_node_fs17.default.readFileSync(target);
  res.writeHead(200, {
    "Content-Type": FILE_TYPES[import_node_path17.default.extname(target).toLowerCase()] ?? "application/octet-stream",
    "Content-Length": body.length,
    "Content-Security-Policy": csp,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store"
  });
  res.end(body);
}
function webAppBuilt(webDir) {
  try {
    return import_node_fs17.default.statSync(import_node_path17.default.join(webDir, "index.html")).isFile();
  } catch {
    return false;
  }
}
function staticTarget(webDir, pathname) {
  const base = import_node_path17.default.resolve(webDir);
  const target = import_node_path17.default.resolve(base, pathname.replace(/^[/\\]+/, ""));
  const rel = import_node_path17.default.relative(base, target);
  if (rel === "" || rel === ".." || rel.startsWith(".." + import_node_path17.default.sep) || import_node_path17.default.isAbsolute(rel)) return null;
  return target;
}
function serveStatic(res, webDir, pathname) {
  const pick2 = (candidate) => {
    const full = staticTarget(webDir, candidate);
    if (!full) return null;
    try {
      return import_node_fs17.default.statSync(full).isFile() ? full : null;
    } catch {
      return null;
    }
  };
  const file = pick2(pathname) ?? pick2("index.html");
  if (!file) throw new HttpError(404, "not found");
  const body = import_node_fs17.default.readFileSync(file);
  res.writeHead(200, {
    "Content-Type": STATIC_TYPES[import_node_path17.default.extname(file).toLowerCase()] ?? "application/octet-stream",
    "Content-Length": body.length,
    "X-Content-Type-Options": "nosniff",
    ...APP_HEADERS
  });
  res.end(body);
}
async function startDashboard(opts) {
  const pickFolder = opts.pickFolder ?? osFolderPicker;
  const lan = opts.host !== void 0 && !LOOPBACK_HOSTS.has(opts.host);
  if (lan && !opts.accessKey) throw new Error("LAN mode needs an access key (--access-key)");
  const licenseApi = createLicenseApi(opts.license);
  const token = (0, import_node_crypto9.randomBytes)(32).toString("hex");
  let picking = false;
  const clients = /* @__PURE__ */ new Set();
  const watchers = /* @__PURE__ */ new Map();
  const timers = /* @__PURE__ */ new Map();
  let allowedHosts = [];
  let allowedOrigins = [];
  let closing = false;
  let knownIds = null;
  const broadcast = (id) => {
    for (const c of clients) c.write(`data: ${JSON.stringify({ project: id })}

`);
  };
  const changed = (id) => {
    if (closing || timers.has(id)) return;
    timers.set(id, setTimeout(() => {
      timers.delete(id);
      if (!closing) broadcast(id);
    }, DEBOUNCE_MS));
  };
  let liveTimer = null;
  let liveWatcher = null;
  const liveChanged = () => {
    if (closing || liveTimer) return;
    liveTimer = setTimeout(() => {
      liveTimer = null;
      if (!closing) for (const c of clients) c.write(`data: ${JSON.stringify({ live: true })}

`);
    }, DEBOUNCE_MS);
  };
  const watchLive = () => {
    if (closing || liveWatcher) return;
    try {
      import_node_fs17.default.mkdirSync(liveDir(), { recursive: true });
      const w = import_node_fs17.default.watch(liveDir(), (_event, name) => {
        if (name && IGNORED_EVENT.test(name.toString())) return;
        liveChanged();
      });
      w.on("error", () => {
        w.close();
        if (liveWatcher === w) liveWatcher = null;
      });
      liveWatcher = w;
    } catch {
    }
  };
  const syncWatchers = () => {
    if (closing) return;
    const wanted = /* @__PURE__ */ new Map();
    const ids = /* @__PURE__ */ new Set();
    for (const item of readRegistry()) {
      try {
        ids.add(projectId(item.path));
        const dir = vaultDir(item.path);
        if (import_node_fs17.default.existsSync(dir)) wanted.set(dir, projectId(item.path));
      } catch {
      }
    }
    if (knownIds) {
      for (const id of /* @__PURE__ */ new Set([...ids, ...knownIds])) if (ids.has(id) !== knownIds.has(id)) changed(id);
    }
    knownIds = ids;
    watchLive();
    for (const [dir, w] of watchers) {
      if (!wanted.has(dir)) {
        w.close();
        watchers.delete(dir);
      }
    }
    for (const [dir, id] of wanted) {
      if (watchers.has(dir)) continue;
      try {
        const w = import_node_fs17.default.watch(dir, { recursive: true }, (_event, name) => {
          if (name && IGNORED_EVENT.test(name.toString())) return;
          changed(id);
        });
        w.on("error", () => {
          w.close();
          if (watchers.get(dir) === w) watchers.delete(dir);
        });
        watchers.set(dir, w);
      } catch {
      }
    }
  };
  const checkWrite = (req) => {
    const type = (req.headers["content-type"] ?? "").split(";")[0].trim().toLowerCase();
    if (type !== "application/json") throw new HttpError(403, "forbidden: content type");
    const given = req.headers["x-binkgo-token"];
    if (typeof given !== "string" || !sameToken(given, token)) throw new HttpError(403, "forbidden: token");
    const origin = req.headers.origin;
    if (origin !== void 0 && !(allowedOrigins.includes(origin) || lan && origin === `http://${req.headers.host}`)) {
      throw new HttpError(403, "forbidden: origin");
    }
    const site = req.headers["sec-fetch-site"];
    if (site !== void 0 && site !== "same-origin") throw new HttpError(403, "forbidden: fetch site");
  };
  const post = async (req, res, match) => {
    checkWrite(req);
    if (lan && OWNER_ONLY.has(match.kind) && !LOOPBACK_ADDRESS.test(req.socket.remoteAddress ?? "")) {
      throw new HttpError(403, "forbidden: this computer only");
    }
    const body = parseObject(await readBody(req, res, bodyLimit(match)));
    if (match.kind === "connect") {
      const result = match.agent === "claude" ? connectClaude(opts.webDir, opts.runProgram) : connectCodex(opts.webDir, opts.runProgram);
      return sendJson(res, 200, { ...result, status: connectStatus(opts.webDir, opts.runProgram) });
    }
    if (match.kind === "license") {
      if (match.op === "signout") {
        licenseApi.signout();
        return sendJson(res, 200, licenseApi.status());
      }
      if (match.op === "refresh") return sendJson(res, 200, { result: await licenseApi.refresh(), license: licenseApi.status() });
      try {
        return sendJson(res, 200, await licenseApi.signin());
      } catch (err) {
        throw new HttpError(502, err instanceof Error ? err.message : "sign-in failed");
      }
    }
    if (match.kind === "cover") {
      const id = param(match.id);
      projectRoot(id);
      const cover = saveCover(id, body);
      changed(id);
      return sendJson(res, 200, { cover });
    }
    if (match.kind === "remove") {
      const projectPath = resolveProject(param(match.id));
      if (!projectPath) throw new HttpError(404, "project not found");
      unregisterProject(projectPath);
      syncWatchers();
      return sendJson(res, 200, { id: projectId(projectPath) });
    }
    if (match.kind === "inspect") {
      if (typeof body.path !== "string") throw new HttpError(400, "path is required");
      return sendJson(res, 200, inspectFolder(body.path));
    }
    if (match.kind === "pick") {
      if (picking) throw new HttpError(409, "a folder picker is already open");
      picking = true;
      let chosen;
      try {
        chosen = await pickFolder();
      } catch (err) {
        if (err instanceof PickerUnavailable) throw new HttpError(501, "no folder picker on this platform");
        console.error("dashboard: the folder picker failed:", err instanceof Error ? err.stack ?? err.message : err);
        throw new HttpError(500, "the folder picker failed");
      } finally {
        picking = false;
      }
      return sendJson(res, 200, { path: chosen });
    }
    if (match.kind === "work") {
      const projectPath = resolveProject(param(match.id));
      if (!projectPath) throw new HttpError(404, "project not found");
      const sub = () => param(match.sub ?? "");
      try {
        switch (match.op) {
          case "projectUpdate":
            return sendJson(res, 200, { project: projectUpdate(projectPath, body) });
          case "taskCreate":
            return sendJson(res, 201, { task: taskCreate(projectPath, body) });
          case "taskBulk":
            return sendJson(res, 200, { tasks: taskBulk(projectPath, body) });
          case "taskUpdate":
            return sendJson(res, 200, { task: taskUpdate(projectPath, sub(), body) });
          case "taskDelete":
            taskDelete(projectPath, sub());
            return sendJson(res, 200, { ok: true });
          case "topicCreate":
            return sendJson(res, 201, { topic: topicCreate(projectPath, body) });
          case "topicUpdate":
            return sendJson(res, 200, { topic: topicUpdate(projectPath, sub(), body) });
          case "topicDelete":
            topicDelete(projectPath, sub());
            return sendJson(res, 200, { ok: true });
          case "topicMerge":
            return sendJson(res, 200, { topic: topicMerge(projectPath, sub(), body) });
          case "milestoneCreate":
            return sendJson(res, 201, { milestone: milestoneCreate(projectPath, body) });
          case "milestoneUpdate":
            return sendJson(res, 200, { milestone: milestoneUpdate(projectPath, sub(), body) });
          case "milestoneDelete":
            milestoneDelete(projectPath, sub());
            return sendJson(res, 200, { ok: true });
        }
      } catch (err) {
        if (err instanceof ActionError) throw new HttpError(err.status, err.message, err.extra);
        throw err;
      }
    }
    if (match.kind !== "create") throw new HttpError(404, "not found");
    try {
      const made = createProject({ path: body.path, name: body.name, goal: body.goal });
      syncWatchers();
      return sendJson(res, made.created ? 201 : 200, { id: made.id });
    } catch (err) {
      if (err instanceof ActionError) throw new HttpError(err.status, err.message, err.extra);
      throw err;
    }
  };
  const keyAccepted = (req, res, target) => {
    const key = opts.accessKey ?? "";
    const cookie = new RegExp(`(?:^|;\\s*)${KEY_COOKIE}=([^;]*)`).exec(req.headers.cookie ?? "")?.[1];
    if (cookie !== void 0 && sameToken(decodeURIComponent(cookie), key)) return true;
    let url = null;
    try {
      url = new URL(target, "http://localhost");
    } catch {
    }
    const given = url?.searchParams.get("key");
    if (url && given != null && sameToken(given, key) && req.method === "GET") {
      url.searchParams.delete("key");
      res.writeHead(302, {
        "Set-Cookie": `${KEY_COOKIE}=${encodeURIComponent(key)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`,
        Location: url.pathname + url.search,
        "Cache-Control": "no-store"
      });
      res.end();
      return false;
    }
    sendJson(res, 401, { error: "access key required" });
    return false;
  };
  const route = (req, res) => {
    if (!lan && !allowedHosts.includes(req.headers.host ?? "")) throw new HttpError(403, "forbidden host");
    const target = req.url ?? "";
    if (lan && !LOOPBACK_ADDRESS.test(req.socket.remoteAddress ?? "") && !keyAccepted(req, res, target)) return;
    if (GATED.test(target.split("?")[0])) {
      const reason = licenseApi.blocked();
      if (reason) {
        res.setHeader("Connection", "close");
        throw new HttpError(402, "licence required", { reason });
      }
    }
    const writable = matchPost(target);
    if (req.method === "POST" && writable) return post(req, res, writable);
    if (req.method !== "GET") {
      res.setHeader("Allow", writable ? "GET, POST" : "GET");
      throw new HttpError(405, "method not allowed");
    }
    if (!/^\/(?!\/)/.test(target)) throw new HttpError(400, "bad request target");
    let url;
    try {
      url = new URL(target, "http://localhost");
    } catch {
      throw new HttpError(400, "bad request target");
    }
    const pathname = url.pathname;
    if (pathname === "/api/session") {
      const site = req.headers["sec-fetch-site"];
      if (site !== void 0 && site !== "same-origin" && site !== "none") throw new HttpError(403, "forbidden");
      return sendJson(res, 200, { token });
    }
    if (pathname === "/api/events") {
      res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-store", Connection: "keep-alive" });
      res.write(": connected\n\n");
      clients.add(res);
      const beat = setInterval(() => res.write(": ping\n\n"), HEARTBEAT_MS);
      beat.unref();
      res.on("close", () => {
        clearInterval(beat);
        clients.delete(res);
      });
      return;
    }
    if (pathname === "/api/live") {
      const now = /* @__PURE__ */ new Date();
      try {
        pruneLive(now);
      } catch {
      }
      return sendJson(res, 200, liveStatuses(now).map(({ record, status }) => ({
        agent: record.agent,
        projectId: projectId(record.root),
        status,
        task: record.task,
        since: record.at
      })));
    }
    if (pathname === "/api/connect") return sendJson(res, 200, connectStatus(opts.webDir, opts.runProgram));
    if (pathname === "/api/license") return sendJson(res, 200, licenseApi.status());
    if (pathname === "/api/license/signin/poll") {
      return licenseApi.poll().then((r) => sendJson(res, 200, { ...r, license: licenseApi.status() }));
    }
    if (pathname === "/api/setup") return sendJson(res, 200, setupInfo(opts.webDir));
    if (pathname === "/api/projects") return sendJson(res, 200, listProjects());
    const coverImage = /^\/api\/projects\/([^/]+)\/cover\/image$/.exec(pathname);
    if (coverImage) {
      const id = param(coverImage[1]);
      projectRoot(id);
      const image = readCoverImage(id);
      res.writeHead(200, {
        "Content-Type": image.mime,
        "Content-Length": image.bytes.length,
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; sandbox",
        "Cache-Control": "private, no-cache",
        ETag: `"${image.revision}"`
      });
      return void res.end(image.bytes);
    }
    const page = /^\/api\/projects\/([^/]+)\/files\/(.+)$/.exec(pathname);
    if (page) {
      const pageId = decode(page[1]);
      const root = projectRoot(pageId);
      const filesBase = `http://${req.headers.host}/api/projects/${encodeURIComponent(pageId)}/files/`;
      return serveProjectFile(res, root, decode(page[2]), pageCsp(filesBase));
    }
    const m = /^\/api\/projects\/([^/]+)\/([^/]+)$/.exec(pathname);
    if (m) {
      const id = decode(m[1]);
      const view = decode(m[2]);
      if (view === "file") return serveProjectFile(res, projectRoot(id), url.searchParams.get("path"));
      const fn = Object.hasOwn(VIEWS, view) ? VIEWS[view] : void 0;
      if (!fn) throw new HttpError(404, "unknown view");
      return sendJson(res, 200, fn(projectRoot(id)));
    }
    if (pathname.startsWith("/api/")) throw new HttpError(404, "not found");
    serveStatic(res, opts.webDir, decode(pathname));
  };
  const fail = (req, res, err) => {
    const known = err instanceof HttpError || err instanceof CoverError || err instanceof LockTimeout;
    if (!known) console.error(`dashboard: ${req.method} ${(req.url ?? "").split("?")[0]} failed:`, err instanceof Error ? err.stack ?? err.message : err);
    if (res.headersSent) {
      res.end();
      return;
    }
    if (err instanceof HttpError) return sendJson(res, err.status, { error: err.message, ...err.extra });
    if (err instanceof CoverError) return sendJson(res, err.status, { error: err.message });
    if (err instanceof LockTimeout) return sendJson(res, 503, { error: LOCK_BUSY });
    sendJson(res, 500, { error: "internal error" });
  };
  const server = import_node_http2.default.createServer((req, res) => {
    try {
      const done = route(req, res);
      if (done) done.catch((err) => fail(req, res, err));
    } catch (err) {
      fail(req, res, err);
    }
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(opts.port ?? 0, opts.host ?? "127.0.0.1", () => {
      server.off("error", reject);
      resolve();
    });
  });
  const { port, address } = server.address();
  allowedHosts = [`127.0.0.1:${port}`, `localhost:${port}`];
  allowedOrigins = allowedHosts.map((h) => `http://${h}`);
  syncWatchers();
  const poll = setInterval(syncWatchers, opts.registryPollMs ?? REGISTRY_POLL_MS);
  poll.unref();
  let closed = null;
  const close = () => {
    closed ??= new Promise((resolve) => {
      closing = true;
      stopOsPicker();
      clearInterval(poll);
      for (const t of timers.values()) clearTimeout(t);
      timers.clear();
      for (const w of watchers.values()) w.close();
      watchers.clear();
      if (liveTimer) clearTimeout(liveTimer);
      liveWatcher?.close();
      liveWatcher = null;
      for (const c of clients) c.end();
      clients.clear();
      server.close(() => resolve());
      server.closeAllConnections();
    });
    return closed;
  };
  return { port, address, close };
}

// src/dashboard/main.ts
function parsePort(argv) {
  const i = argv.indexOf("--port");
  if (i === -1) return 4319;
  const n = Number(argv[i + 1]);
  if (!Number.isInteger(n) || n < 0 || n > 65535) {
    console.error(`Invalid --port value: ${argv[i + 1] ?? "(missing)"}`);
    process.exit(1);
  }
  return n;
}
function parsePortOrDefault(argv) {
  const n = Number(parseFlag(argv, "--port"));
  return Number.isInteger(n) && n > 0 && n <= 65535 ? n : 4319;
}
function parseFlag(argv, name) {
  const i = argv.indexOf(name);
  return i === -1 ? void 0 : argv[i + 1];
}
async function main() {
  const argv = process.argv.slice(2);
  const ac = argv.indexOf("--auto-connect");
  if (ac !== -1) {
    const done = autoConnect(import_node_path18.default.join(__dirname, "web"), argv[ac + 1] ?? "", argv[ac + 2] ?? "", void 0, (l) => console.error(l));
    if (done.length) console.log(`Connected: ${done.join(", ")}`);
    process.exit(0);
  }
  const bj = argv.indexOf("--brief-json");
  if (bj !== -1) {
    console.log(JSON.stringify(briefJson(argv[bj + 1] ?? process.cwd(), parsePortOrDefault(argv))));
    process.exit(0);
  }
  const printJson = async (make) => {
    try {
      console.log(JSON.stringify(await make()));
      process.exit(0);
    } catch (err) {
      console.log(JSON.stringify({ error: err.message }));
      process.exit(1);
    }
  };
  if (argv.includes("--licence-json")) await printJson(() => licenceJson());
  if (argv.includes("--signin-start")) await printJson(() => signinStartJson());
  const sp = argv.indexOf("--signin-poll");
  if (sp !== -1) await printJson(() => signinPollJson(argv[sp + 1] ?? ""));
  const port = parsePort(argv);
  const webDir = import_node_path18.default.join(__dirname, "web");
  if (!webAppBuilt(webDir)) {
    console.error("web app not built: run npm run build");
    process.exit(1);
  }
  const host = parseFlag(argv, "--host");
  const accessKey = parseFlag(argv, "--access-key") ?? process.env.BINKGO_ACCESS_KEY;
  if (argv.includes("--host") && !host) {
    console.error("Invalid --host value: (missing)");
    process.exit(1);
  }
  const open = argv.includes("--open");
  const alreadyRunning = () => {
    const url2 = `http://127.0.0.1:${port}/`;
    console.log(`Binkgo dashboard: ${url2} (already running)`);
    if (open) openBrowser(url2);
    process.exit(0);
  };
  if (argv.includes("--detach") && port !== 0) {
    if (await probeDashboard(port)) alreadyRunning();
    spawnDetachedServer(process.argv[1] ?? __filename, argv);
    if (!await waitForDashboard(port)) {
      console.error(`The dashboard did not start on port ${port}. Try --port <n>.`);
      process.exit(1);
    }
    const url2 = `http://127.0.0.1:${port}/`;
    console.log(`Binkgo dashboard: ${url2}`);
    if (open) openBrowser(url2);
    process.exit(0);
  }
  let server;
  try {
    server = await startDashboard({ port, webDir, host, accessKey });
  } catch (err) {
    if (err.code === "EADDRINUSE") {
      if (await probeDashboard(port)) alreadyRunning();
      console.error(`Port ${port} is already in use. Is the dashboard already running? Try --port <n>.`);
    } else {
      console.error(`Could not start the dashboard: ${err.message}`);
    }
    process.exit(1);
  }
  const url = `http://127.0.0.1:${server.port}/`;
  console.log(`Binkgo dashboard: ${url}`);
  if (host) console.log(`LAN mode on ${host}: other computers open http://<this computer>:${server.port}/?key=<access key> once.`);
  if (open) openBrowser(url);
  const stop = () => {
    void server.close().then(() => process.exit(0));
  };
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);
}
void main();
/*! Bundled license information:

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

strip-bom-string/index.js:
  (*!
   * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
