exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/configs/sequalize.ts":
/*!**********************************!*\
  !*** ./src/configs/sequalize.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = exports.sequelize = void 0;
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        exports.sequelize = new sequelize_typescript_1.Sequelize({
            models: [__dirname + '/database/models/**/*.model.ts'],
            modelMatch: (filename, member) => {
                return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
            },
            database: 'default',
            dialect: 'mysql',
            username: 'root',
            password: ''
        });
        yield exports.sequelize.authenticate();
        console.log("DB Connected");
    }
    catch (e) {
        console.error("Unable to connect to DB", e);
    }
});
exports.init = init;


/***/ }),

/***/ "./src/resolvers/User.ts":
/*!*******************************!*\
  !*** ./src/resolvers/User.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const users = [
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
        users: () => users,
        user: (parent, args, context, info) => users.find(user => user.id === args.id)
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
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const User_1 = __importDefault(__webpack_require__(/*! ./User */ "./src/resolvers/User.ts"));
exports.default = lodash_1.merge(User_1.default);


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
const index_1 = __importDefault(__webpack_require__(/*! ./typeDefs/index */ "./src/typeDefs/index.ts"));
const index_2 = __importDefault(__webpack_require__(/*! ./resolvers/index */ "./src/resolvers/index.ts"));
const sequalize_1 = __webpack_require__(/*! ./configs/sequalize */ "./src/configs/sequalize.ts");
const server = new apollo_server_1.ApolloServer({ typeDefs: index_1.default, resolvers: index_2.default });
sequalize_1.init();
server.listen()
    .then(({ url }) => console.log(`Server ready at ${url}. `));
if (true) {
    module.hot.accept();
    module.hot.dispose(() => { });
}


/***/ }),

/***/ "./src/typeDefs/User.ts":
/*!******************************!*\
  !*** ./src/typeDefs/User.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
exports.User = apollo_server_1.gql `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  extend type Query {
      users: [User!]!
      user(id: ID!): User!
  }
`;


/***/ }),

/***/ "./src/typeDefs/index.ts":
/*!*******************************!*\
  !*** ./src/typeDefs/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const apollo_server_1 = __webpack_require__(/*! apollo-server */ "apollo-server");
