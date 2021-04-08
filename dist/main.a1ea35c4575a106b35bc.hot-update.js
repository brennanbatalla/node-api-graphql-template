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
exports.Pet = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Pet {\n    id: ID!\n    ownerId: String!\n    owner: User!\n  }\n\n  extend type Query {\n      pets: [Pet!]!\n      pet: Pet!\n  }\n\n  extend type Mutation {\n      pet(name: String!, type: String, ownerId: String!): Pet!\n  }\n"], ["\n  type Pet {\n    id: ID!\n    ownerId: String!\n    owner: User!\n  }\n\n  extend type Query {\n      pets: [Pet!]!\n      pet: Pet!\n  }\n\n  extend type Mutation {\n      pet(name: String!, type: String, ownerId: String!): Pet!\n  }\n"])));
var templateObject_1;


/***/ }),

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
var Pet_type_1 = __webpack_require__(/*! ./Pet.type */ "./src/typeDefs/Pet.type.ts");
var baseTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query\n    type Mutation\n"], ["\n    type Query\n    type Mutation\n"])));
exports.default = [baseTypeDefs, User_1.User, Pet_type_1.Pet];
var templateObject_1;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89fd3efd7d75013d0189")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy90eXBlRGVmcy9QZXQudHlwZS50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy90eXBlRGVmcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELFdBQVc7QUFDWCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxXQUFXLG9HQUFvRywwREFBMEQseUJBQXlCLDJDQUEyQyw0QkFBNEIscUVBQXFFLHNCQUFzQiwwREFBMEQseUJBQXlCLDJDQUEyQyw0QkFBNEIscUVBQXFFO0FBQ25rQjs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYjtBQUNBLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxhQUFhLG1CQUFPLENBQUMsc0NBQVE7QUFDN0IsaUJBQWlCLG1CQUFPLENBQUMsOENBQVk7QUFDckM7QUFDQSxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7OztVQ1hBLHNEIiwiZmlsZSI6Im1haW4uYTFlYTM1YzQ1NzVhMTA2YjM1YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGV0ID0gdm9pZCAwO1xudmFyIGFwb2xsb19zZXJ2ZXJfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xuZXhwb3J0cy5QZXQgPSBhcG9sbG9fc2VydmVyXzEuZ3FsKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIHR5cGUgUGV0IHtcXG4gICAgaWQ6IElEIVxcbiAgICBvd25lcklkOiBTdHJpbmchXFxuICAgIG93bmVyOiBVc2VyIVxcbiAgfVxcblxcbiAgZXh0ZW5kIHR5cGUgUXVlcnkge1xcbiAgICAgIHBldHM6IFtQZXQhXSFcXG4gICAgICBwZXQ6IFBldCFcXG4gIH1cXG5cXG4gIGV4dGVuZCB0eXBlIE11dGF0aW9uIHtcXG4gICAgICBwZXQobmFtZTogU3RyaW5nISwgdHlwZTogU3RyaW5nLCBvd25lcklkOiBTdHJpbmchKTogUGV0IVxcbiAgfVxcblwiXSwgW1wiXFxuICB0eXBlIFBldCB7XFxuICAgIGlkOiBJRCFcXG4gICAgb3duZXJJZDogU3RyaW5nIVxcbiAgICBvd25lcjogVXNlciFcXG4gIH1cXG5cXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcXG4gICAgICBwZXRzOiBbUGV0IV0hXFxuICAgICAgcGV0OiBQZXQhXFxuICB9XFxuXFxuICBleHRlbmQgdHlwZSBNdXRhdGlvbiB7XFxuICAgICAgcGV0KG5hbWU6IFN0cmluZyEsIHR5cGU6IFN0cmluZywgb3duZXJJZDogU3RyaW5nISk6IFBldCFcXG4gIH1cXG5cIl0pKSk7XG52YXIgdGVtcGxhdGVPYmplY3RfMTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbnZhciBVc2VyXzEgPSByZXF1aXJlKFwiLi9Vc2VyXCIpO1xudmFyIFBldF90eXBlXzEgPSByZXF1aXJlKFwiLi9QZXQudHlwZVwiKTtcbnZhciBiYXNlVHlwZURlZnMgPSBhcG9sbG9fc2VydmVyXzEuZ3FsKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgdHlwZSBRdWVyeVxcbiAgICB0eXBlIE11dGF0aW9uXFxuXCJdLCBbXCJcXG4gICAgdHlwZSBRdWVyeVxcbiAgICB0eXBlIE11dGF0aW9uXFxuXCJdKSkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gW2Jhc2VUeXBlRGVmcywgVXNlcl8xLlVzZXIsIFBldF90eXBlXzEuUGV0XTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODlmZDNlZmQ3ZDc1MDEzZDAxODlcIikiXSwic291cmNlUm9vdCI6IiJ9