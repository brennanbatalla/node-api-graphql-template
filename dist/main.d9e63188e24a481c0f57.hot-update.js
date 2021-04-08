exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/typeDefs/Pet.type.ts":
/*!**********************************!*\
  !*** ./src/typeDefs/Pet.type.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pet = void 0;
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
exports.Pet = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Pet {\n        id: ID!\n        name: String!\n        ownerId: String!\n        owner: User!\n    }\n\n    extend type Query {\n        pets: [Pet!]!\n        pet: Pet!\n    }\n\n    extend type Mutation {\n        pet(name: String!, type: String, ownerId: String!): Pet!\n    }\n"], ["\n    type Pet {\n        id: ID!\n        name: String!\n        ownerId: String!\n        owner: User!\n    }\n\n    extend type Query {\n        pets: [Pet!]!\n        pet: Pet!\n    }\n\n    extend type Mutation {\n        pet(name: String!, type: String, ownerId: String!): Pet!\n    }\n"])));
var templateObject_1;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a544569ff4814d1c553c")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy90eXBlRGVmcy9QZXQudHlwZS50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELFdBQVc7QUFDWCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxXQUFXLHNHQUFzRywrRkFBK0YsMkJBQTJCLGlEQUFpRCw4QkFBOEIseUVBQXlFLHdCQUF3QiwrRkFBK0YsMkJBQTJCLGlEQUFpRCw4QkFBOEIseUVBQXlFO0FBQzdxQjs7Ozs7Ozs7Ozs7O1VDVEEsc0QiLCJmaWxlIjoibWFpbi5kOWU2MzE4OGUyNGE0ODFjMGY1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QZXQgPSB2b2lkIDA7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG5leHBvcnRzLlBldCA9IGFwb2xsb19zZXJ2ZXJfMS5ncWwodGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICB0eXBlIFBldCB7XFxuICAgICAgICBpZDogSUQhXFxuICAgICAgICBuYW1lOiBTdHJpbmchXFxuICAgICAgICBvd25lcklkOiBTdHJpbmchXFxuICAgICAgICBvd25lcjogVXNlciFcXG4gICAgfVxcblxcbiAgICBleHRlbmQgdHlwZSBRdWVyeSB7XFxuICAgICAgICBwZXRzOiBbUGV0IV0hXFxuICAgICAgICBwZXQ6IFBldCFcXG4gICAgfVxcblxcbiAgICBleHRlbmQgdHlwZSBNdXRhdGlvbiB7XFxuICAgICAgICBwZXQobmFtZTogU3RyaW5nISwgdHlwZTogU3RyaW5nLCBvd25lcklkOiBTdHJpbmchKTogUGV0IVxcbiAgICB9XFxuXCJdLCBbXCJcXG4gICAgdHlwZSBQZXQge1xcbiAgICAgICAgaWQ6IElEIVxcbiAgICAgICAgbmFtZTogU3RyaW5nIVxcbiAgICAgICAgb3duZXJJZDogU3RyaW5nIVxcbiAgICAgICAgb3duZXI6IFVzZXIhXFxuICAgIH1cXG5cXG4gICAgZXh0ZW5kIHR5cGUgUXVlcnkge1xcbiAgICAgICAgcGV0czogW1BldCFdIVxcbiAgICAgICAgcGV0OiBQZXQhXFxuICAgIH1cXG5cXG4gICAgZXh0ZW5kIHR5cGUgTXV0YXRpb24ge1xcbiAgICAgICAgcGV0KG5hbWU6IFN0cmluZyEsIHR5cGU6IFN0cmluZywgb3duZXJJZDogU3RyaW5nISk6IFBldCFcXG4gICAgfVxcblwiXSkpKTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTU0NDU2OWZmNDgxNGQxYzU1M2NcIikiXSwic291cmNlUm9vdCI6IiJ9