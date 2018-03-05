/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    var out_of_memory = /* tuple */[
      "Out_of_memory",
      0
    ];
    
    var sys_error = /* tuple */[
      "Sys_error",
      -1
    ];
    
    var failure = /* tuple */[
      "Failure",
      -2
    ];
    
    var invalid_argument = /* tuple */[
      "Invalid_argument",
      -3
    ];
    
    var end_of_file = /* tuple */[
      "End_of_file",
      -4
    ];
    
    var division_by_zero = /* tuple */[
      "Division_by_zero",
      -5
    ];
    
    var not_found = /* tuple */[
      "Not_found",
      -6
    ];
    
    var match_failure = /* tuple */[
      "Match_failure",
      -7
    ];
    
    var stack_overflow = /* tuple */[
      "Stack_overflow",
      -8
    ];
    
    var sys_blocked_io = /* tuple */[
      "Sys_blocked_io",
      -9
    ];
    
    var assert_failure = /* tuple */[
      "Assert_failure",
      -10
    ];
    
    var undefined_recursive_module = /* tuple */[
      "Undefined_recursive_module",
      -11
    ];
    
    out_of_memory.tag = 248;
    
    sys_error.tag = 248;
    
    failure.tag = 248;
    
    invalid_argument.tag = 248;
    
    end_of_file.tag = 248;
    
    division_by_zero.tag = 248;
    
    not_found.tag = 248;
    
    match_failure.tag = 248;
    
    stack_overflow.tag = 248;
    
    sys_blocked_io.tag = 248;
    
    assert_failure.tag = 248;
    
    undefined_recursive_module.tag = 248;
    
    exports.out_of_memory = out_of_memory;
    exports.sys_error = sys_error;
    exports.failure = failure;
    exports.invalid_argument = invalid_argument;
    exports.end_of_file = end_of_file;
    exports.division_by_zero = division_by_zero;
    exports.not_found = not_found;
    exports.match_failure = match_failure;
    exports.stack_overflow = stack_overflow;
    exports.sys_blocked_io = sys_blocked_io;
    exports.assert_failure = assert_failure;
    exports.undefined_recursive_module = undefined_recursive_module;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/*  Not a pure module */


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_array){
    'use strict';
    function app(_f, _args) {
      while(true) {
        var args = _args;
        var f = _f;
        var arity = f.length;
        var arity$1 = arity ? arity : 1;
        var len = args.length;
        var d = arity$1 - len | 0;
        if (d) {
          if (d < 0) {
            _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
            _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
            continue ;
            
          } else {
            return (function(f,args){
            return function (x) {
              return app(f, args.concat(/* array */[x]));
            }
            }(f,args));
          }
        } else {
          return f.apply(null, args);
        }
      };
    }
    
    function curry_1(o, a0, arity) {
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[a0]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              return o(a0);
          case 2 : 
              return (function (param) {
                  return o(a0, param);
                });
          case 3 : 
              return (function (param, param$1) {
                  return o(a0, param, param$1);
                });
          case 4 : 
              return (function (param, param$1, param$2) {
                  return o(a0, param, param$1, param$2);
                });
          case 5 : 
              return (function (param, param$1, param$2, param$3) {
                  return o(a0, param, param$1, param$2, param$3);
                });
          case 6 : 
              return (function (param, param$1, param$2, param$3, param$4) {
                  return o(a0, param, param$1, param$2, param$3, param$4);
                });
          case 7 : 
              return (function (param, param$1, param$2, param$3, param$4, param$5) {
                  return o(a0, param, param$1, param$2, param$3, param$4, param$5);
                });
          
        }
      }
    }
    
    function _1(o, a0) {
      var arity = o.length;
      if (arity === 1) {
        return o(a0);
      } else {
        return curry_1(o, a0, arity);
      }
    }
    
    function __1(o) {
      var arity = o.length;
      if (arity === 1) {
        return o;
      } else {
        return (function (a0) {
            return _1(o, a0);
          });
      }
    }
    
    function curry_2(o, a0, a1, arity) {
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              return app(o(a0), /* array */[a1]);
          case 2 : 
              return o(a0, a1);
          case 3 : 
              return (function (param) {
                  return o(a0, a1, param);
                });
          case 4 : 
              return (function (param, param$1) {
                  return o(a0, a1, param, param$1);
                });
          case 5 : 
              return (function (param, param$1, param$2) {
                  return o(a0, a1, param, param$1, param$2);
                });
          case 6 : 
              return (function (param, param$1, param$2, param$3) {
                  return o(a0, a1, param, param$1, param$2, param$3);
                });
          case 7 : 
              return (function (param, param$1, param$2, param$3, param$4) {
                  return o(a0, a1, param, param$1, param$2, param$3, param$4);
                });
          
        }
      }
    }
    
    function _2(o, a0, a1) {
      var arity = o.length;
      if (arity === 2) {
        return o(a0, a1);
      } else {
        return curry_2(o, a0, a1, arity);
      }
    }
    
    function __2(o) {
      var arity = o.length;
      if (arity === 2) {
        return o;
      } else {
        return (function (a0, a1) {
            return _2(o, a0, a1);
          });
      }
    }
    
    function curry_3(o, a0, a1, a2, arity) {
      var exit = 0;
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1,
                    a2
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return app(o(a0, a1), /* array */[a2]);
          case 3 : 
              return o(a0, a1, a2);
          case 4 : 
              return (function (param) {
                  return o(a0, a1, a2, param);
                });
          case 5 : 
              return (function (param, param$1) {
                  return o(a0, a1, a2, param, param$1);
                });
          case 6 : 
              return (function (param, param$1, param$2) {
                  return o(a0, a1, a2, param, param$1, param$2);
                });
          case 7 : 
              return (function (param, param$1, param$2, param$3) {
                  return o(a0, a1, a2, param, param$1, param$2, param$3);
                });
          
        }
      }
      if (exit === 1) {
        return app(o(a0), /* array */[
                    a1,
                    a2
                  ]);
      }
      
    }
    
    function _3(o, a0, a1, a2) {
      var arity = o.length;
      if (arity === 3) {
        return o(a0, a1, a2);
      } else {
        return curry_3(o, a0, a1, a2, arity);
      }
    }
    
    function __3(o) {
      var arity = o.length;
      if (arity === 3) {
        return o;
      } else {
        return (function (a0, a1, a2) {
            return _3(o, a0, a1, a2);
          });
      }
    }
    
    function curry_4(o, a0, a1, a2, a3, arity) {
      var exit = 0;
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return app(o(a0, a1), /* array */[
                          a2,
                          a3
                        ]);
          case 3 : 
              return app(o(a0, a1, a2), /* array */[a3]);
          case 4 : 
              return o(a0, a1, a2, a3);
          case 5 : 
              return (function (param) {
                  return o(a0, a1, a2, a3, param);
                });
          case 6 : 
              return (function (param, param$1) {
                  return o(a0, a1, a2, a3, param, param$1);
                });
          case 7 : 
              return (function (param, param$1, param$2) {
                  return o(a0, a1, a2, a3, param, param$1, param$2);
                });
          
        }
      }
      if (exit === 1) {
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3
                  ]);
      }
      
    }
    
    function _4(o, a0, a1, a2, a3) {
      var arity = o.length;
      if (arity === 4) {
        return o(a0, a1, a2, a3);
      } else {
        return curry_4(o, a0, a1, a2, a3, arity);
      }
    }
    
    function __4(o) {
      var arity = o.length;
      if (arity === 4) {
        return o;
      } else {
        return (function (a0, a1, a2, a3) {
            return _4(o, a0, a1, a2, a3);
          });
      }
    }
    
    function curry_5(o, a0, a1, a2, a3, a4, arity) {
      var exit = 0;
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return app(o(a0, a1), /* array */[
                          a2,
                          a3,
                          a4
                        ]);
          case 3 : 
              return app(o(a0, a1, a2), /* array */[
                          a3,
                          a4
                        ]);
          case 4 : 
              return app(o(a0, a1, a2, a3), /* array */[a4]);
          case 5 : 
              return o(a0, a1, a2, a3, a4);
          case 6 : 
              return (function (param) {
                  return o(a0, a1, a2, a3, a4, param);
                });
          case 7 : 
              return (function (param, param$1) {
                  return o(a0, a1, a2, a3, a4, param, param$1);
                });
          
        }
      }
      if (exit === 1) {
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
      }
      
    }
    
    function _5(o, a0, a1, a2, a3, a4) {
      var arity = o.length;
      if (arity === 5) {
        return o(a0, a1, a2, a3, a4);
      } else {
        return curry_5(o, a0, a1, a2, a3, a4, arity);
      }
    }
    
    function __5(o) {
      var arity = o.length;
      if (arity === 5) {
        return o;
      } else {
        return (function (a0, a1, a2, a3, a4) {
            return _5(o, a0, a1, a2, a3, a4);
          });
      }
    }
    
    function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
      var exit = 0;
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return app(o(a0, a1), /* array */[
                          a2,
                          a3,
                          a4,
                          a5
                        ]);
          case 3 : 
              return app(o(a0, a1, a2), /* array */[
                          a3,
                          a4,
                          a5
                        ]);
          case 4 : 
              return app(o(a0, a1, a2, a3), /* array */[
                          a4,
                          a5
                        ]);
          case 5 : 
              return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
          case 6 : 
              return o(a0, a1, a2, a3, a4, a5);
          case 7 : 
              return (function (param) {
                  return o(a0, a1, a2, a3, a4, a5, param);
                });
          
        }
      }
      if (exit === 1) {
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
      }
      
    }
    
    function _6(o, a0, a1, a2, a3, a4, a5) {
      var arity = o.length;
      if (arity === 6) {
        return o(a0, a1, a2, a3, a4, a5);
      } else {
        return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
      }
    }
    
    function __6(o) {
      var arity = o.length;
      if (arity === 6) {
        return o;
      } else {
        return (function (a0, a1, a2, a3, a4, a5) {
            return _6(o, a0, a1, a2, a3, a4, a5);
          });
      }
    }
    
    function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
      var exit = 0;
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return app(o(a0, a1), /* array */[
                          a2,
                          a3,
                          a4,
                          a5,
                          a6
                        ]);
          case 3 : 
              return app(o(a0, a1, a2), /* array */[
                          a3,
                          a4,
                          a5,
                          a6
                        ]);
          case 4 : 
              return app(o(a0, a1, a2, a3), /* array */[
                          a4,
                          a5,
                          a6
                        ]);
          case 5 : 
              return app(o(a0, a1, a2, a3, a4), /* array */[
                          a5,
                          a6
                        ]);
          case 6 : 
              return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
          case 7 : 
              return o(a0, a1, a2, a3, a4, a5, a6);
          
        }
      }
      if (exit === 1) {
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
      }
      
    }
    
    function _7(o, a0, a1, a2, a3, a4, a5, a6) {
      var arity = o.length;
      if (arity === 7) {
        return o(a0, a1, a2, a3, a4, a5, a6);
      } else {
        return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
      }
    }
    
    function __7(o) {
      var arity = o.length;
      if (arity === 7) {
        return o;
      } else {
        return (function (a0, a1, a2, a3, a4, a5, a6) {
            return _7(o, a0, a1, a2, a3, a4, a5, a6);
          });
      }
    }
    
    function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
      var exit = 0;
      if (arity > 7 || arity < 0) {
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
      } else {
        switch (arity) {
          case 0 : 
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              return app(o(a0, a1), /* array */[
                          a2,
                          a3,
                          a4,
                          a5,
                          a6,
                          a7
                        ]);
          case 3 : 
              return app(o(a0, a1, a2), /* array */[
                          a3,
                          a4,
                          a5,
                          a6,
                          a7
                        ]);
          case 4 : 
              return app(o(a0, a1, a2, a3), /* array */[
                          a4,
                          a5,
                          a6,
                          a7
                        ]);
          case 5 : 
              return app(o(a0, a1, a2, a3, a4), /* array */[
                          a5,
                          a6,
                          a7
                        ]);
          case 6 : 
              return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                          a6,
                          a7
                        ]);
          case 7 : 
              return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
          
        }
      }
      if (exit === 1) {
        return app(o(a0), /* array */[
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
      }
      
    }
    
    function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
      var arity = o.length;
      if (arity === 8) {
        return o(a0, a1, a2, a3, a4, a5, a6, a7);
      } else {
        return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
      }
    }
    
    function __8(o) {
      var arity = o.length;
      if (arity === 8) {
        return o;
      } else {
        return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
            return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
          });
      }
    }
    
    exports.app = app;
    exports.curry_1 = curry_1;
    exports._1 = _1;
    exports.__1 = __1;
    exports.curry_2 = curry_2;
    exports._2 = _2;
    exports.__2 = __2;
    exports.curry_3 = curry_3;
    exports._3 = _3;
    exports.__3 = __3;
    exports.curry_4 = curry_4;
    exports._4 = _4;
    exports.__4 = __4;
    exports.curry_5 = curry_5;
    exports._5 = _5;
    exports.__5 = __5;
    exports.curry_6 = curry_6;
    exports._6 = _6;
    exports.__6 = __6;
    exports.curry_7 = curry_7;
    exports._7 = _7;
    exports.__7 = __7;
    exports.curry_8 = curry_8;
    exports._8 = _8;
    exports.__8 = __8;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    function __(tag, block) {
      block.tag = tag;
      return block;
    }
    
    exports.__ = __;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    var id = [0];
    
    function caml_set_oo_id(b) {
      b[1] = id[0];
      id[0] += 1;
      return b;
    }
    
    function get_id() {
      id[0] += 1;
      return id[0];
    }
    
    function create(str) {
      var v_001 = get_id(/* () */0);
      var v = /* tuple */[
        str,
        v_001
      ];
      v.tag = 248;
      return v;
    }
    
    function isCamlExceptionOrOpenVariant(e) {
      if (e === undefined) {
        return /* false */0;
      } else if (e.tag === 248) {
        return /* true */1;
      } else {
        var slot = e[0];
        if (slot !== undefined) {
          return +(slot.tag === 248);
        } else {
          return /* false */0;
        }
      }
    }
    
    exports.caml_set_oo_id = caml_set_oo_id;
    exports.get_id = get_id;
    exports.create = create;
    exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(16), __webpack_require__(23), __webpack_require__(11), __webpack_require__(5), __webpack_require__(3), __webpack_require__(25), __webpack_require__(0), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Curry, Caml_io, Caml_sys, Caml_format, Caml_string, Caml_exceptions, Caml_missing_polyfill, Caml_builtin_exceptions, CamlinternalFormatBasics){
    'use strict';
    function failwith(s) {
      throw [
            Caml_builtin_exceptions.failure,
            s
          ];
    }
    
    function invalid_arg(s) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            s
          ];
    }
    
    var Exit = Caml_exceptions.create("Pervasives.Exit");
    
    function abs(x) {
      if (x >= 0) {
        return x;
      } else {
        return -x | 0;
      }
    }
    
    function lnot(x) {
      return x ^ -1;
    }
    
    var min_int = -2147483648;
    
    function char_of_int(n) {
      if (n < 0 || n > 255) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "char_of_int"
            ];
      } else {
        return n;
      }
    }
    
    function string_of_bool(b) {
      if (b) {
        return "true";
      } else {
        return "false";
      }
    }
    
    function bool_of_string(param) {
      switch (param) {
        case "false" : 
            return /* false */0;
        case "true" : 
            return /* true */1;
        default:
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "bool_of_string"
              ];
      }
    }
    
    function string_of_int(param) {
      return "" + param;
    }
    
    function valid_float_lexem(s) {
      var l = s.length;
      var _i = 0;
      while(true) {
        var i = _i;
        if (i >= l) {
          return s + ".";
        } else {
          var match = Caml_string.get(s, i);
          if (match >= 48) {
            if (match >= 58) {
              return s;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else if (match !== 45) {
            return s;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        }
      };
    }
    
    function string_of_float(f) {
      return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
    }
    
    function $at(l1, l2) {
      if (l1) {
        return /* :: */[
                l1[0],
                $at(l1[1], l2)
              ];
      } else {
        return l2;
      }
    }
    
    var stdin = Caml_io.stdin;
    
    var stdout = Caml_io.stdout;
    
    var stderr = Caml_io.stderr;
    
    function open_out_gen(_, _$1, _$2) {
      return Caml_io.caml_ml_open_descriptor_out(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
    }
    
    function open_out(name) {
      return open_out_gen(/* :: */[
                  /* Open_wronly */1,
                  /* :: */[
                    /* Open_creat */3,
                    /* :: */[
                      /* Open_trunc */4,
                      /* :: */[
                        /* Open_text */7,
                        /* [] */0
                      ]
                    ]
                  ]
                ], 438, name);
    }
    
    function open_out_bin(name) {
      return open_out_gen(/* :: */[
                  /* Open_wronly */1,
                  /* :: */[
                    /* Open_creat */3,
                    /* :: */[
                      /* Open_trunc */4,
                      /* :: */[
                        /* Open_binary */6,
                        /* [] */0
                      ]
                    ]
                  ]
                ], 438, name);
    }
    
    function flush_all() {
      var _param = Caml_io.caml_ml_out_channels_list(/* () */0);
      while(true) {
        var param = _param;
        if (param) {
          try {
            Caml_io.caml_ml_flush(param[0]);
          }
          catch (exn){
            
          }
          _param = param[1];
          continue ;
          
        } else {
          return /* () */0;
        }
      };
    }
    
    function output_bytes(oc, s) {
      return Caml_io.caml_ml_output(oc, s, 0, s.length);
    }
    
    function output_string(oc, s) {
      return Caml_io.caml_ml_output(oc, s, 0, s.length);
    }
    
    function output(oc, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "output"
            ];
      } else {
        return Caml_io.caml_ml_output(oc, s, ofs, len);
      }
    }
    
    function output_substring(oc, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "output_substring"
            ];
      } else {
        return Caml_io.caml_ml_output(oc, s, ofs, len);
      }
    }
    
    function output_value(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
    }
    
    function close_out(oc) {
      Caml_io.caml_ml_flush(oc);
      return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
    }
    
    function close_out_noerr(oc) {
      try {
        Caml_io.caml_ml_flush(oc);
      }
      catch (exn){
        
      }
      try {
        return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
      }
      catch (exn$1){
        return /* () */0;
      }
    }
    
    function open_in_gen(_, _$1, _$2) {
      return Caml_io.caml_ml_open_descriptor_in(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
    }
    
    function open_in(name) {
      return open_in_gen(/* :: */[
                  /* Open_rdonly */0,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ], 0, name);
    }
    
    function open_in_bin(name) {
      return open_in_gen(/* :: */[
                  /* Open_rdonly */0,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ], 0, name);
    }
    
    function input(_, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "input"
            ];
      } else {
        return Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      }
    }
    
    function unsafe_really_input(_, _$1, _ofs, _len) {
      while(true) {
        var len = _len;
        var ofs = _ofs;
        if (len <= 0) {
          return /* () */0;
        } else {
          var r = Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          if (r) {
            _len = len - r | 0;
            _ofs = ofs + r | 0;
            continue ;
            
          } else {
            throw Caml_builtin_exceptions.end_of_file;
          }
        }
      };
    }
    
    function really_input(ic, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "really_input"
            ];
      } else {
        return unsafe_really_input(ic, s, ofs, len);
      }
    }
    
    function really_input_string(ic, len) {
      var s = Caml_string.caml_create_string(len);
      really_input(ic, s, 0, len);
      return Caml_string.bytes_to_string(s);
    }
    
    function input_line(chan) {
      var build_result = function (buf, _pos, _param) {
        while(true) {
          var param = _param;
          var pos = _pos;
          if (param) {
            var hd = param[0];
            var len = hd.length;
            Caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
            _param = param[1];
            _pos = pos - len | 0;
            continue ;
            
          } else {
            return buf;
          }
        };
      };
      var scan = function (_accu, _len) {
        while(true) {
          var len = _len;
          var accu = _accu;
          var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
          if (n) {
            if (n > 0) {
              var res = Caml_string.caml_create_string(n - 1 | 0);
              Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
              Caml_io.caml_ml_input_char(chan);
              if (accu) {
                var len$1 = (len + n | 0) - 1 | 0;
                return build_result(Caml_string.caml_create_string(len$1), len$1, /* :: */[
                            res,
                            accu
                          ]);
              } else {
                return res;
              }
            } else {
              var beg = Caml_string.caml_create_string(-n | 0);
              Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
              _len = len - n | 0;
              _accu = /* :: */[
                beg,
                accu
              ];
              continue ;
              
            }
          } else if (accu) {
            return build_result(Caml_string.caml_create_string(len), len, accu);
          } else {
            throw Caml_builtin_exceptions.end_of_file;
          }
        };
      };
      return Caml_string.bytes_to_string(scan(/* [] */0, 0));
    }
    
    function close_in_noerr() {
      try {
        return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
      }
      catch (exn){
        return /* () */0;
      }
    }
    
    function print_char(c) {
      return Caml_io.caml_ml_output_char(stdout, c);
    }
    
    function print_string(s) {
      return output_string(stdout, s);
    }
    
    function print_bytes(s) {
      return output_bytes(stdout, s);
    }
    
    function print_int(i) {
      return output_string(stdout, "" + i);
    }
    
    function print_float(f) {
      return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
    }
    
    function print_endline(param) {
      console.log(param);
      return 0;
    }
    
    function print_newline() {
      Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
      return Caml_io.caml_ml_flush(stdout);
    }
    
    function prerr_char(c) {
      return Caml_io.caml_ml_output_char(stderr, c);
    }
    
    function prerr_string(s) {
      return output_string(stderr, s);
    }
    
    function prerr_bytes(s) {
      return output_bytes(stderr, s);
    }
    
    function prerr_int(i) {
      return output_string(stderr, "" + i);
    }
    
    function prerr_float(f) {
      return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
    }
    
    function prerr_endline(param) {
      console.error(param);
      return 0;
    }
    
    function prerr_newline() {
      Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
      return Caml_io.caml_ml_flush(stderr);
    }
    
    function read_line() {
      Caml_io.caml_ml_flush(stdout);
      return input_line(stdin);
    }
    
    function read_int() {
      return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
    }
    
    function read_float() {
      return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
    }
    
    function string_of_format(param) {
      return param[1];
    }
    
    function $caret$caret(param, param$1) {
      return /* Format */[
              CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
              param[1] + ("%," + param$1[1])
            ];
    }
    
    var exit_function = [flush_all];
    
    function at_exit(f) {
      var g = exit_function[0];
      exit_function[0] = (function () {
          Curry._1(f, /* () */0);
          return Curry._1(g, /* () */0);
        });
      return /* () */0;
    }
    
    function do_at_exit() {
      return Curry._1(exit_function[0], /* () */0);
    }
    
    function exit(retcode) {
      do_at_exit(/* () */0);
      return Caml_sys.caml_sys_exit(retcode);
    }
    
    var max_int = 2147483647;
    
    var infinity = Infinity;
    
    var neg_infinity = -Infinity;
    
    var nan = NaN;
    
    var max_float = Number.MAX_VALUE;
    
    var min_float = Number.MIN_VALUE;
    
    var epsilon_float = 2.220446049250313e-16;
    
    var flush = Caml_io.caml_ml_flush;
    
    var output_char = Caml_io.caml_ml_output_char;
    
    var output_byte = Caml_io.caml_ml_output_char;
    
    function output_binary_int(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
    }
    
    function seek_out(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
    }
    
    function pos_out() {
      return Caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
    }
    
    function out_channel_length() {
      return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
    }
    
    function set_binary_mode_out(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
    }
    
    var input_char = Caml_io.caml_ml_input_char;
    
    var input_byte = Caml_io.caml_ml_input_char;
    
    function input_binary_int() {
      return Caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
    }
    
    function input_value() {
      return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
    }
    
    function seek_in(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
    }
    
    function pos_in() {
      return Caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
    }
    
    function in_channel_length() {
      return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
    }
    
    function close_in() {
      return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
    }
    
    function set_binary_mode_in(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
    }
    
    function LargeFile_000(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
    }
    
    function LargeFile_001() {
      return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
    }
    
    function LargeFile_002() {
      return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
    }
    
    function LargeFile_003(_, _$1) {
      return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
    }
    
    function LargeFile_004() {
      return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
    }
    
    function LargeFile_005() {
      return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
    }
    
    var LargeFile = [
      LargeFile_000,
      LargeFile_001,
      LargeFile_002,
      LargeFile_003,
      LargeFile_004,
      LargeFile_005
    ];
    
    exports.invalid_arg = invalid_arg;
    exports.failwith = failwith;
    exports.Exit = Exit;
    exports.abs = abs;
    exports.max_int = max_int;
    exports.min_int = min_int;
    exports.lnot = lnot;
    exports.infinity = infinity;
    exports.neg_infinity = neg_infinity;
    exports.nan = nan;
    exports.max_float = max_float;
    exports.min_float = min_float;
    exports.epsilon_float = epsilon_float;
    exports.char_of_int = char_of_int;
    exports.string_of_bool = string_of_bool;
    exports.bool_of_string = bool_of_string;
    exports.string_of_int = string_of_int;
    exports.string_of_float = string_of_float;
    exports.$at = $at;
    exports.stdin = stdin;
    exports.stdout = stdout;
    exports.stderr = stderr;
    exports.print_char = print_char;
    exports.print_string = print_string;
    exports.print_bytes = print_bytes;
    exports.print_int = print_int;
    exports.print_float = print_float;
    exports.print_endline = print_endline;
    exports.print_newline = print_newline;
    exports.prerr_char = prerr_char;
    exports.prerr_string = prerr_string;
    exports.prerr_bytes = prerr_bytes;
    exports.prerr_int = prerr_int;
    exports.prerr_float = prerr_float;
    exports.prerr_endline = prerr_endline;
    exports.prerr_newline = prerr_newline;
    exports.read_line = read_line;
    exports.read_int = read_int;
    exports.read_float = read_float;
    exports.open_out = open_out;
    exports.open_out_bin = open_out_bin;
    exports.open_out_gen = open_out_gen;
    exports.flush = flush;
    exports.flush_all = flush_all;
    exports.output_char = output_char;
    exports.output_string = output_string;
    exports.output_bytes = output_bytes;
    exports.output = output;
    exports.output_substring = output_substring;
    exports.output_byte = output_byte;
    exports.output_binary_int = output_binary_int;
    exports.output_value = output_value;
    exports.seek_out = seek_out;
    exports.pos_out = pos_out;
    exports.out_channel_length = out_channel_length;
    exports.close_out = close_out;
    exports.close_out_noerr = close_out_noerr;
    exports.set_binary_mode_out = set_binary_mode_out;
    exports.open_in = open_in;
    exports.open_in_bin = open_in_bin;
    exports.open_in_gen = open_in_gen;
    exports.input_char = input_char;
    exports.input_line = input_line;
    exports.input = input;
    exports.really_input = really_input;
    exports.really_input_string = really_input_string;
    exports.input_byte = input_byte;
    exports.input_binary_int = input_binary_int;
    exports.input_value = input_value;
    exports.seek_in = seek_in;
    exports.pos_in = pos_in;
    exports.in_channel_length = in_channel_length;
    exports.close_in = close_in;
    exports.close_in_noerr = close_in_noerr;
    exports.set_binary_mode_in = set_binary_mode_in;
    exports.LargeFile = LargeFile;
    exports.string_of_format = string_of_format;
    exports.$caret$caret = $caret$caret;
    exports.exit = exit;
    exports.at_exit = at_exit;
    exports.valid_float_lexem = valid_float_lexem;
    exports.unsafe_really_input = unsafe_really_input;
    exports.do_at_exit = do_at_exit;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_builtin_exceptions){
    'use strict';
    function string_of_char(prim) {
      return String.fromCharCode(prim);
    }
    
    function caml_string_get(s, i) {
      if (i >= s.length || i < 0) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "index out of bounds"
            ];
      } else {
        return s.charCodeAt(i);
      }
    }
    
    function caml_create_string(len) {
      if (len < 0) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.create"
            ];
      } else {
        return new Array(len);
      }
    }
    
    function caml_fill_string(s, i, l, c) {
      if (l > 0) {
        for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
          s[k] = c;
        }
        return /* () */0;
      } else {
        return 0;
      }
    }
    
    function caml_blit_string(s1, i1, s2, i2, len) {
      if (len > 0) {
        var off1 = s1.length - i1 | 0;
        if (len <= off1) {
          for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
            s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
          }
          return /* () */0;
        } else {
          for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
            s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
          }
          for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
            s2[i2 + i$2 | 0] = /* "\000" */0;
          }
          return /* () */0;
        }
      } else {
        return 0;
      }
    }
    
    function caml_blit_bytes(s1, i1, s2, i2, len) {
      if (len > 0) {
        if (s1 === s2) {
          var s1$1 = s1;
          var i1$1 = i1;
          var i2$1 = i2;
          var len$1 = len;
          if (i1$1 < i2$1) {
            var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
            var range_b = len$1 - 1 | 0;
            var range = range_a > range_b ? range_b : range_a;
            for(var j = range; j >= 0; --j){
              s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
            }
            return /* () */0;
          } else if (i1$1 > i2$1) {
            var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
            var range_b$1 = len$1 - 1 | 0;
            var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
            for(var k = 0; k <= range$1; ++k){
              s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
            }
            return /* () */0;
          } else {
            return 0;
          }
        } else {
          var off1 = s1.length - i1 | 0;
          if (len <= off1) {
            for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
              s2[i2 + i | 0] = s1[i1 + i | 0];
            }
            return /* () */0;
          } else {
            for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
              s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
            }
            for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
              s2[i2 + i$2 | 0] = /* "\000" */0;
            }
            return /* () */0;
          }
        }
      } else {
        return 0;
      }
    }
    
    function bytes_of_string(s) {
      var len = s.length;
      var res = new Array(len);
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        res[i] = s.charCodeAt(i);
      }
      return res;
    }
    
    function bytes_to_string(a) {
      var bytes = a;
      var i = 0;
      var len = a.length;
      var s = "";
      var s_len = len;
      if (i === 0 && len <= 4096 && len === bytes.length) {
        return String.fromCharCode.apply(null,bytes);
      } else {
        var offset = 0;
        while(s_len > 0) {
          var next = s_len < 1024 ? s_len : 1024;
          var tmp_bytes = new Array(next);
          caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
          s = s + String.fromCharCode.apply(null,tmp_bytes);
          s_len = s_len - next | 0;
          offset = offset + next | 0;
        };
        return s;
      }
    }
    
    function caml_string_of_char_array(chars) {
      var len = chars.length;
      var bytes = new Array(len);
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        bytes[i] = chars[i];
      }
      return bytes_to_string(bytes);
    }
    
    function caml_is_printable(c) {
      if (c > 31) {
        return +(c < 127);
      } else {
        return /* false */0;
      }
    }
    
    function caml_string_get16(s, i) {
      return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
    }
    
    function caml_string_get32(s, i) {
      return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
    }
    
    function get(s, i) {
      if (i < 0 || i >= s.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "index out of bounds"
            ];
      } else {
        return s.charCodeAt(i);
      }
    }
    
    exports.bytes_of_string = bytes_of_string;
    exports.bytes_to_string = bytes_to_string;
    exports.caml_is_printable = caml_is_printable;
    exports.caml_string_of_char_array = caml_string_of_char_array;
    exports.caml_string_get = caml_string_get;
    exports.caml_create_string = caml_create_string;
    exports.caml_fill_string = caml_fill_string;
    exports.caml_blit_string = caml_blit_string;
    exports.caml_blit_bytes = caml_blit_bytes;
    exports.caml_string_get16 = caml_string_get16;
    exports.caml_string_get32 = caml_string_get32;
    exports.string_of_char = string_of_char;
    exports.get = get;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    function caml_int_compare(x, y) {
      if (x < y) {
        return -1;
      } else if (x === y) {
        return 0;
      } else {
        return 1;
      }
    }
    
    function caml_float_compare(x, y) {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1;
      } else if (x > y || x === x) {
        return 1;
      } else if (y === y) {
        return -1;
      } else {
        return 0;
      }
    }
    
    function caml_string_compare(s1, s2) {
      if (s1 === s2) {
        return 0;
      } else if (s1 < s2) {
        return -1;
      } else {
        return 1;
      }
    }
    
    function caml_int_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_float_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_string_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_nativeint_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_int32_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_int_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_float_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_string_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_nativeint_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_int32_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    
    var caml_nativeint_compare = caml_int_compare;
    
    var caml_int32_compare = caml_int_compare;
    
    exports.caml_int_compare = caml_int_compare;
    exports.caml_float_compare = caml_float_compare;
    exports.caml_nativeint_compare = caml_nativeint_compare;
    exports.caml_string_compare = caml_string_compare;
    exports.caml_int32_compare = caml_int32_compare;
    exports.caml_int_min = caml_int_min;
    exports.caml_float_min = caml_float_min;
    exports.caml_string_min = caml_string_min;
    exports.caml_nativeint_min = caml_nativeint_min;
    exports.caml_int32_min = caml_int32_min;
    exports.caml_int_max = caml_int_max;
    exports.caml_float_max = caml_float_max;
    exports.caml_string_max = caml_string_max;
    exports.caml_nativeint_max = caml_nativeint_max;
    exports.caml_int32_max = caml_int32_max;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_builtin_exceptions){
    'use strict';
    function div(x, y) {
      if (y === 0) {
        throw Caml_builtin_exceptions.division_by_zero;
      } else {
        return x / y | 0;
      }
    }
    
    function mod_(x, y) {
      if (y === 0) {
        throw Caml_builtin_exceptions.division_by_zero;
      } else {
        return x % y;
      }
    }
    
    function caml_bswap16(x) {
      return ((x & 255) << 8) | ((x & 65280) >>> 8);
    }
    
    function caml_int32_bswap(x) {
      return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
    }
    
    var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);
    
    var caml_nativeint_bswap = caml_int32_bswap;
    
    exports.div = div;
    exports.mod_ = mod_;
    exports.caml_bswap16 = caml_bswap16;
    exports.caml_int32_bswap = caml_int32_bswap;
    exports.caml_nativeint_bswap = caml_nativeint_bswap;
    exports.imul = imul;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* imul Not a pure module */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(10), __webpack_require__(4), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Curry, Caml_obj, Pervasives, Caml_builtin_exceptions){
    'use strict';
    function length(l) {
      var _len = 0;
      var _param = l;
      while(true) {
        var param = _param;
        var len = _len;
        if (param) {
          _param = param[1];
          _len = len + 1 | 0;
          continue ;
          
        } else {
          return len;
        }
      };
    }
    
    function hd(param) {
      if (param) {
        return param[0];
      } else {
        throw [
              Caml_builtin_exceptions.failure,
              "hd"
            ];
      }
    }
    
    function tl(param) {
      if (param) {
        return param[1];
      } else {
        throw [
              Caml_builtin_exceptions.failure,
              "tl"
            ];
      }
    }
    
    function nth(l, n) {
      if (n < 0) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.nth"
            ];
      } else {
        var _l = l;
        var _n = n;
        while(true) {
          var n$1 = _n;
          var l$1 = _l;
          if (l$1) {
            if (n$1) {
              _n = n$1 - 1 | 0;
              _l = l$1[1];
              continue ;
              
            } else {
              return l$1[0];
            }
          } else {
            throw [
                  Caml_builtin_exceptions.failure,
                  "nth"
                ];
          }
        };
      }
    }
    
    function rev_append(_l1, _l2) {
      while(true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          _l2 = /* :: */[
            l1[0],
            l2
          ];
          _l1 = l1[1];
          continue ;
          
        } else {
          return l2;
        }
      };
    }
    
    function rev(l) {
      return rev_append(l, /* [] */0);
    }
    
    function flatten(param) {
      if (param) {
        return Pervasives.$at(param[0], flatten(param[1]));
      } else {
        return /* [] */0;
      }
    }
    
    function map(f, param) {
      if (param) {
        var r = Curry._1(f, param[0]);
        return /* :: */[
                r,
                map(f, param[1])
              ];
      } else {
        return /* [] */0;
      }
    }
    
    function mapi(i, f, param) {
      if (param) {
        var r = Curry._2(f, i, param[0]);
        return /* :: */[
                r,
                mapi(i + 1 | 0, f, param[1])
              ];
      } else {
        return /* [] */0;
      }
    }
    
    function mapi$1(f, l) {
      return mapi(0, f, l);
    }
    
    function rev_map(f, l) {
      var _accu = /* [] */0;
      var _param = l;
      while(true) {
        var param = _param;
        var accu = _accu;
        if (param) {
          _param = param[1];
          _accu = /* :: */[
            Curry._1(f, param[0]),
            accu
          ];
          continue ;
          
        } else {
          return accu;
        }
      };
    }
    
    function iter(f, _param) {
      while(true) {
        var param = _param;
        if (param) {
          Curry._1(f, param[0]);
          _param = param[1];
          continue ;
          
        } else {
          return /* () */0;
        }
      };
    }
    
    function iteri(f, l) {
      var _i = 0;
      var f$1 = f;
      var _param = l;
      while(true) {
        var param = _param;
        var i = _i;
        if (param) {
          Curry._2(f$1, i, param[0]);
          _param = param[1];
          _i = i + 1 | 0;
          continue ;
          
        } else {
          return /* () */0;
        }
      };
    }
    
    function fold_left(f, _accu, _l) {
      while(true) {
        var l = _l;
        var accu = _accu;
        if (l) {
          _l = l[1];
          _accu = Curry._2(f, accu, l[0]);
          continue ;
          
        } else {
          return accu;
        }
      };
    }
    
    function fold_right(f, l, accu) {
      if (l) {
        return Curry._2(f, l[0], fold_right(f, l[1], accu));
      } else {
        return accu;
      }
    }
    
    function map2(f, l1, l2) {
      if (l1) {
        if (l2) {
          var r = Curry._2(f, l1[0], l2[0]);
          return /* :: */[
                  r,
                  map2(f, l1[1], l2[1])
                ];
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.map2"
              ];
        }
      } else if (l2) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.map2"
            ];
      } else {
        return /* [] */0;
      }
    }
    
    function rev_map2(f, l1, l2) {
      var _accu = /* [] */0;
      var _l1 = l1;
      var _l2 = l2;
      while(true) {
        var l2$1 = _l2;
        var l1$1 = _l1;
        var accu = _accu;
        if (l1$1) {
          if (l2$1) {
            _l2 = l2$1[1];
            _l1 = l1$1[1];
            _accu = /* :: */[
              Curry._2(f, l1$1[0], l2$1[0]),
              accu
            ];
            continue ;
            
          } else {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "List.rev_map2"
                ];
          }
        } else if (l2$1) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.rev_map2"
              ];
        } else {
          return accu;
        }
      };
    }
    
    function iter2(f, _l1, _l2) {
      while(true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2) {
            Curry._2(f, l1[0], l2[0]);
            _l2 = l2[1];
            _l1 = l1[1];
            continue ;
            
          } else {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "List.iter2"
                ];
          }
        } else if (l2) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.iter2"
              ];
        } else {
          return /* () */0;
        }
      };
    }
    
    function fold_left2(f, _accu, _l1, _l2) {
      while(true) {
        var l2 = _l2;
        var l1 = _l1;
        var accu = _accu;
        if (l1) {
          if (l2) {
            _l2 = l2[1];
            _l1 = l1[1];
            _accu = Curry._3(f, accu, l1[0], l2[0]);
            continue ;
            
          } else {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "List.fold_left2"
                ];
          }
        } else if (l2) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.fold_left2"
              ];
        } else {
          return accu;
        }
      };
    }
    
    function fold_right2(f, l1, l2, accu) {
      if (l1) {
        if (l2) {
          return Curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.fold_right2"
              ];
        }
      } else if (l2) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.fold_right2"
            ];
      } else {
        return accu;
      }
    }
    
    function for_all(p, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (Curry._1(p, param[0])) {
            _param = param[1];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* true */1;
        }
      };
    }
    
    function exists(p, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (Curry._1(p, param[0])) {
            return /* true */1;
          } else {
            _param = param[1];
            continue ;
            
          }
        } else {
          return /* false */0;
        }
      };
    }
    
    function for_all2(p, _l1, _l2) {
      while(true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2) {
            if (Curry._2(p, l1[0], l2[0])) {
              _l2 = l2[1];
              _l1 = l1[1];
              continue ;
              
            } else {
              return /* false */0;
            }
          } else {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "List.for_all2"
                ];
          }
        } else if (l2) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.for_all2"
              ];
        } else {
          return /* true */1;
        }
      };
    }
    
    function exists2(p, _l1, _l2) {
      while(true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2) {
            if (Curry._2(p, l1[0], l2[0])) {
              return /* true */1;
            } else {
              _l2 = l2[1];
              _l1 = l1[1];
              continue ;
              
            }
          } else {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "List.exists2"
                ];
          }
        } else if (l2) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.exists2"
              ];
        } else {
          return /* false */0;
        }
      };
    }
    
    function mem(x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (Caml_obj.caml_compare(param[0], x)) {
            _param = param[1];
            continue ;
            
          } else {
            return /* true */1;
          }
        } else {
          return /* false */0;
        }
      };
    }
    
    function memq(x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (param[0] === x) {
            return /* true */1;
          } else {
            _param = param[1];
            continue ;
            
          }
        } else {
          return /* false */0;
        }
      };
    }
    
    function assoc(x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          var match = param[0];
          if (Caml_obj.caml_compare(match[0], x)) {
            _param = param[1];
            continue ;
            
          } else {
            return match[1];
          }
        } else {
          throw Caml_builtin_exceptions.not_found;
        }
      };
    }
    
    function assq(x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          var match = param[0];
          if (match[0] === x) {
            return match[1];
          } else {
            _param = param[1];
            continue ;
            
          }
        } else {
          throw Caml_builtin_exceptions.not_found;
        }
      };
    }
    
    function mem_assoc(x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (Caml_obj.caml_compare(param[0][0], x)) {
            _param = param[1];
            continue ;
            
          } else {
            return /* true */1;
          }
        } else {
          return /* false */0;
        }
      };
    }
    
    function mem_assq(x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (param[0][0] === x) {
            return /* true */1;
          } else {
            _param = param[1];
            continue ;
            
          }
        } else {
          return /* false */0;
        }
      };
    }
    
    function remove_assoc(x, param) {
      if (param) {
        var l = param[1];
        var pair = param[0];
        if (Caml_obj.caml_compare(pair[0], x)) {
          return /* :: */[
                  pair,
                  remove_assoc(x, l)
                ];
        } else {
          return l;
        }
      } else {
        return /* [] */0;
      }
    }
    
    function remove_assq(x, param) {
      if (param) {
        var l = param[1];
        var pair = param[0];
        if (pair[0] === x) {
          return l;
        } else {
          return /* :: */[
                  pair,
                  remove_assq(x, l)
                ];
        }
      } else {
        return /* [] */0;
      }
    }
    
    function find(p, _param) {
      while(true) {
        var param = _param;
        if (param) {
          var x = param[0];
          if (Curry._1(p, x)) {
            return x;
          } else {
            _param = param[1];
            continue ;
            
          }
        } else {
          throw Caml_builtin_exceptions.not_found;
        }
      };
    }
    
    function find_all(p) {
      return (function (param) {
          var _accu = /* [] */0;
          var _param = param;
          while(true) {
            var param$1 = _param;
            var accu = _accu;
            if (param$1) {
              var l = param$1[1];
              var x = param$1[0];
              if (Curry._1(p, x)) {
                _param = l;
                _accu = /* :: */[
                  x,
                  accu
                ];
                continue ;
                
              } else {
                _param = l;
                continue ;
                
              }
            } else {
              return rev_append(accu, /* [] */0);
            }
          };
        });
    }
    
    function partition(p, l) {
      var _yes = /* [] */0;
      var _no = /* [] */0;
      var _param = l;
      while(true) {
        var param = _param;
        var no = _no;
        var yes = _yes;
        if (param) {
          var l$1 = param[1];
          var x = param[0];
          if (Curry._1(p, x)) {
            _param = l$1;
            _yes = /* :: */[
              x,
              yes
            ];
            continue ;
            
          } else {
            _param = l$1;
            _no = /* :: */[
              x,
              no
            ];
            continue ;
            
          }
        } else {
          return /* tuple */[
                  rev_append(yes, /* [] */0),
                  rev_append(no, /* [] */0)
                ];
        }
      };
    }
    
    function split(param) {
      if (param) {
        var match = param[0];
        var match$1 = split(param[1]);
        return /* tuple */[
                /* :: */[
                  match[0],
                  match$1[0]
                ],
                /* :: */[
                  match[1],
                  match$1[1]
                ]
              ];
      } else {
        return /* tuple */[
                /* [] */0,
                /* [] */0
              ];
      }
    }
    
    function combine(l1, l2) {
      if (l1) {
        if (l2) {
          return /* :: */[
                  /* tuple */[
                    l1[0],
                    l2[0]
                  ],
                  combine(l1[1], l2[1])
                ];
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "List.combine"
              ];
        }
      } else if (l2) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.combine"
            ];
      } else {
        return /* [] */0;
      }
    }
    
    function merge(cmp, l1, l2) {
      if (l1) {
        if (l2) {
          var h2 = l2[0];
          var h1 = l1[0];
          if (Curry._2(cmp, h1, h2) <= 0) {
            return /* :: */[
                    h1,
                    merge(cmp, l1[1], l2)
                  ];
          } else {
            return /* :: */[
                    h2,
                    merge(cmp, l1, l2[1])
                  ];
          }
        } else {
          return l1;
        }
      } else {
        return l2;
      }
    }
    
    function chop(_k, _l) {
      while(true) {
        var l = _l;
        var k = _k;
        if (k) {
          if (l) {
            _l = l[1];
            _k = k - 1 | 0;
            continue ;
            
          } else {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "list.ml",
                    223,
                    11
                  ]
                ];
          }
        } else {
          return l;
        }
      };
    }
    
    function stable_sort(cmp, l) {
      var sort = function (n, l) {
        var exit = 0;
        if (n !== 2) {
          if (n !== 3) {
            exit = 1;
          } else if (l) {
            var match = l[1];
            if (match) {
              var match$1 = match[1];
              if (match$1) {
                var x3 = match$1[0];
                var x2 = match[0];
                var x1 = l[0];
                if (Curry._2(cmp, x1, x2) <= 0) {
                  if (Curry._2(cmp, x2, x3) <= 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else if (Curry._2(cmp, x1, x3) <= 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x3,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    return /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ]
                          ];
                  }
                } else if (Curry._2(cmp, x1, x3) <= 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* :: */[
                              x3,
                              /* [] */0
                            ]
                          ]
                        ];
                } else if (Curry._2(cmp, x2, x3) <= 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
        } else if (l) {
          var match$2 = l[1];
          if (match$2) {
            var x2$1 = match$2[0];
            var x1$1 = l[0];
            if (Curry._2(cmp, x1$1, x2$1) <= 0) {
              return /* :: */[
                      x1$1,
                      /* :: */[
                        x2$1,
                        /* [] */0
                      ]
                    ];
            } else {
              return /* :: */[
                      x2$1,
                      /* :: */[
                        x1$1,
                        /* [] */0
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
        if (exit === 1) {
          var n1 = (n >> 1);
          var n2 = n - n1 | 0;
          var l2 = chop(n1, l);
          var s1 = rev_sort(n1, l);
          var s2 = rev_sort(n2, l2);
          var _l1 = s1;
          var _l2 = s2;
          var _accu = /* [] */0;
          while(true) {
            var accu = _accu;
            var l2$1 = _l2;
            var l1 = _l1;
            if (l1) {
              if (l2$1) {
                var h2 = l2$1[0];
                var h1 = l1[0];
                if (Curry._2(cmp, h1, h2) > 0) {
                  _accu = /* :: */[
                    h1,
                    accu
                  ];
                  _l1 = l1[1];
                  continue ;
                  
                } else {
                  _accu = /* :: */[
                    h2,
                    accu
                  ];
                  _l2 = l2$1[1];
                  continue ;
                  
                }
              } else {
                return rev_append(l1, accu);
              }
            } else {
              return rev_append(l2$1, accu);
            }
          };
        }
        
      };
      var rev_sort = function (n, l) {
        var exit = 0;
        if (n !== 2) {
          if (n !== 3) {
            exit = 1;
          } else if (l) {
            var match = l[1];
            if (match) {
              var match$1 = match[1];
              if (match$1) {
                var x3 = match$1[0];
                var x2 = match[0];
                var x1 = l[0];
                if (Curry._2(cmp, x1, x2) > 0) {
                  if (Curry._2(cmp, x2, x3) > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else if (Curry._2(cmp, x1, x3) > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x3,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    return /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ]
                          ];
                  }
                } else if (Curry._2(cmp, x1, x3) > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* :: */[
                              x3,
                              /* [] */0
                            ]
                          ]
                        ];
                } else if (Curry._2(cmp, x2, x3) > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ]
                        ];
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
        } else if (l) {
          var match$2 = l[1];
          if (match$2) {
            var x2$1 = match$2[0];
            var x1$1 = l[0];
            if (Curry._2(cmp, x1$1, x2$1) > 0) {
              return /* :: */[
                      x1$1,
                      /* :: */[
                        x2$1,
                        /* [] */0
                      ]
                    ];
            } else {
              return /* :: */[
                      x2$1,
                      /* :: */[
                        x1$1,
                        /* [] */0
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
        if (exit === 1) {
          var n1 = (n >> 1);
          var n2 = n - n1 | 0;
          var l2 = chop(n1, l);
          var s1 = sort(n1, l);
          var s2 = sort(n2, l2);
          var _l1 = s1;
          var _l2 = s2;
          var _accu = /* [] */0;
          while(true) {
            var accu = _accu;
            var l2$1 = _l2;
            var l1 = _l1;
            if (l1) {
              if (l2$1) {
                var h2 = l2$1[0];
                var h1 = l1[0];
                if (Curry._2(cmp, h1, h2) <= 0) {
                  _accu = /* :: */[
                    h1,
                    accu
                  ];
                  _l1 = l1[1];
                  continue ;
                  
                } else {
                  _accu = /* :: */[
                    h2,
                    accu
                  ];
                  _l2 = l2$1[1];
                  continue ;
                  
                }
              } else {
                return rev_append(l1, accu);
              }
            } else {
              return rev_append(l2$1, accu);
            }
          };
        }
        
      };
      var len = length(l);
      if (len < 2) {
        return l;
      } else {
        return sort(len, l);
      }
    }
    
    function sort_uniq(cmp, l) {
      var sort = function (n, l) {
        var exit = 0;
        if (n !== 2) {
          if (n !== 3) {
            exit = 1;
          } else if (l) {
            var match = l[1];
            if (match) {
              var match$1 = match[1];
              if (match$1) {
                var x3 = match$1[0];
                var x2 = match[0];
                var x1 = l[0];
                var c = Curry._2(cmp, x1, x2);
                if (c) {
                  if (c < 0) {
                    var c$1 = Curry._2(cmp, x2, x3);
                    if (c$1) {
                      if (c$1 < 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x3,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        var c$2 = Curry._2(cmp, x1, x3);
                        if (c$2) {
                          if (c$2 < 0) {
                            return /* :: */[
                                    x1,
                                    /* :: */[
                                      x3,
                                      /* :: */[
                                        x2,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          } else {
                            return /* :: */[
                                    x3,
                                    /* :: */[
                                      x1,
                                      /* :: */[
                                        x2,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          }
                        } else {
                          return /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ];
                        }
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  } else {
                    var c$3 = Curry._2(cmp, x1, x3);
                    if (c$3) {
                      if (c$3 < 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x3,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        var c$4 = Curry._2(cmp, x2, x3);
                        if (c$4) {
                          if (c$4 < 0) {
                            return /* :: */[
                                    x2,
                                    /* :: */[
                                      x3,
                                      /* :: */[
                                        x1,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          } else {
                            return /* :: */[
                                    x3,
                                    /* :: */[
                                      x2,
                                      /* :: */[
                                        x1,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          }
                        } else {
                          return /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ];
                        }
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  var c$5 = Curry._2(cmp, x2, x3);
                  if (c$5) {
                    if (c$5 < 0) {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ];
                    } else {
                      return /* :: */[
                              x3,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  } else {
                    return /* :: */[
                            x2,
                            /* [] */0
                          ];
                  }
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
        } else if (l) {
          var match$2 = l[1];
          if (match$2) {
            var x2$1 = match$2[0];
            var x1$1 = l[0];
            var c$6 = Curry._2(cmp, x1$1, x2$1);
            if (c$6) {
              if (c$6 < 0) {
                return /* :: */[
                        x1$1,
                        /* :: */[
                          x2$1,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x2$1,
                        /* :: */[
                          x1$1,
                          /* [] */0
                        ]
                      ];
              }
            } else {
              return /* :: */[
                      x1$1,
                      /* [] */0
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
        if (exit === 1) {
          var n1 = (n >> 1);
          var n2 = n - n1 | 0;
          var l2 = chop(n1, l);
          var s1 = rev_sort(n1, l);
          var s2 = rev_sort(n2, l2);
          var _l1 = s1;
          var _l2 = s2;
          var _accu = /* [] */0;
          while(true) {
            var accu = _accu;
            var l2$1 = _l2;
            var l1 = _l1;
            if (l1) {
              if (l2$1) {
                var t2 = l2$1[1];
                var h2 = l2$1[0];
                var t1 = l1[1];
                var h1 = l1[0];
                var c$7 = Curry._2(cmp, h1, h2);
                if (c$7) {
                  if (c$7 > 0) {
                    _accu = /* :: */[
                      h1,
                      accu
                    ];
                    _l1 = t1;
                    continue ;
                    
                  } else {
                    _accu = /* :: */[
                      h2,
                      accu
                    ];
                    _l2 = t2;
                    continue ;
                    
                  }
                } else {
                  _accu = /* :: */[
                    h1,
                    accu
                  ];
                  _l2 = t2;
                  _l1 = t1;
                  continue ;
                  
                }
              } else {
                return rev_append(l1, accu);
              }
            } else {
              return rev_append(l2$1, accu);
            }
          };
        }
        
      };
      var rev_sort = function (n, l) {
        var exit = 0;
        if (n !== 2) {
          if (n !== 3) {
            exit = 1;
          } else if (l) {
            var match = l[1];
            if (match) {
              var match$1 = match[1];
              if (match$1) {
                var x3 = match$1[0];
                var x2 = match[0];
                var x1 = l[0];
                var c = Curry._2(cmp, x1, x2);
                if (c) {
                  if (c > 0) {
                    var c$1 = Curry._2(cmp, x2, x3);
                    if (c$1) {
                      if (c$1 > 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x3,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        var c$2 = Curry._2(cmp, x1, x3);
                        if (c$2) {
                          if (c$2 > 0) {
                            return /* :: */[
                                    x1,
                                    /* :: */[
                                      x3,
                                      /* :: */[
                                        x2,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          } else {
                            return /* :: */[
                                    x3,
                                    /* :: */[
                                      x1,
                                      /* :: */[
                                        x2,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          }
                        } else {
                          return /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ];
                        }
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  } else {
                    var c$3 = Curry._2(cmp, x1, x3);
                    if (c$3) {
                      if (c$3 > 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x3,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        var c$4 = Curry._2(cmp, x2, x3);
                        if (c$4) {
                          if (c$4 > 0) {
                            return /* :: */[
                                    x2,
                                    /* :: */[
                                      x3,
                                      /* :: */[
                                        x1,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          } else {
                            return /* :: */[
                                    x3,
                                    /* :: */[
                                      x2,
                                      /* :: */[
                                        x1,
                                        /* [] */0
                                      ]
                                    ]
                                  ];
                          }
                        } else {
                          return /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ];
                        }
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  var c$5 = Curry._2(cmp, x2, x3);
                  if (c$5) {
                    if (c$5 > 0) {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ];
                    } else {
                      return /* :: */[
                              x3,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  } else {
                    return /* :: */[
                            x2,
                            /* [] */0
                          ];
                  }
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
        } else if (l) {
          var match$2 = l[1];
          if (match$2) {
            var x2$1 = match$2[0];
            var x1$1 = l[0];
            var c$6 = Curry._2(cmp, x1$1, x2$1);
            if (c$6) {
              if (c$6 > 0) {
                return /* :: */[
                        x1$1,
                        /* :: */[
                          x2$1,
                          /* [] */0
                        ]
                      ];
              } else {
                return /* :: */[
                        x2$1,
                        /* :: */[
                          x1$1,
                          /* [] */0
                        ]
                      ];
              }
            } else {
              return /* :: */[
                      x1$1,
                      /* [] */0
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
        if (exit === 1) {
          var n1 = (n >> 1);
          var n2 = n - n1 | 0;
          var l2 = chop(n1, l);
          var s1 = sort(n1, l);
          var s2 = sort(n2, l2);
          var _l1 = s1;
          var _l2 = s2;
          var _accu = /* [] */0;
          while(true) {
            var accu = _accu;
            var l2$1 = _l2;
            var l1 = _l1;
            if (l1) {
              if (l2$1) {
                var t2 = l2$1[1];
                var h2 = l2$1[0];
                var t1 = l1[1];
                var h1 = l1[0];
                var c$7 = Curry._2(cmp, h1, h2);
                if (c$7) {
                  if (c$7 < 0) {
                    _accu = /* :: */[
                      h1,
                      accu
                    ];
                    _l1 = t1;
                    continue ;
                    
                  } else {
                    _accu = /* :: */[
                      h2,
                      accu
                    ];
                    _l2 = t2;
                    continue ;
                    
                  }
                } else {
                  _accu = /* :: */[
                    h1,
                    accu
                  ];
                  _l2 = t2;
                  _l1 = t1;
                  continue ;
                  
                }
              } else {
                return rev_append(l1, accu);
              }
            } else {
              return rev_append(l2$1, accu);
            }
          };
        }
        
      };
      var len = length(l);
      if (len < 2) {
        return l;
      } else {
        return sort(len, l);
      }
    }
    
    var append = Pervasives.$at;
    
    var concat = flatten;
    
    var filter = find_all;
    
    var sort = stable_sort;
    
    var fast_sort = stable_sort;
    
    exports.length = length;
    exports.hd = hd;
    exports.tl = tl;
    exports.nth = nth;
    exports.rev = rev;
    exports.append = append;
    exports.rev_append = rev_append;
    exports.concat = concat;
    exports.flatten = flatten;
    exports.iter = iter;
    exports.iteri = iteri;
    exports.map = map;
    exports.mapi = mapi$1;
    exports.rev_map = rev_map;
    exports.fold_left = fold_left;
    exports.fold_right = fold_right;
    exports.iter2 = iter2;
    exports.map2 = map2;
    exports.rev_map2 = rev_map2;
    exports.fold_left2 = fold_left2;
    exports.fold_right2 = fold_right2;
    exports.for_all = for_all;
    exports.exists = exists;
    exports.for_all2 = for_all2;
    exports.exists2 = exists2;
    exports.mem = mem;
    exports.memq = memq;
    exports.find = find;
    exports.filter = filter;
    exports.find_all = find_all;
    exports.partition = partition;
    exports.assoc = assoc;
    exports.assq = assq;
    exports.mem_assoc = mem_assoc;
    exports.mem_assq = mem_assq;
    exports.remove_assoc = remove_assoc;
    exports.remove_assq = remove_assq;
    exports.split = split;
    exports.combine = combine;
    exports.sort = sort;
    exports.stable_sort = stable_sort;
    exports.fast_sort = fast_sort;
    exports.sort_uniq = sort_uniq;
    exports.merge = merge;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(13), __webpack_require__(7), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, List, Bytes, Caml_int32, Caml_string, Caml_primitive){
    'use strict';
    function make(n, c) {
      return Caml_string.bytes_to_string(Bytes.make(n, c));
    }
    
    function init(n, f) {
      return Caml_string.bytes_to_string(Bytes.init(n, f));
    }
    
    function copy(s) {
      return Caml_string.bytes_to_string(Bytes.copy(Caml_string.bytes_of_string(s)));
    }
    
    function sub(s, ofs, len) {
      return Caml_string.bytes_to_string(Bytes.sub(Caml_string.bytes_of_string(s), ofs, len));
    }
    
    function concat(sep, l) {
      if (l) {
        var hd = l[0];
        var num = [0];
        var len = [0];
        List.iter((function (s) {
                num[0] = num[0] + 1 | 0;
                len[0] = len[0] + s.length | 0;
                return /* () */0;
              }), l);
        var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
        Caml_string.caml_blit_string(hd, 0, r, 0, hd.length);
        var pos = [hd.length];
        List.iter((function (s) {
                Caml_string.caml_blit_string(sep, 0, r, pos[0], sep.length);
                pos[0] = pos[0] + sep.length | 0;
                Caml_string.caml_blit_string(s, 0, r, pos[0], s.length);
                pos[0] = pos[0] + s.length | 0;
                return /* () */0;
              }), l[1]);
        return Caml_string.bytes_to_string(r);
      } else {
        return "";
      }
    }
    
    function iter(f, s) {
      return Bytes.iter(f, Caml_string.bytes_of_string(s));
    }
    
    function iteri(f, s) {
      return Bytes.iteri(f, Caml_string.bytes_of_string(s));
    }
    
    function map(f, s) {
      return Caml_string.bytes_to_string(Bytes.map(f, Caml_string.bytes_of_string(s)));
    }
    
    function mapi(f, s) {
      return Caml_string.bytes_to_string(Bytes.mapi(f, Caml_string.bytes_of_string(s)));
    }
    
    function is_space(param) {
      var switcher = param - 9 | 0;
      if (switcher > 4 || switcher < 0) {
        if (switcher !== 23) {
          return /* false */0;
        } else {
          return /* true */1;
        }
      } else if (switcher !== 2) {
        return /* true */1;
      } else {
        return /* false */0;
      }
    }
    
    function trim(s) {
      if (s === "" || !(is_space(s.charCodeAt(0)) || is_space(s.charCodeAt(s.length - 1 | 0)))) {
        return s;
      } else {
        return Caml_string.bytes_to_string(Bytes.trim(Caml_string.bytes_of_string(s)));
      }
    }
    
    function escaped(s) {
      var needs_escape = function (_i) {
        while(true) {
          var i = _i;
          if (i >= s.length) {
            return /* false */0;
          } else {
            var match = s.charCodeAt(i);
            if (match >= 32) {
              var switcher = match - 34 | 0;
              if (switcher > 58 || switcher < 0) {
                if (switcher >= 93) {
                  return /* true */1;
                } else {
                  _i = i + 1 | 0;
                  continue ;
                  
                }
              } else if (switcher > 57 || switcher < 1) {
                return /* true */1;
              } else {
                _i = i + 1 | 0;
                continue ;
                
              }
            } else {
              return /* true */1;
            }
          }
        };
      };
      if (needs_escape(0)) {
        return Caml_string.bytes_to_string(Bytes.escaped(Caml_string.bytes_of_string(s)));
      } else {
        return s;
      }
    }
    
    function index(s, c) {
      return Bytes.index(Caml_string.bytes_of_string(s), c);
    }
    
    function rindex(s, c) {
      return Bytes.rindex(Caml_string.bytes_of_string(s), c);
    }
    
    function index_from(s, i, c) {
      return Bytes.index_from(Caml_string.bytes_of_string(s), i, c);
    }
    
    function rindex_from(s, i, c) {
      return Bytes.rindex_from(Caml_string.bytes_of_string(s), i, c);
    }
    
    function contains(s, c) {
      return Bytes.contains(Caml_string.bytes_of_string(s), c);
    }
    
    function contains_from(s, i, c) {
      return Bytes.contains_from(Caml_string.bytes_of_string(s), i, c);
    }
    
    function rcontains_from(s, i, c) {
      return Bytes.rcontains_from(Caml_string.bytes_of_string(s), i, c);
    }
    
    function uppercase(s) {
      return Caml_string.bytes_to_string(Bytes.uppercase(Caml_string.bytes_of_string(s)));
    }
    
    function lowercase(s) {
      return Caml_string.bytes_to_string(Bytes.lowercase(Caml_string.bytes_of_string(s)));
    }
    
    function capitalize(s) {
      return Caml_string.bytes_to_string(Bytes.capitalize(Caml_string.bytes_of_string(s)));
    }
    
    function uncapitalize(s) {
      return Caml_string.bytes_to_string(Bytes.uncapitalize(Caml_string.bytes_of_string(s)));
    }
    
    var compare = Caml_primitive.caml_string_compare;
    
    var fill = Bytes.fill;
    
    var blit = Bytes.blit_string;
    
    exports.make = make;
    exports.init = init;
    exports.copy = copy;
    exports.sub = sub;
    exports.fill = fill;
    exports.blit = blit;
    exports.concat = concat;
    exports.iter = iter;
    exports.iteri = iteri;
    exports.map = map;
    exports.mapi = mapi;
    exports.trim = trim;
    exports.escaped = escaped;
    exports.index = index;
    exports.rindex = rindex;
    exports.index_from = index_from;
    exports.rindex_from = rindex_from;
    exports.contains = contains;
    exports.contains_from = contains_from;
    exports.rcontains_from = rcontains_from;
    exports.uppercase = uppercase;
    exports.lowercase = lowercase;
    exports.capitalize = capitalize;
    exports.uncapitalize = uncapitalize;
    exports.compare = compare;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(6), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Block, Caml_primitive, Caml_builtin_exceptions){
    'use strict';
    function caml_obj_block(tag, size) {
      var v = new Array(size);
      v.tag = tag;
      return v;
    }
    
    function caml_obj_dup(x) {
      var len = x.length | 0;
      var v = new Array(len);
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        v[i] = x[i];
      }
      v.tag = x.tag | 0;
      return v;
    }
    
    function caml_obj_truncate(x, new_size) {
      var len = x.length | 0;
      if (new_size <= 0 || new_size > len) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Obj.truncate"
            ];
      } else if (len !== new_size) {
        for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          x[i] = 0;
        }
        x.length = new_size;
        return /* () */0;
      } else {
        return 0;
      }
    }
    
    function caml_lazy_make_forward(x) {
      return Block.__(250, [x]);
    }
    
    function caml_update_dummy(x, y) {
      var len = y.length | 0;
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        x[i] = y[i];
      }
      var y_tag = y.tag | 0;
      if (y_tag !== 0) {
        x.tag = y_tag;
        return /* () */0;
      } else {
        return 0;
      }
    }
    
    function caml_compare(_a, _b) {
      while(true) {
        var b = _b;
        var a = _a;
        if (a === b) {
          return 0;
        } else {
          var a_type = typeof a;
          var b_type = typeof b;
          if (a_type === "string") {
            return Caml_primitive.caml_string_compare(a, b);
          } else {
            var is_a_number = +(a_type === "number");
            var is_b_number = +(b_type === "number");
            if (is_a_number !== 0) {
              if (is_b_number !== 0) {
                return Caml_primitive.caml_int_compare(a, b);
              } else {
                return -1;
              }
            } else if (is_b_number !== 0) {
              return 1;
            } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
              var x = a;
              var y = b;
              if (x === y) {
                return 0;
              } else if (x < y) {
                return -1;
              } else {
                return 1;
              }
            } else if (a_type === "function" || b_type === "function") {
              throw [
                    Caml_builtin_exceptions.invalid_argument,
                    "compare: functional value"
                  ];
            } else {
              var tag_a = a.tag | 0;
              var tag_b = b.tag | 0;
              if (tag_a === 250) {
                _a = a[0];
                continue ;
                
              } else if (tag_b === 250) {
                _b = b[0];
                continue ;
                
              } else if (tag_a === 248) {
                return Caml_primitive.caml_int_compare(a[1], b[1]);
              } else if (tag_a === 251) {
                throw [
                      Caml_builtin_exceptions.invalid_argument,
                      "equal: abstract value"
                    ];
              } else if (tag_a !== tag_b) {
                if (tag_a < tag_b) {
                  return -1;
                } else {
                  return 1;
                }
              } else {
                var len_a = a.length | 0;
                var len_b = b.length | 0;
                if (len_a === len_b) {
                  var a$1 = a;
                  var b$1 = b;
                  var _i = 0;
                  var same_length = len_a;
                  while(true) {
                    var i = _i;
                    if (i === same_length) {
                      return 0;
                    } else {
                      var res = caml_compare(a$1[i], b$1[i]);
                      if (res !== 0) {
                        return res;
                      } else {
                        _i = i + 1 | 0;
                        continue ;
                        
                      }
                    }
                  };
                } else if (len_a < len_b) {
                  var a$2 = a;
                  var b$2 = b;
                  var _i$1 = 0;
                  var short_length = len_a;
                  while(true) {
                    var i$1 = _i$1;
                    if (i$1 === short_length) {
                      return -1;
                    } else {
                      var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                      if (res$1 !== 0) {
                        return res$1;
                      } else {
                        _i$1 = i$1 + 1 | 0;
                        continue ;
                        
                      }
                    }
                  };
                } else {
                  var a$3 = a;
                  var b$3 = b;
                  var _i$2 = 0;
                  var short_length$1 = len_b;
                  while(true) {
                    var i$2 = _i$2;
                    if (i$2 === short_length$1) {
                      return 1;
                    } else {
                      var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                      if (res$2 !== 0) {
                        return res$2;
                      } else {
                        _i$2 = i$2 + 1 | 0;
                        continue ;
                        
                      }
                    }
                  };
                }
              }
            }
          }
        }
      };
    }
    
    function caml_equal(_a, _b) {
      while(true) {
        var b = _b;
        var a = _a;
        if (a === b) {
          return /* true */1;
        } else {
          var a_type = typeof a;
          if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
            return /* false */0;
          } else {
            var b_type = typeof b;
            if (a_type === "function" || b_type === "function") {
              throw [
                    Caml_builtin_exceptions.invalid_argument,
                    "equal: functional value"
                  ];
            } else if (b_type === "number" || b_type === "undefined" || b === null) {
              return /* false */0;
            } else {
              var tag_a = a.tag | 0;
              var tag_b = b.tag | 0;
              if (tag_a === 250) {
                _a = a[0];
                continue ;
                
              } else if (tag_b === 250) {
                _b = b[0];
                continue ;
                
              } else if (tag_a === 248) {
                return +(a[1] === b[1]);
              } else if (tag_a === 251) {
                throw [
                      Caml_builtin_exceptions.invalid_argument,
                      "equal: abstract value"
                    ];
              } else if (tag_a !== tag_b) {
                return /* false */0;
              } else {
                var len_a = a.length | 0;
                var len_b = b.length | 0;
                if (len_a === len_b) {
                  var a$1 = a;
                  var b$1 = b;
                  var _i = 0;
                  var same_length = len_a;
                  while(true) {
                    var i = _i;
                    if (i === same_length) {
                      return /* true */1;
                    } else if (caml_equal(a$1[i], b$1[i])) {
                      _i = i + 1 | 0;
                      continue ;
                      
                    } else {
                      return /* false */0;
                    }
                  };
                } else {
                  return /* false */0;
                }
              }
            }
          }
        }
      };
    }
    
    function caml_equal_null(x, y) {
      if (y !== null) {
        return caml_equal(x, y);
      } else {
        return +(x === y);
      }
    }
    
    function caml_equal_undefined(x, y) {
      if (y !== undefined) {
        return caml_equal(x, y);
      } else {
        return +(x === y);
      }
    }
    
    function caml_equal_nullable(x, y) {
      if (y == null) {
        return +(x === y);
      } else {
        return caml_equal(x, y);
      }
    }
    
    function caml_notequal(a, b) {
      return 1 - caml_equal(a, b);
    }
    
    function caml_greaterequal(a, b) {
      return +(caml_compare(a, b) >= 0);
    }
    
    function caml_greaterthan(a, b) {
      return +(caml_compare(a, b) > 0);
    }
    
    function caml_lessequal(a, b) {
      return +(caml_compare(a, b) <= 0);
    }
    
    function caml_lessthan(a, b) {
      return +(caml_compare(a, b) < 0);
    }
    
    function caml_min(x, y) {
      if (caml_compare(x, y) <= 0) {
        return x;
      } else {
        return y;
      }
    }
    
    function caml_max(x, y) {
      if (caml_compare(x, y) >= 0) {
        return x;
      } else {
        return y;
      }
    }
    
    exports.caml_obj_block = caml_obj_block;
    exports.caml_obj_dup = caml_obj_dup;
    exports.caml_obj_truncate = caml_obj_truncate;
    exports.caml_lazy_make_forward = caml_lazy_make_forward;
    exports.caml_update_dummy = caml_update_dummy;
    exports.caml_compare = caml_compare;
    exports.caml_equal = caml_equal;
    exports.caml_equal_null = caml_equal_null;
    exports.caml_equal_undefined = caml_equal_undefined;
    exports.caml_equal_nullable = caml_equal_nullable;
    exports.caml_notequal = caml_notequal;
    exports.caml_greaterequal = caml_greaterequal;
    exports.caml_greaterthan = caml_greaterthan;
    exports.caml_lessthan = caml_lessthan;
    exports.caml_lessequal = caml_lessequal;
    exports.caml_min = caml_min;
    exports.caml_max = caml_max;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(7), __webpack_require__(24), __webpack_require__(18), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Curry, Caml_int32, Caml_int64, Caml_utils, Caml_builtin_exceptions){
    'use strict';
    function caml_failwith(s) {
      throw [
            Caml_builtin_exceptions.failure,
            s
          ];
    }
    
    function parse_digit(c) {
      if (c >= 65) {
        if (c >= 97) {
          if (c >= 123) {
            return -1;
          } else {
            return c - 87 | 0;
          }
        } else if (c >= 91) {
          return -1;
        } else {
          return c - 55 | 0;
        }
      } else if (c > 57 || c < 48) {
        return -1;
      } else {
        return c - /* "0" */48 | 0;
      }
    }
    
    function int_of_string_base(param) {
      switch (param) {
        case 0 : 
            return 8;
        case 1 : 
            return 16;
        case 2 : 
            return 10;
        case 3 : 
            return 2;
        
      }
    }
    
    function parse_sign_and_base(s) {
      var sign = 1;
      var base = /* Dec */2;
      var i = 0;
      if (s[i] === "-") {
        sign = -1;
        i = i + 1 | 0;
      }
      var match = s.charCodeAt(i);
      var match$1 = s.charCodeAt(i + 1 | 0);
      if (match === 48) {
        if (match$1 >= 89) {
          if (match$1 !== 98) {
            if (match$1 !== 111) {
              if (match$1 === 120) {
                base = /* Hex */1;
                i = i + 2 | 0;
              }
              
            } else {
              base = /* Oct */0;
              i = i + 2 | 0;
            }
          } else {
            base = /* Bin */3;
            i = i + 2 | 0;
          }
        } else if (match$1 !== 66) {
          if (match$1 !== 79) {
            if (match$1 >= 88) {
              base = /* Hex */1;
              i = i + 2 | 0;
            }
            
          } else {
            base = /* Oct */0;
            i = i + 2 | 0;
          }
        } else {
          base = /* Bin */3;
          i = i + 2 | 0;
        }
      }
      return /* tuple */[
              i,
              sign,
              base
            ];
    }
    
    function caml_int_of_string(s) {
      var match = parse_sign_and_base(s);
      var i = match[0];
      var base = int_of_string_base(match[2]);
      var threshold = 4294967295;
      var len = s.length;
      var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
      var d = parse_digit(c);
      if (d < 0 || d >= base) {
        throw [
              Caml_builtin_exceptions.failure,
              "int_of_string"
            ];
      }
      var aux = function (_acc, _k) {
        while(true) {
          var k = _k;
          var acc = _acc;
          if (k === len) {
            return acc;
          } else {
            var a = s.charCodeAt(k);
            if (a === /* "_" */95) {
              _k = k + 1 | 0;
              continue ;
              
            } else {
              var v = parse_digit(a);
              if (v < 0 || v >= base) {
                throw [
                      Caml_builtin_exceptions.failure,
                      "int_of_string"
                    ];
              } else {
                var acc$1 = base * acc + v;
                if (acc$1 > threshold) {
                  throw [
                        Caml_builtin_exceptions.failure,
                        "int_of_string"
                      ];
                } else {
                  _k = k + 1 | 0;
                  _acc = acc$1;
                  continue ;
                  
                }
              }
            }
          }
        };
      };
      var res = match[1] * aux(d, i + 1 | 0);
      var or_res = res | 0;
      if (base === 10 && res !== or_res) {
        throw [
              Caml_builtin_exceptions.failure,
              "int_of_string"
            ];
      }
      return or_res;
    }
    
    function caml_int64_of_string(s) {
      var match = parse_sign_and_base(s);
      var hbase = match[2];
      var i = match[0];
      var base = Caml_int64.of_int32(int_of_string_base(hbase));
      var sign = Caml_int64.of_int32(match[1]);
      var threshold;
      switch (hbase) {
        case 0 : 
            threshold = /* int64 */[
              /* hi */536870911,
              /* lo */4294967295
            ];
            break;
        case 1 : 
            threshold = /* int64 */[
              /* hi */268435455,
              /* lo */4294967295
            ];
            break;
        case 2 : 
            threshold = /* int64 */[
              /* hi */429496729,
              /* lo */2576980377
            ];
            break;
        case 3 : 
            threshold = /* int64 */[
              /* hi */2147483647,
              /* lo */4294967295
            ];
            break;
        
      }
      var len = s.length;
      var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
      var d = Caml_int64.of_int32(parse_digit(c));
      if (Caml_int64.lt(d, /* int64 */[
              /* hi */0,
              /* lo */0
            ]) || Caml_int64.ge(d, base)) {
        throw [
              Caml_builtin_exceptions.failure,
              "int64_of_string"
            ];
      }
      var aux = function (_acc, _k) {
        while(true) {
          var k = _k;
          var acc = _acc;
          if (k === len) {
            return acc;
          } else {
            var a = s.charCodeAt(k);
            if (a === /* "_" */95) {
              _k = k + 1 | 0;
              continue ;
              
            } else {
              var v = Caml_int64.of_int32(parse_digit(a));
              if (Caml_int64.lt(v, /* int64 */[
                      /* hi */0,
                      /* lo */0
                    ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
                throw [
                      Caml_builtin_exceptions.failure,
                      "int64_of_string"
                    ];
              } else {
                var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
                _k = k + 1 | 0;
                _acc = acc$1;
                continue ;
                
              }
            }
          }
        };
      };
      var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
      var or_res = Caml_int64.or_(res, /* int64 */[
            /* hi */0,
            /* lo */0
          ]);
      if (Caml_int64.eq(base, /* int64 */[
              /* hi */0,
              /* lo */10
            ]) && Caml_int64.neq(res, or_res)) {
        throw [
              Caml_builtin_exceptions.failure,
              "int64_of_string"
            ];
      }
      return or_res;
    }
    
    function int_of_base(param) {
      switch (param) {
        case 0 : 
            return 8;
        case 1 : 
            return 16;
        case 2 : 
            return 10;
        
      }
    }
    
    function lowercase(c) {
      if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
        return c + 32 | 0;
      } else {
        return c;
      }
    }
    
    function parse_format(fmt) {
      var len = fmt.length;
      if (len > 31) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "format_int: format too long"
            ];
      }
      var f = /* record */[
        /* justify */"+",
        /* signstyle */"-",
        /* filter */" ",
        /* alternate : false */0,
        /* base : Dec */2,
        /* signedconv : false */0,
        /* width */0,
        /* uppercase : false */0,
        /* sign */1,
        /* prec */-1,
        /* conv */"f"
      ];
      var _i = 0;
      while(true) {
        var i = _i;
        if (i >= len) {
          return f;
        } else {
          var c = fmt.charCodeAt(i);
          var exit = 0;
          if (c >= 69) {
            if (c >= 88) {
              if (c >= 121) {
                exit = 1;
              } else {
                switch (c - 88 | 0) {
                  case 0 : 
                      f[/* base */4] = /* Hex */1;
                      f[/* uppercase */7] = /* true */1;
                      _i = i + 1 | 0;
                      continue ;
                      case 13 : 
                  case 14 : 
                  case 15 : 
                      exit = 5;
                      break;
                  case 12 : 
                  case 17 : 
                      exit = 4;
                      break;
                  case 23 : 
                      f[/* base */4] = /* Oct */0;
                      _i = i + 1 | 0;
                      continue ;
                      case 29 : 
                      f[/* base */4] = /* Dec */2;
                      _i = i + 1 | 0;
                      continue ;
                      case 1 : 
                  case 2 : 
                  case 3 : 
                  case 4 : 
                  case 5 : 
                  case 6 : 
                  case 7 : 
                  case 8 : 
                  case 9 : 
                  case 10 : 
                  case 11 : 
                  case 16 : 
                  case 18 : 
                  case 19 : 
                  case 20 : 
                  case 21 : 
                  case 22 : 
                  case 24 : 
                  case 25 : 
                  case 26 : 
                  case 27 : 
                  case 28 : 
                  case 30 : 
                  case 31 : 
                      exit = 1;
                      break;
                  case 32 : 
                      f[/* base */4] = /* Hex */1;
                      _i = i + 1 | 0;
                      continue ;
                      
                }
              }
            } else if (c >= 72) {
              exit = 1;
            } else {
              f[/* signedconv */5] = /* true */1;
              f[/* uppercase */7] = /* true */1;
              f[/* conv */10] = String.fromCharCode(lowercase(c));
              _i = i + 1 | 0;
              continue ;
              
            }
          } else {
            var switcher = c - 32 | 0;
            if (switcher > 25 || switcher < 0) {
              exit = 1;
            } else {
              switch (switcher) {
                case 3 : 
                    f[/* alternate */3] = /* true */1;
                    _i = i + 1 | 0;
                    continue ;
                    case 0 : 
                case 11 : 
                    exit = 2;
                    break;
                case 13 : 
                    f[/* justify */0] = "-";
                    _i = i + 1 | 0;
                    continue ;
                    case 14 : 
                    f[/* prec */9] = 0;
                    var j = i + 1 | 0;
                    while((function(j){
                        return function () {
                          var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                          return +(w >= 0 && w <= 9);
                        }
                        }(j))()) {
                      f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                      j = j + 1 | 0;
                    };
                    _i = j;
                    continue ;
                    case 1 : 
                case 2 : 
                case 4 : 
                case 5 : 
                case 6 : 
                case 7 : 
                case 8 : 
                case 9 : 
                case 10 : 
                case 12 : 
                case 15 : 
                    exit = 1;
                    break;
                case 16 : 
                    f[/* filter */2] = "0";
                    _i = i + 1 | 0;
                    continue ;
                    case 17 : 
                case 18 : 
                case 19 : 
                case 20 : 
                case 21 : 
                case 22 : 
                case 23 : 
                case 24 : 
                case 25 : 
                    exit = 3;
                    break;
                
              }
            }
          }
          switch (exit) {
            case 1 : 
                _i = i + 1 | 0;
                continue ;
                case 2 : 
                f[/* signstyle */1] = String.fromCharCode(c);
                _i = i + 1 | 0;
                continue ;
                case 3 : 
                f[/* width */6] = 0;
                var j$1 = i;
                while((function(j$1){
                    return function () {
                      var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j$1))()) {
                  f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
                  j$1 = j$1 + 1 | 0;
                };
                _i = j$1;
                continue ;
                case 4 : 
                f[/* signedconv */5] = /* true */1;
                f[/* base */4] = /* Dec */2;
                _i = i + 1 | 0;
                continue ;
                case 5 : 
                f[/* signedconv */5] = /* true */1;
                f[/* conv */10] = String.fromCharCode(c);
                _i = i + 1 | 0;
                continue ;
                
          }
        }
      };
    }
    
    function finish_formatting(param, rawbuffer) {
      var justify = param[/* justify */0];
      var signstyle = param[/* signstyle */1];
      var filter = param[/* filter */2];
      var alternate = param[/* alternate */3];
      var base = param[/* base */4];
      var signedconv = param[/* signedconv */5];
      var width = param[/* width */6];
      var uppercase = param[/* uppercase */7];
      var sign = param[/* sign */8];
      var len = rawbuffer.length;
      if (signedconv && (sign < 0 || signstyle !== "-")) {
        len = len + 1 | 0;
      }
      if (alternate) {
        if (base) {
          if (base === /* Hex */1) {
            len = len + 2 | 0;
          }
          
        } else {
          len = len + 1 | 0;
        }
      }
      var buffer = "";
      if (justify === "+" && filter === " ") {
        for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
          buffer = buffer + filter;
        }
      }
      if (signedconv) {
        if (sign < 0) {
          buffer = buffer + "-";
        } else if (signstyle !== "-") {
          buffer = buffer + signstyle;
        }
        
      }
      if (alternate && base === /* Oct */0) {
        buffer = buffer + "0";
      }
      if (alternate && base === /* Hex */1) {
        buffer = buffer + "0x";
      }
      if (justify === "+" && filter === "0") {
        for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
          buffer = buffer + filter;
        }
      }
      buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
      if (justify === "-") {
        for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
          buffer = buffer + " ";
        }
      }
      return buffer;
    }
    
    function caml_format_int(fmt, i) {
      if (fmt === "%d") {
        return String(i);
      } else {
        var f = parse_format(fmt);
        var f$1 = f;
        var i$1 = i;
        var i$2 = i$1 < 0 ? (
            f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
          ) : i$1;
        var s = i$2.toString(int_of_base(f$1[/* base */4]));
        if (f$1[/* prec */9] >= 0) {
          f$1[/* filter */2] = " ";
          var n = f$1[/* prec */9] - s.length | 0;
          if (n > 0) {
            s = Caml_utils.repeat(n, "0") + s;
          }
          
        }
        return finish_formatting(f$1, s);
      }
    }
    
    function caml_int64_format(fmt, x) {
      var f = parse_format(fmt);
      var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
            /* hi */0,
            /* lo */0
          ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
      var s = "";
      var match = f[/* base */4];
      switch (match) {
        case 0 : 
            var wbase = /* int64 */[
              /* hi */0,
              /* lo */8
            ];
            var cvtbl = "01234567";
            if (Caml_int64.lt(x$1, /* int64 */[
                    /* hi */0,
                    /* lo */0
                  ])) {
              var y = Caml_int64.discard_sign(x$1);
              var match$1 = Caml_int64.div_mod(y, wbase);
              var quotient = Caml_int64.add(/* int64 */[
                    /* hi */268435456,
                    /* lo */0
                  ], match$1[0]);
              var modulus = match$1[1];
              s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
              while(Caml_int64.neq(quotient, /* int64 */[
                      /* hi */0,
                      /* lo */0
                    ])) {
                var match$2 = Caml_int64.div_mod(quotient, wbase);
                quotient = match$2[0];
                modulus = match$2[1];
                s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
              };
            } else {
              var match$3 = Caml_int64.div_mod(x$1, wbase);
              var quotient$1 = match$3[0];
              var modulus$1 = match$3[1];
              s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
              while(Caml_int64.neq(quotient$1, /* int64 */[
                      /* hi */0,
                      /* lo */0
                    ])) {
                var match$4 = Caml_int64.div_mod(quotient$1, wbase);
                quotient$1 = match$4[0];
                modulus$1 = match$4[1];
                s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
              };
            }
            break;
        case 1 : 
            s = Caml_int64.to_hex(x$1) + s;
            break;
        case 2 : 
            var wbase$1 = /* int64 */[
              /* hi */0,
              /* lo */10
            ];
            var cvtbl$1 = "0123456789";
            if (Caml_int64.lt(x$1, /* int64 */[
                    /* hi */0,
                    /* lo */0
                  ])) {
              var y$1 = Caml_int64.discard_sign(x$1);
              var match$5 = Caml_int64.div_mod(y$1, wbase$1);
              var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                        /* hi */0,
                        /* lo */8
                      ], match$5[1]), wbase$1);
              var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                        /* hi */214748364,
                        /* lo */3435973836
                      ], match$5[0]), match$6[0]);
              var modulus$2 = match$6[1];
              s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
              while(Caml_int64.neq(quotient$2, /* int64 */[
                      /* hi */0,
                      /* lo */0
                    ])) {
                var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
                quotient$2 = match$7[0];
                modulus$2 = match$7[1];
                s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
              };
            } else {
              var match$8 = Caml_int64.div_mod(x$1, wbase$1);
              var quotient$3 = match$8[0];
              var modulus$3 = match$8[1];
              s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
              while(Caml_int64.neq(quotient$3, /* int64 */[
                      /* hi */0,
                      /* lo */0
                    ])) {
                var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
                quotient$3 = match$9[0];
                modulus$3 = match$9[1];
                s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
              };
            }
            break;
        
      }
      if (f[/* prec */9] >= 0) {
        f[/* filter */2] = " ";
        var n = f[/* prec */9] - s.length | 0;
        if (n > 0) {
          s = Caml_utils.repeat(n, "0") + s;
        }
        
      }
      return finish_formatting(f, s);
    }
    
    function caml_format_float(fmt, x) {
      var f = parse_format(fmt);
      var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
      var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
      var s = "";
      if (isNaN(x$1)) {
        s = "nan";
        f[/* filter */2] = " ";
      } else if (isFinite(x$1)) {
        var match = f[/* conv */10];
        switch (match) {
          case "e" : 
              s = x$1.toExponential(prec);
              var i = s.length;
              if (s[i - 3 | 0] === "e") {
                s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
              }
              break;
          case "f" : 
              s = x$1.toFixed(prec);
              break;
          case "g" : 
              var prec$1 = prec !== 0 ? prec : 1;
              s = x$1.toExponential(prec$1 - 1 | 0);
              var j = s.indexOf("e");
              var exp = Number(s.slice(j + 1 | 0)) | 0;
              if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
                var i$1 = j - 1 | 0;
                while(s[i$1] === "0") {
                  i$1 = i$1 - 1 | 0;
                };
                if (s[i$1] === ".") {
                  i$1 = i$1 - 1 | 0;
                }
                s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
                var i$2 = s.length;
                if (s[i$2 - 3 | 0] === "e") {
                  s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
                }
                
              } else {
                var p = prec$1;
                if (exp < 0) {
                  p = p - (exp + 1 | 0) | 0;
                  s = x$1.toFixed(p);
                } else {
                  while((function () {
                          s = x$1.toFixed(p);
                          return +(s.length > (prec$1 + 1 | 0));
                        })()) {
                    p = p - 1 | 0;
                  };
                }
                if (p !== 0) {
                  var k = s.length - 1 | 0;
                  while(s[k] === "0") {
                    k = k - 1 | 0;
                  };
                  if (s[k] === ".") {
                    k = k - 1 | 0;
                  }
                  s = s.slice(0, k + 1 | 0);
                }
                
              }
              break;
          default:
            
        }
      } else {
        s = "inf";
        f[/* filter */2] = " ";
      }
      return finish_formatting(f, s);
    }
    
    var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    ;
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);
    
    function caml_float_of_string(s) {
      return Curry._2(float_of_string, s, caml_failwith);
    }
    
    var caml_nativeint_format = caml_format_int;
    
    var caml_int32_format = caml_format_int;
    
    var caml_int32_of_string = caml_int_of_string;
    
    var caml_nativeint_of_string = caml_int_of_string;
    
    exports.caml_format_float = caml_format_float;
    exports.caml_format_int = caml_format_int;
    exports.caml_nativeint_format = caml_nativeint_format;
    exports.caml_int32_format = caml_int32_format;
    exports.caml_float_of_string = caml_float_of_string;
    exports.caml_int64_format = caml_int64_format;
    exports.caml_int_of_string = caml_int_of_string;
    exports.caml_int32_of_string = caml_int32_of_string;
    exports.caml_int64_of_string = caml_int64_of_string;
    exports.caml_nativeint_of_string = caml_nativeint_of_string;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* float_of_string Not a pure module */


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_exceptions){
    'use strict';
    var UnknownNameException = Caml_exceptions.create("Names.UnknownNameException");
    
    function constantName() {
      return "Pi";
    }
    
    function unaryOperatorName(param) {
      if (param !== 0) {
        return "Floor";
      } else {
        return "Ln";
      }
    }
    
    function binaryOperatorName(param) {
      switch (param) {
        case 0 : 
            return "Add";
        case 1 : 
            return "Sub";
        case 2 : 
            return "Mul";
        case 3 : 
            return "Div";
        
      }
    }
    
    function typeName() {
      return "Number";
    }
    
    function constantByName(name) {
      if (name === "Pi") {
        return /* Pi */0;
      } else {
        throw [
              UnknownNameException,
              "Constant " + name
            ];
      }
    }
    
    function unaryOperatorByName(name) {
      switch (name) {
        case "Floor" : 
            return /* Floor */1;
        case "Ln" : 
            return /* Ln */0;
        default:
          throw [
                UnknownNameException,
                "Unary operator " + name
              ];
      }
    }
    
    function binaryOperatorByName(name) {
      switch (name) {
        case "Add" : 
            return /* Add */0;
        case "Div" : 
            return /* Div */3;
        case "Mul" : 
            return /* Mul */2;
        case "Sub" : 
            return /* Sub */1;
        default:
          throw [
                UnknownNameException,
                "Binary operator " + name
              ];
      }
    }
    
    exports.UnknownNameException = UnknownNameException;
    exports.constantName = constantName;
    exports.unaryOperatorName = unaryOperatorName;
    exports.binaryOperatorName = binaryOperatorName;
    exports.typeName = typeName;
    exports.constantByName = constantByName;
    exports.unaryOperatorByName = unaryOperatorByName;
    exports.binaryOperatorByName = binaryOperatorByName;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(20), __webpack_require__(8), __webpack_require__(1), __webpack_require__(10), __webpack_require__(7), __webpack_require__(5), __webpack_require__(6), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Char, List, Curry, Caml_obj, Caml_int32, Caml_string, Caml_primitive, Caml_builtin_exceptions){
    'use strict';
    function make(n, c) {
      var s = Caml_string.caml_create_string(n);
      Caml_string.caml_fill_string(s, 0, n, c);
      return s;
    }
    
    function init(n, f) {
      var s = Caml_string.caml_create_string(n);
      for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
        s[i] = Curry._1(f, i);
      }
      return s;
    }
    
    var empty = [];
    
    function copy(s) {
      var len = s.length;
      var r = Caml_string.caml_create_string(len);
      Caml_string.caml_blit_bytes(s, 0, r, 0, len);
      return r;
    }
    
    function to_string(b) {
      return Caml_string.bytes_to_string(copy(b));
    }
    
    function of_string(s) {
      return copy(Caml_string.bytes_of_string(s));
    }
    
    function sub(s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.sub / Bytes.sub"
            ];
      } else {
        var r = Caml_string.caml_create_string(len);
        Caml_string.caml_blit_bytes(s, ofs, r, 0, len);
        return r;
      }
    }
    
    function sub_string(b, ofs, len) {
      return Caml_string.bytes_to_string(sub(b, ofs, len));
    }
    
    function extend(s, left, right) {
      var len = (s.length + left | 0) + right | 0;
      var r = Caml_string.caml_create_string(len);
      var match = left < 0 ? /* tuple */[
          -left | 0,
          0
        ] : /* tuple */[
          0,
          left
        ];
      var dstoff = match[1];
      var srcoff = match[0];
      var cpylen = Caml_primitive.caml_int_min(s.length - srcoff | 0, len - dstoff | 0);
      if (cpylen > 0) {
        Caml_string.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
      }
      return r;
    }
    
    function fill(s, ofs, len, c) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.fill / Bytes.fill"
            ];
      } else {
        return Caml_string.caml_fill_string(s, ofs, len, c);
      }
    }
    
    function blit(s1, ofs1, s2, ofs2, len) {
      if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Bytes.blit"
            ];
      } else {
        return Caml_string.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
      }
    }
    
    function blit_string(s1, ofs1, s2, ofs2, len) {
      if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.blit / Bytes.blit_string"
            ];
      } else {
        return Caml_string.caml_blit_string(s1, ofs1, s2, ofs2, len);
      }
    }
    
    function iter(f, a) {
      for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
        Curry._1(f, a[i]);
      }
      return /* () */0;
    }
    
    function iteri(f, a) {
      for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
        Curry._2(f, i, a[i]);
      }
      return /* () */0;
    }
    
    function concat(sep, l) {
      if (l) {
        var hd = l[0];
        var num = [0];
        var len = [0];
        List.iter((function (s) {
                num[0] = num[0] + 1 | 0;
                len[0] = len[0] + s.length | 0;
                return /* () */0;
              }), l);
        var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
        Caml_string.caml_blit_bytes(hd, 0, r, 0, hd.length);
        var pos = [hd.length];
        List.iter((function (s) {
                Caml_string.caml_blit_bytes(sep, 0, r, pos[0], sep.length);
                pos[0] = pos[0] + sep.length | 0;
                Caml_string.caml_blit_bytes(s, 0, r, pos[0], s.length);
                pos[0] = pos[0] + s.length | 0;
                return /* () */0;
              }), l[1]);
        return r;
      } else {
        return empty;
      }
    }
    
    function cat(a, b) {
      return a.concat(b);
    }
    
    function is_space(param) {
      var switcher = param - 9 | 0;
      if (switcher > 4 || switcher < 0) {
        if (switcher !== 23) {
          return /* false */0;
        } else {
          return /* true */1;
        }
      } else if (switcher !== 2) {
        return /* true */1;
      } else {
        return /* false */0;
      }
    }
    
    function trim(s) {
      var len = s.length;
      var i = 0;
      while(i < len && is_space(s[i])) {
        i = i + 1 | 0;
      };
      var j = len - 1 | 0;
      while(j >= i && is_space(s[j])) {
        j = j - 1 | 0;
      };
      if (j >= i) {
        return sub(s, i, (j - i | 0) + 1 | 0);
      } else {
        return empty;
      }
    }
    
    function escaped(s) {
      var n = 0;
      for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
        var match = s[i];
        var tmp;
        if (match >= 32) {
          var switcher = match - 34 | 0;
          tmp = switcher > 58 || switcher < 0 ? (
              switcher >= 93 ? 4 : 1
            ) : (
              switcher > 57 || switcher < 1 ? 2 : 1
            );
        } else {
          tmp = match >= 11 ? (
              match !== 13 ? 4 : 2
            ) : (
              match >= 8 ? 2 : 4
            );
        }
        n = n + tmp | 0;
      }
      if (n === s.length) {
        return copy(s);
      } else {
        var s$prime = Caml_string.caml_create_string(n);
        n = 0;
        for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
          var c = s[i$1];
          var exit = 0;
          if (c >= 35) {
            if (c !== 92) {
              if (c >= 127) {
                exit = 1;
              } else {
                s$prime[n] = c;
              }
            } else {
              exit = 2;
            }
          } else if (c >= 32) {
            if (c >= 34) {
              exit = 2;
            } else {
              s$prime[n] = c;
            }
          } else if (c >= 14) {
            exit = 1;
          } else {
            switch (c) {
              case 8 : 
                  s$prime[n] = /* "\\" */92;
                  n = n + 1 | 0;
                  s$prime[n] = /* "b" */98;
                  break;
              case 9 : 
                  s$prime[n] = /* "\\" */92;
                  n = n + 1 | 0;
                  s$prime[n] = /* "t" */116;
                  break;
              case 10 : 
                  s$prime[n] = /* "\\" */92;
                  n = n + 1 | 0;
                  s$prime[n] = /* "n" */110;
                  break;
              case 0 : 
              case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 11 : 
              case 12 : 
                  exit = 1;
                  break;
              case 13 : 
                  s$prime[n] = /* "\\" */92;
                  n = n + 1 | 0;
                  s$prime[n] = /* "r" */114;
                  break;
              
            }
          }
          switch (exit) {
            case 1 : 
                s$prime[n] = /* "\\" */92;
                n = n + 1 | 0;
                s$prime[n] = 48 + (c / 100 | 0) | 0;
                n = n + 1 | 0;
                s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
                n = n + 1 | 0;
                s$prime[n] = 48 + c % 10 | 0;
                break;
            case 2 : 
                s$prime[n] = /* "\\" */92;
                n = n + 1 | 0;
                s$prime[n] = c;
                break;
            
          }
          n = n + 1 | 0;
        }
        return s$prime;
      }
    }
    
    function map(f, s) {
      var l = s.length;
      if (l) {
        var r = Caml_string.caml_create_string(l);
        for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
          r[i] = Curry._1(f, s[i]);
        }
        return r;
      } else {
        return s;
      }
    }
    
    function mapi(f, s) {
      var l = s.length;
      if (l) {
        var r = Caml_string.caml_create_string(l);
        for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
          r[i] = Curry._2(f, i, s[i]);
        }
        return r;
      } else {
        return s;
      }
    }
    
    function uppercase(s) {
      return map(Char.uppercase, s);
    }
    
    function lowercase(s) {
      return map(Char.lowercase, s);
    }
    
    function apply1(f, s) {
      if (s.length) {
        var r = copy(s);
        r[0] = Curry._1(f, s[0]);
        return r;
      } else {
        return s;
      }
    }
    
    function capitalize(s) {
      return apply1(Char.uppercase, s);
    }
    
    function uncapitalize(s) {
      return apply1(Char.lowercase, s);
    }
    
    function index_rec(s, lim, _i, c) {
      while(true) {
        var i = _i;
        if (i >= lim) {
          throw Caml_builtin_exceptions.not_found;
        } else if (s[i] === c) {
          return i;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      };
    }
    
    function index(s, c) {
      return index_rec(s, s.length, 0, c);
    }
    
    function index_from(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.index_from / Bytes.index_from"
            ];
      } else {
        return index_rec(s, l, i, c);
      }
    }
    
    function rindex_rec(s, _i, c) {
      while(true) {
        var i = _i;
        if (i < 0) {
          throw Caml_builtin_exceptions.not_found;
        } else if (s[i] === c) {
          return i;
        } else {
          _i = i - 1 | 0;
          continue ;
          
        }
      };
    }
    
    function rindex(s, c) {
      return rindex_rec(s, s.length - 1 | 0, c);
    }
    
    function rindex_from(s, i, c) {
      if (i < -1 || i >= s.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.rindex_from / Bytes.rindex_from"
            ];
      } else {
        return rindex_rec(s, i, c);
      }
    }
    
    function contains_from(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.contains_from / Bytes.contains_from"
            ];
      } else {
        try {
          index_rec(s, l, i, c);
          return /* true */1;
        }
        catch (exn){
          if (exn === Caml_builtin_exceptions.not_found) {
            return /* false */0;
          } else {
            throw exn;
          }
        }
      }
    }
    
    function contains(s, c) {
      return contains_from(s, 0, c);
    }
    
    function rcontains_from(s, i, c) {
      if (i < 0 || i >= s.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "String.rcontains_from / Bytes.rcontains_from"
            ];
      } else {
        try {
          rindex_rec(s, i, c);
          return /* true */1;
        }
        catch (exn){
          if (exn === Caml_builtin_exceptions.not_found) {
            return /* false */0;
          } else {
            throw exn;
          }
        }
      }
    }
    
    var compare = Caml_obj.caml_compare;
    
    var unsafe_to_string = Caml_string.bytes_to_string;
    
    var unsafe_of_string = Caml_string.bytes_of_string;
    
    exports.make = make;
    exports.init = init;
    exports.empty = empty;
    exports.copy = copy;
    exports.of_string = of_string;
    exports.to_string = to_string;
    exports.sub = sub;
    exports.sub_string = sub_string;
    exports.extend = extend;
    exports.fill = fill;
    exports.blit = blit;
    exports.blit_string = blit_string;
    exports.concat = concat;
    exports.cat = cat;
    exports.iter = iter;
    exports.iteri = iteri;
    exports.map = map;
    exports.mapi = mapi;
    exports.trim = trim;
    exports.escaped = escaped;
    exports.index = index;
    exports.rindex = rindex;
    exports.index_from = index_from;
    exports.rindex_from = rindex_from;
    exports.contains = contains;
    exports.contains_from = contains_from;
    exports.rcontains_from = rcontains_from;
    exports.uppercase = uppercase;
    exports.lowercase = lowercase;
    exports.capitalize = capitalize;
    exports.uncapitalize = uncapitalize;
    exports.compare = compare;
    exports.unsafe_to_string = unsafe_to_string;
    exports.unsafe_of_string = unsafe_of_string;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_exceptions){
    'use strict';
    var $$Error = Caml_exceptions.create("Js_exn.Error");
    
    function internalToOCamlException(e) {
      if (Caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
        return e;
      } else {
        return [
                $$Error,
                e
              ];
      }
    }
    
    function raiseError(str) {
      throw new Error(str);
    }
    
    function raiseEvalError(str) {
      throw new EvalError(str);
    }
    
    function raiseRangeError(str) {
      throw new RangeError(str);
    }
    
    function raiseReferenceError(str) {
      throw new ReferenceError(str);
    }
    
    function raiseSyntaxError(str) {
      throw new SyntaxError(str);
    }
    
    function raiseTypeError(str) {
      throw new TypeError(str);
    }
    
    function raiseUriError(str) {
      throw new URIError(str);
    }
    
    exports.$$Error = $$Error;
    exports.internalToOCamlException = internalToOCamlException;
    exports.raiseError = raiseError;
    exports.raiseEvalError = raiseEvalError;
    exports.raiseRangeError = raiseRangeError;
    exports.raiseReferenceError = raiseReferenceError;
    exports.raiseSyntaxError = raiseSyntaxError;
    exports.raiseTypeError = raiseTypeError;
    exports.raiseUriError = raiseUriError;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_builtin_exceptions){
    'use strict';
    function caml_array_sub(x, offset, len) {
      var result = new Array(len);
      var j = 0;
      var i = offset;
      while(j < len) {
        result[j] = x[i];
        j = j + 1 | 0;
        i = i + 1 | 0;
      };
      return result;
    }
    
    function len(_acc, _l) {
      while(true) {
        var l = _l;
        var acc = _acc;
        if (l) {
          _l = l[1];
          _acc = l[0].length + acc | 0;
          continue ;
          
        } else {
          return acc;
        }
      };
    }
    
    function fill(arr, _i, _l) {
      while(true) {
        var l = _l;
        var i = _i;
        if (l) {
          var x = l[0];
          var l$1 = x.length;
          var k = i;
          var j = 0;
          while(j < l$1) {
            arr[k] = x[j];
            k = k + 1 | 0;
            j = j + 1 | 0;
          };
          _l = l[1];
          _i = k;
          continue ;
          
        } else {
          return /* () */0;
        }
      };
    }
    
    function caml_array_concat(l) {
      var v = len(0, l);
      var result = new Array(v);
      fill(result, 0, l);
      return result;
    }
    
    function caml_array_set(xs, index, newval) {
      if (index < 0 || index >= xs.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "index out of bounds"
            ];
      } else {
        xs[index] = newval;
        return /* () */0;
      }
    }
    
    function caml_array_get(xs, index) {
      if (index < 0 || index >= xs.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "index out of bounds"
            ];
      } else {
        return xs[index];
      }
    }
    
    function caml_make_vect(len, init) {
      var b = new Array(len);
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        b[i] = init;
      }
      return b;
    }
    
    function caml_array_blit(a1, i1, a2, i2, len) {
      if (i2 <= i1) {
        for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
          a2[j + i2 | 0] = a1[j + i1 | 0];
        }
        return /* () */0;
      } else {
        for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
          a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
        }
        return /* () */0;
      }
    }
    
    exports.caml_array_sub = caml_array_sub;
    exports.caml_array_concat = caml_array_concat;
    exports.caml_make_vect = caml_make_vect;
    exports.caml_array_blit = caml_array_blit;
    exports.caml_array_get = caml_array_get;
    exports.caml_array_set = caml_array_set;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Curry, Caml_builtin_exceptions){
    'use strict';
    function $caret(prim, prim$1) {
      return prim + prim$1;
    }
    
    var stdout = /* record */[
      /* buffer */"",
      /* output */(function (_, s) {
          var v = s.length - 1 | 0;
          if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
            return ( process.stdout.write )(s);
          } else if (s[v] === "\n") {
            console.log(s.slice(0, v));
            return /* () */0;
          } else {
            console.log(s);
            return /* () */0;
          }
        })
    ];
    
    var stderr = /* record */[
      /* buffer */"",
      /* output */(function (_, s) {
          var v = s.length - 1 | 0;
          if (s[v] === "\n") {
            console.log(s.slice(0, v));
            return /* () */0;
          } else {
            console.log(s);
            return /* () */0;
          }
        })
    ];
    
    function caml_ml_open_descriptor_in() {
      throw [
            Caml_builtin_exceptions.failure,
            "caml_ml_open_descriptor_in not implemented"
          ];
    }
    
    function caml_ml_open_descriptor_out() {
      throw [
            Caml_builtin_exceptions.failure,
            "caml_ml_open_descriptor_out not implemented"
          ];
    }
    
    function caml_ml_flush(oc) {
      if (oc[/* buffer */0] !== "") {
        Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
        oc[/* buffer */0] = "";
        return /* () */0;
      } else {
        return 0;
      }
    }
    
    var node_std_output = (function (s){
   return (typeof process !== "undefined") && process.stdout && (process.stdout.write(s), true);
   }
);
    
    function caml_ml_output(oc, str, offset, len) {
      var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
        return ( process.stdout.write )(str$1);
      } else {
        var id = str$1.lastIndexOf("\n");
        if (id < 0) {
          oc[/* buffer */0] = oc[/* buffer */0] + str$1;
          return /* () */0;
        } else {
          oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
          caml_ml_flush(oc);
          oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
          return /* () */0;
        }
      }
    }
    
    function caml_ml_output_char(oc, $$char) {
      return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
    }
    
    function caml_ml_input(_, _$1, _$2, _$3) {
      throw [
            Caml_builtin_exceptions.failure,
            "caml_ml_input ic not implemented"
          ];
    }
    
    function caml_ml_input_char() {
      throw [
            Caml_builtin_exceptions.failure,
            "caml_ml_input_char not implemnted"
          ];
    }
    
    function caml_ml_out_channels_list() {
      return /* :: */[
              stdout,
              /* :: */[
                stderr,
                /* [] */0
              ]
            ];
    }
    
    var stdin = undefined;
    
    exports.$caret = $caret;
    exports.stdin = stdin;
    exports.stdout = stdout;
    exports.stderr = stderr;
    exports.caml_ml_open_descriptor_in = caml_ml_open_descriptor_in;
    exports.caml_ml_open_descriptor_out = caml_ml_open_descriptor_out;
    exports.caml_ml_flush = caml_ml_flush;
    exports.node_std_output = node_std_output;
    exports.caml_ml_output = caml_ml_output;
    exports.caml_ml_output_char = caml_ml_output_char;
    exports.caml_ml_input = caml_ml_input;
    exports.caml_ml_input_char = caml_ml_input_char;
    exports.caml_ml_out_channels_list = caml_ml_out_channels_list;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* node_std_output Not a pure module */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);
    
    exports.repeat = repeat;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* repeat Not a pure module */


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Block){
    'use strict';
    function erase_rel(param) {
      if (typeof param === "number") {
        return /* End_of_fmtty */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              return /* Char_ty */Block.__(0, [erase_rel(param[0])]);
          case 1 : 
              return /* String_ty */Block.__(1, [erase_rel(param[0])]);
          case 2 : 
              return /* Int_ty */Block.__(2, [erase_rel(param[0])]);
          case 3 : 
              return /* Int32_ty */Block.__(3, [erase_rel(param[0])]);
          case 4 : 
              return /* Nativeint_ty */Block.__(4, [erase_rel(param[0])]);
          case 5 : 
              return /* Int64_ty */Block.__(5, [erase_rel(param[0])]);
          case 6 : 
              return /* Float_ty */Block.__(6, [erase_rel(param[0])]);
          case 7 : 
              return /* Bool_ty */Block.__(7, [erase_rel(param[0])]);
          case 8 : 
              return /* Format_arg_ty */Block.__(8, [
                        param[0],
                        erase_rel(param[1])
                      ]);
          case 9 : 
              var ty1 = param[0];
              return /* Format_subst_ty */Block.__(9, [
                        ty1,
                        ty1,
                        erase_rel(param[2])
                      ]);
          case 10 : 
              return /* Alpha_ty */Block.__(10, [erase_rel(param[0])]);
          case 11 : 
              return /* Theta_ty */Block.__(11, [erase_rel(param[0])]);
          case 12 : 
              return /* Any_ty */Block.__(12, [erase_rel(param[0])]);
          case 13 : 
              return /* Reader_ty */Block.__(13, [erase_rel(param[0])]);
          case 14 : 
              return /* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])]);
          
        }
      }
    }
    
    function concat_fmtty(fmtty1, fmtty2) {
      if (typeof fmtty1 === "number") {
        return fmtty2;
      } else {
        switch (fmtty1.tag | 0) {
          case 0 : 
              return /* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 1 : 
              return /* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 2 : 
              return /* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 3 : 
              return /* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 4 : 
              return /* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 5 : 
              return /* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 6 : 
              return /* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 7 : 
              return /* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 8 : 
              return /* Format_arg_ty */Block.__(8, [
                        fmtty1[0],
                        concat_fmtty(fmtty1[1], fmtty2)
                      ]);
          case 9 : 
              return /* Format_subst_ty */Block.__(9, [
                        fmtty1[0],
                        fmtty1[1],
                        concat_fmtty(fmtty1[2], fmtty2)
                      ]);
          case 10 : 
              return /* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 11 : 
              return /* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 12 : 
              return /* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 13 : 
              return /* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
          case 14 : 
              return /* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
          
        }
      }
    }
    
    function concat_fmt(fmt1, fmt2) {
      if (typeof fmt1 === "number") {
        return fmt2;
      } else {
        switch (fmt1.tag | 0) {
          case 0 : 
              return /* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)]);
          case 1 : 
              return /* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)]);
          case 2 : 
              return /* String */Block.__(2, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 3 : 
              return /* Caml_string */Block.__(3, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 4 : 
              return /* Int */Block.__(4, [
                        fmt1[0],
                        fmt1[1],
                        fmt1[2],
                        concat_fmt(fmt1[3], fmt2)
                      ]);
          case 5 : 
              return /* Int32 */Block.__(5, [
                        fmt1[0],
                        fmt1[1],
                        fmt1[2],
                        concat_fmt(fmt1[3], fmt2)
                      ]);
          case 6 : 
              return /* Nativeint */Block.__(6, [
                        fmt1[0],
                        fmt1[1],
                        fmt1[2],
                        concat_fmt(fmt1[3], fmt2)
                      ]);
          case 7 : 
              return /* Int64 */Block.__(7, [
                        fmt1[0],
                        fmt1[1],
                        fmt1[2],
                        concat_fmt(fmt1[3], fmt2)
                      ]);
          case 8 : 
              return /* Float */Block.__(8, [
                        fmt1[0],
                        fmt1[1],
                        fmt1[2],
                        concat_fmt(fmt1[3], fmt2)
                      ]);
          case 9 : 
              return /* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)]);
          case 10 : 
              return /* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)]);
          case 11 : 
              return /* String_literal */Block.__(11, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 12 : 
              return /* Char_literal */Block.__(12, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 13 : 
              return /* Format_arg */Block.__(13, [
                        fmt1[0],
                        fmt1[1],
                        concat_fmt(fmt1[2], fmt2)
                      ]);
          case 14 : 
              return /* Format_subst */Block.__(14, [
                        fmt1[0],
                        fmt1[1],
                        concat_fmt(fmt1[2], fmt2)
                      ]);
          case 15 : 
              return /* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)]);
          case 16 : 
              return /* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)]);
          case 17 : 
              return /* Formatting_lit */Block.__(17, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 18 : 
              return /* Formatting_gen */Block.__(18, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 19 : 
              return /* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)]);
          case 20 : 
              return /* Scan_char_set */Block.__(20, [
                        fmt1[0],
                        fmt1[1],
                        concat_fmt(fmt1[2], fmt2)
                      ]);
          case 21 : 
              return /* Scan_get_counter */Block.__(21, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 22 : 
              return /* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)]);
          case 23 : 
              return /* Ignored_param */Block.__(23, [
                        fmt1[0],
                        concat_fmt(fmt1[1], fmt2)
                      ]);
          case 24 : 
              return /* Custom */Block.__(24, [
                        fmt1[0],
                        fmt1[1],
                        concat_fmt(fmt1[2], fmt2)
                      ]);
          
        }
      }
    }
    
    exports.concat_fmtty = concat_fmtty;
    exports.erase_rel = erase_rel;
    exports.concat_fmt = concat_fmt;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_string, Caml_builtin_exceptions){
    'use strict';
    function chr(n) {
      if (n < 0 || n > 255) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Char.chr"
            ];
      } else {
        return n;
      }
    }
    
    function escaped(c) {
      var exit = 0;
      if (c >= 40) {
        if (c !== 92) {
          exit = c >= 127 ? 1 : 2;
        } else {
          return "\\\\";
        }
      } else if (c >= 32) {
        if (c >= 39) {
          return "\\'";
        } else {
          exit = 2;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              return "\\b";
          case 9 : 
              return "\\t";
          case 10 : 
              return "\\n";
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              return "\\r";
          
        }
      }
      switch (exit) {
        case 1 : 
            var s = new Array(4);
            s[0] = /* "\\" */92;
            s[1] = 48 + (c / 100 | 0) | 0;
            s[2] = 48 + (c / 10 | 0) % 10 | 0;
            s[3] = 48 + c % 10 | 0;
            return Caml_string.bytes_to_string(s);
        case 2 : 
            var s$1 = new Array(1);
            s$1[0] = c;
            return Caml_string.bytes_to_string(s$1);
        
      }
    }
    
    function lowercase(c) {
      if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
        return c + 32 | 0;
      } else {
        return c;
      }
    }
    
    function uppercase(c) {
      if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
        return c - 32 | 0;
      } else {
        return c;
      }
    }
    
    function compare(c1, c2) {
      return c1 - c2 | 0;
    }
    
    exports.chr = chr;
    exports.escaped = escaped;
    exports.lowercase = lowercase;
    exports.uppercase = uppercase;
    exports.compare = compare;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13), __webpack_require__(1), __webpack_require__(9), __webpack_require__(4), __webpack_require__(5), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Bytes, Curry, $$String, Pervasives, Caml_string, Caml_builtin_exceptions){
    'use strict';
    function create(n) {
      var n$1 = n < 1 ? 1 : n;
      var s = Caml_string.caml_create_string(n$1);
      return /* record */[
              /* buffer */s,
              /* position */0,
              /* length */n$1,
              /* initial_buffer */s
            ];
    }
    
    function contents(b) {
      return Bytes.sub_string(b[/* buffer */0], 0, b[/* position */1]);
    }
    
    function to_bytes(b) {
      return Bytes.sub(b[/* buffer */0], 0, b[/* position */1]);
    }
    
    function sub(b, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (b[/* position */1] - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Buffer.sub"
            ];
      } else {
        return Bytes.sub_string(b[/* buffer */0], ofs, len);
      }
    }
    
    function blit(src, srcoff, dst, dstoff, len) {
      if (len < 0 || srcoff < 0 || srcoff > (src[/* position */1] - len | 0) || dstoff < 0 || dstoff > (dst.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Buffer.blit"
            ];
      } else {
        return Bytes.blit(src[/* buffer */0], srcoff, dst, dstoff, len);
      }
    }
    
    function nth(b, ofs) {
      if (ofs < 0 || ofs >= b[/* position */1]) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Buffer.nth"
            ];
      } else {
        return b[/* buffer */0][ofs];
      }
    }
    
    function length(b) {
      return b[/* position */1];
    }
    
    function clear(b) {
      b[/* position */1] = 0;
      return /* () */0;
    }
    
    function reset(b) {
      b[/* position */1] = 0;
      b[/* buffer */0] = b[/* initial_buffer */3];
      b[/* length */2] = b[/* buffer */0].length;
      return /* () */0;
    }
    
    function resize(b, more) {
      var len = b[/* length */2];
      var new_len = len;
      while((b[/* position */1] + more | 0) > new_len) {
        new_len = (new_len << 1);
      };
      var new_buffer = Caml_string.caml_create_string(new_len);
      Bytes.blit(b[/* buffer */0], 0, new_buffer, 0, b[/* position */1]);
      b[/* buffer */0] = new_buffer;
      b[/* length */2] = new_len;
      return /* () */0;
    }
    
    function add_char(b, c) {
      var pos = b[/* position */1];
      if (pos >= b[/* length */2]) {
        resize(b, 1);
      }
      b[/* buffer */0][pos] = c;
      b[/* position */1] = pos + 1 | 0;
      return /* () */0;
    }
    
    function add_substring(b, s, offset, len) {
      if (offset < 0 || len < 0 || (offset + len | 0) > s.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Buffer.add_substring/add_subbytes"
            ];
      }
      var new_position = b[/* position */1] + len | 0;
      if (new_position > b[/* length */2]) {
        resize(b, len);
      }
      Bytes.blit_string(s, offset, b[/* buffer */0], b[/* position */1], len);
      b[/* position */1] = new_position;
      return /* () */0;
    }
    
    function add_subbytes(b, s, offset, len) {
      return add_substring(b, Caml_string.bytes_to_string(s), offset, len);
    }
    
    function add_string(b, s) {
      var len = s.length;
      var new_position = b[/* position */1] + len | 0;
      if (new_position > b[/* length */2]) {
        resize(b, len);
      }
      Bytes.blit_string(s, 0, b[/* buffer */0], b[/* position */1], len);
      b[/* position */1] = new_position;
      return /* () */0;
    }
    
    function add_bytes(b, s) {
      return add_string(b, Caml_string.bytes_to_string(s));
    }
    
    function add_buffer(b, bs) {
      return add_subbytes(b, bs[/* buffer */0], 0, bs[/* position */1]);
    }
    
    function add_channel(b, ic, len) {
      if (len < 0) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Buffer.add_channel"
            ];
      }
      if ((b[/* position */1] + len | 0) > b[/* length */2]) {
        resize(b, len);
      }
      Pervasives.really_input(ic, b[/* buffer */0], b[/* position */1], len);
      b[/* position */1] = b[/* position */1] + len | 0;
      return /* () */0;
    }
    
    function output_buffer(oc, b) {
      return Pervasives.output(oc, b[/* buffer */0], 0, b[/* position */1]);
    }
    
    function closing(param) {
      if (param !== 40) {
        if (param !== 123) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "buffer.ml",
                  126,
                  9
                ]
              ];
        } else {
          return /* "}" */125;
        }
      } else {
        return /* ")" */41;
      }
    }
    
    function advance_to_closing(opening, closing, k, s, start) {
      var _k = k;
      var _i = start;
      var lim = s.length;
      while(true) {
        var i = _i;
        var k$1 = _k;
        if (i >= lim) {
          throw Caml_builtin_exceptions.not_found;
        } else if (Caml_string.get(s, i) === opening) {
          _i = i + 1 | 0;
          _k = k$1 + 1 | 0;
          continue ;
          
        } else if (Caml_string.get(s, i) === closing) {
          if (k$1) {
            _i = i + 1 | 0;
            _k = k$1 - 1 | 0;
            continue ;
            
          } else {
            return i;
          }
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      };
    }
    
    function advance_to_non_alpha(s, start) {
      var _i = start;
      var lim = s.length;
      while(true) {
        var i = _i;
        if (i >= lim) {
          return lim;
        } else {
          var match = Caml_string.get(s, i);
          var exit = 0;
          if (match >= 91) {
            if (match >= 97) {
              if (match >= 123) {
                return i;
              } else {
                exit = 1;
              }
            } else if (match !== 95) {
              return i;
            } else {
              exit = 1;
            }
          } else if (match >= 58) {
            if (match >= 65) {
              exit = 1;
            } else {
              return i;
            }
          } else if (match >= 48) {
            exit = 1;
          } else {
            return i;
          }
          if (exit === 1) {
            _i = i + 1 | 0;
            continue ;
            
          }
          
        }
      };
    }
    
    function find_ident(s, start, lim) {
      if (start >= lim) {
        throw Caml_builtin_exceptions.not_found;
      } else {
        var c = Caml_string.get(s, start);
        var exit = 0;
        if (c !== 40) {
          if (c !== 123) {
            var stop = advance_to_non_alpha(s, start + 1 | 0);
            return /* tuple */[
                    $$String.sub(s, start, stop - start | 0),
                    stop
                  ];
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
        if (exit === 1) {
          var new_start = start + 1 | 0;
          var stop$1 = advance_to_closing(c, closing(c), 0, s, new_start);
          return /* tuple */[
                  $$String.sub(s, new_start, (stop$1 - start | 0) - 1 | 0),
                  stop$1 + 1 | 0
                ];
        }
        
      }
    }
    
    function add_substitute(b, f, s) {
      var lim = s.length;
      var _previous = /* " " */32;
      var _i = 0;
      while(true) {
        var i = _i;
        var previous = _previous;
        if (i < lim) {
          var current = Caml_string.get(s, i);
          if (current !== 36) {
            if (previous === /* "\\" */92) {
              add_char(b, /* "\\" */92);
              add_char(b, current);
              _i = i + 1 | 0;
              _previous = /* " " */32;
              continue ;
              
            } else if (current !== 92) {
              add_char(b, current);
              _i = i + 1 | 0;
              _previous = current;
              continue ;
              
            } else {
              _i = i + 1 | 0;
              _previous = current;
              continue ;
              
            }
          } else if (previous === /* "\\" */92) {
            add_char(b, current);
            _i = i + 1 | 0;
            _previous = /* " " */32;
            continue ;
            
          } else {
            var j = i + 1 | 0;
            var match = find_ident(s, j, lim);
            add_string(b, Curry._1(f, match[0]));
            _i = match[1];
            _previous = /* " " */32;
            continue ;
            
          }
        } else if (previous === /* "\\" */92) {
          return add_char(b, previous);
        } else {
          return 0;
        }
      };
    }
    
    exports.create = create;
    exports.contents = contents;
    exports.to_bytes = to_bytes;
    exports.sub = sub;
    exports.blit = blit;
    exports.nth = nth;
    exports.length = length;
    exports.clear = clear;
    exports.reset = reset;
    exports.add_char = add_char;
    exports.add_string = add_string;
    exports.add_bytes = add_bytes;
    exports.add_substring = add_substring;
    exports.add_subbytes = add_subbytes;
    exports.add_substitute = add_substitute;
    exports.add_buffer = add_buffer;
    exports.add_channel = add_channel;
    exports.output_buffer = output_buffer;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(12), __webpack_require__(26), __webpack_require__(27), __webpack_require__(14), __webpack_require__(30), __webpack_require__(31), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, List, Names, Types, Jquery, Js_exn, Revision, Serialize, Interpreter, PrettyPrint, ExampleProgram){
    'use strict';
    function log(message) {
      var logbox = Jquery.jquery("#logbox");
      var current = Jquery.val_get(logbox);
      Jquery.val_(/* `str */[
            5744817,
            current + (message + "\n")
          ], logbox);
      return /* () */0;
    }
    
    var currentProgram = [ExampleProgram.exampleProgram];
    
    Jquery.jquery("#encode").on("click", (function () {
            Jquery.val_(/* `str */[
                  5744817,
                  Serialize.serialize(currentProgram[0])
                ], Jquery.jquery("#encodedview"));
            return true;
          }));
    
    Jquery.jquery("#decode").on("click", (function () {
            try {
              currentProgram[0] = Serialize.deserialize(Jquery.val_get(Jquery.jquery("#encodedview")));
              Jquery.jquery("#prettyview").text(PrettyPrint.prettyPrintExpression(currentProgram[0]));
            }
            catch (raw_exn){
              var exn = Js_exn.internalToOCamlException(raw_exn);
              if (exn === Serialize.DecodingUnderrunError) {
                log("Decoding failed: ran out of tokens");
              } else if (exn[0] === Names.UnknownNameException) {
                log("Decoding failed: unknown " + exn[1]);
              } else {
                throw exn;
              }
            }
            return true;
          }));
    
    Jquery.jquery("#infer").on("click", (function () {
            log("Type: " + Names.typeName(Types.inferType(currentProgram[0])));
            return true;
          }));
    
    Jquery.jquery("#fill_hole").on("click", (function () {
            log("The following fragments fit in the hole:");
            List.iter((function (fragment) {
                    return log(PrettyPrint.prettyPrintExpression(fragment));
                  }), Types.whatFits(currentProgram[0], /* [] */0));
            return true;
          }));
    
    Jquery.jquery("#execute").on("click", (function () {
            try {
              log("Result: " + PrettyPrint.prettyPrintValue(Interpreter.evaluate(currentProgram[0])));
            }
            catch (raw_exn){
              var exn = Js_exn.internalToOCamlException(raw_exn);
              if (exn[0] === Interpreter.RuntimeException) {
                log("Runtime Exception: " + exn[1]);
              } else {
                throw exn;
              }
            }
            return true;
          }));
    
    Jquery.val_(/* `str */[
          5744817,
          ""
        ], Jquery.jquery("#logbox"));
    
    Jquery.jquery("#revision").text(Revision.gitRevision);
    
    Jquery.jquery("#prettyview").text(PrettyPrint.prettyPrintExpression(currentProgram[0]));
    
    Jquery.val_(/* `str */[
          5744817,
          Serialize.serialize(currentProgram[0])
        ], Jquery.jquery("#encodedview"));
    
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/*  Not a pure module */


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_builtin_exceptions){
    'use strict';
    function caml_sys_getenv(s) {
      var match = typeof (process) === "undefined" ? undefined : (process);
      if (match !== undefined) {
        var match$1 = match.env[s];
        if (match$1 !== undefined) {
          return match$1;
        } else {
          throw Caml_builtin_exceptions.not_found;
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    }
    
    function caml_sys_time() {
      var match = typeof (process) === "undefined" ? undefined : (process);
      if (match !== undefined) {
        return match.uptime();
      } else {
        return -1;
      }
    }
    
    function caml_sys_random_seed() {
      return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
    }
    
    function caml_sys_system_command() {
      return 127;
    }
    
    function caml_sys_getcwd() {
      var match = typeof (process) === "undefined" ? undefined : (process);
      if (match !== undefined) {
        return match.cwd();
      } else {
        return "/";
      }
    }
    
    function caml_sys_get_argv() {
      var match = typeof (process) === "undefined" ? undefined : (process);
      if (match !== undefined) {
        if (match.argv == null) {
          return /* tuple */[
                  "",
                  /* array */[""]
                ];
        } else {
          return /* tuple */[
                  match.argv[0],
                  match.argv
                ];
        }
      } else {
        return /* tuple */[
                "",
                /* array */[""]
              ];
      }
    }
    
    function caml_sys_exit(exit_code) {
      var match = typeof (process) === "undefined" ? undefined : (process);
      if (match !== undefined) {
        return match.exit(exit_code);
      } else {
        return /* () */0;
      }
    }
    
    function caml_sys_is_directory() {
      throw [
            Caml_builtin_exceptions.failure,
            "caml_sys_is_directory not implemented"
          ];
    }
    
    function caml_sys_file_exists() {
      throw [
            Caml_builtin_exceptions.failure,
            "caml_sys_file_exists not implemented"
          ];
    }
    
    exports.caml_sys_getenv = caml_sys_getenv;
    exports.caml_sys_time = caml_sys_time;
    exports.caml_sys_random_seed = caml_sys_random_seed;
    exports.caml_sys_system_command = caml_sys_system_command;
    exports.caml_sys_getcwd = caml_sys_getcwd;
    exports.caml_sys_get_argv = caml_sys_get_argv;
    exports.caml_sys_exit = caml_sys_exit;
    exports.caml_sys_is_directory = caml_sys_is_directory;
    exports.caml_sys_file_exists = caml_sys_file_exists;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(18), __webpack_require__(6), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_int32, Caml_utils, Caml_primitive, Caml_builtin_exceptions){
    'use strict';
    var min_int = /* record */[
      /* hi */-2147483648,
      /* lo */0
    ];
    
    var max_int = /* record */[
      /* hi */2147483647,
      /* lo */1
    ];
    
    var one = /* record */[
      /* hi */0,
      /* lo */1
    ];
    
    var zero = /* record */[
      /* hi */0,
      /* lo */0
    ];
    
    var neg_one = /* record */[
      /* hi */-1,
      /* lo */4294967295
    ];
    
    function neg_signed(x) {
      return +((x & 2147483648) !== 0);
    }
    
    function add(param, param$1) {
      var other_low_ = param$1[/* lo */1];
      var this_low_ = param[/* lo */1];
      var lo = this_low_ + other_low_ & 4294967295;
      var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
      var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
      return /* record */[
              /* hi */hi,
              /* lo */(lo >>> 0)
            ];
    }
    
    function not(param) {
      var hi = param[/* hi */0] ^ -1;
      var lo = param[/* lo */1] ^ -1;
      return /* record */[
              /* hi */hi,
              /* lo */(lo >>> 0)
            ];
    }
    
    function eq(x, y) {
      if (x[/* hi */0] === y[/* hi */0]) {
        return +(x[/* lo */1] === y[/* lo */1]);
      } else {
        return /* false */0;
      }
    }
    
    function equal_null(x, y) {
      if (y !== null) {
        return eq(x, y);
      } else {
        return /* false */0;
      }
    }
    
    function equal_undefined(x, y) {
      if (y !== undefined) {
        return eq(x, y);
      } else {
        return /* false */0;
      }
    }
    
    function equal_nullable(x, y) {
      if (y == null) {
        return /* false */0;
      } else {
        return eq(x, y);
      }
    }
    
    function neg(x) {
      if (eq(x, min_int)) {
        return min_int;
      } else {
        return add(not(x), one);
      }
    }
    
    function sub(x, y) {
      return add(x, neg(y));
    }
    
    function lsl_(x, numBits) {
      if (numBits) {
        var lo = x[/* lo */1];
        if (numBits >= 32) {
          return /* record */[
                  /* hi */(lo << (numBits - 32 | 0)),
                  /* lo */0
                ];
        } else {
          var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
          return /* record */[
                  /* hi */hi,
                  /* lo */((lo << numBits) >>> 0)
                ];
        }
      } else {
        return x;
      }
    }
    
    function lsr_(x, numBits) {
      if (numBits) {
        var hi = x[/* hi */0];
        var offset = numBits - 32 | 0;
        if (offset) {
          if (offset > 0) {
            var lo = (hi >>> offset);
            return /* record */[
                    /* hi */0,
                    /* lo */(lo >>> 0)
                  ];
          } else {
            var hi$1 = (hi >>> numBits);
            var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
            return /* record */[
                    /* hi */hi$1,
                    /* lo */(lo$1 >>> 0)
                  ];
          }
        } else {
          return /* record */[
                  /* hi */0,
                  /* lo */(hi >>> 0)
                ];
        }
      } else {
        return x;
      }
    }
    
    function asr_(x, numBits) {
      if (numBits) {
        var hi = x[/* hi */0];
        if (numBits < 32) {
          var hi$1 = (hi >> numBits);
          var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
          return /* record */[
                  /* hi */hi$1,
                  /* lo */(lo >>> 0)
                ];
        } else {
          var lo$1 = (hi >> (numBits - 32 | 0));
          return /* record */[
                  /* hi */hi >= 0 ? 0 : -1,
                  /* lo */(lo$1 >>> 0)
                ];
        }
      } else {
        return x;
      }
    }
    
    function is_zero(param) {
      if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
        return /* false */0;
      } else {
        return /* true */1;
      }
    }
    
    function mul(_this, _other) {
      while(true) {
        var other = _other;
        var $$this = _this;
        var exit = 0;
        var lo;
        var this_hi = $$this[/* hi */0];
        var exit$1 = 0;
        var exit$2 = 0;
        var exit$3 = 0;
        if (this_hi !== 0) {
          exit$3 = 4;
        } else if ($$this[/* lo */1] !== 0) {
          exit$3 = 4;
        } else {
          return zero;
        }
        if (exit$3 === 4) {
          if (other[/* hi */0] !== 0) {
            exit$2 = 3;
          } else if (other[/* lo */1] !== 0) {
            exit$2 = 3;
          } else {
            return zero;
          }
        }
        if (exit$2 === 3) {
          if (this_hi !== -2147483648) {
            exit$1 = 2;
          } else if ($$this[/* lo */1] !== 0) {
            exit$1 = 2;
          } else {
            lo = other[/* lo */1];
            exit = 1;
          }
        }
        if (exit$1 === 2) {
          var other_hi = other[/* hi */0];
          var lo$1 = $$this[/* lo */1];
          var exit$4 = 0;
          if (other_hi !== -2147483648) {
            exit$4 = 3;
          } else if (other[/* lo */1] !== 0) {
            exit$4 = 3;
          } else {
            lo = lo$1;
            exit = 1;
          }
          if (exit$4 === 3) {
            var other_lo = other[/* lo */1];
            if (this_hi < 0) {
              if (other_hi < 0) {
                _other = neg(other);
                _this = neg($$this);
                continue ;
                
              } else {
                return neg(mul(neg($$this), other));
              }
            } else if (other_hi < 0) {
              return neg(mul($$this, neg(other)));
            } else {
              var a48 = (this_hi >>> 16);
              var a32 = this_hi & 65535;
              var a16 = (lo$1 >>> 16);
              var a00 = lo$1 & 65535;
              var b48 = (other_hi >>> 16);
              var b32 = other_hi & 65535;
              var b16 = (other_lo >>> 16);
              var b00 = other_lo & 65535;
              var c48 = 0;
              var c32 = 0;
              var c16 = 0;
              var c00 = a00 * b00;
              c16 = (c00 >>> 16) + a16 * b00;
              c32 = (c16 >>> 16);
              c16 = (c16 & 65535) + a00 * b16;
              c32 = c32 + (c16 >>> 16) + a32 * b00;
              c48 = (c32 >>> 16);
              c32 = (c32 & 65535) + a16 * b16;
              c48 += (c32 >>> 16);
              c32 = (c32 & 65535) + a00 * b32;
              c48 += (c32 >>> 16);
              c32 = c32 & 65535;
              c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
              var hi = c32 | (c48 << 16);
              var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
              return /* record */[
                      /* hi */hi,
                      /* lo */(lo$2 >>> 0)
                    ];
            }
          }
          
        }
        if (exit === 1) {
          if ((lo & 1) === 0) {
            return zero;
          } else {
            return min_int;
          }
        }
        
      };
    }
    
    function swap(param) {
      var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
      var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
      return /* record */[
              /* hi */hi,
              /* lo */(lo >>> 0)
            ];
    }
    
    function xor(param, param$1) {
      return /* record */[
              /* hi */param[/* hi */0] ^ param$1[/* hi */0],
              /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
            ];
    }
    
    function or_(param, param$1) {
      return /* record */[
              /* hi */param[/* hi */0] | param$1[/* hi */0],
              /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
            ];
    }
    
    function and_(param, param$1) {
      return /* record */[
              /* hi */param[/* hi */0] & param$1[/* hi */0],
              /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
            ];
    }
    
    function ge(param, param$1) {
      var other_hi = param$1[/* hi */0];
      var hi = param[/* hi */0];
      if (hi > other_hi) {
        return /* true */1;
      } else if (hi < other_hi) {
        return /* false */0;
      } else {
        return +(param[/* lo */1] >= param$1[/* lo */1]);
      }
    }
    
    function neq(x, y) {
      return 1 - eq(x, y);
    }
    
    function lt(x, y) {
      return 1 - ge(x, y);
    }
    
    function gt(x, y) {
      if (x[/* hi */0] > y[/* hi */0]) {
        return /* true */1;
      } else if (x[/* hi */0] < y[/* hi */0]) {
        return /* false */0;
      } else {
        return +(x[/* lo */1] > y[/* lo */1]);
      }
    }
    
    function le(x, y) {
      return 1 - gt(x, y);
    }
    
    function min(x, y) {
      if (ge(x, y)) {
        return y;
      } else {
        return x;
      }
    }
    
    function max(x, y) {
      if (gt(x, y)) {
        return x;
      } else {
        return y;
      }
    }
    
    function to_float(param) {
      return param[/* hi */0] * (0x100000000) + param[/* lo */1];
    }
    
    var two_ptr_32_dbl = Math.pow(2, 32);
    
    var two_ptr_63_dbl = Math.pow(2, 63);
    
    var neg_two_ptr_63 = -Math.pow(2, 63);
    
    function of_float(x) {
      if (isNaN(x) || !isFinite(x)) {
        return zero;
      } else if (x <= neg_two_ptr_63) {
        return min_int;
      } else if (x + 1 >= two_ptr_63_dbl) {
        return max_int;
      } else if (x < 0) {
        return neg(of_float(-x));
      } else {
        var hi = x / two_ptr_32_dbl | 0;
        var lo = x % two_ptr_32_dbl | 0;
        return /* record */[
                /* hi */hi,
                /* lo */(lo >>> 0)
              ];
      }
    }
    
    function div(_self, _other) {
      while(true) {
        var other = _other;
        var self = _self;
        var self_hi = self[/* hi */0];
        var exit = 0;
        var exit$1 = 0;
        if (other[/* hi */0] !== 0) {
          exit$1 = 2;
        } else if (other[/* lo */1] !== 0) {
          exit$1 = 2;
        } else {
          throw Caml_builtin_exceptions.division_by_zero;
        }
        if (exit$1 === 2) {
          if (self_hi !== -2147483648) {
            if (self_hi !== 0) {
              exit = 1;
            } else if (self[/* lo */1] !== 0) {
              exit = 1;
            } else {
              return zero;
            }
          } else if (self[/* lo */1] !== 0) {
            exit = 1;
          } else if (eq(other, one) || eq(other, neg_one)) {
            return self;
          } else if (eq(other, min_int)) {
            return one;
          } else {
            var other_hi = other[/* hi */0];
            var half_this = asr_(self, 1);
            var approx = lsl_(div(half_this, other), 1);
            var exit$2 = 0;
            if (approx[/* hi */0] !== 0) {
              exit$2 = 3;
            } else if (approx[/* lo */1] !== 0) {
              exit$2 = 3;
            } else if (other_hi < 0) {
              return one;
            } else {
              return neg(one);
            }
            if (exit$2 === 3) {
              var y = mul(other, approx);
              var rem = add(self, neg(y));
              return add(approx, div(rem, other));
            }
            
          }
        }
        if (exit === 1) {
          var other_hi$1 = other[/* hi */0];
          var exit$3 = 0;
          if (other_hi$1 !== -2147483648) {
            exit$3 = 2;
          } else if (other[/* lo */1] !== 0) {
            exit$3 = 2;
          } else {
            return zero;
          }
          if (exit$3 === 2) {
            if (self_hi < 0) {
              if (other_hi$1 < 0) {
                _other = neg(other);
                _self = neg(self);
                continue ;
                
              } else {
                return neg(div(neg(self), other));
              }
            } else if (other_hi$1 < 0) {
              return neg(div(self, neg(other)));
            } else {
              var res = zero;
              var rem$1 = self;
              while(ge(rem$1, other)) {
                var approx$1 = Caml_primitive.caml_float_max(1, Math.floor(to_float(rem$1) / to_float(other)));
                var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
                var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
                var approxRes = of_float(approx$1);
                var approxRem = mul(approxRes, other);
                while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
                  approx$1 -= delta;
                  approxRes = of_float(approx$1);
                  approxRem = mul(approxRes, other);
                };
                if (is_zero(approxRes)) {
                  approxRes = one;
                }
                res = add(res, approxRes);
                rem$1 = add(rem$1, neg(approxRem));
              };
              return res;
            }
          }
          
        }
        
      };
    }
    
    function mod_(self, other) {
      var y = mul(div(self, other), other);
      return add(self, neg(y));
    }
    
    function div_mod(self, other) {
      var quotient = div(self, other);
      var y = mul(quotient, other);
      return /* tuple */[
              quotient,
              add(self, neg(y))
            ];
    }
    
    function compare(self, other) {
      var v = Caml_primitive.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
      if (v) {
        return v;
      } else {
        return Caml_primitive.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
      }
    }
    
    function of_int32(lo) {
      return /* record */[
              /* hi */lo < 0 ? -1 : 0,
              /* lo */(lo >>> 0)
            ];
    }
    
    function to_int32(x) {
      return x[/* lo */1] | 0;
    }
    
    function to_hex(x) {
      var aux = function (v) {
        return (v >>> 0).toString(16);
      };
      var match = x[/* hi */0];
      var match$1 = x[/* lo */1];
      var exit = 0;
      if (match !== 0) {
        exit = 1;
      } else if (match$1 !== 0) {
        exit = 1;
      } else {
        return "0";
      }
      if (exit === 1) {
        if (match$1 !== 0) {
          if (match !== 0) {
            var lo = aux(x[/* lo */1]);
            var pad = 8 - lo.length | 0;
            if (pad <= 0) {
              return aux(x[/* hi */0]) + lo;
            } else {
              return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
            }
          } else {
            return aux(x[/* lo */1]);
          }
        } else {
          return aux(x[/* hi */0]) + "00000000";
        }
      }
      
    }
    
    function discard_sign(x) {
      return /* record */[
              /* hi */2147483647 & x[/* hi */0],
              /* lo */x[/* lo */1]
            ];
    }
    
    function float_of_bits(x) {
      var int32 = new Int32Array(/* array */[
            x[/* lo */1],
            x[/* hi */0]
          ]);
      return new Float64Array(int32.buffer)[0];
    }
    
    function bits_of_float(x) {
      var u = new Float64Array(/* float array */[x]);
      var int32 = new Int32Array(u.buffer);
      var x$1 = int32[1];
      var hi = x$1;
      var x$2 = int32[0];
      var lo = x$2;
      return /* record */[
              /* hi */hi,
              /* lo */(lo >>> 0)
            ];
    }
    
    function get64(s, i) {
      var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
      var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
      return /* record */[
              /* hi */hi,
              /* lo */(lo >>> 0)
            ];
    }
    
    exports.min_int = min_int;
    exports.max_int = max_int;
    exports.one = one;
    exports.zero = zero;
    exports.not = not;
    exports.of_int32 = of_int32;
    exports.to_int32 = to_int32;
    exports.add = add;
    exports.neg = neg;
    exports.sub = sub;
    exports.lsl_ = lsl_;
    exports.lsr_ = lsr_;
    exports.asr_ = asr_;
    exports.is_zero = is_zero;
    exports.mul = mul;
    exports.xor = xor;
    exports.or_ = or_;
    exports.and_ = and_;
    exports.swap = swap;
    exports.ge = ge;
    exports.eq = eq;
    exports.neq = neq;
    exports.lt = lt;
    exports.gt = gt;
    exports.le = le;
    exports.equal_null = equal_null;
    exports.equal_undefined = equal_undefined;
    exports.equal_nullable = equal_nullable;
    exports.min = min;
    exports.max = max;
    exports.to_float = to_float;
    exports.of_float = of_float;
    exports.div = div;
    exports.mod_ = mod_;
    exports.div_mod = div_mod;
    exports.compare = compare;
    exports.to_hex = to_hex;
    exports.discard_sign = discard_sign;
    exports.float_of_bits = float_of_bits;
    exports.bits_of_float = bits_of_float;
    exports.get64 = get64;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* two_ptr_32_dbl Not a pure module */


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    var not_implemented = (function (s){ throw new Error(s)});
    
    exports.not_implemented = not_implemented;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* not_implemented Not a pure module */


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, List, Block){
    'use strict';
    function inferType() {
      return /* TNumber */0;
    }
    
    function fitsHole(_, _$1, _$2) {
      return /* true */1;
    }
    
    function whatFits(_, _$1) {
      return List.filter((function () {
                      return /* true */1;
                    }))(/* :: */[
                  /* Literal */Block.__(0, [/* Number */[0]]),
                  /* :: */[
                    /* Constant */Block.__(1, [/* Pi */0]),
                    /* :: */[
                      /* UnaryOp */Block.__(2, [
                          /* Ln */0,
                          /* Hole */0
                        ]),
                      /* :: */[
                        /* UnaryOp */Block.__(2, [
                            /* Floor */1,
                            /* Hole */0
                          ]),
                        /* :: */[
                          /* BinaryOp */Block.__(3, [
                              /* Add */0,
                              /* Hole */0,
                              /* Hole */0
                            ]),
                          /* :: */[
                            /* BinaryOp */Block.__(3, [
                                /* Sub */1,
                                /* Hole */0,
                                /* Hole */0
                              ]),
                            /* :: */[
                              /* BinaryOp */Block.__(3, [
                                  /* Mul */2,
                                  /* Hole */0,
                                  /* Hole */0
                                ]),
                              /* :: */[
                                /* BinaryOp */Block.__(3, [
                                    /* Div */3,
                                    /* Hole */0,
                                    /* Hole */0
                                  ]),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]);
    }
    
    exports.inferType = inferType;
    exports.fitsHole = fitsHole;
    exports.whatFits = whatFits;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(9), __webpack_require__(28), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, $$String, Jquery, Js_types){
    'use strict';
    function addClass(at, jq) {
      return jq.addClass(at[1]);
    }
    
    function attr_get(prim, prim$1) {
      return prim$1.attr(prim);
    }
    
    function attr(at, jq) {
      if (at[0] !== 23979) {
        return jq.attr(at[1]);
      } else {
        var match = at[1];
        return jq.attr(match[0], match[1]);
      }
    }
    
    function hasClass(prim, prim$1) {
      return prim$1.hasClass(prim);
    }
    
    function html_get(prim) {
      return prim.html();
    }
    
    function html(at, jq) {
      return jq.html(at[1]);
    }
    
    function prop_get(k) {
      var p = function (param) {
        return param.prop(k);
      };
      var match = Js_types.reify_type(p);
      var v = match[1];
      var switcher = match[0] - 2 | 0;
      if (switcher > 2 || switcher < 0) {
        return /* error */-215364664;
      } else {
        switch (switcher) {
          case 0 : 
              return /* `bool */[
                      -1055161302,
                      v
                    ];
          case 1 : 
              return /* error */-215364664;
          case 2 : 
              return /* `str */[
                      5744817,
                      v
                    ];
          
        }
      }
    }
    
    function prop(at, jq) {
      if (at[0] !== 23979) {
        return jq.prop(at[1]);
      } else {
        var match = at[1];
        return jq.prop(match[0], match[1]);
      }
    }
    
    function removeAttr(prim, prim$1) {
      return prim$1.removeAttr(prim);
    }
    
    function removeClass(at, jq) {
      if (typeof at === "number") {
        return jq.removeClass();
      } else {
        return jq.removeClass(at[1]);
      }
    }
    
    function removeProp(prim, prim$1) {
      return prim$1.removeProp(prim);
    }
    
    function to_js_bool(b) {
      if (b) {
        return true;
      } else {
        return false;
      }
    }
    
    function toggleClass(at, jq) {
      var variant = at[0];
      if (variant >= -866389342) {
        if (variant >= 5744817) {
          if (variant >= 288862789) {
            var match = at[1];
            return jq.toggleClass($$String.concat(" ", match[0]), match[1] ? true : false);
          } else {
            return jq.toggleClass(at[1]);
          }
        } else if (variant >= -280389785) {
          var match$1 = at[1];
          return jq.toggleClass(match$1[0], match$1[1]);
        } else {
          return jq.toggleClass($$String.concat(" ", at[1]));
        }
      } else if (variant >= -866389359) {
        var match$2 = at[1];
        return jq.toggleClass(match$2[0], match$2[1] ? true : false);
      } else {
        return jq.toggleClass(at[1]);
      }
    }
    
    function val_get(prim) {
      return prim.val();
    }
    
    function val_(at, jq) {
      return jq.val(at[1]);
    }
    
    function css_get(prim, prim$1) {
      return prim$1.css(prim);
    }
    
    function css_get$prime(prim, prim$1) {
      return prim$1.css(prim);
    }
    
    function css(at, jq) {
      if (at[0] >= 5442204) {
        return jq.css(at[1]);
      } else {
        var match = at[1];
        return jq.css(match[0], match[1]);
      }
    }
    
    function height_get(prim) {
      return prim.height();
    }
    
    function height(at, jq) {
      return jq.height(at[1]);
    }
    
    function innerHeight(prim) {
      return prim.innerHeight();
    }
    
    function innerWidth(prim) {
      return prim.innerWidth();
    }
    
    var cssHooks = Jquery.cssHooks;
    
    var cssNumber = Jquery.cssNumber;
    
    function escapeSelector(prim) {
      return Jquery.escapeSelector(prim);
    }
    
    function offset_get(prim) {
      return prim.offset();
    }
    
    function offset(at, jq) {
      return jq.offset(at[1]);
    }
    
    function outerHeight(prim) {
      return prim.outerHeight();
    }
    
    function outerHeight$prime(prim, prim$1) {
      return prim$1.outerHeight(prim);
    }
    
    function outerWidth(prim) {
      return prim.outerWidth();
    }
    
    function outerWidth$prime(prim, prim$1) {
      return prim$1.outerWidth(prim);
    }
    
    function position(prim) {
      return prim.position();
    }
    
    function scrollLeft_get(prim) {
      return prim.scrollLeft();
    }
    
    function scrollLeft(prim, prim$1) {
      return prim$1.scrollLeft(prim);
    }
    
    function scrollTop_get(prim) {
      return prim.scrollTop();
    }
    
    function scrollTop(prim, prim$1) {
      return prim$1.scrollTop(prim);
    }
    
    function width_get(prim) {
      return prim.width();
    }
    
    function width(at, jq) {
      return jq.width(at[1]);
    }
    
    function clone(jq) {
      return jq.clone(false, false);
    }
    
    function jquery(prim) {
      return Jquery(prim);
    }
    
    var clone$prime = clone;
    
    exports.addClass = addClass;
    exports.attr_get = attr_get;
    exports.attr = attr;
    exports.hasClass = hasClass;
    exports.html_get = html_get;
    exports.html = html;
    exports.prop_get = prop_get;
    exports.prop = prop;
    exports.removeAttr = removeAttr;
    exports.removeClass = removeClass;
    exports.removeProp = removeProp;
    exports.to_js_bool = to_js_bool;
    exports.toggleClass = toggleClass;
    exports.val_get = val_get;
    exports.val_ = val_;
    exports.css_get = css_get;
    exports.css_get$prime = css_get$prime;
    exports.height_get = height_get;
    exports.height = height;
    exports.innerHeight = innerHeight;
    exports.innerWidth = innerWidth;
    exports.cssHooks = cssHooks;
    exports.cssNumber = cssNumber;
    exports.escapeSelector = escapeSelector;
    exports.offset_get = offset_get;
    exports.offset = offset;
    exports.outerHeight$prime = outerHeight$prime;
    exports.outerWidth = outerWidth;
    exports.outerWidth$prime = outerWidth$prime;
    exports.position = position;
    exports.scrollLeft_get = scrollLeft_get;
    exports.scrollLeft = scrollLeft;
    exports.scrollTop_get = scrollTop_get;
    exports.scrollTop = scrollTop;
    exports.width_get = width_get;
    exports.width = width;
    exports.clone = clone;
    exports.clone$prime = clone$prime;
    exports.jquery = jquery;
    exports.css = css;
    exports.outerHeight = outerHeight;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* cssHooks Not a pure module */


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Block){
    'use strict';
    function reify_type(x) {
      if (typeof x === "undefined") {
        return /* tuple */[
                /* Undefined */0,
                x
              ];
      } else if (x === null) {
        return /* tuple */[
                /* Null */1,
                x
              ];
      } else if (typeof x === "number") {
        return /* tuple */[
                /* Number */3,
                x
              ];
      } else if (typeof x === "string") {
        return /* tuple */[
                /* String */4,
                x
              ];
      } else if (typeof x === "boolean") {
        return /* tuple */[
                /* Boolean */2,
                x
              ];
      } else if (typeof x === "function") {
        return /* tuple */[
                /* Function */5,
                x
              ];
      } else if (typeof x === "object") {
        return /* tuple */[
                /* Object */6,
                x
              ];
      } else {
        return /* tuple */[
                /* Symbol */7,
                x
              ];
      }
    }
    
    function classify(x) {
      var ty = typeof x;
      if (ty === "undefined") {
        return /* JSUndefined */3;
      } else if (x === null) {
        return /* JSNull */2;
      } else if (ty === "number") {
        return /* JSNumber */Block.__(0, [x]);
      } else if (ty === "string") {
        return /* JSString */Block.__(1, [x]);
      } else if (ty === "boolean") {
        if (x === true) {
          return /* JSTrue */1;
        } else {
          return /* JSFalse */0;
        }
      } else if (ty === "function") {
        return /* JSFunction */Block.__(2, [x]);
      } else if (ty === "object") {
        return /* JSObject */Block.__(3, [x]);
      } else {
        return /* JSSymbol */Block.__(4, [x]);
      }
    }
    
    function test(x, v) {
      switch (v) {
        case 0 : 
            return +(typeof x === "undefined");
        case 1 : 
            return +(x === null);
        case 2 : 
            return +(typeof x === "boolean");
        case 3 : 
            return +(typeof x === "number");
        case 4 : 
            return +(typeof x === "string");
        case 5 : 
            return +(typeof x === "function");
        case 6 : 
            return +(typeof x === "object");
        case 7 : 
            return +(typeof x === "symbol");
        
      }
    }
    
    exports.reify_type = reify_type;
    exports.test = test;
    exports.classify = classify;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    var gitRevision = "milestone1";
    
    exports.gitRevision = gitRevision;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(32), __webpack_require__(2), __webpack_require__(1), __webpack_require__(12), __webpack_require__(33), __webpack_require__(9), __webpack_require__(4), __webpack_require__(11), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, $$Array, Block, Curry, Names, Printf, $$String, Pervasives, Caml_format, Caml_exceptions){
    'use strict';
    var DecodingUnderrunError = Caml_exceptions.create("Serialize.DecodingUnderrunError");
    
    var separator = ",";
    
    function encodeValue(param) {
      return /* :: */[
              "Number",
              /* :: */[
                Curry._1(Printf.sprintf(/* Format */[
                          /* Float */Block.__(8, [
                              /* Float_g */9,
                              /* No_padding */0,
                              /* Lit_precision */[17],
                              /* End_of_format */0
                            ]),
                          "%.17g"
                        ]), param[0]),
                /* [] */0
              ]
            ];
    }
    
    function encode(expression, accumulator) {
      if (typeof expression === "number") {
        return /* :: */[
                "Hole",
                accumulator
              ];
      } else {
        switch (expression.tag | 0) {
          case 0 : 
              return /* :: */[
                      "Literal",
                      Pervasives.$at(encodeValue(expression[0]), accumulator)
                    ];
          case 1 : 
              return /* :: */[
                      "Constant",
                      /* :: */[
                        Names.constantName(expression[0]),
                        accumulator
                      ]
                    ];
          case 2 : 
              var accumulator2 = encode(expression[1], accumulator);
              return /* :: */[
                      "UnaryOp",
                      /* :: */[
                        Names.unaryOperatorName(expression[0]),
                        accumulator2
                      ]
                    ];
          case 3 : 
              var accumulator2$1 = encode(expression[2], accumulator);
              var accumulator3 = encode(expression[1], accumulator2$1);
              return /* :: */[
                      "BinaryOp",
                      /* :: */[
                        Names.binaryOperatorName(expression[0]),
                        accumulator3
                      ]
                    ];
          
        }
      }
    }
    
    function serialize(expression) {
      return $$String.concat(separator, encode(expression, /* [] */0));
    }
    
    function decodeValue(code) {
      if (code) {
        var match = code[1];
        if (match) {
          var typename = code[0];
          if (typename === "Number") {
            return /* tuple */[
                    /* Number */[Caml_format.caml_float_of_string(match[0])],
                    match[1]
                  ];
          } else {
            throw [
                  Names.UnknownNameException,
                  "Type " + typename
                ];
          }
        } else {
          throw DecodingUnderrunError;
        }
      } else {
        throw DecodingUnderrunError;
      }
    }
    
    function decode(param) {
      if (param) {
        var tail = param[1];
        var tokenType = param[0];
        switch (tokenType) {
          case "BinaryOp" : 
              if (tail) {
                var match = decode(tail[1]);
                var match$1 = decode(match[1]);
                return /* tuple */[
                        /* BinaryOp */Block.__(3, [
                            Names.binaryOperatorByName(tail[0]),
                            match[0],
                            match$1[0]
                          ]),
                        match$1[1]
                      ];
              } else {
                throw DecodingUnderrunError;
              }
              break;
          case "Constant" : 
              if (tail) {
                return /* tuple */[
                        /* Constant */Block.__(1, [Names.constantByName(tail[0])]),
                        tail[1]
                      ];
              } else {
                throw DecodingUnderrunError;
              }
              break;
          case "Hole" : 
              return /* tuple */[
                      /* Hole */0,
                      tail
                    ];
          case "Literal" : 
              var match$2 = decodeValue(tail);
              return /* tuple */[
                      /* Literal */Block.__(0, [match$2[0]]),
                      match$2[1]
                    ];
          case "UnaryOp" : 
              if (tail) {
                var match$3 = decode(tail[1]);
                return /* tuple */[
                        /* UnaryOp */Block.__(2, [
                            Names.unaryOperatorByName(tail[0]),
                            match$3[0]
                          ]),
                        match$3[1]
                      ];
              } else {
                throw DecodingUnderrunError;
              }
              break;
          default:
            throw [
                  Names.UnknownNameException,
                  "Token type " + tokenType
                ];
        }
      } else {
        throw DecodingUnderrunError;
      }
    }
    
    function deserialize(code) {
      return decode($$Array.to_list(code.split(separator)))[0];
    }
    
    exports.DecodingUnderrunError = DecodingUnderrunError;
    exports.serialize = serialize;
    exports.deserialize = deserialize;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(14), __webpack_require__(15), __webpack_require__(3), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Curry, Js_exn, Caml_array, Caml_exceptions, Caml_builtin_exceptions){
    'use strict';
    function init(l, f) {
      if (l) {
        if (l < 0) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Array.init"
              ];
        } else {
          var res = Caml_array.caml_make_vect(l, Curry._1(f, 0));
          for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
            res[i] = Curry._1(f, i);
          }
          return res;
        }
      } else {
        return /* array */[];
      }
    }
    
    function make_matrix(sx, sy, init) {
      var res = Caml_array.caml_make_vect(sx, /* array */[]);
      for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
        res[x] = Caml_array.caml_make_vect(sy, init);
      }
      return res;
    }
    
    function copy(a) {
      var l = a.length;
      if (l) {
        return Caml_array.caml_array_sub(a, 0, l);
      } else {
        return /* array */[];
      }
    }
    
    function append(a1, a2) {
      var l1 = a1.length;
      if (l1) {
        if (a2.length) {
          return a1.concat(a2);
        } else {
          return Caml_array.caml_array_sub(a1, 0, l1);
        }
      } else {
        return copy(a2);
      }
    }
    
    function sub(a, ofs, len) {
      if (len < 0 || ofs > (a.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Array.sub"
            ];
      } else {
        return Caml_array.caml_array_sub(a, ofs, len);
      }
    }
    
    function fill(a, ofs, len, v) {
      if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Array.fill"
            ];
      } else {
        for(var i = ofs ,i_finish = (ofs + len | 0) - 1 | 0; i <= i_finish; ++i){
          a[i] = v;
        }
        return /* () */0;
      }
    }
    
    function blit(a1, ofs1, a2, ofs2, len) {
      if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Array.blit"
            ];
      } else {
        return Caml_array.caml_array_blit(a1, ofs1, a2, ofs2, len);
      }
    }
    
    function iter(f, a) {
      for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
        Curry._1(f, a[i]);
      }
      return /* () */0;
    }
    
    function map(f, a) {
      var l = a.length;
      if (l) {
        var r = Caml_array.caml_make_vect(l, Curry._1(f, a[0]));
        for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
          r[i] = Curry._1(f, a[i]);
        }
        return r;
      } else {
        return /* array */[];
      }
    }
    
    function iteri(f, a) {
      for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
        Curry._2(f, i, a[i]);
      }
      return /* () */0;
    }
    
    function mapi(f, a) {
      var l = a.length;
      if (l) {
        var r = Caml_array.caml_make_vect(l, Curry._2(f, 0, a[0]));
        for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
          r[i] = Curry._2(f, i, a[i]);
        }
        return r;
      } else {
        return /* array */[];
      }
    }
    
    function to_list(a) {
      var _i = a.length - 1 | 0;
      var _res = /* [] */0;
      while(true) {
        var res = _res;
        var i = _i;
        if (i < 0) {
          return res;
        } else {
          _res = /* :: */[
            a[i],
            res
          ];
          _i = i - 1 | 0;
          continue ;
          
        }
      };
    }
    
    function list_length(_accu, _param) {
      while(true) {
        var param = _param;
        var accu = _accu;
        if (param) {
          _param = param[1];
          _accu = accu + 1 | 0;
          continue ;
          
        } else {
          return accu;
        }
      };
    }
    
    function of_list(l) {
      if (l) {
        var a = Caml_array.caml_make_vect(list_length(0, l), l[0]);
        var _i = 1;
        var _param = l[1];
        while(true) {
          var param = _param;
          var i = _i;
          if (param) {
            a[i] = param[0];
            _param = param[1];
            _i = i + 1 | 0;
            continue ;
            
          } else {
            return a;
          }
        };
      } else {
        return /* array */[];
      }
    }
    
    function fold_left(f, x, a) {
      var r = x;
      for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
        r = Curry._2(f, r, a[i]);
      }
      return r;
    }
    
    function fold_right(f, a, x) {
      var r = x;
      for(var i = a.length - 1 | 0; i >= 0; --i){
        r = Curry._2(f, a[i], r);
      }
      return r;
    }
    
    var Bottom = Caml_exceptions.create("Array.Bottom");
    
    function sort(cmp, a) {
      var maxson = function (l, i) {
        var i31 = ((i + i | 0) + i | 0) + 1 | 0;
        var x = i31;
        if ((i31 + 2 | 0) < l) {
          if (Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
            x = i31 + 1 | 0;
          }
          if (Curry._2(cmp, Caml_array.caml_array_get(a, x), Caml_array.caml_array_get(a, i31 + 2 | 0)) < 0) {
            x = i31 + 2 | 0;
          }
          return x;
        } else if ((i31 + 1 | 0) < l && Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
          return i31 + 1 | 0;
        } else if (i31 < l) {
          return i31;
        } else {
          throw [
                Bottom,
                i
              ];
        }
      };
      var trickle = function (l, i, e) {
        try {
          var l$1 = l;
          var _i = i;
          var e$1 = e;
          while(true) {
            var i$1 = _i;
            var j = maxson(l$1, i$1);
            if (Curry._2(cmp, Caml_array.caml_array_get(a, j), e$1) > 0) {
              Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
              _i = j;
              continue ;
              
            } else {
              return Caml_array.caml_array_set(a, i$1, e$1);
            }
          };
        }
        catch (raw_exn){
          var exn = Js_exn.internalToOCamlException(raw_exn);
          if (exn[0] === Bottom) {
            return Caml_array.caml_array_set(a, exn[1], e);
          } else {
            throw exn;
          }
        }
      };
      var bubble = function (l, i) {
        try {
          var l$1 = l;
          var _i = i;
          while(true) {
            var i$1 = _i;
            var j = maxson(l$1, i$1);
            Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
            _i = j;
            continue ;
            
          };
        }
        catch (raw_exn){
          var exn = Js_exn.internalToOCamlException(raw_exn);
          if (exn[0] === Bottom) {
            return exn[1];
          } else {
            throw exn;
          }
        }
      };
      var trickleup = function (_i, e) {
        while(true) {
          var i = _i;
          var father = (i - 1 | 0) / 3 | 0;
          if (i === father) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "array.ml",
                    168,
                    4
                  ]
                ];
          }
          if (Curry._2(cmp, Caml_array.caml_array_get(a, father), e) < 0) {
            Caml_array.caml_array_set(a, i, Caml_array.caml_array_get(a, father));
            if (father > 0) {
              _i = father;
              continue ;
              
            } else {
              return Caml_array.caml_array_set(a, 0, e);
            }
          } else {
            return Caml_array.caml_array_set(a, i, e);
          }
        };
      };
      var l = a.length;
      for(var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i){
        trickle(l, i, Caml_array.caml_array_get(a, i));
      }
      for(var i$1 = l - 1 | 0; i$1 >= 2; --i$1){
        var e = Caml_array.caml_array_get(a, i$1);
        Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, 0));
        trickleup(bubble(i$1, 0), e);
      }
      if (l > 1) {
        var e$1 = Caml_array.caml_array_get(a, 1);
        Caml_array.caml_array_set(a, 1, Caml_array.caml_array_get(a, 0));
        return Caml_array.caml_array_set(a, 0, e$1);
      } else {
        return 0;
      }
    }
    
    function stable_sort(cmp, a) {
      var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
        var src1r = src1ofs + src1len | 0;
        var src2r = src2ofs + src2len | 0;
        var _i1 = src1ofs;
        var _s1 = Caml_array.caml_array_get(a, src1ofs);
        var _i2 = src2ofs;
        var _s2 = Caml_array.caml_array_get(src2, src2ofs);
        var _d = dstofs;
        while(true) {
          var d = _d;
          var s2 = _s2;
          var i2 = _i2;
          var s1 = _s1;
          var i1 = _i1;
          if (Curry._2(cmp, s1, s2) <= 0) {
            Caml_array.caml_array_set(dst, d, s1);
            var i1$1 = i1 + 1 | 0;
            if (i1$1 < src1r) {
              _d = d + 1 | 0;
              _s1 = Caml_array.caml_array_get(a, i1$1);
              _i1 = i1$1;
              continue ;
              
            } else {
              return blit(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
            }
          } else {
            Caml_array.caml_array_set(dst, d, s2);
            var i2$1 = i2 + 1 | 0;
            if (i2$1 < src2r) {
              _d = d + 1 | 0;
              _s2 = Caml_array.caml_array_get(src2, i2$1);
              _i2 = i2$1;
              continue ;
              
            } else {
              return blit(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
            }
          }
        };
      };
      var isortto = function (srcofs, dst, dstofs, len) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          var e = Caml_array.caml_array_get(a, srcofs + i | 0);
          var j = (dstofs + i | 0) - 1 | 0;
          while(j >= dstofs && Curry._2(cmp, Caml_array.caml_array_get(dst, j), e) > 0) {
            Caml_array.caml_array_set(dst, j + 1 | 0, Caml_array.caml_array_get(dst, j));
            j = j - 1 | 0;
          };
          Caml_array.caml_array_set(dst, j + 1 | 0, e);
        }
        return /* () */0;
      };
      var sortto = function (srcofs, dst, dstofs, len) {
        if (len <= 5) {
          return isortto(srcofs, dst, dstofs, len);
        } else {
          var l1 = len / 2 | 0;
          var l2 = len - l1 | 0;
          sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
          sortto(srcofs, a, srcofs + l2 | 0, l1);
          return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
        }
      };
      var l = a.length;
      if (l <= 5) {
        return isortto(0, a, 0, l);
      } else {
        var l1 = l / 2 | 0;
        var l2 = l - l1 | 0;
        var t = Caml_array.caml_make_vect(l2, Caml_array.caml_array_get(a, 0));
        sortto(l1, t, 0, l2);
        sortto(0, a, l2, l1);
        return merge(l2, l1, t, 0, l2, a, 0);
      }
    }
    
    var create_matrix = make_matrix;
    
    var concat = Caml_array.caml_array_concat;
    
    var fast_sort = stable_sort;
    
    exports.init = init;
    exports.make_matrix = make_matrix;
    exports.create_matrix = create_matrix;
    exports.append = append;
    exports.concat = concat;
    exports.sub = sub;
    exports.copy = copy;
    exports.fill = fill;
    exports.blit = blit;
    exports.to_list = to_list;
    exports.of_list = of_list;
    exports.iter = iter;
    exports.map = map;
    exports.iteri = iteri;
    exports.mapi = mapi;
    exports.fold_left = fold_left;
    exports.fold_right = fold_right;
    exports.sort = sort;
    exports.stable_sort = stable_sort;
    exports.fast_sort = fast_sort;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(21), __webpack_require__(4), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Curry, Buffer, Pervasives, CamlinternalFormat){
    'use strict';
    function kfprintf(k, o, param) {
      return CamlinternalFormat.make_printf((function (o, acc) {
                    CamlinternalFormat.output_acc(o, acc);
                    return Curry._1(k, o);
                  }), o, /* End_of_acc */0, param[0]);
    }
    
    function kbprintf(k, b, param) {
      return CamlinternalFormat.make_printf((function (b, acc) {
                    CamlinternalFormat.bufput_acc(b, acc);
                    return Curry._1(k, b);
                  }), b, /* End_of_acc */0, param[0]);
    }
    
    function ikfprintf(k, oc, param) {
      return CamlinternalFormat.make_printf((function (oc, _) {
                    return Curry._1(k, oc);
                  }), oc, /* End_of_acc */0, param[0]);
    }
    
    function fprintf(oc, fmt) {
      return kfprintf((function () {
                    return /* () */0;
                  }), oc, fmt);
    }
    
    function bprintf(b, fmt) {
      return kbprintf((function () {
                    return /* () */0;
                  }), b, fmt);
    }
    
    function ifprintf(oc, fmt) {
      return ikfprintf((function () {
                    return /* () */0;
                  }), oc, fmt);
    }
    
    function printf(fmt) {
      return fprintf(Pervasives.stdout, fmt);
    }
    
    function eprintf(fmt) {
      return fprintf(Pervasives.stderr, fmt);
    }
    
    function ksprintf(k, param) {
      var k$prime = function (_, acc) {
        var buf = Buffer.create(64);
        CamlinternalFormat.strput_acc(buf, acc);
        return Curry._1(k, Buffer.contents(buf));
      };
      return CamlinternalFormat.make_printf(k$prime, /* () */0, /* End_of_acc */0, param[0]);
    }
    
    function sprintf(fmt) {
      return ksprintf((function (s) {
                    return s;
                  }), fmt);
    }
    
    var kprintf = ksprintf;
    
    exports.fprintf = fprintf;
    exports.printf = printf;
    exports.eprintf = eprintf;
    exports.sprintf = sprintf;
    exports.bprintf = bprintf;
    exports.ifprintf = ifprintf;
    exports.kfprintf = kfprintf;
    exports.ikfprintf = ikfprintf;
    exports.ksprintf = ksprintf;
    exports.kbprintf = kbprintf;
    exports.kprintf = kprintf;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(20), __webpack_require__(2), __webpack_require__(13), __webpack_require__(1), __webpack_require__(21), __webpack_require__(14), __webpack_require__(9), __webpack_require__(16), __webpack_require__(10), __webpack_require__(36), __webpack_require__(35), __webpack_require__(7), __webpack_require__(4), __webpack_require__(11), __webpack_require__(5), __webpack_require__(6), __webpack_require__(3), __webpack_require__(0), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Char, Block, Bytes, Curry, Buffer, Js_exn, $$String, Caml_io, Caml_obj, Caml_bytes, Caml_float, Caml_int32, Pervasives, Caml_format, Caml_string, Caml_primitive, Caml_exceptions, Caml_builtin_exceptions, CamlinternalFormatBasics){
    'use strict';
    function create_char_set() {
      return Bytes.make(32, /* "\000" */0);
    }
    
    function add_in_char_set(char_set, c) {
      var str_ind = (c >>> 3);
      var mask = (1 << (c & 7));
      char_set[str_ind] = Pervasives.char_of_int(Caml_bytes.get(char_set, str_ind) | mask);
      return /* () */0;
    }
    
    var freeze_char_set = Bytes.to_string;
    
    function rev_char_set(char_set) {
      var char_set$prime = Bytes.make(32, /* "\000" */0);
      for(var i = 0; i <= 31; ++i){
        char_set$prime[i] = Pervasives.char_of_int(Caml_string.get(char_set, i) ^ 255);
      }
      return Caml_string.bytes_to_string(char_set$prime);
    }
    
    function is_in_char_set(char_set, c) {
      var str_ind = (c >>> 3);
      var mask = (1 << (c & 7));
      return +((Caml_string.get(char_set, str_ind) & mask) !== 0);
    }
    
    function pad_of_pad_opt(pad_opt) {
      if (pad_opt) {
        return /* Lit_padding */Block.__(0, [
                  /* Right */1,
                  pad_opt[0]
                ]);
      } else {
        return /* No_padding */0;
      }
    }
    
    function prec_of_prec_opt(prec_opt) {
      if (prec_opt) {
        return /* Lit_precision */[prec_opt[0]];
      } else {
        return /* No_precision */0;
      }
    }
    
    function param_format_of_ignored_format(ign, fmt) {
      if (typeof ign === "number") {
        switch (ign) {
          case 0 : 
              return /* Param_format_EBB */[/* Char */Block.__(0, [fmt])];
          case 1 : 
              return /* Param_format_EBB */[/* Caml_char */Block.__(1, [fmt])];
          case 2 : 
              return /* Param_format_EBB */[/* Bool */Block.__(9, [fmt])];
          case 3 : 
              return /* Param_format_EBB */[/* Reader */Block.__(19, [fmt])];
          case 4 : 
              return /* Param_format_EBB */[/* Scan_next_char */Block.__(22, [fmt])];
          
        }
      } else {
        switch (ign.tag | 0) {
          case 0 : 
              return /* Param_format_EBB */[/* String */Block.__(2, [
                          pad_of_pad_opt(ign[0]),
                          fmt
                        ])];
          case 1 : 
              return /* Param_format_EBB */[/* Caml_string */Block.__(3, [
                          pad_of_pad_opt(ign[0]),
                          fmt
                        ])];
          case 2 : 
              return /* Param_format_EBB */[/* Int */Block.__(4, [
                          ign[0],
                          pad_of_pad_opt(ign[1]),
                          /* No_precision */0,
                          fmt
                        ])];
          case 3 : 
              return /* Param_format_EBB */[/* Int32 */Block.__(5, [
                          ign[0],
                          pad_of_pad_opt(ign[1]),
                          /* No_precision */0,
                          fmt
                        ])];
          case 4 : 
              return /* Param_format_EBB */[/* Nativeint */Block.__(6, [
                          ign[0],
                          pad_of_pad_opt(ign[1]),
                          /* No_precision */0,
                          fmt
                        ])];
          case 5 : 
              return /* Param_format_EBB */[/* Int64 */Block.__(7, [
                          ign[0],
                          pad_of_pad_opt(ign[1]),
                          /* No_precision */0,
                          fmt
                        ])];
          case 6 : 
              return /* Param_format_EBB */[/* Float */Block.__(8, [
                          /* Float_f */0,
                          pad_of_pad_opt(ign[0]),
                          prec_of_prec_opt(ign[1]),
                          fmt
                        ])];
          case 7 : 
              return /* Param_format_EBB */[/* Format_arg */Block.__(13, [
                          ign[0],
                          ign[1],
                          fmt
                        ])];
          case 8 : 
              return /* Param_format_EBB */[/* Format_subst */Block.__(14, [
                          ign[0],
                          ign[1],
                          fmt
                        ])];
          case 9 : 
              return /* Param_format_EBB */[/* Scan_char_set */Block.__(20, [
                          ign[0],
                          ign[1],
                          fmt
                        ])];
          case 10 : 
              return /* Param_format_EBB */[/* Scan_get_counter */Block.__(21, [
                          ign[0],
                          fmt
                        ])];
          
        }
      }
    }
    
    function buffer_check_size(buf, overhead) {
      var len = buf[/* bytes */1].length;
      var min_len = buf[/* ind */0] + overhead | 0;
      if (min_len > len) {
        var new_len = Caml_primitive.caml_int_max((len << 1), min_len);
        var new_str = Caml_string.caml_create_string(new_len);
        Bytes.blit(buf[/* bytes */1], 0, new_str, 0, len);
        buf[/* bytes */1] = new_str;
        return /* () */0;
      } else {
        return 0;
      }
    }
    
    function buffer_add_char(buf, c) {
      buffer_check_size(buf, 1);
      buf[/* bytes */1][buf[/* ind */0]] = c;
      buf[/* ind */0] = buf[/* ind */0] + 1 | 0;
      return /* () */0;
    }
    
    function buffer_add_string(buf, s) {
      var str_len = s.length;
      buffer_check_size(buf, str_len);
      $$String.blit(s, 0, buf[/* bytes */1], buf[/* ind */0], str_len);
      buf[/* ind */0] = buf[/* ind */0] + str_len | 0;
      return /* () */0;
    }
    
    function buffer_contents(buf) {
      return Bytes.sub_string(buf[/* bytes */1], 0, buf[/* ind */0]);
    }
    
    function char_of_iconv(iconv) {
      switch (iconv) {
        case 0 : 
        case 1 : 
        case 2 : 
            return /* "d" */100;
        case 3 : 
        case 4 : 
        case 5 : 
            return /* "i" */105;
        case 6 : 
        case 7 : 
            return /* "x" */120;
        case 8 : 
        case 9 : 
            return /* "X" */88;
        case 10 : 
        case 11 : 
            return /* "o" */111;
        case 12 : 
            return /* "u" */117;
        
      }
    }
    
    function char_of_fconv(fconv) {
      switch (fconv) {
        case 0 : 
        case 1 : 
        case 2 : 
            return /* "f" */102;
        case 3 : 
        case 4 : 
        case 5 : 
            return /* "e" */101;
        case 6 : 
        case 7 : 
        case 8 : 
            return /* "E" */69;
        case 9 : 
        case 10 : 
        case 11 : 
            return /* "g" */103;
        case 12 : 
        case 13 : 
        case 14 : 
            return /* "G" */71;
        case 15 : 
            return /* "F" */70;
        
      }
    }
    
    function char_of_counter(counter) {
      switch (counter) {
        case 0 : 
            return /* "l" */108;
        case 1 : 
            return /* "n" */110;
        case 2 : 
            return /* "N" */78;
        
      }
    }
    
    function bprint_char_set(buf, char_set) {
      var print_char = function (buf, i) {
        var c = Pervasives.char_of_int(i);
        if (c !== 37) {
          if (c !== 64) {
            return buffer_add_char(buf, c);
          } else {
            buffer_add_char(buf, /* "%" */37);
            return buffer_add_char(buf, /* "@" */64);
          }
        } else {
          buffer_add_char(buf, /* "%" */37);
          return buffer_add_char(buf, /* "%" */37);
        }
      };
      var print_out = function (set, _i) {
        while(true) {
          var i = _i;
          if (i < 256) {
            if (is_in_char_set(set, Pervasives.char_of_int(i))) {
              var set$1 = set;
              var i$1 = i;
              var match = Pervasives.char_of_int(i$1);
              var switcher = match - 45 | 0;
              if (switcher > 48 || switcher < 0) {
                if (switcher >= 210) {
                  return print_char(buf, 255);
                } else {
                  return print_second(set$1, i$1 + 1 | 0);
                }
              } else if (switcher > 47 || switcher < 1) {
                return print_out(set$1, i$1 + 1 | 0);
              } else {
                return print_second(set$1, i$1 + 1 | 0);
              }
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else {
            return 0;
          }
        };
      };
      var print_second = function (set, i) {
        if (is_in_char_set(set, Pervasives.char_of_int(i))) {
          var match = Pervasives.char_of_int(i);
          var exit = 0;
          var switcher = match - 45 | 0;
          if (switcher > 48 || switcher < 0) {
            if (switcher >= 210) {
              print_char(buf, 254);
              return print_char(buf, 255);
            } else {
              exit = 1;
            }
          } else if (switcher > 47 || switcher < 1) {
            if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
              exit = 1;
            } else {
              print_char(buf, i - 1 | 0);
              return print_out(set, i + 1 | 0);
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (is_in_char_set(set, Pervasives.char_of_int(i + 1 | 0))) {
              var set$1 = set;
              var i$1 = i - 1 | 0;
              var _j = i + 2 | 0;
              while(true) {
                var j = _j;
                if (j === 256 || !is_in_char_set(set$1, Pervasives.char_of_int(j))) {
                  print_char(buf, i$1);
                  print_char(buf, /* "-" */45);
                  print_char(buf, j - 1 | 0);
                  if (j < 256) {
                    return print_out(set$1, j + 1 | 0);
                  } else {
                    return 0;
                  }
                } else {
                  _j = j + 1 | 0;
                  continue ;
                  
                }
              };
            } else {
              print_char(buf, i - 1 | 0);
              print_char(buf, i);
              return print_out(set, i + 2 | 0);
            }
          }
          
        } else {
          print_char(buf, i - 1 | 0);
          return print_out(set, i + 1 | 0);
        }
      };
      var print_start = function (set) {
        var is_alone = function (c) {
          var before = Char.chr(c - 1 | 0);
          var after = Char.chr(c + 1 | 0);
          if (is_in_char_set(set, c)) {
            return 1 - (is_in_char_set(set, before) && is_in_char_set(set, after));
          } else {
            return /* false */0;
          }
        };
        if (is_alone(/* "]" */93)) {
          buffer_add_char(buf, /* "]" */93);
        }
        print_out(set, 1);
        if (is_alone(/* "-" */45)) {
          return buffer_add_char(buf, /* "-" */45);
        } else {
          return 0;
        }
      };
      buffer_add_char(buf, /* "[" */91);
      print_start(is_in_char_set(char_set, /* "\000" */0) ? (buffer_add_char(buf, /* "^" */94), rev_char_set(char_set)) : char_set);
      return buffer_add_char(buf, /* "]" */93);
    }
    
    function bprint_padty(buf, padty) {
      switch (padty) {
        case 0 : 
            return buffer_add_char(buf, /* "-" */45);
        case 1 : 
            return /* () */0;
        case 2 : 
            return buffer_add_char(buf, /* "0" */48);
        
      }
    }
    
    function bprint_ignored_flag(buf, ign_flag) {
      if (ign_flag) {
        return buffer_add_char(buf, /* "_" */95);
      } else {
        return 0;
      }
    }
    
    function bprint_pad_opt(buf, pad_opt) {
      if (pad_opt) {
        return buffer_add_string(buf, "" + pad_opt[0]);
      } else {
        return /* () */0;
      }
    }
    
    function bprint_padding(buf, pad) {
      if (typeof pad === "number") {
        return /* () */0;
      } else {
        bprint_padty(buf, pad[0]);
        if (pad.tag) {
          return buffer_add_char(buf, /* "*" */42);
        } else {
          return buffer_add_string(buf, "" + pad[1]);
        }
      }
    }
    
    function bprint_precision(buf, prec) {
      if (typeof prec === "number") {
        if (prec !== 0) {
          return buffer_add_string(buf, ".*");
        } else {
          return /* () */0;
        }
      } else {
        buffer_add_char(buf, /* "." */46);
        return buffer_add_string(buf, "" + prec[0]);
      }
    }
    
    function bprint_iconv_flag(buf, iconv) {
      switch (iconv) {
        case 1 : 
        case 4 : 
            return buffer_add_char(buf, /* "+" */43);
        case 2 : 
        case 5 : 
            return buffer_add_char(buf, /* " " */32);
        case 7 : 
        case 9 : 
        case 11 : 
            return buffer_add_char(buf, /* "#" */35);
        case 0 : 
        case 3 : 
        case 6 : 
        case 8 : 
        case 10 : 
        case 12 : 
            return /* () */0;
        
      }
    }
    
    function bprint_int_fmt(buf, ign_flag, iconv, pad, prec) {
      buffer_add_char(buf, /* "%" */37);
      bprint_ignored_flag(buf, ign_flag);
      bprint_iconv_flag(buf, iconv);
      bprint_padding(buf, pad);
      bprint_precision(buf, prec);
      return buffer_add_char(buf, char_of_iconv(iconv));
    }
    
    function bprint_altint_fmt(buf, ign_flag, iconv, pad, prec, c) {
      buffer_add_char(buf, /* "%" */37);
      bprint_ignored_flag(buf, ign_flag);
      bprint_iconv_flag(buf, iconv);
      bprint_padding(buf, pad);
      bprint_precision(buf, prec);
      buffer_add_char(buf, c);
      return buffer_add_char(buf, char_of_iconv(iconv));
    }
    
    function bprint_fconv_flag(buf, fconv) {
      switch (fconv) {
        case 1 : 
        case 4 : 
        case 7 : 
        case 10 : 
        case 13 : 
            return buffer_add_char(buf, /* "+" */43);
        case 2 : 
        case 5 : 
        case 8 : 
        case 11 : 
        case 14 : 
            return buffer_add_char(buf, /* " " */32);
        case 0 : 
        case 3 : 
        case 6 : 
        case 9 : 
        case 12 : 
        case 15 : 
            return /* () */0;
        
      }
    }
    
    function bprint_float_fmt(buf, ign_flag, fconv, pad, prec) {
      buffer_add_char(buf, /* "%" */37);
      bprint_ignored_flag(buf, ign_flag);
      bprint_fconv_flag(buf, fconv);
      bprint_padding(buf, pad);
      bprint_precision(buf, prec);
      return buffer_add_char(buf, char_of_fconv(fconv));
    }
    
    function string_of_formatting_lit(formatting_lit) {
      if (typeof formatting_lit === "number") {
        switch (formatting_lit) {
          case 0 : 
              return "@]";
          case 1 : 
              return "@}";
          case 2 : 
              return "@?";
          case 3 : 
              return "@\n";
          case 4 : 
              return "@.";
          case 5 : 
              return "@@";
          case 6 : 
              return "@%";
          
        }
      } else {
        switch (formatting_lit.tag | 0) {
          case 0 : 
          case 1 : 
              return formatting_lit[0];
          case 2 : 
              return "@" + Caml_string.bytes_to_string(Bytes.make(1, formatting_lit[0]));
          
        }
      }
    }
    
    function string_of_formatting_gen(formatting_gen) {
      return formatting_gen[0][1];
    }
    
    function bprint_char_literal(buf, chr) {
      if (chr !== 37) {
        return buffer_add_char(buf, chr);
      } else {
        return buffer_add_string(buf, "%%");
      }
    }
    
    function bprint_string_literal(buf, str) {
      for(var i = 0 ,i_finish = str.length - 1 | 0; i <= i_finish; ++i){
        bprint_char_literal(buf, Caml_string.get(str, i));
      }
      return /* () */0;
    }
    
    function bprint_fmtty(buf, _fmtty) {
      while(true) {
        var fmtty = _fmtty;
        if (typeof fmtty === "number") {
          return /* () */0;
        } else {
          switch (fmtty.tag | 0) {
            case 0 : 
                buffer_add_string(buf, "%c");
                _fmtty = fmtty[0];
                continue ;
                case 1 : 
                buffer_add_string(buf, "%s");
                _fmtty = fmtty[0];
                continue ;
                case 2 : 
                buffer_add_string(buf, "%i");
                _fmtty = fmtty[0];
                continue ;
                case 3 : 
                buffer_add_string(buf, "%li");
                _fmtty = fmtty[0];
                continue ;
                case 4 : 
                buffer_add_string(buf, "%ni");
                _fmtty = fmtty[0];
                continue ;
                case 5 : 
                buffer_add_string(buf, "%Li");
                _fmtty = fmtty[0];
                continue ;
                case 6 : 
                buffer_add_string(buf, "%f");
                _fmtty = fmtty[0];
                continue ;
                case 7 : 
                buffer_add_string(buf, "%B");
                _fmtty = fmtty[0];
                continue ;
                case 8 : 
                buffer_add_string(buf, "%{");
                bprint_fmtty(buf, fmtty[0]);
                buffer_add_string(buf, "%}");
                _fmtty = fmtty[1];
                continue ;
                case 9 : 
                buffer_add_string(buf, "%(");
                bprint_fmtty(buf, fmtty[0]);
                buffer_add_string(buf, "%)");
                _fmtty = fmtty[2];
                continue ;
                case 10 : 
                buffer_add_string(buf, "%a");
                _fmtty = fmtty[0];
                continue ;
                case 11 : 
                buffer_add_string(buf, "%t");
                _fmtty = fmtty[0];
                continue ;
                case 12 : 
                buffer_add_string(buf, "%?");
                _fmtty = fmtty[0];
                continue ;
                case 13 : 
                buffer_add_string(buf, "%r");
                _fmtty = fmtty[0];
                continue ;
                case 14 : 
                buffer_add_string(buf, "%_r");
                _fmtty = fmtty[0];
                continue ;
                
          }
        }
      };
    }
    
    function int_of_custom_arity(param) {
      if (param) {
        return 1 + int_of_custom_arity(param[0]) | 0;
      } else {
        return 0;
      }
    }
    
    function bprint_fmt(buf, fmt) {
      var _fmt = fmt;
      var _ign_flag = /* false */0;
      while(true) {
        var ign_flag = _ign_flag;
        var fmt$1 = _fmt;
        if (typeof fmt$1 === "number") {
          return /* () */0;
        } else {
          switch (fmt$1.tag | 0) {
            case 0 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, /* "c" */99);
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 1 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, /* "C" */67);
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 2 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                bprint_padding(buf, fmt$1[0]);
                buffer_add_char(buf, /* "s" */115);
                _ign_flag = /* false */0;
                _fmt = fmt$1[1];
                continue ;
                case 3 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                bprint_padding(buf, fmt$1[0]);
                buffer_add_char(buf, /* "S" */83);
                _ign_flag = /* false */0;
                _fmt = fmt$1[1];
                continue ;
                case 4 : 
                bprint_int_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
                _ign_flag = /* false */0;
                _fmt = fmt$1[3];
                continue ;
                case 5 : 
                bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "l" */108);
                _ign_flag = /* false */0;
                _fmt = fmt$1[3];
                continue ;
                case 6 : 
                bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "n" */110);
                _ign_flag = /* false */0;
                _fmt = fmt$1[3];
                continue ;
                case 7 : 
                bprint_altint_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2], /* "L" */76);
                _ign_flag = /* false */0;
                _fmt = fmt$1[3];
                continue ;
                case 8 : 
                bprint_float_fmt(buf, ign_flag, fmt$1[0], fmt$1[1], fmt$1[2]);
                _ign_flag = /* false */0;
                _fmt = fmt$1[3];
                continue ;
                case 9 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, /* "B" */66);
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 10 : 
                buffer_add_string(buf, "%!");
                _fmt = fmt$1[0];
                continue ;
                case 11 : 
                bprint_string_literal(buf, fmt$1[0]);
                _fmt = fmt$1[1];
                continue ;
                case 12 : 
                bprint_char_literal(buf, fmt$1[0]);
                _fmt = fmt$1[1];
                continue ;
                case 13 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                bprint_pad_opt(buf, fmt$1[0]);
                buffer_add_char(buf, /* "{" */123);
                bprint_fmtty(buf, fmt$1[1]);
                buffer_add_char(buf, /* "%" */37);
                buffer_add_char(buf, /* "}" */125);
                _ign_flag = /* false */0;
                _fmt = fmt$1[2];
                continue ;
                case 14 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                bprint_pad_opt(buf, fmt$1[0]);
                buffer_add_char(buf, /* "(" */40);
                bprint_fmtty(buf, fmt$1[1]);
                buffer_add_char(buf, /* "%" */37);
                buffer_add_char(buf, /* ")" */41);
                _ign_flag = /* false */0;
                _fmt = fmt$1[2];
                continue ;
                case 15 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, /* "a" */97);
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 16 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, /* "t" */116);
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 17 : 
                bprint_string_literal(buf, string_of_formatting_lit(fmt$1[0]));
                _fmt = fmt$1[1];
                continue ;
                case 18 : 
                bprint_string_literal(buf, "@{");
                bprint_string_literal(buf, string_of_formatting_gen(fmt$1[0]));
                _fmt = fmt$1[1];
                continue ;
                case 19 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, /* "r" */114);
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 20 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                bprint_pad_opt(buf, fmt$1[0]);
                bprint_char_set(buf, fmt$1[1]);
                _ign_flag = /* false */0;
                _fmt = fmt$1[2];
                continue ;
                case 21 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                buffer_add_char(buf, char_of_counter(fmt$1[0]));
                _ign_flag = /* false */0;
                _fmt = fmt$1[1];
                continue ;
                case 22 : 
                buffer_add_char(buf, /* "%" */37);
                bprint_ignored_flag(buf, ign_flag);
                bprint_string_literal(buf, "0c");
                _ign_flag = /* false */0;
                _fmt = fmt$1[0];
                continue ;
                case 23 : 
                var match = param_format_of_ignored_format(fmt$1[0], fmt$1[1]);
                _ign_flag = /* true */1;
                _fmt = match[0];
                continue ;
                case 24 : 
                for(var _i = 1 ,_i_finish = int_of_custom_arity(fmt$1[0]); _i <= _i_finish; ++_i){
                  buffer_add_char(buf, /* "%" */37);
                  bprint_ignored_flag(buf, ign_flag);
                  buffer_add_char(buf, /* "?" */63);
                }
                _ign_flag = /* false */0;
                _fmt = fmt$1[2];
                continue ;
                
          }
        }
      };
    }
    
    function string_of_fmt(fmt) {
      var buf = /* record */[
        /* ind */0,
        /* bytes */new Array(16)
      ];
      bprint_fmt(buf, fmt);
      return buffer_contents(buf);
    }
    
    function symm(param) {
      if (typeof param === "number") {
        return /* End_of_fmtty */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              return /* Char_ty */Block.__(0, [symm(param[0])]);
          case 1 : 
              return /* String_ty */Block.__(1, [symm(param[0])]);
          case 2 : 
              return /* Int_ty */Block.__(2, [symm(param[0])]);
          case 3 : 
              return /* Int32_ty */Block.__(3, [symm(param[0])]);
          case 4 : 
              return /* Nativeint_ty */Block.__(4, [symm(param[0])]);
          case 5 : 
              return /* Int64_ty */Block.__(5, [symm(param[0])]);
          case 6 : 
              return /* Float_ty */Block.__(6, [symm(param[0])]);
          case 7 : 
              return /* Bool_ty */Block.__(7, [symm(param[0])]);
          case 8 : 
              return /* Format_arg_ty */Block.__(8, [
                        param[0],
                        symm(param[1])
                      ]);
          case 9 : 
              return /* Format_subst_ty */Block.__(9, [
                        param[1],
                        param[0],
                        symm(param[2])
                      ]);
          case 10 : 
              return /* Alpha_ty */Block.__(10, [symm(param[0])]);
          case 11 : 
              return /* Theta_ty */Block.__(11, [symm(param[0])]);
          case 12 : 
              return /* Any_ty */Block.__(12, [symm(param[0])]);
          case 13 : 
              return /* Reader_ty */Block.__(13, [symm(param[0])]);
          case 14 : 
              return /* Ignored_reader_ty */Block.__(14, [symm(param[0])]);
          
        }
      }
    }
    
    function fmtty_rel_det(param) {
      if (typeof param === "number") {
        return /* tuple */[
                (function () {
                    return /* Refl */0;
                  }),
                (function () {
                    return /* Refl */0;
                  }),
                (function () {
                    return /* Refl */0;
                  }),
                (function () {
                    return /* Refl */0;
                  })
              ];
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var match = fmtty_rel_det(param[0]);
              var af = match[1];
              var fa = match[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match[2],
                      match[3]
                    ];
          case 1 : 
              var match$1 = fmtty_rel_det(param[0]);
              var af$1 = match$1[1];
              var fa$1 = match$1[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$1, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$1, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$1[2],
                      match$1[3]
                    ];
          case 2 : 
              var match$2 = fmtty_rel_det(param[0]);
              var af$2 = match$2[1];
              var fa$2 = match$2[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$2, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$2, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$2[2],
                      match$2[3]
                    ];
          case 3 : 
              var match$3 = fmtty_rel_det(param[0]);
              var af$3 = match$3[1];
              var fa$3 = match$3[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$3, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$3, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$3[2],
                      match$3[3]
                    ];
          case 4 : 
              var match$4 = fmtty_rel_det(param[0]);
              var af$4 = match$4[1];
              var fa$4 = match$4[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$4, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$4, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$4[2],
                      match$4[3]
                    ];
          case 5 : 
              var match$5 = fmtty_rel_det(param[0]);
              var af$5 = match$5[1];
              var fa$5 = match$5[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$5, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$5, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$5[2],
                      match$5[3]
                    ];
          case 6 : 
              var match$6 = fmtty_rel_det(param[0]);
              var af$6 = match$6[1];
              var fa$6 = match$6[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$6, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$6, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$6[2],
                      match$6[3]
                    ];
          case 7 : 
              var match$7 = fmtty_rel_det(param[0]);
              var af$7 = match$7[1];
              var fa$7 = match$7[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$7, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$7, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$7[2],
                      match$7[3]
                    ];
          case 8 : 
              var match$8 = fmtty_rel_det(param[1]);
              var af$8 = match$8[1];
              var fa$8 = match$8[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$8, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$8, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$8[2],
                      match$8[3]
                    ];
          case 9 : 
              var match$9 = fmtty_rel_det(param[2]);
              var de = match$9[3];
              var ed = match$9[2];
              var af$9 = match$9[1];
              var fa$9 = match$9[0];
              var ty = trans(symm(param[0]), param[1]);
              var match$10 = fmtty_rel_det(ty);
              var jd = match$10[3];
              var dj = match$10[2];
              var ga = match$10[1];
              var ag = match$10[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$9, /* Refl */0);
                          Curry._1(ag, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(ga, /* Refl */0);
                          Curry._1(af$9, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(ed, /* Refl */0);
                          Curry._1(dj, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(jd, /* Refl */0);
                          Curry._1(de, /* Refl */0);
                          return /* Refl */0;
                        })
                    ];
          case 10 : 
              var match$11 = fmtty_rel_det(param[0]);
              var af$10 = match$11[1];
              var fa$10 = match$11[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$10, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$10, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$11[2],
                      match$11[3]
                    ];
          case 11 : 
              var match$12 = fmtty_rel_det(param[0]);
              var af$11 = match$12[1];
              var fa$11 = match$12[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$11, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$11, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$12[2],
                      match$12[3]
                    ];
          case 12 : 
              var match$13 = fmtty_rel_det(param[0]);
              var af$12 = match$13[1];
              var fa$12 = match$13[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$12, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$12, /* Refl */0);
                          return /* Refl */0;
                        }),
                      match$13[2],
                      match$13[3]
                    ];
          case 13 : 
              var match$14 = fmtty_rel_det(param[0]);
              var de$1 = match$14[3];
              var ed$1 = match$14[2];
              var af$13 = match$14[1];
              var fa$13 = match$14[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$13, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$13, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(ed$1, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(de$1, /* Refl */0);
                          return /* Refl */0;
                        })
                    ];
          case 14 : 
              var match$15 = fmtty_rel_det(param[0]);
              var de$2 = match$15[3];
              var ed$2 = match$15[2];
              var af$14 = match$15[1];
              var fa$14 = match$15[0];
              return /* tuple */[
                      (function () {
                          Curry._1(fa$14, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(af$14, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(ed$2, /* Refl */0);
                          return /* Refl */0;
                        }),
                      (function () {
                          Curry._1(de$2, /* Refl */0);
                          return /* Refl */0;
                        })
                    ];
          
        }
      }
    }
    
    function trans(ty1, ty2) {
      var exit = 0;
      if (typeof ty1 === "number") {
        if (typeof ty2 === "number") {
          return /* End_of_fmtty */0;
        } else {
          switch (ty2.tag | 0) {
            case 8 : 
                exit = 6;
                break;
            case 9 : 
                exit = 7;
                break;
            case 10 : 
                exit = 1;
                break;
            case 11 : 
                exit = 2;
                break;
            case 12 : 
                exit = 3;
                break;
            case 13 : 
                exit = 4;
                break;
            case 14 : 
                exit = 5;
                break;
            default:
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "camlinternalFormat.ml",
                      816,
                      23
                    ]
                  ];
          }
        }
      } else {
        switch (ty1.tag | 0) {
          case 0 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 0 : 
                      return /* Char_ty */Block.__(0, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 1 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 1 : 
                      return /* String_ty */Block.__(1, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 2 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 2 : 
                      return /* Int_ty */Block.__(2, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 3 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 3 : 
                      return /* Int32_ty */Block.__(3, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 4 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 4 : 
                      return /* Nativeint_ty */Block.__(4, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 5 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 5 : 
                      return /* Int64_ty */Block.__(5, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 6 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 6 : 
                      return /* Float_ty */Block.__(6, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 7 : 
              if (typeof ty2 === "number") {
                exit = 8;
              } else {
                switch (ty2.tag | 0) {
                  case 7 : 
                      return /* Bool_ty */Block.__(7, [trans(ty1[0], ty2[0])]);
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      exit = 7;
                      break;
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  
                }
              }
              break;
          case 8 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        802,
                        26
                      ]
                    ];
              } else {
                switch (ty2.tag | 0) {
                  case 8 : 
                      return /* Format_arg_ty */Block.__(8, [
                                trans(ty1[0], ty2[0]),
                                trans(ty1[1], ty2[1])
                              ]);
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  default:
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            802,
                            26
                          ]
                        ];
                }
              }
              break;
          case 9 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        812,
                        28
                      ]
                    ];
              } else {
                switch (ty2.tag | 0) {
                  case 8 : 
                      exit = 6;
                      break;
                  case 9 : 
                      var ty = trans(symm(ty1[1]), ty2[0]);
                      var match = fmtty_rel_det(ty);
                      Curry._1(match[1], /* Refl */0);
                      Curry._1(match[3], /* Refl */0);
                      return /* Format_subst_ty */Block.__(9, [
                                ty1[0],
                                ty2[1],
                                trans(ty1[2], ty2[2])
                              ]);
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      exit = 5;
                      break;
                  default:
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            812,
                            28
                          ]
                        ];
                }
              }
              break;
          case 10 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        780,
                        21
                      ]
                    ];
              } else if (ty2.tag === 10) {
                return /* Alpha_ty */Block.__(10, [trans(ty1[0], ty2[0])]);
              } else {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        780,
                        21
                      ]
                    ];
              }
              break;
          case 11 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        784,
                        21
                      ]
                    ];
              } else {
                switch (ty2.tag | 0) {
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      return /* Theta_ty */Block.__(11, [trans(ty1[0], ty2[0])]);
                  default:
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            784,
                            21
                          ]
                        ];
                }
              }
              break;
          case 12 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        788,
                        19
                      ]
                    ];
              } else {
                switch (ty2.tag | 0) {
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      return /* Any_ty */Block.__(12, [trans(ty1[0], ty2[0])]);
                  default:
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            788,
                            19
                          ]
                        ];
                }
              }
              break;
          case 13 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        792,
                        22
                      ]
                    ];
              } else {
                switch (ty2.tag | 0) {
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      return /* Reader_ty */Block.__(13, [trans(ty1[0], ty2[0])]);
                  default:
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            792,
                            22
                          ]
                        ];
                }
              }
              break;
          case 14 : 
              if (typeof ty2 === "number") {
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        797,
                        30
                      ]
                    ];
              } else {
                switch (ty2.tag | 0) {
                  case 10 : 
                      exit = 1;
                      break;
                  case 11 : 
                      exit = 2;
                      break;
                  case 12 : 
                      exit = 3;
                      break;
                  case 13 : 
                      exit = 4;
                      break;
                  case 14 : 
                      return /* Ignored_reader_ty */Block.__(14, [trans(ty1[0], ty2[0])]);
                  default:
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            797,
                            30
                          ]
                        ];
                }
              }
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    781,
                    21
                  ]
                ];
        case 2 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    785,
                    21
                  ]
                ];
        case 3 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    789,
                    19
                  ]
                ];
        case 4 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    793,
                    22
                  ]
                ];
        case 5 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    798,
                    30
                  ]
                ];
        case 6 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    803,
                    26
                  ]
                ];
        case 7 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    813,
                    28
                  ]
                ];
        case 8 : 
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    817,
                    23
                  ]
                ];
        
      }
    }
    
    function fmtty_of_formatting_gen(formatting_gen) {
      return fmtty_of_fmt(formatting_gen[0][0]);
    }
    
    function fmtty_of_fmt(_fmtty) {
      while(true) {
        var fmtty = _fmtty;
        var exit = 0;
        if (typeof fmtty === "number") {
          return /* End_of_fmtty */0;
        } else {
          switch (fmtty.tag | 0) {
            case 2 : 
            case 3 : 
                exit = 1;
                break;
            case 4 : 
                var ty_rest = fmtty_of_fmt(fmtty[3]);
                var prec_ty = fmtty_of_precision_fmtty(fmtty[2], /* Int_ty */Block.__(2, [ty_rest]));
                return fmtty_of_padding_fmtty(fmtty[1], prec_ty);
            case 5 : 
                var ty_rest$1 = fmtty_of_fmt(fmtty[3]);
                var prec_ty$1 = fmtty_of_precision_fmtty(fmtty[2], /* Int32_ty */Block.__(3, [ty_rest$1]));
                return fmtty_of_padding_fmtty(fmtty[1], prec_ty$1);
            case 6 : 
                var ty_rest$2 = fmtty_of_fmt(fmtty[3]);
                var prec_ty$2 = fmtty_of_precision_fmtty(fmtty[2], /* Nativeint_ty */Block.__(4, [ty_rest$2]));
                return fmtty_of_padding_fmtty(fmtty[1], prec_ty$2);
            case 7 : 
                var ty_rest$3 = fmtty_of_fmt(fmtty[3]);
                var prec_ty$3 = fmtty_of_precision_fmtty(fmtty[2], /* Int64_ty */Block.__(5, [ty_rest$3]));
                return fmtty_of_padding_fmtty(fmtty[1], prec_ty$3);
            case 8 : 
                var ty_rest$4 = fmtty_of_fmt(fmtty[3]);
                var prec_ty$4 = fmtty_of_precision_fmtty(fmtty[2], /* Float_ty */Block.__(6, [ty_rest$4]));
                return fmtty_of_padding_fmtty(fmtty[1], prec_ty$4);
            case 9 : 
                return /* Bool_ty */Block.__(7, [fmtty_of_fmt(fmtty[0])]);
            case 10 : 
                _fmtty = fmtty[0];
                continue ;
                case 13 : 
                return /* Format_arg_ty */Block.__(8, [
                          fmtty[1],
                          fmtty_of_fmt(fmtty[2])
                        ]);
            case 14 : 
                var ty = fmtty[1];
                return /* Format_subst_ty */Block.__(9, [
                          ty,
                          ty,
                          fmtty_of_fmt(fmtty[2])
                        ]);
            case 15 : 
                return /* Alpha_ty */Block.__(10, [fmtty_of_fmt(fmtty[0])]);
            case 16 : 
                return /* Theta_ty */Block.__(11, [fmtty_of_fmt(fmtty[0])]);
            case 18 : 
                return CamlinternalFormatBasics.concat_fmtty(fmtty_of_formatting_gen(fmtty[0]), fmtty_of_fmt(fmtty[1]));
            case 19 : 
                return /* Reader_ty */Block.__(13, [fmtty_of_fmt(fmtty[0])]);
            case 20 : 
                return /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[2])]);
            case 21 : 
                return /* Int_ty */Block.__(2, [fmtty_of_fmt(fmtty[1])]);
            case 0 : 
            case 1 : 
            case 22 : 
                return /* Char_ty */Block.__(0, [fmtty_of_fmt(fmtty[0])]);
            case 23 : 
                var ign = fmtty[0];
                var fmt = fmtty[1];
                if (typeof ign === "number") {
                  if (ign === 3) {
                    return /* Ignored_reader_ty */Block.__(14, [fmtty_of_fmt(fmt)]);
                  } else {
                    return fmtty_of_fmt(fmt);
                  }
                } else if (ign.tag === 8) {
                  return CamlinternalFormatBasics.concat_fmtty(ign[1], fmtty_of_fmt(fmt));
                } else {
                  return fmtty_of_fmt(fmt);
                }
            case 24 : 
                return fmtty_of_custom(fmtty[0], fmtty_of_fmt(fmtty[2]));
            default:
              _fmtty = fmtty[1];
              continue ;
              
          }
        }
        if (exit === 1) {
          return fmtty_of_padding_fmtty(fmtty[0], /* String_ty */Block.__(1, [fmtty_of_fmt(fmtty[1])]));
        }
        
      };
    }
    
    function fmtty_of_custom(arity, fmtty) {
      if (arity) {
        return /* Any_ty */Block.__(12, [fmtty_of_custom(arity[0], fmtty)]);
      } else {
        return fmtty;
      }
    }
    
    function fmtty_of_padding_fmtty(pad, fmtty) {
      if (typeof pad === "number" || !pad.tag) {
        return fmtty;
      } else {
        return /* Int_ty */Block.__(2, [fmtty]);
      }
    }
    
    function fmtty_of_precision_fmtty(prec, fmtty) {
      if (typeof prec === "number" && prec !== 0) {
        return /* Int_ty */Block.__(2, [fmtty]);
      } else {
        return fmtty;
      }
    }
    
    var Type_mismatch = Caml_exceptions.create("CamlinternalFormat.Type_mismatch");
    
    function type_padding(pad, fmtty) {
      if (typeof pad === "number") {
        return /* Padding_fmtty_EBB */[
                /* No_padding */0,
                fmtty
              ];
      } else if (pad.tag) {
        if (typeof fmtty === "number") {
          throw Type_mismatch;
        } else if (fmtty.tag === 2) {
          return /* Padding_fmtty_EBB */[
                  /* Arg_padding */Block.__(1, [pad[0]]),
                  fmtty[0]
                ];
        } else {
          throw Type_mismatch;
        }
      } else {
        return /* Padding_fmtty_EBB */[
                /* Lit_padding */Block.__(0, [
                    pad[0],
                    pad[1]
                  ]),
                fmtty
              ];
      }
    }
    
    function type_padprec(pad, prec, fmtty) {
      var match = type_padding(pad, fmtty);
      if (typeof prec === "number") {
        if (prec !== 0) {
          var match$1 = match[1];
          if (typeof match$1 === "number") {
            throw Type_mismatch;
          } else if (match$1.tag === 2) {
            return /* Padprec_fmtty_EBB */[
                    match[0],
                    /* Arg_precision */1,
                    match$1[0]
                  ];
          } else {
            throw Type_mismatch;
          }
        } else {
          return /* Padprec_fmtty_EBB */[
                  match[0],
                  /* No_precision */0,
                  match[1]
                ];
        }
      } else {
        return /* Padprec_fmtty_EBB */[
                match[0],
                /* Lit_precision */[prec[0]],
                match[1]
              ];
      }
    }
    
    function type_ignored_param_one(ign, fmt, fmtty) {
      var match = type_format_gen(fmt, fmtty);
      return /* Fmt_fmtty_EBB */[
              /* Ignored_param */Block.__(23, [
                  ign,
                  match[0]
                ]),
              match[1]
            ];
    }
    
    function type_format_gen(fmt, fmtty) {
      if (typeof fmt === "number") {
        return /* Fmt_fmtty_EBB */[
                /* End_of_format */0,
                fmtty
              ];
      } else {
        switch (fmt.tag | 0) {
          case 0 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag) {
                throw Type_mismatch;
              } else {
                var match = type_format_gen(fmt[0], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Char */Block.__(0, [match[0]]),
                        match[1]
                      ];
              }
              break;
          case 1 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag) {
                throw Type_mismatch;
              } else {
                var match$1 = type_format_gen(fmt[0], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Caml_char */Block.__(1, [match$1[0]]),
                        match$1[1]
                      ];
              }
              break;
          case 2 : 
              var match$2 = type_padding(fmt[0], fmtty);
              var match$3 = match$2[1];
              if (typeof match$3 === "number") {
                throw Type_mismatch;
              } else if (match$3.tag === 1) {
                var match$4 = type_format_gen(fmt[1], match$3[0]);
                return /* Fmt_fmtty_EBB */[
                        /* String */Block.__(2, [
                            match$2[0],
                            match$4[0]
                          ]),
                        match$4[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 3 : 
              var match$5 = type_padding(fmt[0], fmtty);
              var match$6 = match$5[1];
              if (typeof match$6 === "number") {
                throw Type_mismatch;
              } else if (match$6.tag === 1) {
                var match$7 = type_format_gen(fmt[1], match$6[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Caml_string */Block.__(3, [
                            match$5[0],
                            match$7[0]
                          ]),
                        match$7[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 4 : 
              var match$8 = type_padprec(fmt[1], fmt[2], fmtty);
              var match$9 = match$8[2];
              if (typeof match$9 === "number") {
                throw Type_mismatch;
              } else if (match$9.tag === 2) {
                var match$10 = type_format_gen(fmt[3], match$9[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Int */Block.__(4, [
                            fmt[0],
                            match$8[0],
                            match$8[1],
                            match$10[0]
                          ]),
                        match$10[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 5 : 
              var match$11 = type_padprec(fmt[1], fmt[2], fmtty);
              var match$12 = match$11[2];
              if (typeof match$12 === "number") {
                throw Type_mismatch;
              } else if (match$12.tag === 3) {
                var match$13 = type_format_gen(fmt[3], match$12[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Int32 */Block.__(5, [
                            fmt[0],
                            match$11[0],
                            match$11[1],
                            match$13[0]
                          ]),
                        match$13[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 6 : 
              var match$14 = type_padprec(fmt[1], fmt[2], fmtty);
              var match$15 = match$14[2];
              if (typeof match$15 === "number") {
                throw Type_mismatch;
              } else if (match$15.tag === 4) {
                var match$16 = type_format_gen(fmt[3], match$15[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Nativeint */Block.__(6, [
                            fmt[0],
                            match$14[0],
                            match$14[1],
                            match$16[0]
                          ]),
                        match$16[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 7 : 
              var match$17 = type_padprec(fmt[1], fmt[2], fmtty);
              var match$18 = match$17[2];
              if (typeof match$18 === "number") {
                throw Type_mismatch;
              } else if (match$18.tag === 5) {
                var match$19 = type_format_gen(fmt[3], match$18[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Int64 */Block.__(7, [
                            fmt[0],
                            match$17[0],
                            match$17[1],
                            match$19[0]
                          ]),
                        match$19[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 8 : 
              var match$20 = type_padprec(fmt[1], fmt[2], fmtty);
              var match$21 = match$20[2];
              if (typeof match$21 === "number") {
                throw Type_mismatch;
              } else if (match$21.tag === 6) {
                var match$22 = type_format_gen(fmt[3], match$21[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Float */Block.__(8, [
                            fmt[0],
                            match$20[0],
                            match$20[1],
                            match$22[0]
                          ]),
                        match$22[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 9 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 7) {
                var match$23 = type_format_gen(fmt[0], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Bool */Block.__(9, [match$23[0]]),
                        match$23[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 10 : 
              var match$24 = type_format_gen(fmt[0], fmtty);
              return /* Fmt_fmtty_EBB */[
                      /* Flush */Block.__(10, [match$24[0]]),
                      match$24[1]
                    ];
          case 11 : 
              var match$25 = type_format_gen(fmt[1], fmtty);
              return /* Fmt_fmtty_EBB */[
                      /* String_literal */Block.__(11, [
                          fmt[0],
                          match$25[0]
                        ]),
                      match$25[1]
                    ];
          case 12 : 
              var match$26 = type_format_gen(fmt[1], fmtty);
              return /* Fmt_fmtty_EBB */[
                      /* Char_literal */Block.__(12, [
                          fmt[0],
                          match$26[0]
                        ]),
                      match$26[1]
                    ];
          case 13 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 8) {
                var sub_fmtty$prime = fmtty[0];
                if (Caml_obj.caml_notequal(/* Fmtty_EBB */[fmt[1]], /* Fmtty_EBB */[sub_fmtty$prime])) {
                  throw Type_mismatch;
                }
                var match$27 = type_format_gen(fmt[2], fmtty[1]);
                return /* Fmt_fmtty_EBB */[
                        /* Format_arg */Block.__(13, [
                            fmt[0],
                            sub_fmtty$prime,
                            match$27[0]
                          ]),
                        match$27[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 14 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 9) {
                var sub_fmtty1 = fmtty[0];
                if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(fmt[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty1)])) {
                  throw Type_mismatch;
                }
                var match$28 = type_format_gen(fmt[2], CamlinternalFormatBasics.erase_rel(fmtty[2]));
                return /* Fmt_fmtty_EBB */[
                        /* Format_subst */Block.__(14, [
                            fmt[0],
                            sub_fmtty1,
                            match$28[0]
                          ]),
                        match$28[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 15 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 10) {
                var match$29 = type_format_gen(fmt[0], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Alpha */Block.__(15, [match$29[0]]),
                        match$29[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 16 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 11) {
                var match$30 = type_format_gen(fmt[0], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Theta */Block.__(16, [match$30[0]]),
                        match$30[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 17 : 
              var match$31 = type_format_gen(fmt[1], fmtty);
              return /* Fmt_fmtty_EBB */[
                      /* Formatting_lit */Block.__(17, [
                          fmt[0],
                          match$31[0]
                        ]),
                      match$31[1]
                    ];
          case 18 : 
              var formatting_gen = fmt[0];
              var fmt0 = fmt[1];
              var fmtty0 = fmtty;
              if (formatting_gen.tag) {
                var match$32 = formatting_gen[0];
                var match$33 = type_format_gen(match$32[0], fmtty0);
                var match$34 = type_format_gen(fmt0, match$33[1]);
                return /* Fmt_fmtty_EBB */[
                        /* Formatting_gen */Block.__(18, [
                            /* Open_box */Block.__(1, [/* Format */[
                                  match$33[0],
                                  match$32[1]
                                ]]),
                            match$34[0]
                          ]),
                        match$34[1]
                      ];
              } else {
                var match$35 = formatting_gen[0];
                var match$36 = type_format_gen(match$35[0], fmtty0);
                var match$37 = type_format_gen(fmt0, match$36[1]);
                return /* Fmt_fmtty_EBB */[
                        /* Formatting_gen */Block.__(18, [
                            /* Open_tag */Block.__(0, [/* Format */[
                                  match$36[0],
                                  match$35[1]
                                ]]),
                            match$37[0]
                          ]),
                        match$37[1]
                      ];
              }
          case 19 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 13) {
                var match$38 = type_format_gen(fmt[0], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Reader */Block.__(19, [match$38[0]]),
                        match$38[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 20 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 1) {
                var match$39 = type_format_gen(fmt[2], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Scan_char_set */Block.__(20, [
                            fmt[0],
                            fmt[1],
                            match$39[0]
                          ]),
                        match$39[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 21 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 2) {
                var match$40 = type_format_gen(fmt[1], fmtty[0]);
                return /* Fmt_fmtty_EBB */[
                        /* Scan_get_counter */Block.__(21, [
                            fmt[0],
                            match$40[0]
                          ]),
                        match$40[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 23 : 
              var ign = fmt[0];
              var fmt$1 = fmt[1];
              var fmtty$1 = fmtty;
              if (typeof ign === "number") {
                if (ign === 3) {
                  if (typeof fmtty$1 === "number") {
                    throw Type_mismatch;
                  } else if (fmtty$1.tag === 14) {
                    var match$41 = type_format_gen(fmt$1, fmtty$1[0]);
                    return /* Fmt_fmtty_EBB */[
                            /* Ignored_param */Block.__(23, [
                                /* Ignored_reader */3,
                                match$41[0]
                              ]),
                            match$41[1]
                          ];
                  } else {
                    throw Type_mismatch;
                  }
                } else {
                  return type_ignored_param_one(ign, fmt$1, fmtty$1);
                }
              } else {
                switch (ign.tag | 0) {
                  case 7 : 
                      return type_ignored_param_one(/* Ignored_format_arg */Block.__(7, [
                                    ign[0],
                                    ign[1]
                                  ]), fmt$1, fmtty$1);
                  case 8 : 
                      var match$42 = type_ignored_format_substitution(ign[1], fmt$1, fmtty$1);
                      var match$43 = match$42[1];
                      return /* Fmt_fmtty_EBB */[
                              /* Ignored_param */Block.__(23, [
                                  /* Ignored_format_subst */Block.__(8, [
                                      ign[0],
                                      match$42[0]
                                    ]),
                                  match$43[0]
                                ]),
                              match$43[1]
                            ];
                  default:
                    return type_ignored_param_one(ign, fmt$1, fmtty$1);
                }
              }
          case 22 : 
          case 24 : 
              throw Type_mismatch;
          
        }
      }
    }
    
    function type_ignored_format_substitution(sub_fmtty, fmt, fmtty) {
      if (typeof sub_fmtty === "number") {
        return /* Fmtty_fmt_EBB */[
                /* End_of_fmtty */0,
                type_format_gen(fmt, fmtty)
              ];
      } else {
        switch (sub_fmtty.tag | 0) {
          case 0 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag) {
                throw Type_mismatch;
              } else {
                var match = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Char_ty */Block.__(0, [match[0]]),
                        match[1]
                      ];
              }
              break;
          case 1 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 1) {
                var match$1 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* String_ty */Block.__(1, [match$1[0]]),
                        match$1[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 2 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 2) {
                var match$2 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Int_ty */Block.__(2, [match$2[0]]),
                        match$2[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 3 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 3) {
                var match$3 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Int32_ty */Block.__(3, [match$3[0]]),
                        match$3[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 4 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 4) {
                var match$4 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Nativeint_ty */Block.__(4, [match$4[0]]),
                        match$4[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 5 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 5) {
                var match$5 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Int64_ty */Block.__(5, [match$5[0]]),
                        match$5[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 6 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 6) {
                var match$6 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Float_ty */Block.__(6, [match$6[0]]),
                        match$6[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 7 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 7) {
                var match$7 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Bool_ty */Block.__(7, [match$7[0]]),
                        match$7[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 8 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 8) {
                var sub2_fmtty$prime = fmtty[0];
                if (Caml_obj.caml_notequal(/* Fmtty_EBB */[sub_fmtty[0]], /* Fmtty_EBB */[sub2_fmtty$prime])) {
                  throw Type_mismatch;
                }
                var match$8 = type_ignored_format_substitution(sub_fmtty[1], fmt, fmtty[1]);
                return /* Fmtty_fmt_EBB */[
                        /* Format_arg_ty */Block.__(8, [
                            sub2_fmtty$prime,
                            match$8[0]
                          ]),
                        match$8[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 9 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 9) {
                var sub2_fmtty$prime$1 = fmtty[1];
                var sub1_fmtty$prime = fmtty[0];
                if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[0])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub1_fmtty$prime)])) {
                  throw Type_mismatch;
                }
                if (Caml_obj.caml_notequal(/* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub_fmtty[1])], /* Fmtty_EBB */[CamlinternalFormatBasics.erase_rel(sub2_fmtty$prime$1)])) {
                  throw Type_mismatch;
                }
                var sub_fmtty$prime = trans(symm(sub1_fmtty$prime), sub2_fmtty$prime$1);
                var match$9 = fmtty_rel_det(sub_fmtty$prime);
                Curry._1(match$9[1], /* Refl */0);
                Curry._1(match$9[3], /* Refl */0);
                var match$10 = type_ignored_format_substitution(CamlinternalFormatBasics.erase_rel(sub_fmtty[2]), fmt, fmtty[2]);
                return /* Fmtty_fmt_EBB */[
                        /* Format_subst_ty */Block.__(9, [
                            sub1_fmtty$prime,
                            sub2_fmtty$prime$1,
                            symm(match$10[0])
                          ]),
                        match$10[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 10 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 10) {
                var match$11 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Alpha_ty */Block.__(10, [match$11[0]]),
                        match$11[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 11 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 11) {
                var match$12 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Theta_ty */Block.__(11, [match$12[0]]),
                        match$12[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 12 : 
              throw Type_mismatch;
          case 13 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 13) {
                var match$13 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Reader_ty */Block.__(13, [match$13[0]]),
                        match$13[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          case 14 : 
              if (typeof fmtty === "number") {
                throw Type_mismatch;
              } else if (fmtty.tag === 14) {
                var match$14 = type_ignored_format_substitution(sub_fmtty[0], fmt, fmtty[0]);
                return /* Fmtty_fmt_EBB */[
                        /* Ignored_reader_ty */Block.__(14, [match$14[0]]),
                        match$14[1]
                      ];
              } else {
                throw Type_mismatch;
              }
              break;
          
        }
      }
    }
    
    function type_format(fmt, fmtty) {
      var match = type_format_gen(fmt, fmtty);
      if (typeof match[1] === "number") {
        return match[0];
      } else {
        throw Type_mismatch;
      }
    }
    
    function recast(fmt, fmtty) {
      return type_format(fmt, CamlinternalFormatBasics.erase_rel(symm(fmtty)));
    }
    
    function fix_padding(padty, width, str) {
      var len = str.length;
      var width$1 = Pervasives.abs(width);
      var padty$1 = width < 0 ? /* Left */0 : padty;
      if (width$1 <= len) {
        return str;
      } else {
        var res = Bytes.make(width$1, padty$1 === /* Zeros */2 ? /* "0" */48 : /* " " */32);
        switch (padty$1) {
          case 0 : 
              $$String.blit(str, 0, res, 0, len);
              break;
          case 1 : 
              $$String.blit(str, 0, res, width$1 - len | 0, len);
              break;
          case 2 : 
              if (len > 0 && (Caml_string.get(str, 0) === /* "+" */43 || Caml_string.get(str, 0) === /* "-" */45 || Caml_string.get(str, 0) === /* " " */32)) {
                res[0] = Caml_string.get(str, 0);
                $$String.blit(str, 1, res, (width$1 - len | 0) + 1 | 0, len - 1 | 0);
              } else if (len > 1 && Caml_string.get(str, 0) === /* "0" */48 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
                res[1] = Caml_string.get(str, 1);
                $$String.blit(str, 2, res, (width$1 - len | 0) + 2 | 0, len - 2 | 0);
              } else {
                $$String.blit(str, 0, res, width$1 - len | 0, len);
              }
              break;
          
        }
        return Caml_string.bytes_to_string(res);
      }
    }
    
    function fix_int_precision(prec, str) {
      var prec$1 = Pervasives.abs(prec);
      var len = str.length;
      var c = Caml_string.get(str, 0);
      var exit = 0;
      if (c >= 58) {
        if (c >= 71) {
          if (c > 102 || c < 97) {
            return str;
          } else {
            exit = 2;
          }
        } else if (c >= 65) {
          exit = 2;
        } else {
          return str;
        }
      } else if (c !== 32) {
        if (c >= 43) {
          switch (c - 43 | 0) {
            case 0 : 
            case 2 : 
                exit = 1;
                break;
            case 1 : 
            case 3 : 
            case 4 : 
                return str;
            case 5 : 
                if ((prec$1 + 2 | 0) > len && len > 1 && (Caml_string.get(str, 1) === /* "x" */120 || Caml_string.get(str, 1) === /* "X" */88)) {
                  var res = Bytes.make(prec$1 + 2 | 0, /* "0" */48);
                  res[1] = Caml_string.get(str, 1);
                  $$String.blit(str, 2, res, (prec$1 - len | 0) + 4 | 0, len - 2 | 0);
                  return Caml_string.bytes_to_string(res);
                } else {
                  exit = 2;
                }
                break;
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 12 : 
            case 13 : 
            case 14 : 
                exit = 2;
                break;
            
          }
        } else {
          return str;
        }
      } else {
        exit = 1;
      }
      switch (exit) {
        case 1 : 
            if ((prec$1 + 1 | 0) > len) {
              var res$1 = Bytes.make(prec$1 + 1 | 0, /* "0" */48);
              res$1[0] = c;
              $$String.blit(str, 1, res$1, (prec$1 - len | 0) + 2 | 0, len - 1 | 0);
              return Caml_string.bytes_to_string(res$1);
            } else {
              return str;
            }
            break;
        case 2 : 
            if (prec$1 > len) {
              var res$2 = Bytes.make(prec$1, /* "0" */48);
              $$String.blit(str, 0, res$2, prec$1 - len | 0, len);
              return Caml_string.bytes_to_string(res$2);
            } else {
              return str;
            }
            break;
        
      }
    }
    
    function string_to_caml_string(str) {
      return $$String.concat($$String.escaped(str), /* :: */[
                  "\"",
                  /* :: */[
                    "\"",
                    /* [] */0
                  ]
                ]);
    }
    
    function format_of_iconv(iconv) {
      switch (iconv) {
        case 0 : 
            return "%d";
        case 1 : 
            return "%+d";
        case 2 : 
            return "% d";
        case 3 : 
            return "%i";
        case 4 : 
            return "%+i";
        case 5 : 
            return "% i";
        case 6 : 
            return "%x";
        case 7 : 
            return "%#x";
        case 8 : 
            return "%X";
        case 9 : 
            return "%#X";
        case 10 : 
            return "%o";
        case 11 : 
            return "%#o";
        case 12 : 
            return "%u";
        
      }
    }
    
    function format_of_aconv(iconv, c) {
      var seps;
      switch (iconv) {
        case 0 : 
            seps = /* :: */[
              "%",
              /* :: */[
                "d",
                /* [] */0
              ]
            ];
            break;
        case 1 : 
            seps = /* :: */[
              "%+",
              /* :: */[
                "d",
                /* [] */0
              ]
            ];
            break;
        case 2 : 
            seps = /* :: */[
              "% ",
              /* :: */[
                "d",
                /* [] */0
              ]
            ];
            break;
        case 3 : 
            seps = /* :: */[
              "%",
              /* :: */[
                "i",
                /* [] */0
              ]
            ];
            break;
        case 4 : 
            seps = /* :: */[
              "%+",
              /* :: */[
                "i",
                /* [] */0
              ]
            ];
            break;
        case 5 : 
            seps = /* :: */[
              "% ",
              /* :: */[
                "i",
                /* [] */0
              ]
            ];
            break;
        case 6 : 
            seps = /* :: */[
              "%",
              /* :: */[
                "x",
                /* [] */0
              ]
            ];
            break;
        case 7 : 
            seps = /* :: */[
              "%#",
              /* :: */[
                "x",
                /* [] */0
              ]
            ];
            break;
        case 8 : 
            seps = /* :: */[
              "%",
              /* :: */[
                "X",
                /* [] */0
              ]
            ];
            break;
        case 9 : 
            seps = /* :: */[
              "%#",
              /* :: */[
                "X",
                /* [] */0
              ]
            ];
            break;
        case 10 : 
            seps = /* :: */[
              "%",
              /* :: */[
                "o",
                /* [] */0
              ]
            ];
            break;
        case 11 : 
            seps = /* :: */[
              "%#",
              /* :: */[
                "o",
                /* [] */0
              ]
            ];
            break;
        case 12 : 
            seps = /* :: */[
              "%",
              /* :: */[
                "u",
                /* [] */0
              ]
            ];
            break;
        
      }
      return $$String.concat(Caml_string.bytes_to_string(Bytes.make(1, c)), seps);
    }
    
    function format_of_fconv(fconv, prec) {
      if (fconv === /* Float_F */15) {
        return "%.12g";
      } else {
        var prec$1 = Pervasives.abs(prec);
        var symb = char_of_fconv(fconv);
        var buf = /* record */[
          /* ind */0,
          /* bytes */new Array(16)
        ];
        buffer_add_char(buf, /* "%" */37);
        bprint_fconv_flag(buf, fconv);
        buffer_add_char(buf, /* "." */46);
        buffer_add_string(buf, "" + prec$1);
        buffer_add_char(buf, symb);
        return buffer_contents(buf);
      }
    }
    
    function convert_int(iconv, n) {
      return Caml_format.caml_format_int(format_of_iconv(iconv), n);
    }
    
    function convert_int32(iconv, n) {
      return Caml_format.caml_int32_format(format_of_aconv(iconv, /* "l" */108), n);
    }
    
    function convert_nativeint(iconv, n) {
      return Caml_format.caml_nativeint_format(format_of_aconv(iconv, /* "n" */110), n);
    }
    
    function convert_int64(iconv, n) {
      return Caml_format.caml_int64_format(format_of_aconv(iconv, /* "L" */76), n);
    }
    
    function convert_float(fconv, prec, x) {
      var prec$1 = Pervasives.abs(prec);
      var str = Caml_format.caml_format_float(format_of_fconv(fconv, prec$1), x);
      if (fconv !== /* Float_F */15) {
        return str;
      } else {
        var len = str.length;
        var is_valid = function (_i) {
          while(true) {
            var i = _i;
            if (i === len) {
              return /* false */0;
            } else {
              var match = Caml_string.get(str, i);
              var switcher = match - 46 | 0;
              if (switcher > 23 || switcher < 0) {
                if (switcher !== 55) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* true */1;
                }
              } else if (switcher > 22 || switcher < 1) {
                return /* true */1;
              } else {
                _i = i + 1 | 0;
                continue ;
                
              }
            }
          };
        };
        var match = Caml_float.caml_classify_float(x);
        if (match !== 3) {
          if (match >= 4) {
            return "nan";
          } else if (is_valid(0)) {
            return str;
          } else {
            return str + ".";
          }
        } else if (x < 0.0) {
          return "neg_infinity";
        } else {
          return "infinity";
        }
      }
    }
    
    function format_caml_char(c) {
      return $$String.concat(Char.escaped(c), /* :: */[
                  "'",
                  /* :: */[
                    "'",
                    /* [] */0
                  ]
                ]);
    }
    
    function string_of_fmtty(fmtty) {
      var buf = /* record */[
        /* ind */0,
        /* bytes */new Array(16)
      ];
      bprint_fmtty(buf, fmtty);
      return buffer_contents(buf);
    }
    
    function make_printf(_k, o, _acc, _fmt) {
      while(true) {
        var fmt = _fmt;
        var acc = _acc;
        var k = _k;
        if (typeof fmt === "number") {
          return Curry._2(k, o, acc);
        } else {
          switch (fmt.tag | 0) {
            case 0 : 
                var rest = fmt[0];
                return (function(k,acc,rest){
                return function (c) {
                  var new_acc = /* Acc_data_char */Block.__(5, [
                      acc,
                      c
                    ]);
                  return make_printf(k, o, new_acc, rest);
                }
                }(k,acc,rest));
            case 1 : 
                var rest$1 = fmt[0];
                return (function(k,acc,rest$1){
                return function (c) {
                  var new_acc_001 = format_caml_char(c);
                  var new_acc = /* Acc_data_string */Block.__(4, [
                      acc,
                      new_acc_001
                    ]);
                  return make_printf(k, o, new_acc, rest$1);
                }
                }(k,acc,rest$1));
            case 2 : 
                return make_string_padding(k, o, acc, fmt[1], fmt[0], (function (str) {
                              return str;
                            }));
            case 3 : 
                return make_string_padding(k, o, acc, fmt[1], fmt[0], string_to_caml_string);
            case 4 : 
                return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int, fmt[0]);
            case 5 : 
                return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int32, fmt[0]);
            case 6 : 
                return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_nativeint, fmt[0]);
            case 7 : 
                return make_int_padding_precision(k, o, acc, fmt[3], fmt[1], fmt[2], convert_int64, fmt[0]);
            case 8 : 
                var k$1 = k;
                var o$1 = o;
                var acc$1 = acc;
                var fmt$1 = fmt[3];
                var pad = fmt[1];
                var prec = fmt[2];
                var fconv = fmt[0];
                if (typeof pad === "number") {
                  if (typeof prec === "number") {
                    if (prec !== 0) {
                      return (function(k$1,o$1,acc$1,fmt$1,fconv){
                      return function (p, x) {
                        var str = convert_float(fconv, p, x);
                        return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                      acc$1,
                                      str
                                    ]), fmt$1);
                      }
                      }(k$1,o$1,acc$1,fmt$1,fconv));
                    } else {
                      return (function(k$1,o$1,acc$1,fmt$1,fconv){
                      return function (x) {
                        var str = convert_float(fconv, 6, x);
                        return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                      acc$1,
                                      str
                                    ]), fmt$1);
                      }
                      }(k$1,o$1,acc$1,fmt$1,fconv));
                    }
                  } else {
                    var p = prec[0];
                    return (function(k$1,o$1,acc$1,fmt$1,fconv,p){
                    return function (x) {
                      var str = convert_float(fconv, p, x);
                      return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                    acc$1,
                                    str
                                  ]), fmt$1);
                    }
                    }(k$1,o$1,acc$1,fmt$1,fconv,p));
                  }
                } else if (pad.tag) {
                  var padty = pad[0];
                  if (typeof prec === "number") {
                    if (prec !== 0) {
                      return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                      return function (w, p, x) {
                        var str = fix_padding(padty, w, convert_float(fconv, p, x));
                        return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                      acc$1,
                                      str
                                    ]), fmt$1);
                      }
                      }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                    } else {
                      return (function(k$1,o$1,acc$1,fmt$1,fconv,padty){
                      return function (w, x) {
                        var str = convert_float(fconv, 6, x);
                        var str$prime = fix_padding(padty, w, str);
                        return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                      acc$1,
                                      str$prime
                                    ]), fmt$1);
                      }
                      }(k$1,o$1,acc$1,fmt$1,fconv,padty));
                    }
                  } else {
                    var p$1 = prec[0];
                    return (function(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1){
                    return function (w, x) {
                      var str = fix_padding(padty, w, convert_float(fconv, p$1, x));
                      return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                    acc$1,
                                    str
                                  ]), fmt$1);
                    }
                    }(k$1,o$1,acc$1,fmt$1,fconv,padty,p$1));
                  }
                } else {
                  var w = pad[1];
                  var padty$1 = pad[0];
                  if (typeof prec === "number") {
                    if (prec !== 0) {
                      return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                      return function (p, x) {
                        var str = fix_padding(padty$1, w, convert_float(fconv, p, x));
                        return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                      acc$1,
                                      str
                                    ]), fmt$1);
                      }
                      }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                    } else {
                      return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w){
                      return function (x) {
                        var str = convert_float(fconv, 6, x);
                        var str$prime = fix_padding(padty$1, w, str);
                        return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                      acc$1,
                                      str$prime
                                    ]), fmt$1);
                      }
                      }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w));
                    }
                  } else {
                    var p$2 = prec[0];
                    return (function(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2){
                    return function (x) {
                      var str = fix_padding(padty$1, w, convert_float(fconv, p$2, x));
                      return make_printf(k$1, o$1, /* Acc_data_string */Block.__(4, [
                                    acc$1,
                                    str
                                  ]), fmt$1);
                    }
                    }(k$1,o$1,acc$1,fmt$1,fconv,padty$1,w,p$2));
                  }
                }
            case 9 : 
                var rest$2 = fmt[0];
                return (function(k,acc,rest$2){
                return function (b) {
                  return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                                acc,
                                b ? "true" : "false"
                              ]), rest$2);
                }
                }(k,acc,rest$2));
            case 10 : 
                _fmt = fmt[0];
                _acc = /* Acc_flush */Block.__(7, [acc]);
                continue ;
                case 11 : 
                _fmt = fmt[1];
                _acc = /* Acc_string_literal */Block.__(2, [
                    acc,
                    fmt[0]
                  ]);
                continue ;
                case 12 : 
                _fmt = fmt[1];
                _acc = /* Acc_char_literal */Block.__(3, [
                    acc,
                    fmt[0]
                  ]);
                continue ;
                case 13 : 
                var rest$3 = fmt[2];
                var ty = string_of_fmtty(fmt[1]);
                return (function(k,acc,rest$3,ty){
                return function () {
                  return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                                acc,
                                ty
                              ]), rest$3);
                }
                }(k,acc,rest$3,ty));
            case 14 : 
                var rest$4 = fmt[2];
                var fmtty = fmt[1];
                return (function(k,acc,fmtty,rest$4){
                return function (param) {
                  return make_printf(k, o, acc, CamlinternalFormatBasics.concat_fmt(recast(param[0], fmtty), rest$4));
                }
                }(k,acc,fmtty,rest$4));
            case 15 : 
                var rest$5 = fmt[0];
                return (function(k,acc,rest$5){
                return function (f, x) {
                  return make_printf(k, o, /* Acc_delay */Block.__(6, [
                                acc,
                                (function (o) {
                                    return Curry._2(f, o, x);
                                  })
                              ]), rest$5);
                }
                }(k,acc,rest$5));
            case 16 : 
                var rest$6 = fmt[0];
                return (function(k,acc,rest$6){
                return function (f) {
                  return make_printf(k, o, /* Acc_delay */Block.__(6, [
                                acc,
                                f
                              ]), rest$6);
                }
                }(k,acc,rest$6));
            case 17 : 
                _fmt = fmt[1];
                _acc = /* Acc_formatting_lit */Block.__(0, [
                    acc,
                    fmt[0]
                  ]);
                continue ;
                case 18 : 
                var match = fmt[0];
                if (match.tag) {
                  var rest$7 = fmt[1];
                  var k$prime = (function(k,acc,rest$7){
                  return function k$prime(koc, kacc) {
                    return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                                  acc,
                                  /* Acc_open_box */Block.__(1, [kacc])
                                ]), rest$7);
                  }
                  }(k,acc,rest$7));
                  _fmt = match[0][0];
                  _acc = /* End_of_acc */0;
                  _k = k$prime;
                  continue ;
                  
                } else {
                  var rest$8 = fmt[1];
                  var k$prime$1 = (function(k,acc,rest$8){
                  return function k$prime$1(koc, kacc) {
                    return make_printf(k, koc, /* Acc_formatting_gen */Block.__(1, [
                                  acc,
                                  /* Acc_open_tag */Block.__(0, [kacc])
                                ]), rest$8);
                  }
                  }(k,acc,rest$8));
                  _fmt = match[0][0];
                  _acc = /* End_of_acc */0;
                  _k = k$prime$1;
                  continue ;
                  
                }
                break;
            case 19 : 
                throw [
                      Caml_builtin_exceptions.assert_failure,
                      [
                        "camlinternalFormat.ml",
                        1449,
                        4
                      ]
                    ];
            case 20 : 
                var rest$9 = fmt[2];
                var new_acc = /* Acc_invalid_arg */Block.__(8, [
                    acc,
                    "Printf: bad conversion %["
                  ]);
                return (function(k,rest$9,new_acc){
                return function () {
                  return make_printf(k, o, new_acc, rest$9);
                }
                }(k,rest$9,new_acc));
            case 21 : 
                var rest$10 = fmt[1];
                return (function(k,acc,rest$10){
                return function (n) {
                  var new_acc_001 = Caml_format.caml_format_int("%u", n);
                  var new_acc = /* Acc_data_string */Block.__(4, [
                      acc,
                      new_acc_001
                    ]);
                  return make_printf(k, o, new_acc, rest$10);
                }
                }(k,acc,rest$10));
            case 22 : 
                var rest$11 = fmt[0];
                return (function(k,acc,rest$11){
                return function (c) {
                  var new_acc = /* Acc_data_char */Block.__(5, [
                      acc,
                      c
                    ]);
                  return make_printf(k, o, new_acc, rest$11);
                }
                }(k,acc,rest$11));
            case 23 : 
                var k$2 = k;
                var o$2 = o;
                var acc$2 = acc;
                var ign = fmt[0];
                var fmt$2 = fmt[1];
                if (typeof ign === "number") {
                  if (ign === 3) {
                    throw [
                          Caml_builtin_exceptions.assert_failure,
                          [
                            "camlinternalFormat.ml",
                            1517,
                            39
                          ]
                        ];
                  } else {
                    return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
                  }
                } else if (ign.tag === 8) {
                  return make_from_fmtty(k$2, o$2, acc$2, ign[1], fmt$2);
                } else {
                  return make_invalid_arg(k$2, o$2, acc$2, fmt$2);
                }
            case 24 : 
                return make_custom(k, o, acc, fmt[2], fmt[0], Curry._1(fmt[1], /* () */0));
            
          }
        }
      };
    }
    
    function make_from_fmtty(k, o, acc, fmtty, fmt) {
      if (typeof fmtty === "number") {
        return make_invalid_arg(k, o, acc, fmt);
      } else {
        switch (fmtty.tag | 0) {
          case 0 : 
              var rest = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest, fmt);
                });
          case 1 : 
              var rest$1 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$1, fmt);
                });
          case 2 : 
              var rest$2 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$2, fmt);
                });
          case 3 : 
              var rest$3 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$3, fmt);
                });
          case 4 : 
              var rest$4 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$4, fmt);
                });
          case 5 : 
              var rest$5 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$5, fmt);
                });
          case 6 : 
              var rest$6 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$6, fmt);
                });
          case 7 : 
              var rest$7 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$7, fmt);
                });
          case 8 : 
              var rest$8 = fmtty[1];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$8, fmt);
                });
          case 9 : 
              var rest$9 = fmtty[2];
              var ty = trans(symm(fmtty[0]), fmtty[1]);
              return (function () {
                  return make_from_fmtty(k, o, acc, CamlinternalFormatBasics.concat_fmtty(ty, rest$9), fmt);
                });
          case 10 : 
              var rest$10 = fmtty[0];
              return (function (_, _$1) {
                  return make_from_fmtty(k, o, acc, rest$10, fmt);
                });
          case 11 : 
              var rest$11 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$11, fmt);
                });
          case 12 : 
              var rest$12 = fmtty[0];
              return (function () {
                  return make_from_fmtty(k, o, acc, rest$12, fmt);
                });
          case 13 : 
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "camlinternalFormat.ml",
                      1540,
                      31
                    ]
                  ];
          case 14 : 
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "camlinternalFormat.ml",
                      1541,
                      31
                    ]
                  ];
          
        }
      }
    }
    
    function make_invalid_arg(k, o, acc, fmt) {
      return make_printf(k, o, /* Acc_invalid_arg */Block.__(8, [
                    acc,
                    "Printf: bad conversion %_"
                  ]), fmt);
    }
    
    function make_string_padding(k, o, acc, fmt, pad, trans) {
      if (typeof pad === "number") {
        return (function (x) {
            var new_acc_001 = Curry._1(trans, x);
            var new_acc = /* Acc_data_string */Block.__(4, [
                acc,
                new_acc_001
              ]);
            return make_printf(k, o, new_acc, fmt);
          });
      } else if (pad.tag) {
        var padty = pad[0];
        return (function (w, x) {
            var new_acc_001 = fix_padding(padty, w, Curry._1(trans, x));
            var new_acc = /* Acc_data_string */Block.__(4, [
                acc,
                new_acc_001
              ]);
            return make_printf(k, o, new_acc, fmt);
          });
      } else {
        var width = pad[1];
        var padty$1 = pad[0];
        return (function (x) {
            var new_acc_001 = fix_padding(padty$1, width, Curry._1(trans, x));
            var new_acc = /* Acc_data_string */Block.__(4, [
                acc,
                new_acc_001
              ]);
            return make_printf(k, o, new_acc, fmt);
          });
      }
    }
    
    function make_int_padding_precision(k, o, acc, fmt, pad, prec, trans, iconv) {
      if (typeof pad === "number") {
        if (typeof prec === "number") {
          if (prec !== 0) {
            return (function (p, x) {
                var str = fix_int_precision(p, Curry._2(trans, iconv, x));
                return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                              acc,
                              str
                            ]), fmt);
              });
          } else {
            return (function (x) {
                var str = Curry._2(trans, iconv, x);
                return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                              acc,
                              str
                            ]), fmt);
              });
          }
        } else {
          var p = prec[0];
          return (function (x) {
              var str = fix_int_precision(p, Curry._2(trans, iconv, x));
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            str
                          ]), fmt);
            });
        }
      } else if (pad.tag) {
        var padty = pad[0];
        if (typeof prec === "number") {
          if (prec !== 0) {
            return (function (w, p, x) {
                var str = fix_padding(padty, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
                return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                              acc,
                              str
                            ]), fmt);
              });
          } else {
            return (function (w, x) {
                var str = fix_padding(padty, w, Curry._2(trans, iconv, x));
                return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                              acc,
                              str
                            ]), fmt);
              });
          }
        } else {
          var p$1 = prec[0];
          return (function (w, x) {
              var str = fix_padding(padty, w, fix_int_precision(p$1, Curry._2(trans, iconv, x)));
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            str
                          ]), fmt);
            });
        }
      } else {
        var w = pad[1];
        var padty$1 = pad[0];
        if (typeof prec === "number") {
          if (prec !== 0) {
            return (function (p, x) {
                var str = fix_padding(padty$1, w, fix_int_precision(p, Curry._2(trans, iconv, x)));
                return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                              acc,
                              str
                            ]), fmt);
              });
          } else {
            return (function (x) {
                var str = fix_padding(padty$1, w, Curry._2(trans, iconv, x));
                return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                              acc,
                              str
                            ]), fmt);
              });
          }
        } else {
          var p$2 = prec[0];
          return (function (x) {
              var str = fix_padding(padty$1, w, fix_int_precision(p$2, Curry._2(trans, iconv, x)));
              return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                            acc,
                            str
                          ]), fmt);
            });
        }
      }
    }
    
    function make_custom(k, o, acc, rest, arity, f) {
      if (arity) {
        var arity$1 = arity[0];
        return (function (x) {
            return make_custom(k, o, acc, rest, arity$1, Curry._1(f, x));
          });
      } else {
        return make_printf(k, o, /* Acc_data_string */Block.__(4, [
                      acc,
                      f
                    ]), rest);
      }
    }
    
    function output_acc(o, _acc) {
      while(true) {
        var acc = _acc;
        var exit = 0;
        if (typeof acc === "number") {
          return /* () */0;
        } else {
          switch (acc.tag | 0) {
            case 0 : 
                var s = string_of_formatting_lit(acc[1]);
                output_acc(o, acc[0]);
                return Pervasives.output_string(o, s);
            case 1 : 
                var match = acc[1];
                var p = acc[0];
                output_acc(o, p);
                if (match.tag) {
                  Pervasives.output_string(o, "@[");
                  _acc = match[0];
                  continue ;
                  
                } else {
                  Pervasives.output_string(o, "@{");
                  _acc = match[0];
                  continue ;
                  
                }
                break;
            case 2 : 
            case 4 : 
                exit = 1;
                break;
            case 3 : 
            case 5 : 
                exit = 2;
                break;
            case 6 : 
                output_acc(o, acc[0]);
                return Curry._1(acc[1], o);
            case 7 : 
                output_acc(o, acc[0]);
                return Caml_io.caml_ml_flush(o);
            case 8 : 
                output_acc(o, acc[0]);
                throw [
                      Caml_builtin_exceptions.invalid_argument,
                      acc[1]
                    ];
            
          }
        }
        switch (exit) {
          case 1 : 
              output_acc(o, acc[0]);
              return Pervasives.output_string(o, acc[1]);
          case 2 : 
              output_acc(o, acc[0]);
              return Caml_io.caml_ml_output_char(o, acc[1]);
          
        }
      };
    }
    
    function bufput_acc(b, _acc) {
      while(true) {
        var acc = _acc;
        var exit = 0;
        if (typeof acc === "number") {
          return /* () */0;
        } else {
          switch (acc.tag | 0) {
            case 0 : 
                var s = string_of_formatting_lit(acc[1]);
                bufput_acc(b, acc[0]);
                return Buffer.add_string(b, s);
            case 1 : 
                var match = acc[1];
                var p = acc[0];
                bufput_acc(b, p);
                if (match.tag) {
                  Buffer.add_string(b, "@[");
                  _acc = match[0];
                  continue ;
                  
                } else {
                  Buffer.add_string(b, "@{");
                  _acc = match[0];
                  continue ;
                  
                }
                break;
            case 2 : 
            case 4 : 
                exit = 1;
                break;
            case 3 : 
            case 5 : 
                exit = 2;
                break;
            case 6 : 
                bufput_acc(b, acc[0]);
                return Curry._1(acc[1], b);
            case 7 : 
                _acc = acc[0];
                continue ;
                case 8 : 
                bufput_acc(b, acc[0]);
                throw [
                      Caml_builtin_exceptions.invalid_argument,
                      acc[1]
                    ];
            
          }
        }
        switch (exit) {
          case 1 : 
              bufput_acc(b, acc[0]);
              return Buffer.add_string(b, acc[1]);
          case 2 : 
              bufput_acc(b, acc[0]);
              return Buffer.add_char(b, acc[1]);
          
        }
      };
    }
    
    function strput_acc(b, _acc) {
      while(true) {
        var acc = _acc;
        var exit = 0;
        if (typeof acc === "number") {
          return /* () */0;
        } else {
          switch (acc.tag | 0) {
            case 0 : 
                var s = string_of_formatting_lit(acc[1]);
                strput_acc(b, acc[0]);
                return Buffer.add_string(b, s);
            case 1 : 
                var match = acc[1];
                var p = acc[0];
                strput_acc(b, p);
                if (match.tag) {
                  Buffer.add_string(b, "@[");
                  _acc = match[0];
                  continue ;
                  
                } else {
                  Buffer.add_string(b, "@{");
                  _acc = match[0];
                  continue ;
                  
                }
                break;
            case 2 : 
            case 4 : 
                exit = 1;
                break;
            case 3 : 
            case 5 : 
                exit = 2;
                break;
            case 6 : 
                strput_acc(b, acc[0]);
                return Buffer.add_string(b, Curry._1(acc[1], /* () */0));
            case 7 : 
                _acc = acc[0];
                continue ;
                case 8 : 
                strput_acc(b, acc[0]);
                throw [
                      Caml_builtin_exceptions.invalid_argument,
                      acc[1]
                    ];
            
          }
        }
        switch (exit) {
          case 1 : 
              strput_acc(b, acc[0]);
              return Buffer.add_string(b, acc[1]);
          case 2 : 
              strput_acc(b, acc[0]);
              return Buffer.add_char(b, acc[1]);
          
        }
      };
    }
    
    function failwith_message(param) {
      var buf = Buffer.create(256);
      var k = function (_, acc) {
        strput_acc(buf, acc);
        var s = Buffer.contents(buf);
        throw [
              Caml_builtin_exceptions.failure,
              s
            ];
      };
      return make_printf(k, /* () */0, /* End_of_acc */0, param[0]);
    }
    
    function open_box_of_string(str) {
      if (str === "") {
        return /* tuple */[
                0,
                /* Pp_box */4
              ];
      } else {
        var len = str.length;
        var invalid_box = function () {
          return Curry._1(failwith_message(/* Format */[
                          /* String_literal */Block.__(11, [
                              "invalid box description ",
                              /* Caml_string */Block.__(3, [
                                  /* No_padding */0,
                                  /* End_of_format */0
                                ])
                            ]),
                          "invalid box description %S"
                        ]), str);
        };
        var parse_spaces = function (_i) {
          while(true) {
            var i = _i;
            if (i === len) {
              return i;
            } else {
              var match = Caml_string.get(str, i);
              if (match !== 9) {
                if (match !== 32) {
                  return i;
                } else {
                  _i = i + 1 | 0;
                  continue ;
                  
                }
              } else {
                _i = i + 1 | 0;
                continue ;
                
              }
            }
          };
        };
        var parse_lword = function (_, _j) {
          while(true) {
            var j = _j;
            if (j === len) {
              return j;
            } else {
              var match = Caml_string.get(str, j);
              if (match > 122 || match < 97) {
                return j;
              } else {
                _j = j + 1 | 0;
                continue ;
                
              }
            }
          };
        };
        var parse_int = function (_, _j) {
          while(true) {
            var j = _j;
            if (j === len) {
              return j;
            } else {
              var match = Caml_string.get(str, j);
              if (match >= 48) {
                if (match >= 58) {
                  return j;
                } else {
                  _j = j + 1 | 0;
                  continue ;
                  
                }
              } else if (match !== 45) {
                return j;
              } else {
                _j = j + 1 | 0;
                continue ;
                
              }
            }
          };
        };
        var wstart = parse_spaces(0);
        var wend = parse_lword(wstart, wstart);
        var box_name = $$String.sub(str, wstart, wend - wstart | 0);
        var nstart = parse_spaces(wend);
        var nend = parse_int(nstart, nstart);
        var indent;
        if (nstart === nend) {
          indent = 0;
        } else {
          try {
            indent = Caml_format.caml_int_of_string($$String.sub(str, nstart, nend - nstart | 0));
          }
          catch (raw_exn){
            var exn = Js_exn.internalToOCamlException(raw_exn);
            if (exn[0] === Caml_builtin_exceptions.failure) {
              indent = invalid_box(/* () */0);
            } else {
              throw exn;
            }
          }
        }
        var exp_end = parse_spaces(nend);
        if (exp_end !== len) {
          invalid_box(/* () */0);
        }
        var box_type;
        switch (box_name) {
          case "" : 
          case "b" : 
              box_type = /* Pp_box */4;
              break;
          case "h" : 
              box_type = /* Pp_hbox */0;
              break;
          case "hov" : 
              box_type = /* Pp_hovbox */3;
              break;
          case "hv" : 
              box_type = /* Pp_hvbox */2;
              break;
          case "v" : 
              box_type = /* Pp_vbox */1;
              break;
          default:
            box_type = invalid_box(/* () */0);
        }
        return /* tuple */[
                indent,
                box_type
              ];
      }
    }
    
    function make_padding_fmt_ebb(pad, fmt) {
      if (typeof pad === "number") {
        return /* Padding_fmt_EBB */[
                /* No_padding */0,
                fmt
              ];
      } else if (pad.tag) {
        return /* Padding_fmt_EBB */[
                /* Arg_padding */Block.__(1, [pad[0]]),
                fmt
              ];
      } else {
        return /* Padding_fmt_EBB */[
                /* Lit_padding */Block.__(0, [
                    pad[0],
                    pad[1]
                  ]),
                fmt
              ];
      }
    }
    
    function make_precision_fmt_ebb(prec, fmt) {
      if (typeof prec === "number") {
        if (prec !== 0) {
          return /* Precision_fmt_EBB */[
                  /* Arg_precision */1,
                  fmt
                ];
        } else {
          return /* Precision_fmt_EBB */[
                  /* No_precision */0,
                  fmt
                ];
        }
      } else {
        return /* Precision_fmt_EBB */[
                /* Lit_precision */[prec[0]],
                fmt
              ];
      }
    }
    
    function make_padprec_fmt_ebb(pad, prec, fmt) {
      var match = make_precision_fmt_ebb(prec, fmt);
      var fmt$prime = match[1];
      var prec$1 = match[0];
      if (typeof pad === "number") {
        return /* Padprec_fmt_EBB */[
                /* No_padding */0,
                prec$1,
                fmt$prime
              ];
      } else if (pad.tag) {
        return /* Padprec_fmt_EBB */[
                /* Arg_padding */Block.__(1, [pad[0]]),
                prec$1,
                fmt$prime
              ];
      } else {
        return /* Padprec_fmt_EBB */[
                /* Lit_padding */Block.__(0, [
                    pad[0],
                    pad[1]
                  ]),
                prec$1,
                fmt$prime
              ];
      }
    }
    
    function fmt_ebb_of_string(legacy_behavior, str) {
      var legacy_behavior$1 = legacy_behavior ? legacy_behavior[0] : /* true */1;
      var invalid_format_message = function (str_ind, msg) {
        return Curry._3(failwith_message(/* Format */[
                        /* String_literal */Block.__(11, [
                            "invalid format ",
                            /* Caml_string */Block.__(3, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ": at character number ",
                                    /* Int */Block.__(4, [
                                        /* Int_d */0,
                                        /* No_padding */0,
                                        /* No_precision */0,
                                        /* String_literal */Block.__(11, [
                                            ", ",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* End_of_format */0
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ]),
                        "invalid format %S: at character number %d, %s"
                      ]), str, str_ind, msg);
      };
      var invalid_format_without = function (str_ind, c, s) {
        return Curry._4(failwith_message(/* Format */[
                        /* String_literal */Block.__(11, [
                            "invalid format ",
                            /* Caml_string */Block.__(3, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ": at character number ",
                                    /* Int */Block.__(4, [
                                        /* Int_d */0,
                                        /* No_padding */0,
                                        /* No_precision */0,
                                        /* String_literal */Block.__(11, [
                                            ", '",
                                            /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                    "' without ",
                                                    /* String */Block.__(2, [
                                                        /* No_padding */0,
                                                        /* End_of_format */0
                                                      ])
                                                  ])])
                                          ])
                                      ])
                                  ])
                              ])
                          ]),
                        "invalid format %S: at character number %d, '%c' without %s"
                      ]), str, str_ind, c, s);
      };
      var expected_character = function (str_ind, expected, read) {
        return Curry._4(failwith_message(/* Format */[
                        /* String_literal */Block.__(11, [
                            "invalid format ",
                            /* Caml_string */Block.__(3, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ": at character number ",
                                    /* Int */Block.__(4, [
                                        /* Int_d */0,
                                        /* No_padding */0,
                                        /* No_precision */0,
                                        /* String_literal */Block.__(11, [
                                            ", ",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* String_literal */Block.__(11, [
                                                    " expected, read ",
                                                    /* Caml_char */Block.__(1, [/* End_of_format */0])
                                                  ])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ]),
                        "invalid format %S: at character number %d, %s expected, read %C"
                      ]), str, str_ind, expected, read);
      };
      var compute_int_conv = function (pct_ind, str_ind, _plus, _sharp, _space, symb) {
        while(true) {
          var space = _space;
          var sharp = _sharp;
          var plus = _plus;
          var exit = 0;
          var exit$1 = 0;
          if (plus !== 0) {
            if (sharp !== 0) {
              exit$1 = 2;
            } else if (space !== 0) {
              exit = 1;
            } else if (symb !== 100) {
              if (symb !== 105) {
                exit = 1;
              } else {
                return /* Int_pi */4;
              }
            } else {
              return /* Int_pd */1;
            }
          } else if (sharp !== 0) {
            if (space !== 0) {
              exit$1 = 2;
            } else if (symb !== 88) {
              if (symb !== 111) {
                if (symb !== 120) {
                  exit$1 = 2;
                } else {
                  return /* Int_Cx */7;
                }
              } else {
                return /* Int_Co */11;
              }
            } else {
              return /* Int_CX */9;
            }
          } else if (space !== 0) {
            if (symb !== 100) {
              if (symb !== 105) {
                exit = 1;
              } else {
                return /* Int_si */5;
              }
            } else {
              return /* Int_sd */2;
            }
          } else {
            var switcher = symb - 88 | 0;
            if (switcher > 32 || switcher < 0) {
              exit = 1;
            } else {
              switch (switcher) {
                case 0 : 
                    return /* Int_X */8;
                case 12 : 
                    return /* Int_d */0;
                case 17 : 
                    return /* Int_i */3;
                case 23 : 
                    return /* Int_o */10;
                case 29 : 
                    return /* Int_u */12;
                case 1 : 
                case 2 : 
                case 3 : 
                case 4 : 
                case 5 : 
                case 6 : 
                case 7 : 
                case 8 : 
                case 9 : 
                case 10 : 
                case 11 : 
                case 13 : 
                case 14 : 
                case 15 : 
                case 16 : 
                case 18 : 
                case 19 : 
                case 20 : 
                case 21 : 
                case 22 : 
                case 24 : 
                case 25 : 
                case 26 : 
                case 27 : 
                case 28 : 
                case 30 : 
                case 31 : 
                    exit = 1;
                    break;
                case 32 : 
                    return /* Int_x */6;
                
              }
            }
          }
          if (exit$1 === 2) {
            var exit$2 = 0;
            var switcher$1 = symb - 88 | 0;
            if (switcher$1 > 32 || switcher$1 < 0) {
              exit = 1;
            } else {
              switch (switcher$1) {
                case 0 : 
                    if (legacy_behavior$1) {
                      return /* Int_CX */9;
                    } else {
                      exit = 1;
                    }
                    break;
                case 23 : 
                    if (legacy_behavior$1) {
                      return /* Int_Co */11;
                    } else {
                      exit = 1;
                    }
                    break;
                case 12 : 
                case 17 : 
                case 29 : 
                    exit$2 = 3;
                    break;
                case 1 : 
                case 2 : 
                case 3 : 
                case 4 : 
                case 5 : 
                case 6 : 
                case 7 : 
                case 8 : 
                case 9 : 
                case 10 : 
                case 11 : 
                case 13 : 
                case 14 : 
                case 15 : 
                case 16 : 
                case 18 : 
                case 19 : 
                case 20 : 
                case 21 : 
                case 22 : 
                case 24 : 
                case 25 : 
                case 26 : 
                case 27 : 
                case 28 : 
                case 30 : 
                case 31 : 
                    exit = 1;
                    break;
                case 32 : 
                    if (legacy_behavior$1) {
                      return /* Int_Cx */7;
                    } else {
                      exit = 1;
                    }
                    break;
                
              }
            }
            if (exit$2 === 3) {
              if (legacy_behavior$1) {
                _sharp = /* false */0;
                continue ;
                
              } else {
                return incompatible_flag(pct_ind, str_ind, symb, "'#'");
              }
            }
            
          }
          if (exit === 1) {
            if (plus !== 0) {
              if (space !== 0) {
                if (legacy_behavior$1) {
                  _space = /* false */0;
                  continue ;
                  
                } else {
                  return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
                }
              } else if (legacy_behavior$1) {
                _plus = /* false */0;
                continue ;
                
              } else {
                return incompatible_flag(pct_ind, str_ind, symb, "'+'");
              }
            } else if (space !== 0) {
              if (legacy_behavior$1) {
                _space = /* false */0;
                continue ;
                
              } else {
                return incompatible_flag(pct_ind, str_ind, symb, "' '");
              }
            } else {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "camlinternalFormat.ml",
                      2719,
                      28
                    ]
                  ];
            }
          }
          
        };
      };
      var incompatible_flag = function (pct_ind, str_ind, symb, option) {
        var subfmt = $$String.sub(str, pct_ind, str_ind - pct_ind | 0);
        return Curry._5(failwith_message(/* Format */[
                        /* String_literal */Block.__(11, [
                            "invalid format ",
                            /* Caml_string */Block.__(3, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ": at character number ",
                                    /* Int */Block.__(4, [
                                        /* Int_d */0,
                                        /* No_padding */0,
                                        /* No_precision */0,
                                        /* String_literal */Block.__(11, [
                                            ", ",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* String_literal */Block.__(11, [
                                                    " is incompatible with '",
                                                    /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                                            "' in sub-format ",
                                                            /* Caml_string */Block.__(3, [
                                                                /* No_padding */0,
                                                                /* End_of_format */0
                                                              ])
                                                          ])])
                                                  ])
                                              ])
                                          ])
                                      ])
                                  ])
                              ])
                          ]),
                        "invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S"
                      ]), str, pct_ind, option, symb, subfmt);
      };
      var parse_positive = function (_str_ind, end_ind, _acc) {
        while(true) {
          var acc = _acc;
          var str_ind = _str_ind;
          if (str_ind === end_ind) {
            invalid_format_message(end_ind, "unexpected end of format");
          }
          var c = Caml_string.get(str, str_ind);
          if (c > 57 || c < 48) {
            return /* tuple */[
                    str_ind,
                    acc
                  ];
          } else {
            var new_acc = Caml_int32.imul(acc, 10) + (c - /* "0" */48 | 0) | 0;
            _acc = new_acc;
            _str_ind = str_ind + 1 | 0;
            continue ;
            
          }
        };
      };
      var parse_after_precision = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad, prec) {
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var parse_conv = function (padprec) {
          return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, prec, padprec, Caml_string.get(str, str_ind));
        };
        if (typeof pad === "number") {
          var exit = 0;
          if (typeof prec === "number") {
            if (prec !== 0) {
              exit = 1;
            } else {
              return parse_conv(/* No_padding */0);
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (minus !== 0) {
              if (typeof prec === "number") {
                return parse_conv(/* Arg_padding */Block.__(1, [/* Left */0]));
              } else {
                return parse_conv(/* Lit_padding */Block.__(0, [
                              /* Left */0,
                              prec[0]
                            ]));
              }
            } else if (typeof prec === "number") {
              return parse_conv(/* Arg_padding */Block.__(1, [/* Right */1]));
            } else {
              return parse_conv(/* Lit_padding */Block.__(0, [
                            /* Right */1,
                            prec[0]
                          ]));
            }
          }
          
        } else {
          return parse_conv(pad);
        }
      };
      var parse_after_padding = function (pct_ind, str_ind, end_ind, minus, plus, sharp, space, ign, pad) {
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var symb = Caml_string.get(str, str_ind);
        if (symb !== 46) {
          return parse_conversion(pct_ind, str_ind + 1 | 0, end_ind, plus, sharp, space, ign, pad, /* No_precision */0, pad, symb);
        } else {
          var pct_ind$1 = pct_ind;
          var str_ind$1 = str_ind + 1 | 0;
          var end_ind$1 = end_ind;
          var minus$1 = minus;
          var plus$1 = plus;
          var sharp$1 = sharp;
          var space$1 = space;
          var ign$1 = ign;
          var pad$1 = pad;
          if (str_ind$1 === end_ind$1) {
            invalid_format_message(end_ind$1, "unexpected end of format");
          }
          var parse_literal = function (minus, str_ind) {
            var match = parse_positive(str_ind, end_ind$1, 0);
            return parse_after_precision(pct_ind$1, match[0], end_ind$1, minus, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[match[1]]);
          };
          var symb$1 = Caml_string.get(str, str_ind$1);
          var exit = 0;
          var exit$1 = 0;
          if (symb$1 >= 48) {
            if (symb$1 >= 58) {
              exit = 1;
            } else {
              return parse_literal(minus$1, str_ind$1);
            }
          } else if (symb$1 >= 42) {
            switch (symb$1 - 42 | 0) {
              case 0 : 
                  return parse_after_precision(pct_ind$1, str_ind$1 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Arg_precision */1);
              case 1 : 
              case 3 : 
                  exit$1 = 2;
                  break;
              case 2 : 
              case 4 : 
              case 5 : 
                  exit = 1;
                  break;
              
            }
          } else {
            exit = 1;
          }
          if (exit$1 === 2) {
            if (legacy_behavior$1) {
              return parse_literal(minus$1 || +(symb$1 === /* "-" */45), str_ind$1 + 1 | 0);
            } else {
              exit = 1;
            }
          }
          if (exit === 1) {
            if (legacy_behavior$1) {
              return parse_after_precision(pct_ind$1, str_ind$1, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, pad$1, /* Lit_precision */[0]);
            } else {
              return invalid_format_without(str_ind$1 - 1 | 0, /* "." */46, "precision");
            }
          }
          
        }
      };
      var parse_literal = function (lit_start, _str_ind, end_ind) {
        while(true) {
          var str_ind = _str_ind;
          if (str_ind === end_ind) {
            return add_literal(lit_start, str_ind, /* End_of_format */0);
          } else {
            var match = Caml_string.get(str, str_ind);
            if (match !== 37) {
              if (match !== 64) {
                _str_ind = str_ind + 1 | 0;
                continue ;
                
              } else {
                var match$1 = parse_after_at(str_ind + 1 | 0, end_ind);
                return add_literal(lit_start, str_ind, match$1[0]);
              }
            } else {
              var match$2 = parse_format(str_ind, end_ind);
              return add_literal(lit_start, str_ind, match$2[0]);
            }
          }
        };
      };
      var parse_format = function (pct_ind, end_ind) {
        var pct_ind$1 = pct_ind;
        var str_ind = pct_ind + 1 | 0;
        var end_ind$1 = end_ind;
        if (str_ind === end_ind$1) {
          invalid_format_message(end_ind$1, "unexpected end of format");
        }
        var match = Caml_string.get(str, str_ind);
        if (match !== 95) {
          return parse_flags(pct_ind$1, str_ind, end_ind$1, /* false */0);
        } else {
          return parse_flags(pct_ind$1, str_ind + 1 | 0, end_ind$1, /* true */1);
        }
      };
      var parse_after_at = function (str_ind, end_ind) {
        if (str_ind === end_ind) {
          return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                      /* "@" */64,
                      /* End_of_format */0
                    ])];
        } else {
          var c = Caml_string.get(str, str_ind);
          var exit = 0;
          if (c >= 65) {
            if (c >= 94) {
              var switcher = c - 123 | 0;
              if (switcher > 2 || switcher < 0) {
                exit = 1;
              } else {
                switch (switcher) {
                  case 0 : 
                      return parse_tag(/* true */1, str_ind + 1 | 0, end_ind);
                  case 1 : 
                      exit = 1;
                      break;
                  case 2 : 
                      var beg_ind = str_ind + 1 | 0;
                      var match = parse_literal(beg_ind, beg_ind, end_ind);
                      return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                  /* Close_tag */1,
                                  match[0]
                                ])];
                  
                }
              }
            } else if (c >= 91) {
              switch (c - 91 | 0) {
                case 0 : 
                    return parse_tag(/* false */0, str_ind + 1 | 0, end_ind);
                case 1 : 
                    exit = 1;
                    break;
                case 2 : 
                    var beg_ind$1 = str_ind + 1 | 0;
                    var match$1 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                /* Close_box */0,
                                match$1[0]
                              ])];
                
              }
            } else {
              exit = 1;
            }
          } else if (c !== 10) {
            if (c >= 32) {
              switch (c - 32 | 0) {
                case 0 : 
                    var beg_ind$2 = str_ind + 1 | 0;
                    var match$2 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                /* Break */Block.__(0, [
                                    "@ ",
                                    1,
                                    0
                                  ]),
                                match$2[0]
                              ])];
                case 5 : 
                    if ((str_ind + 1 | 0) < end_ind && Caml_string.get(str, str_ind + 1 | 0) === /* "%" */37) {
                      var beg_ind$3 = str_ind + 2 | 0;
                      var match$3 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                      return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                  /* Escaped_percent */6,
                                  match$3[0]
                                ])];
                    } else {
                      var match$4 = parse_literal(str_ind, str_ind, end_ind);
                      return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                                  /* "@" */64,
                                  match$4[0]
                                ])];
                    }
                    break;
                case 12 : 
                    var beg_ind$4 = str_ind + 1 | 0;
                    var match$5 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                /* Break */Block.__(0, [
                                    "@,",
                                    0,
                                    0
                                  ]),
                                match$5[0]
                              ])];
                case 14 : 
                    var beg_ind$5 = str_ind + 1 | 0;
                    var match$6 = parse_literal(beg_ind$5, beg_ind$5, end_ind);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                /* Flush_newline */4,
                                match$6[0]
                              ])];
                case 27 : 
                    var str_ind$1 = str_ind + 1 | 0;
                    var end_ind$1 = end_ind;
                    var match$7;
                    try {
                      if (str_ind$1 === end_ind$1 || Caml_string.get(str, str_ind$1) !== /* "<" */60) {
                        throw Caml_builtin_exceptions.not_found;
                      }
                      var str_ind_1 = parse_spaces(str_ind$1 + 1 | 0, end_ind$1);
                      var match$8 = Caml_string.get(str, str_ind_1);
                      var exit$1 = 0;
                      if (match$8 >= 48) {
                        if (match$8 >= 58) {
                          throw Caml_builtin_exceptions.not_found;
                        } else {
                          exit$1 = 1;
                        }
                      } else if (match$8 !== 45) {
                        throw Caml_builtin_exceptions.not_found;
                      } else {
                        exit$1 = 1;
                      }
                      if (exit$1 === 1) {
                        var match$9 = parse_integer(str_ind_1, end_ind$1);
                        var width = match$9[1];
                        var str_ind_3 = parse_spaces(match$9[0], end_ind$1);
                        var match$10 = Caml_string.get(str, str_ind_3);
                        var switcher$1 = match$10 - 45 | 0;
                        if (switcher$1 > 12 || switcher$1 < 0) {
                          if (switcher$1 !== 17) {
                            throw Caml_builtin_exceptions.not_found;
                          } else {
                            var s = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_3 - str_ind$1 | 0) + 3 | 0);
                            match$7 = /* tuple */[
                              str_ind_3 + 1 | 0,
                              /* Break */Block.__(0, [
                                  s,
                                  width,
                                  0
                                ])
                            ];
                          }
                        } else if (switcher$1 === 2 || switcher$1 === 1) {
                          throw Caml_builtin_exceptions.not_found;
                        } else {
                          var match$11 = parse_integer(str_ind_3, end_ind$1);
                          var str_ind_5 = parse_spaces(match$11[0], end_ind$1);
                          if (Caml_string.get(str, str_ind_5) !== /* ">" */62) {
                            throw Caml_builtin_exceptions.not_found;
                          }
                          var s$1 = $$String.sub(str, str_ind$1 - 2 | 0, (str_ind_5 - str_ind$1 | 0) + 3 | 0);
                          match$7 = /* tuple */[
                            str_ind_5 + 1 | 0,
                            /* Break */Block.__(0, [
                                s$1,
                                width,
                                match$11[1]
                              ])
                          ];
                        }
                      }
                      
                    }
                    catch (raw_exn){
                      var exn = Js_exn.internalToOCamlException(raw_exn);
                      if (exn === Caml_builtin_exceptions.not_found) {
                        match$7 = /* tuple */[
                          str_ind$1,
                          /* Break */Block.__(0, [
                              "@;",
                              1,
                              0
                            ])
                        ];
                      } else if (exn[0] === Caml_builtin_exceptions.failure) {
                        match$7 = /* tuple */[
                          str_ind$1,
                          /* Break */Block.__(0, [
                              "@;",
                              1,
                              0
                            ])
                        ];
                      } else {
                        throw exn;
                      }
                    }
                    var next_ind = match$7[0];
                    var match$12 = parse_literal(next_ind, next_ind, end_ind$1);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                match$7[1],
                                match$12[0]
                              ])];
                case 28 : 
                    var str_ind$2 = str_ind + 1 | 0;
                    var end_ind$2 = end_ind;
                    var match$13;
                    try {
                      var str_ind_1$1 = parse_spaces(str_ind$2, end_ind$2);
                      var match$14 = Caml_string.get(str, str_ind_1$1);
                      var exit$2 = 0;
                      if (match$14 >= 48) {
                        if (match$14 >= 58) {
                          match$13 = /* None */0;
                        } else {
                          exit$2 = 1;
                        }
                      } else if (match$14 !== 45) {
                        match$13 = /* None */0;
                      } else {
                        exit$2 = 1;
                      }
                      if (exit$2 === 1) {
                        var match$15 = parse_integer(str_ind_1$1, end_ind$2);
                        var str_ind_3$1 = parse_spaces(match$15[0], end_ind$2);
                        if (Caml_string.get(str, str_ind_3$1) !== /* ">" */62) {
                          throw Caml_builtin_exceptions.not_found;
                        }
                        var s$2 = $$String.sub(str, str_ind$2 - 2 | 0, (str_ind_3$1 - str_ind$2 | 0) + 3 | 0);
                        match$13 = /* Some */[/* tuple */[
                            str_ind_3$1 + 1 | 0,
                            /* Magic_size */Block.__(1, [
                                s$2,
                                match$15[1]
                              ])
                          ]];
                      }
                      
                    }
                    catch (raw_exn$1){
                      var exn$1 = Js_exn.internalToOCamlException(raw_exn$1);
                      if (exn$1 === Caml_builtin_exceptions.not_found) {
                        match$13 = /* None */0;
                      } else if (exn$1[0] === Caml_builtin_exceptions.failure) {
                        match$13 = /* None */0;
                      } else {
                        throw exn$1;
                      }
                    }
                    if (match$13) {
                      var match$16 = match$13[0];
                      var next_ind$1 = match$16[0];
                      var match$17 = parse_literal(next_ind$1, next_ind$1, end_ind$2);
                      return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                  match$16[1],
                                  match$17[0]
                                ])];
                    } else {
                      var match$18 = parse_literal(str_ind$2, str_ind$2, end_ind$2);
                      return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                  /* Scan_indic */Block.__(2, [/* "<" */60]),
                                  match$18[0]
                                ])];
                    }
                case 1 : 
                case 2 : 
                case 3 : 
                case 4 : 
                case 6 : 
                case 7 : 
                case 8 : 
                case 9 : 
                case 10 : 
                case 11 : 
                case 13 : 
                case 15 : 
                case 16 : 
                case 17 : 
                case 18 : 
                case 19 : 
                case 20 : 
                case 21 : 
                case 22 : 
                case 23 : 
                case 24 : 
                case 25 : 
                case 26 : 
                case 29 : 
                case 30 : 
                    exit = 1;
                    break;
                case 31 : 
                    var beg_ind$6 = str_ind + 1 | 0;
                    var match$19 = parse_literal(beg_ind$6, beg_ind$6, end_ind);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                /* FFlush */2,
                                match$19[0]
                              ])];
                case 32 : 
                    var beg_ind$7 = str_ind + 1 | 0;
                    var match$20 = parse_literal(beg_ind$7, beg_ind$7, end_ind);
                    return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                                /* Escaped_at */5,
                                match$20[0]
                              ])];
                
              }
            } else {
              exit = 1;
            }
          } else {
            var beg_ind$8 = str_ind + 1 | 0;
            var match$21 = parse_literal(beg_ind$8, beg_ind$8, end_ind);
            return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                        /* Force_newline */3,
                        match$21[0]
                      ])];
          }
          if (exit === 1) {
            var beg_ind$9 = str_ind + 1 | 0;
            var match$22 = parse_literal(beg_ind$9, beg_ind$9, end_ind);
            return /* Fmt_EBB */[/* Formatting_lit */Block.__(17, [
                        /* Scan_indic */Block.__(2, [c]),
                        match$22[0]
                      ])];
          }
          
        }
      };
      var add_literal = function (lit_start, str_ind, fmt) {
        var size = str_ind - lit_start | 0;
        if (size !== 0) {
          if (size !== 1) {
            return /* Fmt_EBB */[/* String_literal */Block.__(11, [
                        $$String.sub(str, lit_start, size),
                        fmt
                      ])];
          } else {
            return /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                        Caml_string.get(str, lit_start),
                        fmt
                      ])];
          }
        } else {
          return /* Fmt_EBB */[fmt];
        }
      };
      var parse_spaces = function (_str_ind, end_ind) {
        while(true) {
          var str_ind = _str_ind;
          if (str_ind === end_ind) {
            invalid_format_message(end_ind, "unexpected end of format");
          }
          if (Caml_string.get(str, str_ind) === /* " " */32) {
            _str_ind = str_ind + 1 | 0;
            continue ;
            
          } else {
            return str_ind;
          }
        };
      };
      var parse_integer = function (str_ind, end_ind) {
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var match = Caml_string.get(str, str_ind);
        if (match >= 48) {
          if (match >= 58) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    2624,
                    11
                  ]
                ];
          } else {
            return parse_positive(str_ind, end_ind, 0);
          }
        } else if (match !== 45) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  2624,
                  11
                ]
              ];
        } else {
          if ((str_ind + 1 | 0) === end_ind) {
            invalid_format_message(end_ind, "unexpected end of format");
          }
          var c = Caml_string.get(str, str_ind + 1 | 0);
          if (c > 57 || c < 48) {
            return expected_character(str_ind + 1 | 0, "digit", c);
          } else {
            var match$1 = parse_positive(str_ind + 1 | 0, end_ind, 0);
            return /* tuple */[
                    match$1[0],
                    -match$1[1] | 0
                  ];
          }
        }
      };
      var compute_float_conv = function (pct_ind, str_ind, _plus, _space, symb) {
        while(true) {
          var space = _space;
          var plus = _plus;
          if (plus !== 0) {
            if (space !== 0) {
              if (legacy_behavior$1) {
                _space = /* false */0;
                continue ;
                
              } else {
                return incompatible_flag(pct_ind, str_ind, /* " " */32, "'+'");
              }
            } else {
              var exit = 0;
              if (symb >= 72) {
                var switcher = symb - 101 | 0;
                if (switcher > 2 || switcher < 0) {
                  exit = 1;
                } else {
                  switch (switcher) {
                    case 0 : 
                        return /* Float_pe */4;
                    case 1 : 
                        return /* Float_pf */1;
                    case 2 : 
                        return /* Float_pg */10;
                    
                  }
                }
              } else if (symb >= 69) {
                switch (symb - 69 | 0) {
                  case 0 : 
                      return /* Float_pE */7;
                  case 1 : 
                      exit = 1;
                      break;
                  case 2 : 
                      return /* Float_pG */13;
                  
                }
              } else {
                exit = 1;
              }
              if (exit === 1) {
                if (legacy_behavior$1) {
                  _plus = /* false */0;
                  continue ;
                  
                } else {
                  return incompatible_flag(pct_ind, str_ind, symb, "'+'");
                }
              }
              
            }
          } else if (space !== 0) {
            var exit$1 = 0;
            if (symb >= 72) {
              var switcher$1 = symb - 101 | 0;
              if (switcher$1 > 2 || switcher$1 < 0) {
                exit$1 = 1;
              } else {
                switch (switcher$1) {
                  case 0 : 
                      return /* Float_se */5;
                  case 1 : 
                      return /* Float_sf */2;
                  case 2 : 
                      return /* Float_sg */11;
                  
                }
              }
            } else if (symb >= 69) {
              switch (symb - 69 | 0) {
                case 0 : 
                    return /* Float_sE */8;
                case 1 : 
                    exit$1 = 1;
                    break;
                case 2 : 
                    return /* Float_sG */14;
                
              }
            } else {
              exit$1 = 1;
            }
            if (exit$1 === 1) {
              if (legacy_behavior$1) {
                _space = /* false */0;
                continue ;
                
              } else {
                return incompatible_flag(pct_ind, str_ind, symb, "' '");
              }
            }
            
          } else if (symb >= 72) {
            var switcher$2 = symb - 101 | 0;
            if (switcher$2 > 2 || switcher$2 < 0) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "camlinternalFormat.ml",
                      2747,
                      25
                    ]
                  ];
            } else {
              switch (switcher$2) {
                case 0 : 
                    return /* Float_e */3;
                case 1 : 
                    return /* Float_f */0;
                case 2 : 
                    return /* Float_g */9;
                
              }
            }
          } else if (symb >= 69) {
            switch (symb - 69 | 0) {
              case 0 : 
                  return /* Float_E */6;
              case 1 : 
                  return /* Float_F */15;
              case 2 : 
                  return /* Float_G */12;
              
            }
          } else {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "camlinternalFormat.ml",
                    2747,
                    25
                  ]
                ];
          }
        };
      };
      var search_subformat_end = function (_str_ind, end_ind, c) {
        while(true) {
          var str_ind = _str_ind;
          if (str_ind === end_ind) {
            Curry._3(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid format ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  ": unclosed sub-format, expected \"",
                                  /* Char_literal */Block.__(12, [
                                      /* "%" */37,
                                      /* Char */Block.__(0, [/* String_literal */Block.__(11, [
                                              "\" at character number ",
                                              /* Int */Block.__(4, [
                                                  /* Int_d */0,
                                                  /* No_padding */0,
                                                  /* No_precision */0,
                                                  /* End_of_format */0
                                                ])
                                            ])])
                                    ])
                                ])
                            ])
                        ]),
                      "invalid format %S: unclosed sub-format, expected \"%%%c\" at character number %d"
                    ]), str, c, end_ind);
          }
          var match = Caml_string.get(str, str_ind);
          if (match !== 37) {
            _str_ind = str_ind + 1 | 0;
            continue ;
            
          } else {
            if ((str_ind + 1 | 0) === end_ind) {
              invalid_format_message(end_ind, "unexpected end of format");
            }
            if (Caml_string.get(str, str_ind + 1 | 0) === c) {
              return str_ind;
            } else {
              var match$1 = Caml_string.get(str, str_ind + 1 | 0);
              var exit = 0;
              if (match$1 >= 95) {
                if (match$1 >= 123) {
                  if (match$1 >= 126) {
                    exit = 1;
                  } else {
                    switch (match$1 - 123 | 0) {
                      case 0 : 
                          var sub_end = search_subformat_end(str_ind + 2 | 0, end_ind, /* "}" */125);
                          _str_ind = sub_end + 2 | 0;
                          continue ;
                          case 1 : 
                          exit = 1;
                          break;
                      case 2 : 
                          return expected_character(str_ind + 1 | 0, "character ')'", /* "}" */125);
                      
                    }
                  }
                } else if (match$1 >= 96) {
                  exit = 1;
                } else {
                  if ((str_ind + 2 | 0) === end_ind) {
                    invalid_format_message(end_ind, "unexpected end of format");
                  }
                  var match$2 = Caml_string.get(str, str_ind + 2 | 0);
                  if (match$2 !== 40) {
                    if (match$2 !== 123) {
                      _str_ind = str_ind + 3 | 0;
                      continue ;
                      
                    } else {
                      var sub_end$1 = search_subformat_end(str_ind + 3 | 0, end_ind, /* "}" */125);
                      _str_ind = sub_end$1 + 2 | 0;
                      continue ;
                      
                    }
                  } else {
                    var sub_end$2 = search_subformat_end(str_ind + 3 | 0, end_ind, /* ")" */41);
                    _str_ind = sub_end$2 + 2 | 0;
                    continue ;
                    
                  }
                }
              } else if (match$1 !== 40) {
                if (match$1 !== 41) {
                  exit = 1;
                } else {
                  return expected_character(str_ind + 1 | 0, "character '}'", /* ")" */41);
                }
              } else {
                var sub_end$3 = search_subformat_end(str_ind + 2 | 0, end_ind, /* ")" */41);
                _str_ind = sub_end$3 + 2 | 0;
                continue ;
                
              }
              if (exit === 1) {
                _str_ind = str_ind + 2 | 0;
                continue ;
                
              }
              
            }
          }
        };
      };
      var parse_conversion = function (pct_ind, str_ind, end_ind, plus, sharp, space, ign, pad, prec, padprec, symb) {
        var plus_used = /* false */0;
        var sharp_used = /* false */0;
        var space_used = /* false */0;
        var ign_used = [/* false */0];
        var pad_used = /* false */0;
        var prec_used = [/* false */0];
        var check_no_0 = function (symb, pad) {
          if (typeof pad === "number") {
            return pad;
          } else if (pad.tag) {
            if (pad[0] >= 2) {
              if (legacy_behavior$1) {
                return /* Arg_padding */Block.__(1, [/* Right */1]);
              } else {
                return incompatible_flag(pct_ind, str_ind, symb, "0");
              }
            } else {
              return pad;
            }
          } else if (pad[0] >= 2) {
            if (legacy_behavior$1) {
              return /* Lit_padding */Block.__(0, [
                        /* Right */1,
                        pad[1]
                      ]);
            } else {
              return incompatible_flag(pct_ind, str_ind, symb, "0");
            }
          } else {
            return pad;
          }
        };
        var opt_of_pad = function (c, pad) {
          if (typeof pad === "number") {
            return /* None */0;
          } else if (pad.tag) {
            return incompatible_flag(pct_ind, str_ind, c, "'*'");
          } else {
            switch (pad[0]) {
              case 0 : 
                  if (legacy_behavior$1) {
                    return /* Some */[pad[1]];
                  } else {
                    return incompatible_flag(pct_ind, str_ind, c, "'-'");
                  }
              case 1 : 
                  return /* Some */[pad[1]];
              case 2 : 
                  if (legacy_behavior$1) {
                    return /* Some */[pad[1]];
                  } else {
                    return incompatible_flag(pct_ind, str_ind, c, "'0'");
                  }
              
            }
          }
        };
        var get_prec_opt = function () {
          prec_used[0] = /* true */1;
          if (typeof prec === "number") {
            if (prec !== 0) {
              return incompatible_flag(pct_ind, str_ind, /* "_" */95, "'*'");
            } else {
              return /* None */0;
            }
          } else {
            return /* Some */[prec[0]];
          }
        };
        var fmt_result;
        var exit = 0;
        var exit$1 = 0;
        var exit$2 = 0;
        if (symb >= 124) {
          exit$1 = 6;
        } else {
          switch (symb) {
            case 33 : 
                var match = parse_literal(str_ind, str_ind, end_ind);
                fmt_result = /* Fmt_EBB */[/* Flush */Block.__(10, [match[0]])];
                break;
            case 40 : 
                var sub_end = search_subformat_end(str_ind, end_ind, /* ")" */41);
                var beg_ind = sub_end + 2 | 0;
                var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
                var fmt_rest = match$1[0];
                var match$2 = parse_literal(str_ind, str_ind, sub_end);
                var sub_fmtty = fmtty_of_fmt(match$2[0]);
                if (ign_used[0] = /* true */1, ign) {
                  pad_used = /* true */1;
                  var ignored_000 = opt_of_pad(/* "_" */95, pad);
                  var ignored = /* Ignored_format_subst */Block.__(8, [
                      ignored_000,
                      sub_fmtty
                    ]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored,
                        fmt_rest
                      ])];
                } else {
                  pad_used = /* true */1;
                  fmt_result = /* Fmt_EBB */[/* Format_subst */Block.__(14, [
                        opt_of_pad(/* "(" */40, pad),
                        sub_fmtty,
                        fmt_rest
                      ])];
                }
                break;
            case 44 : 
                fmt_result = parse_literal(str_ind, str_ind, end_ind);
                break;
            case 37 : 
            case 64 : 
                exit$1 = 4;
                break;
            case 67 : 
                var match$3 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$1 = match$3[0];
                fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        /* Ignored_caml_char */1,
                        fmt_rest$1
                      ])] : /* Fmt_EBB */[/* Caml_char */Block.__(1, [fmt_rest$1])];
                break;
            case 78 : 
                var match$4 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$2 = match$4[0];
                if (ign_used[0] = /* true */1, ign) {
                  var ignored$1 = /* Ignored_scan_get_counter */Block.__(10, [/* Token_counter */2]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$1,
                        fmt_rest$2
                      ])];
                } else {
                  fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                        /* Token_counter */2,
                        fmt_rest$2
                      ])];
                }
                break;
            case 83 : 
                pad_used = /* true */1;
                var pad$1 = check_no_0(symb, padprec);
                var match$5 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$3 = match$5[0];
                if (ign_used[0] = /* true */1, ign) {
                  pad_used = /* true */1;
                  var ignored$2 = /* Ignored_caml_string */Block.__(1, [opt_of_pad(/* "_" */95, padprec)]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$2,
                        fmt_rest$3
                      ])];
                } else {
                  var match$6 = make_padding_fmt_ebb(pad$1, fmt_rest$3);
                  fmt_result = /* Fmt_EBB */[/* Caml_string */Block.__(3, [
                        match$6[0],
                        match$6[1]
                      ])];
                }
                break;
            case 91 : 
                var match$7 = parse_char_set(str_ind, end_ind);
                var char_set = match$7[1];
                var next_ind = match$7[0];
                var match$8 = parse_literal(next_ind, next_ind, end_ind);
                var fmt_rest$4 = match$8[0];
                if (ign_used[0] = /* true */1, ign) {
                  pad_used = /* true */1;
                  var ignored_000$1 = opt_of_pad(/* "_" */95, pad);
                  var ignored$3 = /* Ignored_scan_char_set */Block.__(9, [
                      ignored_000$1,
                      char_set
                    ]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$3,
                        fmt_rest$4
                      ])];
                } else {
                  pad_used = /* true */1;
                  fmt_result = /* Fmt_EBB */[/* Scan_char_set */Block.__(20, [
                        opt_of_pad(/* "[" */91, pad),
                        char_set,
                        fmt_rest$4
                      ])];
                }
                break;
            case 32 : 
            case 35 : 
            case 43 : 
            case 45 : 
            case 95 : 
                exit$1 = 5;
                break;
            case 97 : 
                var match$9 = parse_literal(str_ind, str_ind, end_ind);
                fmt_result = /* Fmt_EBB */[/* Alpha */Block.__(15, [match$9[0]])];
                break;
            case 66 : 
            case 98 : 
                exit$1 = 3;
                break;
            case 99 : 
                var char_format = function (fmt_rest) {
                  if (ign_used[0] = /* true */1, ign) {
                    return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                                /* Ignored_char */0,
                                fmt_rest
                              ])];
                  } else {
                    return /* Fmt_EBB */[/* Char */Block.__(0, [fmt_rest])];
                  }
                };
                var scan_format = function (fmt_rest) {
                  if (ign_used[0] = /* true */1, ign) {
                    return /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                                /* Ignored_scan_next_char */4,
                                fmt_rest
                              ])];
                  } else {
                    return /* Fmt_EBB */[/* Scan_next_char */Block.__(22, [fmt_rest])];
                  }
                };
                var match$10 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$5 = match$10[0];
                pad_used = /* true */1;
                var match$11 = opt_of_pad(/* "c" */99, pad);
                fmt_result = match$11 ? (
                    match$11[0] !== 0 ? (
                        legacy_behavior$1 ? char_format(fmt_rest$5) : invalid_format_message(str_ind, "non-zero widths are unsupported for %c conversions")
                      ) : scan_format(fmt_rest$5)
                  ) : char_format(fmt_rest$5);
                break;
            case 69 : 
            case 70 : 
            case 71 : 
            case 101 : 
            case 102 : 
            case 103 : 
                exit$1 = 2;
                break;
            case 76 : 
            case 108 : 
            case 110 : 
                exit$2 = 8;
                break;
            case 114 : 
                var match$12 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$6 = match$12[0];
                fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        /* Ignored_reader */3,
                        fmt_rest$6
                      ])] : /* Fmt_EBB */[/* Reader */Block.__(19, [fmt_rest$6])];
                break;
            case 115 : 
                pad_used = /* true */1;
                var pad$2 = check_no_0(symb, padprec);
                var match$13 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$7 = match$13[0];
                if (ign_used[0] = /* true */1, ign) {
                  pad_used = /* true */1;
                  var ignored$4 = /* Ignored_string */Block.__(0, [opt_of_pad(/* "_" */95, padprec)]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$4,
                        fmt_rest$7
                      ])];
                } else {
                  var match$14 = make_padding_fmt_ebb(pad$2, fmt_rest$7);
                  fmt_result = /* Fmt_EBB */[/* String */Block.__(2, [
                        match$14[0],
                        match$14[1]
                      ])];
                }
                break;
            case 116 : 
                var match$15 = parse_literal(str_ind, str_ind, end_ind);
                fmt_result = /* Fmt_EBB */[/* Theta */Block.__(16, [match$15[0]])];
                break;
            case 88 : 
            case 100 : 
            case 105 : 
            case 111 : 
            case 117 : 
            case 120 : 
                exit$2 = 7;
                break;
            case 0 : 
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 12 : 
            case 13 : 
            case 14 : 
            case 15 : 
            case 16 : 
            case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 27 : 
            case 28 : 
            case 29 : 
            case 30 : 
            case 31 : 
            case 34 : 
            case 36 : 
            case 38 : 
            case 39 : 
            case 41 : 
            case 42 : 
            case 46 : 
            case 47 : 
            case 48 : 
            case 49 : 
            case 50 : 
            case 51 : 
            case 52 : 
            case 53 : 
            case 54 : 
            case 55 : 
            case 56 : 
            case 57 : 
            case 58 : 
            case 59 : 
            case 60 : 
            case 61 : 
            case 62 : 
            case 63 : 
            case 65 : 
            case 68 : 
            case 72 : 
            case 73 : 
            case 74 : 
            case 75 : 
            case 77 : 
            case 79 : 
            case 80 : 
            case 81 : 
            case 82 : 
            case 84 : 
            case 85 : 
            case 86 : 
            case 87 : 
            case 89 : 
            case 90 : 
            case 92 : 
            case 93 : 
            case 94 : 
            case 96 : 
            case 104 : 
            case 106 : 
            case 107 : 
            case 109 : 
            case 112 : 
            case 113 : 
            case 118 : 
            case 119 : 
            case 121 : 
            case 122 : 
                exit$1 = 6;
                break;
            case 123 : 
                var sub_end$1 = search_subformat_end(str_ind, end_ind, /* "}" */125);
                var match$16 = parse_literal(str_ind, str_ind, sub_end$1);
                var beg_ind$1 = sub_end$1 + 2 | 0;
                var match$17 = parse_literal(beg_ind$1, beg_ind$1, end_ind);
                var fmt_rest$8 = match$17[0];
                var sub_fmtty$1 = fmtty_of_fmt(match$16[0]);
                if (ign_used[0] = /* true */1, ign) {
                  pad_used = /* true */1;
                  var ignored_000$2 = opt_of_pad(/* "_" */95, pad);
                  var ignored$5 = /* Ignored_format_arg */Block.__(7, [
                      ignored_000$2,
                      sub_fmtty$1
                    ]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$5,
                        fmt_rest$8
                      ])];
                } else {
                  pad_used = /* true */1;
                  fmt_result = /* Fmt_EBB */[/* Format_arg */Block.__(13, [
                        opt_of_pad(/* "{" */123, pad),
                        sub_fmtty$1,
                        fmt_rest$8
                      ])];
                }
                break;
            
          }
        }
        switch (exit$2) {
          case 7 : 
              plus_used = /* true */1;
              sharp_used = /* true */1;
              space_used = /* true */1;
              var iconv = compute_int_conv(pct_ind, str_ind, plus, sharp, space, symb);
              var match$18 = parse_literal(str_ind, str_ind, end_ind);
              var fmt_rest$9 = match$18[0];
              if (ign_used[0] = /* true */1, ign) {
                pad_used = /* true */1;
                var ignored_001 = opt_of_pad(/* "_" */95, pad);
                var ignored$6 = /* Ignored_int */Block.__(2, [
                    iconv,
                    ignored_001
                  ]);
                fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                      ignored$6,
                      fmt_rest$9
                    ])];
              } else {
                pad_used = /* true */1;
                prec_used[0] = /* true */1;
                var pad$3;
                var exit$3 = 0;
                if (typeof prec === "number" && prec === 0) {
                  pad$3 = pad;
                } else {
                  exit$3 = 9;
                }
                if (exit$3 === 9) {
                  pad$3 = typeof pad === "number" ? /* No_padding */0 : (
                      pad.tag ? (
                          pad[0] >= 2 ? (
                              legacy_behavior$1 ? /* Arg_padding */Block.__(1, [/* Right */1]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                            ) : pad
                        ) : (
                          pad[0] >= 2 ? (
                              legacy_behavior$1 ? /* Lit_padding */Block.__(0, [
                                    /* Right */1,
                                    pad[1]
                                  ]) : incompatible_flag(pct_ind, str_ind, /* "0" */48, "precision")
                            ) : pad
                        )
                    );
                }
                var match$19 = make_padprec_fmt_ebb(pad$3, (prec_used[0] = /* true */1, prec), fmt_rest$9);
                fmt_result = /* Fmt_EBB */[/* Int */Block.__(4, [
                      iconv,
                      match$19[0],
                      match$19[1],
                      match$19[2]
                    ])];
              }
              break;
          case 8 : 
              if (str_ind === end_ind || !is_int_base(Caml_string.get(str, str_ind))) {
                var match$20 = parse_literal(str_ind, str_ind, end_ind);
                var fmt_rest$10 = match$20[0];
                var counter = counter_of_char(symb);
                if (ign_used[0] = /* true */1, ign) {
                  var ignored$7 = /* Ignored_scan_get_counter */Block.__(10, [counter]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$7,
                        fmt_rest$10
                      ])];
                } else {
                  fmt_result = /* Fmt_EBB */[/* Scan_get_counter */Block.__(21, [
                        counter,
                        fmt_rest$10
                      ])];
                }
              } else {
                exit$1 = 6;
              }
              break;
          
        }
        switch (exit$1) {
          case 2 : 
              plus_used = /* true */1;
              space_used = /* true */1;
              var fconv = compute_float_conv(pct_ind, str_ind, plus, space, symb);
              var match$21 = parse_literal(str_ind, str_ind, end_ind);
              var fmt_rest$11 = match$21[0];
              if (ign_used[0] = /* true */1, ign) {
                pad_used = /* true */1;
                var ignored_000$3 = opt_of_pad(/* "_" */95, pad);
                var ignored_001$1 = get_prec_opt(/* () */0);
                var ignored$8 = /* Ignored_float */Block.__(6, [
                    ignored_000$3,
                    ignored_001$1
                  ]);
                fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                      ignored$8,
                      fmt_rest$11
                    ])];
              } else {
                pad_used = /* true */1;
                var match$22 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$11);
                fmt_result = /* Fmt_EBB */[/* Float */Block.__(8, [
                      fconv,
                      match$22[0],
                      match$22[1],
                      match$22[2]
                    ])];
              }
              break;
          case 3 : 
              var match$23 = parse_literal(str_ind, str_ind, end_ind);
              var fmt_rest$12 = match$23[0];
              fmt_result = (ign_used[0] = /* true */1, ign) ? /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                      /* Ignored_bool */2,
                      fmt_rest$12
                    ])] : /* Fmt_EBB */[/* Bool */Block.__(9, [fmt_rest$12])];
              break;
          case 4 : 
              var match$24 = parse_literal(str_ind, str_ind, end_ind);
              fmt_result = /* Fmt_EBB */[/* Char_literal */Block.__(12, [
                    symb,
                    match$24[0]
                  ])];
              break;
          case 5 : 
              fmt_result = Curry._3(failwith_message(/* Format */[
                        /* String_literal */Block.__(11, [
                            "invalid format ",
                            /* Caml_string */Block.__(3, [
                                /* No_padding */0,
                                /* String_literal */Block.__(11, [
                                    ": at character number ",
                                    /* Int */Block.__(4, [
                                        /* Int_d */0,
                                        /* No_padding */0,
                                        /* No_precision */0,
                                        /* String_literal */Block.__(11, [
                                            ", flag ",
                                            /* Caml_char */Block.__(1, [/* String_literal */Block.__(11, [
                                                    " is only allowed after the '",
                                                    /* Char_literal */Block.__(12, [
                                                        /* "%" */37,
                                                        /* String_literal */Block.__(11, [
                                                            "', before padding and precision",
                                                            /* End_of_format */0
                                                          ])
                                                      ])
                                                  ])])
                                          ])
                                      ])
                                  ])
                              ])
                          ]),
                        "invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision"
                      ]), str, pct_ind, symb);
              break;
          case 6 : 
              if (symb >= 108) {
                if (symb >= 111) {
                  exit = 1;
                } else {
                  switch (symb - 108 | 0) {
                    case 0 : 
                        plus_used = /* true */1;
                        sharp_used = /* true */1;
                        space_used = /* true */1;
                        var iconv$1 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                        var beg_ind$2 = str_ind + 1 | 0;
                        var match$25 = parse_literal(beg_ind$2, beg_ind$2, end_ind);
                        var fmt_rest$13 = match$25[0];
                        if (ign_used[0] = /* true */1, ign) {
                          pad_used = /* true */1;
                          var ignored_001$2 = opt_of_pad(/* "_" */95, pad);
                          var ignored$9 = /* Ignored_int32 */Block.__(3, [
                              iconv$1,
                              ignored_001$2
                            ]);
                          fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                                ignored$9,
                                fmt_rest$13
                              ])];
                        } else {
                          pad_used = /* true */1;
                          var match$26 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$13);
                          fmt_result = /* Fmt_EBB */[/* Int32 */Block.__(5, [
                                iconv$1,
                                match$26[0],
                                match$26[1],
                                match$26[2]
                              ])];
                        }
                        break;
                    case 1 : 
                        exit = 1;
                        break;
                    case 2 : 
                        plus_used = /* true */1;
                        sharp_used = /* true */1;
                        space_used = /* true */1;
                        var iconv$2 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                        var beg_ind$3 = str_ind + 1 | 0;
                        var match$27 = parse_literal(beg_ind$3, beg_ind$3, end_ind);
                        var fmt_rest$14 = match$27[0];
                        if (ign_used[0] = /* true */1, ign) {
                          pad_used = /* true */1;
                          var ignored_001$3 = opt_of_pad(/* "_" */95, pad);
                          var ignored$10 = /* Ignored_nativeint */Block.__(4, [
                              iconv$2,
                              ignored_001$3
                            ]);
                          fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                                ignored$10,
                                fmt_rest$14
                              ])];
                        } else {
                          pad_used = /* true */1;
                          var match$28 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$14);
                          fmt_result = /* Fmt_EBB */[/* Nativeint */Block.__(6, [
                                iconv$2,
                                match$28[0],
                                match$28[1],
                                match$28[2]
                              ])];
                        }
                        break;
                    
                  }
                }
              } else if (symb !== 76) {
                exit = 1;
              } else {
                plus_used = /* true */1;
                sharp_used = /* true */1;
                space_used = /* true */1;
                var iconv$3 = compute_int_conv(pct_ind, str_ind + 1 | 0, plus, sharp, space, Caml_string.get(str, str_ind));
                var beg_ind$4 = str_ind + 1 | 0;
                var match$29 = parse_literal(beg_ind$4, beg_ind$4, end_ind);
                var fmt_rest$15 = match$29[0];
                if (ign_used[0] = /* true */1, ign) {
                  pad_used = /* true */1;
                  var ignored_001$4 = opt_of_pad(/* "_" */95, pad);
                  var ignored$11 = /* Ignored_int64 */Block.__(5, [
                      iconv$3,
                      ignored_001$4
                    ]);
                  fmt_result = /* Fmt_EBB */[/* Ignored_param */Block.__(23, [
                        ignored$11,
                        fmt_rest$15
                      ])];
                } else {
                  pad_used = /* true */1;
                  var match$30 = make_padprec_fmt_ebb(pad, (prec_used[0] = /* true */1, prec), fmt_rest$15);
                  fmt_result = /* Fmt_EBB */[/* Int64 */Block.__(7, [
                        iconv$3,
                        match$30[0],
                        match$30[1],
                        match$30[2]
                      ])];
                }
              }
              break;
          
        }
        if (exit === 1) {
          fmt_result = Curry._3(failwith_message(/* Format */[
                    /* String_literal */Block.__(11, [
                        "invalid format ",
                        /* Caml_string */Block.__(3, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": at character number ",
                                /* Int */Block.__(4, [
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* String_literal */Block.__(11, [
                                        ", invalid conversion \"",
                                        /* Char_literal */Block.__(12, [
                                            /* "%" */37,
                                            /* Char */Block.__(0, [/* Char_literal */Block.__(12, [
                                                    /* "\"" */34,
                                                    /* End_of_format */0
                                                  ])])
                                          ])
                                      ])
                                  ])
                              ])
                          ])
                      ]),
                    "invalid format %S: at character number %d, invalid conversion \"%%%c\""
                  ]), str, str_ind - 1 | 0, symb);
        }
        if (!legacy_behavior$1) {
          if (!plus_used && plus) {
            incompatible_flag(pct_ind, str_ind, symb, "'+'");
          }
          if (!sharp_used && sharp) {
            incompatible_flag(pct_ind, str_ind, symb, "'#'");
          }
          if (!space_used && space) {
            incompatible_flag(pct_ind, str_ind, symb, "' '");
          }
          if (!pad_used && Caml_obj.caml_notequal(/* Padding_EBB */[pad], /* Padding_EBB */[/* No_padding */0])) {
            incompatible_flag(pct_ind, str_ind, symb, "`padding'");
          }
          if (!prec_used[0] && Caml_obj.caml_notequal(/* Precision_EBB */[prec], /* Precision_EBB */[/* No_precision */0])) {
            incompatible_flag(pct_ind, str_ind, ign ? /* "_" */95 : symb, "`precision'");
          }
          if (ign && plus) {
            incompatible_flag(pct_ind, str_ind, /* "_" */95, "'+'");
          }
          
        }
        if (!ign_used[0] && ign) {
          var exit$4 = 0;
          if (symb >= 38) {
            if (symb !== 44) {
              if (symb !== 64) {
                exit$4 = 1;
              } else if (!legacy_behavior$1) {
                exit$4 = 1;
              }
              
            } else if (!legacy_behavior$1) {
              exit$4 = 1;
            }
            
          } else if (symb !== 33) {
            if (symb >= 37) {
              if (!legacy_behavior$1) {
                exit$4 = 1;
              }
              
            } else {
              exit$4 = 1;
            }
          } else if (!legacy_behavior$1) {
            exit$4 = 1;
          }
          if (exit$4 === 1) {
            incompatible_flag(pct_ind, str_ind, symb, "'_'");
          }
          
        }
        return fmt_result;
      };
      var parse_flags = function (pct_ind, str_ind, end_ind, ign) {
        var zero = [/* false */0];
        var minus = [/* false */0];
        var plus = [/* false */0];
        var space = [/* false */0];
        var sharp = [/* false */0];
        var set_flag = function (str_ind, flag) {
          if (flag[0] && !legacy_behavior$1) {
            Curry._3(failwith_message(/* Format */[
                      /* String_literal */Block.__(11, [
                          "invalid format ",
                          /* Caml_string */Block.__(3, [
                              /* No_padding */0,
                              /* String_literal */Block.__(11, [
                                  ": at character number ",
                                  /* Int */Block.__(4, [
                                      /* Int_d */0,
                                      /* No_padding */0,
                                      /* No_precision */0,
                                      /* String_literal */Block.__(11, [
                                          ", duplicate flag ",
                                          /* Caml_char */Block.__(1, [/* End_of_format */0])
                                        ])
                                    ])
                                ])
                            ])
                        ]),
                      "invalid format %S: at character number %d, duplicate flag %C"
                    ]), str, str_ind, Caml_string.get(str, str_ind));
          }
          flag[0] = /* true */1;
          return /* () */0;
        };
        var _str_ind = str_ind;
        while(true) {
          var str_ind$1 = _str_ind;
          if (str_ind$1 === end_ind) {
            invalid_format_message(end_ind, "unexpected end of format");
          }
          var match = Caml_string.get(str, str_ind$1);
          var exit = 0;
          var switcher = match - 32 | 0;
          if (switcher > 16 || switcher < 0) {
            exit = 1;
          } else {
            switch (switcher) {
              case 0 : 
                  set_flag(str_ind$1, space);
                  _str_ind = str_ind$1 + 1 | 0;
                  continue ;
                  case 3 : 
                  set_flag(str_ind$1, sharp);
                  _str_ind = str_ind$1 + 1 | 0;
                  continue ;
                  case 11 : 
                  set_flag(str_ind$1, plus);
                  _str_ind = str_ind$1 + 1 | 0;
                  continue ;
                  case 13 : 
                  set_flag(str_ind$1, minus);
                  _str_ind = str_ind$1 + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 12 : 
              case 14 : 
              case 15 : 
                  exit = 1;
                  break;
              case 16 : 
                  set_flag(str_ind$1, zero);
                  _str_ind = str_ind$1 + 1 | 0;
                  continue ;
                  
            }
          }
          if (exit === 1) {
            var pct_ind$1 = pct_ind;
            var str_ind$2 = str_ind$1;
            var end_ind$1 = end_ind;
            var zero$1 = zero[0];
            var minus$1 = minus[0];
            var plus$1 = plus[0];
            var sharp$1 = sharp[0];
            var space$1 = space[0];
            var ign$1 = ign;
            if (str_ind$2 === end_ind$1) {
              invalid_format_message(end_ind$1, "unexpected end of format");
            }
            var padty = zero$1 !== 0 ? (
                minus$1 !== 0 ? (
                    legacy_behavior$1 ? /* Left */0 : incompatible_flag(pct_ind$1, str_ind$2, /* "-" */45, "0")
                  ) : /* Zeros */2
              ) : (
                minus$1 !== 0 ? /* Left */0 : /* Right */1
              );
            var match$1 = Caml_string.get(str, str_ind$2);
            var exit$1 = 0;
            if (match$1 >= 48) {
              if (match$1 >= 58) {
                exit$1 = 1;
              } else {
                var match$2 = parse_positive(str_ind$2, end_ind$1, 0);
                return parse_after_padding(pct_ind$1, match$2[0], end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                              padty,
                              match$2[1]
                            ]));
              }
            } else if (match$1 !== 42) {
              exit$1 = 1;
            } else {
              return parse_after_padding(pct_ind$1, str_ind$2 + 1 | 0, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Arg_padding */Block.__(1, [padty]));
            }
            if (exit$1 === 1) {
              switch (padty) {
                case 0 : 
                    if (!legacy_behavior$1) {
                      invalid_format_without(str_ind$2 - 1 | 0, /* "-" */45, "padding");
                    }
                    return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
                case 1 : 
                    return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* No_padding */0);
                case 2 : 
                    return parse_after_padding(pct_ind$1, str_ind$2, end_ind$1, minus$1, plus$1, sharp$1, space$1, ign$1, /* Lit_padding */Block.__(0, [
                                  /* Right */1,
                                  0
                                ]));
                
              }
            }
            
          }
          
        };
      };
      var is_int_base = function (symb) {
        var switcher = symb - 88 | 0;
        if (switcher > 32 || switcher < 0) {
          return /* false */0;
        } else {
          switch (switcher) {
            case 1 : 
            case 2 : 
            case 3 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 11 : 
            case 13 : 
            case 14 : 
            case 15 : 
            case 16 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 24 : 
            case 25 : 
            case 26 : 
            case 27 : 
            case 28 : 
            case 30 : 
            case 31 : 
                return /* false */0;
            case 0 : 
            case 12 : 
            case 17 : 
            case 23 : 
            case 29 : 
            case 32 : 
                return /* true */1;
            
          }
        }
      };
      var counter_of_char = function (symb) {
        var exit = 0;
        if (symb >= 108) {
          if (symb >= 111) {
            exit = 1;
          } else {
            switch (symb - 108 | 0) {
              case 0 : 
                  return /* Line_counter */0;
              case 1 : 
                  exit = 1;
                  break;
              case 2 : 
                  return /* Char_counter */1;
              
            }
          }
        } else if (symb !== 76) {
          exit = 1;
        } else {
          return /* Token_counter */2;
        }
        if (exit === 1) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "camlinternalFormat.ml",
                  2686,
                  34
                ]
              ];
        }
        
      };
      var parse_char_set = function (str_ind, end_ind) {
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var char_set = Bytes.make(32, /* "\000" */0);
        var add_range = function (c, c$prime) {
          for(var i = c; i <= c$prime; ++i){
            add_in_char_set(char_set, Pervasives.char_of_int(i));
          }
          return /* () */0;
        };
        var fail_single_percent = function (str_ind) {
          return Curry._2(failwith_message(/* Format */[
                          /* String_literal */Block.__(11, [
                              "invalid format ",
                              /* Caml_string */Block.__(3, [
                                  /* No_padding */0,
                                  /* String_literal */Block.__(11, [
                                      ": '",
                                      /* Char_literal */Block.__(12, [
                                          /* "%" */37,
                                          /* String_literal */Block.__(11, [
                                              "' alone is not accepted in character sets, use ",
                                              /* Char_literal */Block.__(12, [
                                                  /* "%" */37,
                                                  /* Char_literal */Block.__(12, [
                                                      /* "%" */37,
                                                      /* String_literal */Block.__(11, [
                                                          " instead at position ",
                                                          /* Int */Block.__(4, [
                                                              /* Int_d */0,
                                                              /* No_padding */0,
                                                              /* No_precision */0,
                                                              /* Char_literal */Block.__(12, [
                                                                  /* "." */46,
                                                                  /* End_of_format */0
                                                                ])
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ]),
                          "invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d."
                        ]), str, str_ind);
        };
        var parse_char_set_after_char = function (_str_ind, end_ind, _c) {
          while(true) {
            var c = _c;
            var str_ind = _str_ind;
            if (str_ind === end_ind) {
              invalid_format_message(end_ind, "unexpected end of format");
            }
            var c$prime = Caml_string.get(str, str_ind);
            var exit = 0;
            var exit$1 = 0;
            if (c$prime >= 46) {
              if (c$prime !== 64) {
                if (c$prime !== 93) {
                  exit = 1;
                } else {
                  add_in_char_set(char_set, c);
                  return str_ind + 1 | 0;
                }
              } else {
                exit$1 = 2;
              }
            } else if (c$prime !== 37) {
              if (c$prime >= 45) {
                var str_ind$1 = str_ind + 1 | 0;
                var end_ind$1 = end_ind;
                var c$1 = c;
                if (str_ind$1 === end_ind$1) {
                  invalid_format_message(end_ind$1, "unexpected end of format");
                }
                var c$prime$1 = Caml_string.get(str, str_ind$1);
                if (c$prime$1 !== 37) {
                  if (c$prime$1 !== 93) {
                    add_range(c$1, c$prime$1);
                    return parse_char_set_content(str_ind$1 + 1 | 0, end_ind$1);
                  } else {
                    add_in_char_set(char_set, c$1);
                    add_in_char_set(char_set, /* "-" */45);
                    return str_ind$1 + 1 | 0;
                  }
                } else {
                  if ((str_ind$1 + 1 | 0) === end_ind$1) {
                    invalid_format_message(end_ind$1, "unexpected end of format");
                  }
                  var c$prime$2 = Caml_string.get(str, str_ind$1 + 1 | 0);
                  var exit$2 = 0;
                  if (c$prime$2 !== 37) {
                    if (c$prime$2 !== 64) {
                      return fail_single_percent(str_ind$1);
                    } else {
                      exit$2 = 1;
                    }
                  } else {
                    exit$2 = 1;
                  }
                  if (exit$2 === 1) {
                    add_range(c$1, c$prime$2);
                    return parse_char_set_content(str_ind$1 + 2 | 0, end_ind$1);
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit$1 = 2;
            }
            if (exit$1 === 2) {
              if (c === /* "%" */37) {
                add_in_char_set(char_set, c$prime);
                return parse_char_set_content(str_ind + 1 | 0, end_ind);
              } else {
                exit = 1;
              }
            }
            if (exit === 1) {
              if (c === /* "%" */37) {
                fail_single_percent(str_ind);
              }
              add_in_char_set(char_set, c);
              _c = c$prime;
              _str_ind = str_ind + 1 | 0;
              continue ;
              
            }
            
          };
        };
        var parse_char_set_content = function (_str_ind, end_ind) {
          while(true) {
            var str_ind = _str_ind;
            if (str_ind === end_ind) {
              invalid_format_message(end_ind, "unexpected end of format");
            }
            var c = Caml_string.get(str, str_ind);
            if (c !== 45) {
              if (c !== 93) {
                return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
              } else {
                return str_ind + 1 | 0;
              }
            } else {
              add_in_char_set(char_set, /* "-" */45);
              _str_ind = str_ind + 1 | 0;
              continue ;
              
            }
          };
        };
        var parse_char_set_start = function (str_ind, end_ind) {
          if (str_ind === end_ind) {
            invalid_format_message(end_ind, "unexpected end of format");
          }
          var c = Caml_string.get(str, str_ind);
          return parse_char_set_after_char(str_ind + 1 | 0, end_ind, c);
        };
        if (str_ind === end_ind) {
          invalid_format_message(end_ind, "unexpected end of format");
        }
        var match = Caml_string.get(str, str_ind);
        var match$1 = match !== 94 ? /* tuple */[
            str_ind,
            /* false */0
          ] : /* tuple */[
            str_ind + 1 | 0,
            /* true */1
          ];
        var next_ind = parse_char_set_start(match$1[0], end_ind);
        var char_set$1 = Bytes.to_string(char_set);
        return /* tuple */[
                next_ind,
                match$1[1] ? rev_char_set(char_set$1) : char_set$1
              ];
      };
      var check_open_box = function (fmt) {
        if (typeof fmt === "number") {
          return /* () */0;
        } else if (fmt.tag === 11) {
          if (typeof fmt[1] === "number") {
            try {
              open_box_of_string(fmt[0]);
              return /* () */0;
            }
            catch (raw_exn){
              var exn = Js_exn.internalToOCamlException(raw_exn);
              if (exn[0] === Caml_builtin_exceptions.failure) {
                return /* () */0;
              } else {
                throw exn;
              }
            }
          } else {
            return /* () */0;
          }
        } else {
          return /* () */0;
        }
      };
      var parse_tag = function (is_open_tag, str_ind, end_ind) {
        try {
          if (str_ind === end_ind) {
            throw Caml_builtin_exceptions.not_found;
          }
          var match = Caml_string.get(str, str_ind);
          if (match !== 60) {
            throw Caml_builtin_exceptions.not_found;
          } else {
            var ind = $$String.index_from(str, str_ind + 1 | 0, /* ">" */62);
            if (ind >= end_ind) {
              throw Caml_builtin_exceptions.not_found;
            }
            var sub_str = $$String.sub(str, str_ind, (ind - str_ind | 0) + 1 | 0);
            var beg_ind = ind + 1 | 0;
            var match$1 = parse_literal(beg_ind, beg_ind, end_ind);
            var match$2 = parse_literal(str_ind, str_ind, ind + 1 | 0);
            var sub_fmt = match$2[0];
            var sub_format = /* Format */[
              sub_fmt,
              sub_str
            ];
            var formatting = is_open_tag ? /* Open_tag */Block.__(0, [sub_format]) : (check_open_box(sub_fmt), /* Open_box */Block.__(1, [sub_format]));
            return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                        formatting,
                        match$1[0]
                      ])];
          }
        }
        catch (exn){
          if (exn === Caml_builtin_exceptions.not_found) {
            var match$3 = parse_literal(str_ind, str_ind, end_ind);
            var sub_format$1 = /* Format */[
              /* End_of_format */0,
              ""
            ];
            var formatting$1 = is_open_tag ? /* Open_tag */Block.__(0, [sub_format$1]) : /* Open_box */Block.__(1, [sub_format$1]);
            return /* Fmt_EBB */[/* Formatting_gen */Block.__(18, [
                        formatting$1,
                        match$3[0]
                      ])];
          } else {
            throw exn;
          }
        }
      };
      return parse_literal(0, 0, str.length);
    }
    
    function format_of_string_fmtty(str, fmtty) {
      var match = fmt_ebb_of_string(/* None */0, str);
      try {
        return /* Format */[
                type_format(match[0], fmtty),
                str
              ];
      }
      catch (exn){
        if (exn === Type_mismatch) {
          return Curry._2(failwith_message(/* Format */[
                          /* String_literal */Block.__(11, [
                              "bad input: format type mismatch between ",
                              /* Caml_string */Block.__(3, [
                                  /* No_padding */0,
                                  /* String_literal */Block.__(11, [
                                      " and ",
                                      /* Caml_string */Block.__(3, [
                                          /* No_padding */0,
                                          /* End_of_format */0
                                        ])
                                    ])
                                ])
                            ]),
                          "bad input: format type mismatch between %S and %S"
                        ]), str, string_of_fmtty(fmtty));
        } else {
          throw exn;
        }
      }
    }
    
    function format_of_string_format(str, param) {
      var match = fmt_ebb_of_string(/* None */0, str);
      try {
        return /* Format */[
                type_format(match[0], fmtty_of_fmt(param[0])),
                str
              ];
      }
      catch (exn){
        if (exn === Type_mismatch) {
          return Curry._2(failwith_message(/* Format */[
                          /* String_literal */Block.__(11, [
                              "bad input: format type mismatch between ",
                              /* Caml_string */Block.__(3, [
                                  /* No_padding */0,
                                  /* String_literal */Block.__(11, [
                                      " and ",
                                      /* Caml_string */Block.__(3, [
                                          /* No_padding */0,
                                          /* End_of_format */0
                                        ])
                                    ])
                                ])
                            ]),
                          "bad input: format type mismatch between %S and %S"
                        ]), str, param[1]);
        } else {
          throw exn;
        }
      }
    }
    
    exports.is_in_char_set = is_in_char_set;
    exports.rev_char_set = rev_char_set;
    exports.create_char_set = create_char_set;
    exports.add_in_char_set = add_in_char_set;
    exports.freeze_char_set = freeze_char_set;
    exports.param_format_of_ignored_format = param_format_of_ignored_format;
    exports.make_printf = make_printf;
    exports.output_acc = output_acc;
    exports.bufput_acc = bufput_acc;
    exports.strput_acc = strput_acc;
    exports.type_format = type_format;
    exports.fmt_ebb_of_string = fmt_ebb_of_string;
    exports.format_of_string_fmtty = format_of_string_fmtty;
    exports.format_of_string_format = format_of_string_format;
    exports.char_of_iconv = char_of_iconv;
    exports.string_of_formatting_lit = string_of_formatting_lit;
    exports.string_of_formatting_gen = string_of_formatting_gen;
    exports.string_of_fmtty = string_of_fmtty;
    exports.string_of_fmt = string_of_fmt;
    exports.open_box_of_string = open_box_of_string;
    exports.symm = symm;
    exports.trans = trans;
    exports.recast = recast;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
    'use strict';
    function caml_int32_float_of_bits(x) {
      var int32 = new Int32Array(/* array */[x]);
      var float32 = new Float32Array(int32.buffer);
      return float32[0];
    }
    
    function caml_int32_bits_of_float(x) {
      var float32 = new Float32Array(/* float array */[x]);
      return new Int32Array(float32.buffer)[0];
    }
    
    function caml_classify_float(x) {
      if (isFinite(x)) {
        if (Math.abs(x) >= 2.2250738585072014e-308) {
          return /* FP_normal */0;
        } else if (x !== 0) {
          return /* FP_subnormal */1;
        } else {
          return /* FP_zero */2;
        }
      } else if (isNaN(x)) {
        return /* FP_nan */4;
      } else {
        return /* FP_infinite */3;
      }
    }
    
    function caml_modf_float(x) {
      if (isFinite(x)) {
        var neg = +(1 / x < 0);
        var x$1 = Math.abs(x);
        var i = Math.floor(x$1);
        var f = x$1 - i;
        if (neg) {
          return /* tuple */[
                  -f,
                  -i
                ];
        } else {
          return /* tuple */[
                  f,
                  i
                ];
        }
      } else if (isNaN(x)) {
        return /* tuple */[
                NaN,
                NaN
              ];
      } else {
        return /* tuple */[
                1 / x,
                x
              ];
      }
    }
    
    function caml_ldexp_float(x, exp) {
      var x$prime = x;
      var exp$prime = exp;
      if (exp$prime > 1023) {
        exp$prime -= 1023;
        x$prime = x$prime * Math.pow(2, 1023);
        if (exp$prime > 1023) {
          exp$prime -= 1023;
          x$prime = x$prime * Math.pow(2, 1023);
        }
        
      } else if (exp$prime < -1023) {
        exp$prime += 1023;
        x$prime = x$prime * Math.pow(2, -1023);
      }
      return x$prime * Math.pow(2, exp$prime);
    }
    
    function caml_frexp_float(x) {
      if (x === 0 || !isFinite(x)) {
        return /* tuple */[
                x,
                0
              ];
      } else {
        var neg = +(x < 0);
        var x$prime = Math.abs(x);
        var exp = Math.floor(Math.LOG2E * Math.log(x$prime)) + 1;
        x$prime = x$prime * Math.pow(2, -exp);
        if (x$prime < 0.5) {
          x$prime = x$prime * 2;
          exp -= 1;
        }
        if (neg) {
          x$prime = -x$prime;
        }
        return /* tuple */[
                x$prime,
                exp | 0
              ];
      }
    }
    
    function caml_copysign_float(x, y) {
      var x$1 = Math.abs(x);
      var y$1 = y === 0 ? 1 / y : y;
      if (y$1 < 0) {
        return -x$1;
      } else {
        return x$1;
      }
    }
    
    function caml_expm1_float(x) {
      var y = Math.exp(x);
      var z = y - 1;
      if (Math.abs(x) > 1) {
        return z;
      } else if (z === 0) {
        return x;
      } else {
        return x * z / Math.log(y);
      }
    }
    
    function caml_hypot_float(x, y) {
      var x0 = Math.abs(x);
      var y0 = Math.abs(y);
      var a = Math.max(x0, y0);
      var b = Math.min(x0, y0) / (
        a !== 0 ? a : 1
      );
      return a * Math.sqrt(1 + b * b);
    }
    
    function caml_log10_float(x) {
      return Math.LOG10E * Math.log(x);
    }
    
    exports.caml_int32_float_of_bits = caml_int32_float_of_bits;
    exports.caml_int32_bits_of_float = caml_int32_bits_of_float;
    exports.caml_classify_float = caml_classify_float;
    exports.caml_modf_float = caml_modf_float;
    exports.caml_ldexp_float = caml_ldexp_float;
    exports.caml_frexp_float = caml_frexp_float;
    exports.caml_copysign_float = caml_copysign_float;
    exports.caml_expm1_float = caml_expm1_float;
    exports.caml_hypot_float = caml_hypot_float;
    exports.caml_log10_float = caml_log10_float;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Caml_builtin_exceptions){
    'use strict';
    function get(s, i) {
      if (i < 0 || i >= s.length) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "index out of bounds"
            ];
      } else {
        return s[i];
      }
    }
    
    exports.get = get;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Block, Caml_exceptions){
    'use strict';
    var RuntimeException = Caml_exceptions.create("Interpreter.RuntimeException");
    
    function updateState(param, e) {
      return /* State */[
              e,
              param[1]
            ];
    }
    
    function nextStep(s) {
      var loc = s[1];
      var e = s[0];
      if (typeof e === "number") {
        throw [
              RuntimeException,
              "Programs with holes in them are not well typed",
              s
            ];
      } else {
        switch (e.tag | 0) {
          case 0 : 
              throw [
                    RuntimeException,
                    "already a value",
                    s
                  ];
          case 1 : 
              return updateState(s, /* Literal */Block.__(0, [/* Number */[3.1415926535897932384626433832795]]));
          case 2 : 
              var e1 = e[1];
              var o = e[0];
              var exit = 0;
              if (typeof e1 === "number") {
                exit = 1;
              } else if (e1.tag) {
                exit = 1;
              } else {
                var s$1 = s;
                var o$1 = o;
                var e1$1 = e1[0];
                if (o$1 !== 0) {
                  return updateState(s$1, /* Literal */Block.__(0, [/* Number */[Math.floor(e1$1[0])]]));
                } else {
                  return updateState(s$1, /* Literal */Block.__(0, [/* Number */[Math.log(e1$1[0])]]));
                }
              }
              if (exit === 1) {
                var match = nextStep(/* State */[
                      e1,
                      /* :: */[
                        0,
                        loc
                      ]
                    ]);
                return /* State */[
                        /* UnaryOp */Block.__(2, [
                            o,
                            match[0]
                          ]),
                        loc
                      ];
              }
              break;
          case 3 : 
              var e1$2 = e[1];
              var o$2 = e[0];
              var exit$1 = 0;
              if (typeof e1$2 === "number") {
                exit$1 = 1;
              } else if (e1$2.tag) {
                exit$1 = 1;
              } else {
                var e2 = e[2];
                var e1$3 = e1$2[0];
                var exit$2 = 0;
                if (typeof e2 === "number") {
                  exit$2 = 2;
                } else if (e2.tag) {
                  exit$2 = 2;
                } else {
                  var s$2 = s;
                  var o$3 = o$2;
                  var e1$4 = e1$3;
                  var e2$1 = e2[0];
                  switch (o$3) {
                    case 0 : 
                        return updateState(s$2, /* Literal */Block.__(0, [/* Number */[e1$4[0] + e2$1[0]]]));
                    case 1 : 
                        return updateState(s$2, /* Literal */Block.__(0, [/* Number */[e1$4[0] - e2$1[0]]]));
                    case 2 : 
                        return updateState(s$2, /* Literal */Block.__(0, [/* Number */[e1$4[0] * e2$1[0]]]));
                    case 3 : 
                        return updateState(s$2, /* Literal */Block.__(0, [/* Number */[e1$4[0] / e2$1[0]]]));
                    
                  }
                }
                if (exit$2 === 2) {
                  var match$1 = nextStep(/* State */[
                        e2,
                        /* :: */[
                          1,
                          loc
                        ]
                      ]);
                  return /* State */[
                          /* BinaryOp */Block.__(3, [
                              o$2,
                              /* Literal */Block.__(0, [e1$3]),
                              match$1[0]
                            ]),
                          loc
                        ];
                }
                
              }
              if (exit$1 === 1) {
                var match$2 = nextStep(/* State */[
                      e1$2,
                      /* :: */[
                        0,
                        loc
                      ]
                    ]);
                return /* State */[
                        /* BinaryOp */Block.__(3, [
                            o$2,
                            match$2[0],
                            e[2]
                          ]),
                        loc
                      ];
              }
              break;
          
        }
      }
    }
    
    function evaluateLoop(_s) {
      while(true) {
        var s = _s;
        var match = s[0];
        if (typeof match === "number") {
          _s = nextStep(s);
          continue ;
          
        } else if (match.tag) {
          _s = nextStep(s);
          continue ;
          
        } else {
          return match[0];
        }
      };
    }
    
    function evaluate(e) {
      return evaluateLoop(/* State */[
                  e,
                  /* [] */0
                ]);
    }
    
    exports.RuntimeException = RuntimeException;
    exports.nextStep = nextStep;
    exports.evaluateLoop = evaluateLoop;
    exports.evaluate = evaluate;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(12), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Names, Pervasives){
    'use strict';
    function prettyPrintValue(v) {
      return Pervasives.string_of_float(v[0]);
    }
    
    function prettyPrintExpression(e) {
      if (typeof e === "number") {
        return "[]";
      } else {
        switch (e.tag | 0) {
          case 0 : 
              return Pervasives.string_of_float(e[0][0]);
          case 1 : 
              return Names.constantName(e[0]);
          case 2 : 
              return Names.unaryOperatorName(e[0]) + ("(" + (prettyPrintExpression(e[1]) + ")"));
          case 3 : 
              return Names.binaryOperatorName(e[0]) + ("(" + (prettyPrintExpression(e[1]) + (", " + (prettyPrintExpression(e[2]) + ")"))));
          
        }
      }
    }
    
    exports.prettyPrintValue = prettyPrintValue;
    exports.prettyPrintExpression = prettyPrintExpression;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports, Block){
    'use strict';
    var exampleProgram = /* BinaryOp */Block.__(3, [
        /* Sub */1,
        /* BinaryOp */Block.__(3, [
            /* Div */3,
            /* Literal */Block.__(0, [/* Number */[22]]),
            /* Literal */Block.__(0, [/* Number */[7]])
          ]),
        /* Constant */Block.__(1, [/* Pi */0])
      ]);
    
    exports.exampleProgram = exampleProgram;
    
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/* No side effect */


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map