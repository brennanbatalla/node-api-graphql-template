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
exports.Pet = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Pet {\n        id: ID!\n        name: String!\n        ownerId: String!\n        owner: User\n    }\n\n    extend type Query {\n        pets: [Pet!]!\n        pet: Pet!\n    }\n\n    extend type Mutation {\n        pet(name: String!, type: String, ownerId: String!): Pet!\n    }\n"], ["\n    type Pet {\n        id: ID!\n        name: String!\n        ownerId: String!\n        owner: User\n    }\n\n    extend type Query {\n        pets: [Pet!]!\n        pet: Pet!\n    }\n\n    extend type Mutation {\n        pet(name: String!, type: String, ownerId: String!): Pet!\n    }\n"])));
var templateObject_1;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b79ef3664a94add283a6")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy90eXBlRGVmcy9QZXQudHlwZS50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELFdBQVc7QUFDWCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3QyxXQUFXLHNHQUFzRyw4RkFBOEYsMkJBQTJCLGlEQUFpRCw4QkFBOEIseUVBQXlFLHdCQUF3Qiw4RkFBOEYsMkJBQTJCLGlEQUFpRCw4QkFBOEIseUVBQXlFO0FBQzNxQjs7Ozs7Ozs7Ozs7O1VDVEEsc0QiLCJmaWxlIjoibWFpbi5jNjNhNWI0YTI4M2ExNDdiZjdiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QZXQgPSB2b2lkIDA7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG5leHBvcnRzLlBldCA9IGFwb2xsb19zZXJ2ZXJfMS5ncWwodGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICB0eXBlIFBldCB7XFxuICAgICAgICBpZDogSUQhXFxuICAgICAgICBuYW1lOiBTdHJpbmchXFxuICAgICAgICBvd25lcklkOiBTdHJpbmchXFxuICAgICAgICBvd25lcjogVXNlclxcbiAgICB9XFxuXFxuICAgIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcXG4gICAgICAgIHBldHM6IFtQZXQhXSFcXG4gICAgICAgIHBldDogUGV0IVxcbiAgICB9XFxuXFxuICAgIGV4dGVuZCB0eXBlIE11dGF0aW9uIHtcXG4gICAgICAgIHBldChuYW1lOiBTdHJpbmchLCB0eXBlOiBTdHJpbmcsIG93bmVySWQ6IFN0cmluZyEpOiBQZXQhXFxuICAgIH1cXG5cIl0sIFtcIlxcbiAgICB0eXBlIFBldCB7XFxuICAgICAgICBpZDogSUQhXFxuICAgICAgICBuYW1lOiBTdHJpbmchXFxuICAgICAgICBvd25lcklkOiBTdHJpbmchXFxuICAgICAgICBvd25lcjogVXNlclxcbiAgICB9XFxuXFxuICAgIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcXG4gICAgICAgIHBldHM6IFtQZXQhXSFcXG4gICAgICAgIHBldDogUGV0IVxcbiAgICB9XFxuXFxuICAgIGV4dGVuZCB0eXBlIE11dGF0aW9uIHtcXG4gICAgICAgIHBldChuYW1lOiBTdHJpbmchLCB0eXBlOiBTdHJpbmcsIG93bmVySWQ6IFN0cmluZyEpOiBQZXQhXFxuICAgIH1cXG5cIl0pKSk7XG52YXIgdGVtcGxhdGVPYmplY3RfMTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3OWVmMzY2NGE5NGFkZDI4M2E2XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==