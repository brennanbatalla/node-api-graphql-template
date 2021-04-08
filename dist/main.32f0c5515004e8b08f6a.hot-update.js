exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/typeDefs/index.ts":
/*!*******************************!*\
  !*** ./src/typeDefs/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
var User_1 = __webpack_require__(/*! ./User */ "./src/typeDefs/User.ts");
var baseTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query\n    type Mutation\n"], ["\n    type Query\n    type Mutation\n"])));
exports.default = [baseTypeDefs, User_1.User];
var templateObject_1;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7a34f73d965554bc4cc6")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy90eXBlRGVmcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHNCQUFzQixtQkFBTyxDQUFDLG9DQUFlO0FBQzdDLGFBQWEsbUJBQU8sQ0FBQyxzQ0FBUTtBQUM3QjtBQUNBLGVBQWU7QUFDZjs7Ozs7Ozs7Ozs7O1VDVkEsc0QiLCJmaWxlIjoibWFpbi4zMmYwYzU1MTUwMDRlOGIwOGY2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwb2xsb19zZXJ2ZXJfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xudmFyIFVzZXJfMSA9IHJlcXVpcmUoXCIuL1VzZXJcIik7XG52YXIgYmFzZVR5cGVEZWZzID0gYXBvbGxvX3NlcnZlcl8xLmdxbCh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIHR5cGUgUXVlcnlcXG4gICAgdHlwZSBNdXRhdGlvblxcblwiXSwgW1wiXFxuICAgIHR5cGUgUXVlcnlcXG4gICAgdHlwZSBNdXRhdGlvblxcblwiXSkpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFtiYXNlVHlwZURlZnMsIFVzZXJfMS5Vc2VyXTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2EzNGY3M2Q5NjU1NTRiYzRjYzZcIikiXSwic291cmNlUm9vdCI6IiJ9