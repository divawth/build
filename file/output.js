
        (function(modules) {
            function require(id) {
                const [fn, mapping] = modules[id];

                function localRequire(name) {
                    return require(mapping[name]);
                }

                const module = { exports : {} };

                fn(localRequire, module, module.exports);

                return module.exports;
            }

            require(0);
        })({0: [
            function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mian = require("./mian.js");

exports.default = "Hello " + _mian.mian + "!"; },
            {"./mian.js":1},
        ],1: [
            function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = exports.name = 'World'; },
            {},
        ],})
    