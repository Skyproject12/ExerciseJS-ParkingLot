"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParkingLot = /*#__PURE__*/function () {
  function ParkingLot() {
    var capasity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, ParkingLot);

    this.capasity = capasity;
    this.carList = [];
  }

  _createClass(ParkingLot, [{
    key: "_isFull",
    value: function _isFull() {
      return this.capasity === this.carList.length;
    }
  }, {
    key: "park",
    value: function park(car) {
      if (this._isFull()) {
        throw new Error('parking lot is full');
      }

      this.carList.push(car);
    }
  }, {
    key: "unpark",
    value: function unpark(car) {
      var filter = this.carList.filter(function (listcar) {
        return listcar != car;
      });

      if (filter.length == this.carList.length) {
        throw new Error('your target car is null');
      }

      this.carList = filter;
      console.log("card remove been", car);

      for (var i = 0; i < filter.length; _readOnlyError("i"), i++) {
        console.log(this.carList[i]);
      }
    }
  }]);

  return ParkingLot;
}();

var _default = ParkingLot;
exports["default"] = _default;