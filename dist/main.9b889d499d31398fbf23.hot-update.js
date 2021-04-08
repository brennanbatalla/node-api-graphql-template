exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/resolvers/User.ts":
/*!*******************************!*\
  !*** ./src/resolvers/User.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var User_model_1 = __importDefault(__webpack_require__(/*! ../database/model/User.model */ "./src/database/model/User.model.ts"));
exports.default = {
    Query: {
        users: function () { return User_model_1.default.findAll(); },
        user: function (parent, args, context, info) { return User_model_1.default.findOne({ where: { id: args.id } }); }
    },
    Mutation: {
        user: function () { }
    }
};


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("21d795068a44552e6baa")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1DQUFtQyxtQkFBTyxDQUFDLHdFQUE4QjtBQUN6RSxlQUFlO0FBQ2Y7QUFDQSw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDckUsc0RBQXNELHNDQUFzQyxTQUFTLGNBQWMsRUFBRSxFQUFFO0FBQ3ZILEtBQUs7QUFDTDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7VUNkQSxzRCIsImZpbGUiOiJtYWluLjliODg5ZDQ5OWQzMTM5OGZiZjIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVc2VyX21vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RhdGFiYXNlL21vZGVsL1VzZXIubW9kZWxcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHVzZXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kQWxsKCk7IH0sXG4gICAgICAgIHVzZXI6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHsgcmV0dXJuIFVzZXJfbW9kZWxfMS5kZWZhdWx0LmZpbmRPbmUoeyB3aGVyZTogeyBpZDogYXJncy5pZCB9IH0pOyB9XG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgICB1c2VyOiBmdW5jdGlvbiAoKSB7IH1cbiAgICB9XG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjFkNzk1MDY4YTQ0NTUyZTZiYWFcIikiXSwic291cmNlUm9vdCI6IiJ9