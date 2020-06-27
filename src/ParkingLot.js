class ParkingLot {
  constructor(capasity=0) {
    this.capasity = capasity;
    this.carList =[];
  }

  _isFull(){
    return this.capasity === this.carList.length;
  }

  park(car){
    if(this._isFull()){
      throw new Error('parking lot is full');
    }
    this.carList.push(car);
  }

  unpark(car){
    const filter = this.carList.filter(listcar => listcar != car);
    if(filter.length== this.carList.length){
      throw new Error('your target car is null');
    }
    this.carList = filter;
    console.log("card remove been", car);
    for(const i=0; i<filter.length; i++){
       console.log(this.carList[i]);
    }
  }
}

export default ParkingLot;