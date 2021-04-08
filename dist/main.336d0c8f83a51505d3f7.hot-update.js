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
        user: function (parent, args, context, info) {
            console.log("QUERY USER");
            return User_model_1.default.findOne({ where: { id: args.id } });
        }
    },
    Mutation: {
        user: function (parent, args) {
            console.log("MUTATION", args);
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
/******/ 	__webpack_require__.h = () => ("9f6785988256a43652d2")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1DQUFtQyxtQkFBTyxDQUFDLHdFQUE4QjtBQUN6RSxlQUFlO0FBQ2Y7QUFDQSw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBLGlEQUFpRCxTQUFTLGNBQWMsRUFBRTtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztVQ3JCQSxzRCIsImZpbGUiOiJtYWluLjMzNmQwYzhmODNhNTE1MDVkM2Y3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVc2VyX21vZGVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RhdGFiYXNlL21vZGVsL1VzZXIubW9kZWxcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHVzZXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kQWxsKCk7IH0sXG4gICAgICAgIHVzZXI6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFUlkgVVNFUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBVc2VyX21vZGVsXzEuZGVmYXVsdC5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGFyZ3MuaWQgfSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgdXNlcjogZnVuY3Rpb24gKHBhcmVudCwgYXJncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNVVRBVElPTlwiLCBhcmdzKTtcbiAgICAgICAgICAgIHZhciB1c2VyID0geyBmaXJzdE5hbWU6IGFyZ3MuZmlyc3ROYW1lLCBsYXN0TmFtZTogYXJncy5sYXN0TmFtZSB9O1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJfbW9kZWxfMS5kZWZhdWx0LmNyZWF0ZSh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZjY3ODU5ODgyNTZhNDM2NTJkMlwiKSJdLCJzb3VyY2VSb290IjoiIn0=