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
/******/ 	__webpack_require__.h = () => ("6396ab28f92d5d849c23")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1DQUFtQyxtQkFBTyxDQUFDLHdFQUE4QjtBQUN6RSxlQUFlO0FBQ2Y7QUFDQSw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBLGlEQUFpRCxTQUFTLGNBQWMsRUFBRTtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7VUNwQkEsc0QiLCJmaWxlIjoibWFpbi4xYWQ2YTUyYzhkNmQ2ODcyMWZmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXNlcl9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9tb2RlbC9Vc2VyLm1vZGVsXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXNlcl9tb2RlbF8xLmRlZmF1bHQuZmluZEFsbCgpOyB9LFxuICAgICAgICB1c2VyOiBmdW5jdGlvbiAocGFyZW50LCBhcmdzLCBjb250ZXh0LCBpbmZvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlFVRVJZIFVTRVJcIik7XG4gICAgICAgICAgICByZXR1cm4gVXNlcl9tb2RlbF8xLmRlZmF1bHQuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBhcmdzLmlkIH0gfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIHVzZXI6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTVVUQVRJT05cIiwgYXJncyk7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHsgZmlyc3ROYW1lOiBhcmdzLmZpcnN0TmFtZSwgbGFzdE5hbWU6IGFyZ3MubGFzdE5hbWUgfTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2Mzk2YWIyOGY5MmQ1ZDg0OWMyM1wiKSJdLCJzb3VyY2VSb290IjoiIn0=