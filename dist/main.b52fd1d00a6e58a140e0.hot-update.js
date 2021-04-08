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


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("233b9a10eaffd0165688")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1DQUFtQyxtQkFBTyxDQUFDLHdFQUE4QjtBQUN6RSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlEQUFpRCxTQUFTLGNBQWMsRUFBRTtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7VUN2QkEsc0QiLCJmaWxlIjoibWFpbi5iNTJmZDFkMDBhNmU1OGExNDBlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXNlcl9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9tb2RlbC9Vc2VyLm1vZGVsXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRVUVSWSBVU0VSU1wiKTtcbiAgICAgICAgICAgIHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kQWxsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVzZXI6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFUlkgVVNFUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGFyZ3MuaWQgfSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgdXNlcjogZnVuY3Rpb24gKHBhcmVudCwgYXJncykge1xuICAgICAgICAgICAgdmFyIHVzZXIgPSB7IGZpcnN0TmFtZTogYXJncy5maXJzdE5hbWUsIGxhc3ROYW1lOiBhcmdzLmxhc3ROYW1lIH07XG4gICAgICAgICAgICByZXR1cm4gVXNlcl9tb2RlbF8xLmRlZmF1bHQuY3JlYXRlKHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIzM2I5YTEwZWFmZmQwMTY1Njg4XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==