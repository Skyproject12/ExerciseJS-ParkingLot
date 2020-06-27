"use strict";

var _ParkingLot = _interopRequireDefault(require("./ParkingLot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// create slot
var parkingLot = new _ParkingLot["default"](14);
var car = 'DK 12345RR';
var car1 = 'DK 12345RR';
var car2 = 'DK DDDDDDD';

try {
  parkingLot.park(car);
  parkingLot.park(car1);
  parkingLot.unpark(car2);
} catch (error) {
  console.log(error.message);
}