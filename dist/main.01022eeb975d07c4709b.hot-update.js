exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/typeDefs/User.ts":
/*!******************************!*\
  !*** ./src/typeDefs/User.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
exports.User = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID!\n    firstName: String!\n    lastName: String!\n      pets: [Pet!]!\n  }\n\n  extend type Query {\n      users: [User!]!\n      user(id: ID!): User!\n  }\n\n  extend type Mutation {\n      user(firstName: String!, lastName: String!): User!\n  }\n"], ["\n  type User {\n    id: ID!\n    firstName: String!\n    lastName: String!\n      pets: [Pet!]!\n  }\n\n  extend type Query {\n      users: [User!]!\n      user(id: ID!): User!\n  }\n\n  extend type Mutation {\n      user(firstName: String!, lastName: String!): User!\n  }\n"])));
var templateObject_1;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5de115d9042d002418ee")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy90eXBlRGVmcy9Vc2VyLnRzIiwid2VicGFjazovL25vZGUtYXBpLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSxnQ0FBZ0MsdUNBQXVDLGFBQWEsRUFBRSxFQUFFLE9BQU8sa0JBQWtCO0FBQ2pIO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsWUFBWTtBQUNaLHNCQUFzQixtQkFBTyxDQUFDLG9DQUFlO0FBQzdDLFlBQVkscUdBQXFHLHNGQUFzRix5QkFBeUIsd0RBQXdELDRCQUE0QiwrREFBK0QsdUJBQXVCLHNGQUFzRix5QkFBeUIsd0RBQXdELDRCQUE0QiwrREFBK0Q7QUFDNW9COzs7Ozs7Ozs7Ozs7VUNUQSxzRCIsImZpbGUiOiJtYWluLjAxMDIyZWViOTc1ZDA3YzQ3MDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXIgPSB2b2lkIDA7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG5leHBvcnRzLlVzZXIgPSBhcG9sbG9fc2VydmVyXzEuZ3FsKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIHR5cGUgVXNlciB7XFxuICAgIGlkOiBJRCFcXG4gICAgZmlyc3ROYW1lOiBTdHJpbmchXFxuICAgIGxhc3ROYW1lOiBTdHJpbmchXFxuICAgICAgcGV0czogW1BldCFdIVxcbiAgfVxcblxcbiAgZXh0ZW5kIHR5cGUgUXVlcnkge1xcbiAgICAgIHVzZXJzOiBbVXNlciFdIVxcbiAgICAgIHVzZXIoaWQ6IElEISk6IFVzZXIhXFxuICB9XFxuXFxuICBleHRlbmQgdHlwZSBNdXRhdGlvbiB7XFxuICAgICAgdXNlcihmaXJzdE5hbWU6IFN0cmluZyEsIGxhc3ROYW1lOiBTdHJpbmchKTogVXNlciFcXG4gIH1cXG5cIl0sIFtcIlxcbiAgdHlwZSBVc2VyIHtcXG4gICAgaWQ6IElEIVxcbiAgICBmaXJzdE5hbWU6IFN0cmluZyFcXG4gICAgbGFzdE5hbWU6IFN0cmluZyFcXG4gICAgICBwZXRzOiBbUGV0IV0hXFxuICB9XFxuXFxuICBleHRlbmQgdHlwZSBRdWVyeSB7XFxuICAgICAgdXNlcnM6IFtVc2VyIV0hXFxuICAgICAgdXNlcihpZDogSUQhKTogVXNlciFcXG4gIH1cXG5cXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9uIHtcXG4gICAgICB1c2VyKGZpcnN0TmFtZTogU3RyaW5nISwgbGFzdE5hbWU6IFN0cmluZyEpOiBVc2VyIVxcbiAgfVxcblwiXSkpKTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWRlMTE1ZDkwNDJkMDAyNDE4ZWVcIikiXSwic291cmNlUm9vdCI6IiJ9