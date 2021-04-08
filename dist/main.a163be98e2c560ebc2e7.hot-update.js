exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/resolvers/User.resolver.ts":
/*!****************************************!*\
  !*** ./src/resolvers/User.resolver.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var User_model_1 = __importDefault(__webpack_require__(/*! ../database/model/User.model */ "./src/database/model/User.model.ts"));
exports.default = {
    User: {
        pets: function () { return []; }
    },
    Query: {
        users: function () {
            console.log("QUERY USERS");
            return User_model_1.default.findAll();
        },
        user: function (parent, args, context, info) {
            console.log("QUERY USER");
            return User_model_1.default.findOne({ where: { id: args.id } });
        }
    },
    Mutation: {
        user: function (parent, args) {
            var user = { firstName: args.firstName, lastName: args.lastName };
            return User_model_1.default.create(user);
        }
    }
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
var User_resolver_1 = __importDefault(__webpack_require__(/*! ./User.resolver */ "./src/resolvers/User.resolver.ts"));
var Pet_resolver_1 = __importDefault(__webpack_require__(/*! ./Pet.resolver */ "./src/resolvers/Pet.resolver.ts"));
exports.default = lodash_1.merge(User_resolver_1.default, Pet_resolver_1.default);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4fa6f059c7341c74844")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci5yZXNvbHZlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbm9kZS1hcGktdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxtQ0FBbUMsbUJBQU8sQ0FBQyx3RUFBOEI7QUFDekUsZUFBZTtBQUNmO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpREFBaUQsU0FBUyxjQUFjLEVBQUU7QUFDMUU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLHNCQUFRO0FBQy9CLHNDQUFzQyxtQkFBTyxDQUFDLHlEQUFpQjtBQUMvRCxxQ0FBcUMsbUJBQU8sQ0FBQyx1REFBZ0I7QUFDN0QsZUFBZTs7Ozs7Ozs7Ozs7O1VDUmYsc0QiLCJmaWxlIjoibWFpbi5hMTYzYmU5OGUyYzU2MGViYzJlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXNlcl9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9tb2RlbC9Vc2VyLm1vZGVsXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBVc2VyOiB7XG4gICAgICAgIHBldHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9XG4gICAgfSxcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRVUVSWSBVU0VSU1wiKTtcbiAgICAgICAgICAgIHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kQWxsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFUlkgVVNFUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGFyZ3MuaWQgfSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgdXNlcjogZnVuY3Rpb24gKHBhcmVudCwgYXJncykge1xuICAgICAgICAgICAgdmFyIHVzZXIgPSB7IGZpcnN0TmFtZTogYXJncy5maXJzdE5hbWUsIGxhc3ROYW1lOiBhcmdzLmxhc3ROYW1lIH07XG4gICAgICAgICAgICByZXR1cm4gVXNlcl9tb2RlbF8xLmRlZmF1bHQuY3JlYXRlKHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGxvZGFzaF8xID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbnZhciBVc2VyX3Jlc29sdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVXNlci5yZXNvbHZlclwiKSk7XG52YXIgUGV0X3Jlc29sdmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGV0LnJlc29sdmVyXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxvZGFzaF8xLm1lcmdlKFVzZXJfcmVzb2x2ZXJfMS5kZWZhdWx0LCBQZXRfcmVzb2x2ZXJfMS5kZWZhdWx0KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0ZmE2ZjA1OWM3MzQxYzc0ODQ0XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==