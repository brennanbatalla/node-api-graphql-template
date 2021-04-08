exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/resolvers/User.ts":
/*!*******************************!*\
  !*** ./src/resolvers/User.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var users = [
    {
        id: '1',
        firstName: 'Elizabeth',
        lastName: 'Bennet'
    },
    {
        id: '2',
        firstName: 'Fitzwilliam',
        lastName: 'Darcy'
    }
];
exports.default = {
    Query: {
        users: function () { return users; },
        user: function (parent, args, context, info) { return users.find(function (user) { return user.id === args.id; }); }
    },
};


/***/ }),

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
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var User_1 = __importDefault(__webpack_require__(/*! ./User */ "./src/resolvers/User.ts"));
exports.default = lodash_1.merge(User_1.default);


/***/ }),

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
    return console.log("Server ready at " + url + ". ");
});


/***/ }),

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
exports.User = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID!\n    firstName: String!\n    lastName: String!\n  }\n\n  extend type Query {\n      users: [User!]!\n      user(id: ID!): User!\n  }\n"], ["\n  type User {\n    id: ID!\n    firstName: String!\n    lastName: String!\n  }\n\n  extend type Query {\n      users: [User!]!\n      user(id: ID!): User!\n  }\n"])));
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
var baseTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query\n"], ["\n    type Query\n"])));
exports.default = [baseTypeDefs, User_1.User];
var templateObject_1;


/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4992680695d3c36f9ec7")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovL25vZGUtYXBpLXRlbXBsYXRlLy4vc3JjL3R5cGVEZWZzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvLi9zcmMvdHlwZURlZnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDRCQUE0QixjQUFjLEVBQUU7QUFDNUMsc0RBQXNELG9DQUFvQyw0QkFBNEIsRUFBRSxFQUFFO0FBQzFILEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLHNCQUFRO0FBQy9CLDZCQUE2QixtQkFBTyxDQUFDLHVDQUFRO0FBQzdDLGVBQWU7Ozs7Ozs7Ozs7OztBQ1BGO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0MsOEJBQThCLG1CQUFPLENBQUMsaURBQWtCO0FBQ3hELDhCQUE4QixtQkFBTyxDQUFDLG1EQUFtQjtBQUN6RCwrQ0FBK0Msd0RBQXdEO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDYlk7QUFDYjtBQUNBLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxZQUFZO0FBQ1osc0JBQXNCLG1CQUFPLENBQUMsb0NBQWU7QUFDN0MsWUFBWSxxR0FBcUcsaUVBQWlFLHlCQUF5Qix3REFBd0QsdUJBQXVCLGlFQUFpRSx5QkFBeUIsd0RBQXdEO0FBQzVhOzs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHNCQUFzQixtQkFBTyxDQUFDLG9DQUFlO0FBQzdDLGFBQWEsbUJBQU8sQ0FBQyxzQ0FBUTtBQUM3QjtBQUNBLGVBQWU7QUFDZjs7Ozs7Ozs7Ozs7O0FDVkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O1VDQUEsc0QiLCJmaWxlIjoibWFpbi40NjI0NmI5NzI1MTEwMWFiZDkwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXNlcnMgPSBbXG4gICAge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICBmaXJzdE5hbWU6ICdFbGl6YWJldGgnLFxuICAgICAgICBsYXN0TmFtZTogJ0Jlbm5ldCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgZmlyc3ROYW1lOiAnRml0endpbGxpYW0nLFxuICAgICAgICBsYXN0TmFtZTogJ0RhcmN5J1xuICAgIH1cbl07XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgdXNlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZXJzOyB9LFxuICAgICAgICB1c2VyOiBmdW5jdGlvbiAocGFyZW50LCBhcmdzLCBjb250ZXh0LCBpbmZvKSB7IHJldHVybiB1c2Vycy5maW5kKGZ1bmN0aW9uICh1c2VyKSB7IHJldHVybiB1c2VyLmlkID09PSBhcmdzLmlkOyB9KTsgfVxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbG9kYXNoXzEgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xudmFyIFVzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Vc2VyXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvZGFzaF8xLm1lcmdlKFVzZXJfMS5kZWZhdWx0KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwb2xsb19zZXJ2ZXJfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdHlwZURlZnMvaW5kZXhcIikpO1xudmFyIGluZGV4XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVzb2x2ZXJzL2luZGV4XCIpKTtcbnZhciBzZXJ2ZXIgPSBuZXcgYXBvbGxvX3NlcnZlcl8xLkFwb2xsb1NlcnZlcih7IHR5cGVEZWZzOiBpbmRleF8xLmRlZmF1bHQsIHJlc29sdmVyczogaW5kZXhfMi5kZWZhdWx0IH0pO1xuc2VydmVyLmxpc3RlbigpXG4gICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHVybCA9IF9hLnVybDtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJTZXJ2ZXIgcmVhZHkgYXQgXCIgKyB1cmwgKyBcIi4gXCIpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXIgPSB2b2lkIDA7XG52YXIgYXBvbGxvX3NlcnZlcl8xID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7XG5leHBvcnRzLlVzZXIgPSBhcG9sbG9fc2VydmVyXzEuZ3FsKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIHR5cGUgVXNlciB7XFxuICAgIGlkOiBJRCFcXG4gICAgZmlyc3ROYW1lOiBTdHJpbmchXFxuICAgIGxhc3ROYW1lOiBTdHJpbmchXFxuICB9XFxuXFxuICBleHRlbmQgdHlwZSBRdWVyeSB7XFxuICAgICAgdXNlcnM6IFtVc2VyIV0hXFxuICAgICAgdXNlcihpZDogSUQhKTogVXNlciFcXG4gIH1cXG5cIl0sIFtcIlxcbiAgdHlwZSBVc2VyIHtcXG4gICAgaWQ6IElEIVxcbiAgICBmaXJzdE5hbWU6IFN0cmluZyFcXG4gICAgbGFzdE5hbWU6IFN0cmluZyFcXG4gIH1cXG5cXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcXG4gICAgICB1c2VyczogW1VzZXIhXSFcXG4gICAgICB1c2VyKGlkOiBJRCEpOiBVc2VyIVxcbiAgfVxcblwiXSkpKTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwb2xsb19zZXJ2ZXJfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xudmFyIFVzZXJfMSA9IHJlcXVpcmUoXCIuL1VzZXJcIik7XG52YXIgYmFzZVR5cGVEZWZzID0gYXBvbGxvX3NlcnZlcl8xLmdxbCh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgIHR5cGUgUXVlcnlcXG5cIl0sIFtcIlxcbiAgICB0eXBlIFF1ZXJ5XFxuXCJdKSkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gW2Jhc2VUeXBlRGVmcywgVXNlcl8xLlVzZXJdO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ5OTI2ODA2OTVkM2MzNmY5ZWM3XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==