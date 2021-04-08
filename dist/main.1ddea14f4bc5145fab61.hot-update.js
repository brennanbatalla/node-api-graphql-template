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
        pets: function (parent, args) {
            console.log("QUERY PETS");
            return Pet_model_1.default.findAll({ where: { ownerId: args.ownerId } });
        },
        pet: function (parent, args, context, info) {
            console.log("QUERY PET");
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


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f8ad7e454a615ed10a8b")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvUGV0LnJlc29sdmVyLnRzIiwid2VicGFjazovL25vZGUtYXBpLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsa0NBQWtDLG1CQUFPLENBQUMsc0VBQTZCO0FBQ3ZFLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUyx3QkFBd0IsRUFBRTtBQUNuRixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdEQUFnRCxTQUFTLHdCQUF3QixFQUFFO0FBQ25GO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztVQ3ZCQSxzRCIsImZpbGUiOiJtYWluLjFkZGVhMTRmNGJjNTE0NWZhYjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQZXRfbW9kZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vZGF0YWJhc2UvbW9kZWwvUGV0Lm1vZGVsXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICBwZXRzOiBmdW5jdGlvbiAocGFyZW50LCBhcmdzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlFVRVJZIFBFVFNcIik7XG4gICAgICAgICAgICByZXR1cm4gUGV0X21vZGVsXzEuZGVmYXVsdC5maW5kQWxsKHsgd2hlcmU6IHsgb3duZXJJZDogYXJncy5vd25lcklkIH0gfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHBldDogZnVuY3Rpb24gKHBhcmVudCwgYXJncywgY29udGV4dCwgaW5mbykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRVUVSWSBQRVRcIik7XG4gICAgICAgICAgICByZXR1cm4gUGV0X21vZGVsXzEuZGVmYXVsdC5maW5kT25lKHsgd2hlcmU6IHsgb3duZXJJZDogYXJncy5vd25lcklkIH0gfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIHBldDogZnVuY3Rpb24gKHBhcmVudCwgYXJncykge1xuICAgICAgICAgICAgdmFyIHBldCA9IHsgbmFtZTogYXJncy5uYW1lLCBvd25lcklkOiBhcmdzLm93bmVySWQsIHR5cGU6IGFyZ3MudHlwZSB9O1xuICAgICAgICAgICAgcmV0dXJuIFBldF9tb2RlbF8xLmRlZmF1bHQuY3JlYXRlKHBldCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjhhZDdlNDU0YTYxNWVkMTBhOGJcIikiXSwic291cmNlUm9vdCI6IiJ9