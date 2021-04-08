exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
var index_1 = __importDefault(__webpack_require__(/*! ./typeDefs/index */ "./src/typeDefs/index.ts"));
var index_2 = __importDefault(__webpack_require__(/*! ./resolvers/index */ "./src/resolvers/index.ts"));
var sequalize_1 = __webpack_require__(/*! ./configs/sequalize */ "./src/configs/sequalize.ts");
var server = new apollo_server_1.ApolloServer({ typeDefs: index_1.default, resolvers: index_2.default });
sequalize_1.init();
server.listen()
    .then(function (_a) {
    var url = _a.url;
    return console.log("Server ready at " + url + ". ");
});


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6fedfa7b8a07ab2c91e")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3Qyw4QkFBOEIsbUJBQU8sQ0FBQyxpREFBa0I7QUFDeEQsOEJBQThCLG1CQUFPLENBQUMsbURBQW1CO0FBQ3pELGtCQUFrQixtQkFBTyxDQUFDLHVEQUFxQjtBQUMvQywrQ0FBK0Msd0RBQXdEO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7VUNmRCxzRCIsImZpbGUiOiJtYWluLjgyZWUzNDYwMDQ1ZjFjNTg1ZDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbnZhciBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3R5cGVEZWZzL2luZGV4XCIpKTtcbnZhciBpbmRleF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Jlc29sdmVycy9pbmRleFwiKSk7XG52YXIgc2VxdWFsaXplXzEgPSByZXF1aXJlKFwiLi9jb25maWdzL3NlcXVhbGl6ZVwiKTtcbnZhciBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl8xLkFwb2xsb1NlcnZlcih7IHR5cGVEZWZzOiBpbmRleF8xLmRlZmF1bHQsIHJlc29sdmVyczogaW5kZXhfMi5kZWZhdWx0IH0pO1xuc2VxdWFsaXplXzEuaW5pdCgpO1xuc2VydmVyLmxpc3RlbigpXG4gICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHVybCA9IF9hLnVybDtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJTZXJ2ZXIgcmVhZHkgYXQgXCIgKyB1cmwgKyBcIi4gXCIpO1xufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNmZlZGZhN2I4YTA3YWIyYzkxZVwiKSJdLCJzb3VyY2VSb290IjoiIn0=