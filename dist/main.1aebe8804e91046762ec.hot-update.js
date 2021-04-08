exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/resolvers/Pet.resolver.ts":
/*!***************************************!*\
  !*** ./src/resolvers/Pet.resolver.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Pet_model_1 = __importDefault(__webpack_require__(/*! ../database/model/Pet.model */ "./src/database/model/Pet.model.ts"));
exports.default = {
    Query: {
        pets: function (parent, args) { return Pet_model_1.default.findAll({ where: { ownerId: args.ownerId } }); },
        pet: function (parent, args, context, info) {
            console.log("QUERY USER");
            return Pet_model_1.default.findOne({ where: { ownerId: args.ownerId } });
        }
    },
    Mutation: {
        pet: function (parent, args) {
            var pet = { name: args.name, ownerId: args.ownerId, type: args.type };
            return Pet_model_1.default.create(pet);
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
var User_1 = __importDefault(__webpack_require__(/*! ./User */ "./src/resolvers/User.ts"));
var Pet_resolver_1 = __importDefault(__webpack_require__(/*! ./Pet.resolver */ "./src/resolvers/Pet.resolver.ts"));
exports.default = lodash_1.merge(User_1.default, Pet_resolver_1.default);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dec20401de95b80679e6")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvUGV0LnJlc29sdmVyLnRzIiwid2VicGFjazovL25vZGUtYXBpLXRlbXBsYXRlLy4vc3JjL3Jlc29sdmVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGtDQUFrQyxtQkFBTyxDQUFDLHNFQUE2QjtBQUN2RSxlQUFlO0FBQ2Y7QUFDQSx1Q0FBdUMscUNBQXFDLFNBQVMsd0JBQXdCLEVBQUUsRUFBRSxFQUFFO0FBQ25IO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUyx3QkFBd0IsRUFBRTtBQUNuRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0IsNkJBQTZCLG1CQUFPLENBQUMsdUNBQVE7QUFDN0MscUNBQXFDLG1CQUFPLENBQUMsdURBQWdCO0FBQzdELGVBQWU7Ozs7Ozs7Ozs7OztVQ1JmLHNEIiwiZmlsZSI6Im1haW4uMWFlYmU4ODA0ZTkxMDQ2NzYyZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBldF9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9tb2RlbC9QZXQubW9kZWxcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIHBldHM6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MpIHsgcmV0dXJuIFBldF9tb2RlbF8xLmRlZmF1bHQuZmluZEFsbCh7IHdoZXJlOiB7IG93bmVySWQ6IGFyZ3Mub3duZXJJZCB9IH0pOyB9LFxuICAgICAgICBwZXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFUlkgVVNFUlwiKTtcbiAgICAgICAgICAgIHJldHVybiBQZXRfbW9kZWxfMS5kZWZhdWx0LmZpbmRPbmUoeyB3aGVyZTogeyBvd25lcklkOiBhcmdzLm93bmVySWQgfSB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgcGV0OiBmdW5jdGlvbiAocGFyZW50LCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgcGV0ID0geyBuYW1lOiBhcmdzLm5hbWUsIG93bmVySWQ6IGFyZ3Mub3duZXJJZCwgdHlwZTogYXJncy50eXBlIH07XG4gICAgICAgICAgICByZXR1cm4gUGV0X21vZGVsXzEuZGVmYXVsdC5jcmVhdGUocGV0KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsb2Rhc2hfMSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG52YXIgVXNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1VzZXJcIikpO1xudmFyIFBldF9yZXNvbHZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BldC5yZXNvbHZlclwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsb2Rhc2hfMS5tZXJnZShVc2VyXzEuZGVmYXVsdCwgUGV0X3Jlc29sdmVyXzEuZGVmYXVsdCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZWMyMDQwMWRlOTViODA2NzllNlwiKSJdLCJzb3VyY2VSb290IjoiIn0=