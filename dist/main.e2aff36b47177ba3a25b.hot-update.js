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
const User_model_1 = __importDefault(__webpack_require__(/*! ../database/model/User.model */ "./src/database/model/User.model.ts"));
exports.default = {
    Query: {
        users: () => User_model_1.default.findAll(),
        user: (parent, args, context, info) => User_model_1.default.findOne({ id: args.id })
    },
};


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ae6985443c9e6d43372")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHFDQUFxQyxtQkFBTyxDQUFDLHdFQUE4QjtBQUMzRSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLDZFQUE2RSxjQUFjO0FBQzNGLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7O1VDWEEsc0QiLCJmaWxlIjoibWFpbi5lMmFmZjM2YjQ3MTc3YmEzYTI1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBVc2VyX21vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RhdGFiYXNlL21vZGVsL1VzZXIubW9kZWxcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHVzZXJzOiAoKSA9PiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kQWxsKCksXG4gICAgICAgIHVzZXI6IChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+IFVzZXJfbW9kZWxfMS5kZWZhdWx0LmZpbmRPbmUoeyBpZDogYXJncy5pZCB9KVxuICAgIH0sXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWFlNjk4NTQ0M2M5ZTZkNDMzNzJcIikiXSwic291cmNlUm9vdCI6IiJ9