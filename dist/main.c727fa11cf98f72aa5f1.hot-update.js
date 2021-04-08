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
/******/ 	__webpack_require__.h = () => ("6d9a44fc33dac998fa11")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvVXNlci50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1DQUFtQyxtQkFBTyxDQUFDLHdFQUE4QjtBQUN6RSxlQUFlO0FBQ2Y7QUFDQSw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBLGlEQUFpRCxTQUFTLGNBQWMsRUFBRTtBQUMxRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7VUNwQkEsc0QiLCJmaWxlIjoibWFpbi5jNzI3ZmExMWNmOThmNzJhYTVmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVXNlcl9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9tb2RlbC9Vc2VyLm1vZGVsXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICB1c2VyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXNlcl9tb2RlbF8xLmRlZmF1bHQuZmluZEFsbCgpOyB9LFxuICAgICAgICB1c2VyOiBmdW5jdGlvbiAocGFyZW50LCBhcmdzLCBjb250ZXh0LCBpbmZvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlFVRVJZIFVTRVJcIik7XG4gICAgICAgICAgICByZXR1cm4gVXNlcl9tb2RlbF8xLmRlZmF1bHQuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBhcmdzLmlkIH0gfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIHVzZXI6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB1c2VyID0geyBmaXJzdE5hbWU6IGFyZ3MuZmlyc3ROYW1lLCBsYXN0TmFtZTogYXJncy5sYXN0TmFtZSB9O1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJfbW9kZWxfMS5kZWZhdWx0LmNyZWF0ZSh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZDlhNDRmYzMzZGFjOTk4ZmExMVwiKSJdLCJzb3VyY2VSb290IjoiIn0=