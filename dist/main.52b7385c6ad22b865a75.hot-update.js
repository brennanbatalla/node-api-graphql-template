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
    User: {
        pets: function (parent, args) {
            console.log("QUERY PETS");
            return Pet_model_1.default.findAll({ where: { ownerId: parent.id } });
        },
    },
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
/******/ 	__webpack_require__.h = () => ("187914d1b72cd947b9ea")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlLWFwaS10ZW1wbGF0ZS8uL3NyYy9yZXNvbHZlcnMvUGV0LnJlc29sdmVyLnRzIiwid2VicGFjazovL25vZGUtYXBpLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsa0NBQWtDLG1CQUFPLENBQUMsc0VBQTZCO0FBQ3ZFLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUyxxQkFBcUIsRUFBRTtBQUNoRixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTLHdCQUF3QixFQUFFO0FBQ25GLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0RBQWdELFNBQVMsd0JBQXdCLEVBQUU7QUFDbkY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O1VDN0JBLHNEIiwiZmlsZSI6Im1haW4uNTJiNzM4NWM2YWQyMmI4NjVhNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBldF9tb2RlbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRhYmFzZS9tb2RlbC9QZXQubW9kZWxcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIFVzZXI6IHtcbiAgICAgICAgcGV0czogZnVuY3Rpb24gKHBhcmVudCwgYXJncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRVUVSWSBQRVRTXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFBldF9tb2RlbF8xLmRlZmF1bHQuZmluZEFsbCh7IHdoZXJlOiB7IG93bmVySWQ6IHBhcmVudC5pZCB9IH0pO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgUXVlcnk6IHtcbiAgICAgICAgcGV0czogZnVuY3Rpb24gKHBhcmVudCwgYXJncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRVUVSWSBQRVRTXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFBldF9tb2RlbF8xLmRlZmF1bHQuZmluZEFsbCh7IHdoZXJlOiB7IG93bmVySWQ6IGFyZ3Mub3duZXJJZCB9IH0pO1xuICAgICAgICB9LFxuICAgICAgICBwZXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MsIGNvbnRleHQsIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUVVFUlkgUEVUXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFBldF9tb2RlbF8xLmRlZmF1bHQuZmluZE9uZSh7IHdoZXJlOiB7IG93bmVySWQ6IGFyZ3Mub3duZXJJZCB9IH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgICBwZXQ6IGZ1bmN0aW9uIChwYXJlbnQsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBwZXQgPSB7IG5hbWU6IGFyZ3MubmFtZSwgb3duZXJJZDogYXJncy5vd25lcklkLCB0eXBlOiBhcmdzLnR5cGUgfTtcbiAgICAgICAgICAgIHJldHVybiBQZXRfbW9kZWxfMS5kZWZhdWx0LmNyZWF0ZShwZXQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4NzkxNGQxYjcyY2Q5NDdiOWVhXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==