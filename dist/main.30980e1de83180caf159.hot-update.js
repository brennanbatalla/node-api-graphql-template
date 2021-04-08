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
var server = new apollo_server_1.ApolloServer({ typeDefs: index_1.default, resolvers: index_2.default });
server.listen()
    .then(function (_a) {
    var url = _a.url;
    console.log("Server ready at " + url + ".");
});


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d883a60ae3abfc4dc003")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3Qyw4QkFBOEIsbUJBQU8sQ0FBQyxpREFBa0I7QUFDeEQsOEJBQThCLG1CQUFPLENBQUMsbURBQW1CO0FBQ3pELCtDQUErQyx3REFBd0Q7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7VUNiRCxzRCIsImZpbGUiOiJtYWluLjMwOTgwZTFkZTgzMTgwY2FmMTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbnZhciBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3R5cGVEZWZzL2luZGV4XCIpKTtcbnZhciBpbmRleF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Jlc29sdmVycy9pbmRleFwiKSk7XG52YXIgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfMS5BcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmczogaW5kZXhfMS5kZWZhdWx0LCByZXNvbHZlcnM6IGluZGV4XzIuZGVmYXVsdCB9KTtcbnNlcnZlci5saXN0ZW4oKVxuICAgIC50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB1cmwgPSBfYS51cmw7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgcmVhZHkgYXQgXCIgKyB1cmwgKyBcIi5cIik7XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ4ODNhNjBhZTNhYmZjNGRjMDAzXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==