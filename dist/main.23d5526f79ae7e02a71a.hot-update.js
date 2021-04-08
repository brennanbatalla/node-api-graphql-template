exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/resolvers/index.ts":
/*!********************************!*\
  !*** ./src/resolvers/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const User_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './User'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const Pet_resolver_1 = __importDefault(__webpack_require__(/*! ./Pet.resolver */ "./src/resolvers/Pet.resolver.ts"));
exports.default = lodash_1.merge(User_1.default, Pet_resolver_1.default);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b379a7af8d14f085b9e")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsbUJBQU8sQ0FBQyxzQkFBUTtBQUNqQywrQkFBK0IsbUJBQU8sQ0FBQyxxSUFBUTtBQUMvQyx1Q0FBdUMsbUJBQU8sQ0FBQyx1REFBZ0I7QUFDL0QsZUFBZTs7Ozs7Ozs7Ozs7O1VDUmYsc0QiLCJmaWxlIjoibWFpbi4yM2Q1NTI2Zjc5YWU3ZTAyYTcxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBVc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVXNlclwiKSk7XG5jb25zdCBQZXRfcmVzb2x2ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QZXQucmVzb2x2ZXJcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbG9kYXNoXzEubWVyZ2UoVXNlcl8xLmRlZmF1bHQsIFBldF9yZXNvbHZlcl8xLmRlZmF1bHQpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2IzNzlhN2FmOGQxNGYwODViOWVcIikiXSwic291cmNlUm9vdCI6IiJ9