const User_1 = __webpack_require__(/*! ./User */ "./src/typeDefs/User.ts");
const baseTypeDefs = apollo_server_1.gql `
    type Query
`;
exports.default = [baseTypeDefs, User_1.User];


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

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize-typescript");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c2456a2030b71db0c00")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9jb25maWdzL3NlcXVhbGl6ZS50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvLi9zcmMvc2VydmVyLnRzIiwid2VicGFjazovL25vZGUtYXBpLXRlbXBsYXRlLy4vc3JjL3R5cGVEZWZzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvLi9zcmMvdHlwZURlZnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyXCIiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS9leHRlcm5hbCBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsWUFBWSxHQUFHLGlCQUFpQjtBQUNoQywrQkFBK0IsbUJBQU8sQ0FBQyxrREFBc0I7QUFDN0Q7QUFDQTtBQUNBLFFBQVEsaUJBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsWUFBWTs7Ozs7Ozs7Ozs7O0FDaENDO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMsc0JBQVE7QUFDakMsK0JBQStCLG1CQUFPLENBQUMsdUNBQVE7QUFDL0MsZUFBZTs7Ozs7Ozs7Ozs7O0FDUEY7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCx3QkFBd0IsbUJBQU8sQ0FBQyxvQ0FBZTtBQUMvQyxnQ0FBZ0MsbUJBQU8sQ0FBQyxpREFBa0I7QUFDMUQsZ0NBQWdDLG1CQUFPLENBQUMsbURBQW1CO0FBQzNELG9CQUFvQixtQkFBTyxDQUFDLHVEQUFxQjtBQUNqRCxpREFBaUQsd0RBQXdEO0FBQ3pHO0FBQ0E7QUFDQSxZQUFZLE1BQU0sb0NBQW9DLElBQUk7QUFDMUQsSUFBSSxJQUFVO0FBQ2QsSUFBSSxpQkFBaUI7QUFDckIsSUFBSSxVQUFVLGdCQUFnQixFQUFFO0FBQ2hDOzs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsWUFBWTtBQUNaLHdCQUF3QixtQkFBTyxDQUFDLG9DQUFlO0FBQy9DLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHdCQUF3QixtQkFBTyxDQUFDLG9DQUFlO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyxzQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7Ozs7QUNQZiwyQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7VUNBQSxzRCIsImZpbGUiOiJtYWluLmUzMWI1ZDJlZDM5MTc0YzEwNDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0ID0gZXhwb3J0cy5zZXF1ZWxpemUgPSB2b2lkIDA7XG5jb25zdCBzZXF1ZWxpemVfdHlwZXNjcmlwdF8xID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpO1xuY29uc3QgaW5pdCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGV4cG9ydHMuc2VxdWVsaXplID0gbmV3IHNlcXVlbGl6ZV90eXBlc2NyaXB0XzEuU2VxdWVsaXplKHtcbiAgICAgICAgICAgIG1vZGVsczogW19fZGlybmFtZSArICcvZGF0YWJhc2UvbW9kZWxzLyoqLyoubW9kZWwudHMnXSxcbiAgICAgICAgICAgIG1vZGVsTWF0Y2g6IChmaWxlbmFtZSwgbWVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVuYW1lLnN1YnN0cmluZygwLCBmaWxlbmFtZS5pbmRleE9mKCcubW9kZWwnKSkgPT09IG1lbWJlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFiYXNlOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBkaWFsZWN0OiAnbXlzcWwnLFxuICAgICAgICAgICAgdXNlcm5hbWU6ICdyb290JyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgZXhwb3J0cy5zZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiREIgQ29ubmVjdGVkXCIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gREJcIiwgZSk7XG4gICAgfVxufSk7XG5leHBvcnRzLmluaXQgPSBpbml0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1c2VycyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGZpcnN0TmFtZTogJ0VsaXphYmV0aCcsXG4gICAgICAgIGxhc3ROYW1lOiAnQmVubmV0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJzInLFxuICAgICAgICBmaXJzdE5hbWU6ICdGaXR6d2lsbGlhbScsXG4gICAgICAgIGxhc3ROYW1lOiAnRGFyY3knXG4gICAgfVxuXTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogKCkgPT4gdXNlcnMsXG4gICAgICAgIHVzZXI6IChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBhcmdzLmlkKVxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBVc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVXNlclwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2Rhc2hfMS5tZXJnZShVc2VyXzEuZGVmYXVsdCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwb2xsb19zZXJ2ZXJfMSA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyXCIpO1xuY29uc3QgaW5kZXhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi90eXBlRGVmcy9pbmRleFwiKSk7XG5jb25zdCBpbmRleF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Jlc29sdmVycy9pbmRleFwiKSk7XG5jb25zdCBzZXF1YWxpemVfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ3Mvc2VxdWFsaXplXCIpO1xuY29uc3Qgc2VydmVyID0gbmV3IGFwb2xsb19zZXJ2ZXJfMS5BcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmczogaW5kZXhfMS5kZWZhdWx0LCByZXNvbHZlcnM6IGluZGV4XzIuZGVmYXVsdCB9KTtcbnNlcXVhbGl6ZV8xLmluaXQoKTtcbnNlcnZlci5saXN0ZW4oKVxuICAgIC50aGVuKCh7IHVybCB9KSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIHJlYWR5IGF0ICR7dXJsfS4gYCkpO1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7IH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVzZXIgPSB2b2lkIDA7XG5jb25zdCBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbmV4cG9ydHMuVXNlciA9IGFwb2xsb19zZXJ2ZXJfMS5ncWwgYFxuICB0eXBlIFVzZXIge1xuICAgIGlkOiBJRCFcbiAgICBmaXJzdE5hbWU6IFN0cmluZyFcbiAgICBsYXN0TmFtZTogU3RyaW5nIVxuICB9XG5cbiAgZXh0ZW5kIHR5cGUgUXVlcnkge1xuICAgICAgdXNlcnM6IFtVc2VyIV0hXG4gICAgICB1c2VyKGlkOiBJRCEpOiBVc2VyIVxuICB9XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcG9sbG9fc2VydmVyXzEgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTtcbmNvbnN0IFVzZXJfMSA9IHJlcXVpcmUoXCIuL1VzZXJcIik7XG5jb25zdCBiYXNlVHlwZURlZnMgPSBhcG9sbG9fc2VydmVyXzEuZ3FsIGBcbiAgICB0eXBlIFF1ZXJ5XG5gO1xuZXhwb3J0cy5kZWZhdWx0ID0gW2Jhc2VUeXBlRGVmcywgVXNlcl8xLlVzZXJdO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiKTs7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWMyNDU2YTIwMzBiNzFkYjBjMDBcIikiXSwic291cmNlUm9vdCI6IiJ9