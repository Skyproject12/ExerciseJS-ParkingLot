import ParkingLot from './ParkingLot';

// create slot
const parkingLot = new ParkingLot(14);
const car = 'DK 12345RR';
const car1 = 'DK 12345RR';
const car2 = 'DK DDDDDDD';
try{
  parkingLot.park(car);
  parkingLot.park(car1);
  parkingLot.unpark(car2);
} catch(error){
  console.log(error.message);
}

