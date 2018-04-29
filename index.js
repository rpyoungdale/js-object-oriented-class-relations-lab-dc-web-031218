let store = ({drivers: [], passengers: [], trips: []});

let driverId = 0;
class Driver { //has many trips, and has many passengers through trips.
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id
    })
  }

  // passengers() {
  //   return store.passengers.filter(passenger => {
  //     return passenger.driverId === this.id;
  //   })
  // }
};

let passengerId = 0;
class Passenger { //has many trips, and has many drivers through trips.
  constructor (name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  };

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  };

  // drivers() {
  //   return store.trips.filter(trip => {
  //     return trip.driverId === this.id;
  //   });
  // };
};

let tripId = 0;
class Trip { //belongs to a driver and belongs to a passenger.
  constructor (name, driver, passenger) {
    this.name = name;
    this.id = ++tripId;
    if(driver){
      this.driverId = driver.id;
    };
    if(passenger){
      this.passengerId = passenger.id;
    };
    store.trips.push(this);
  };

  setDriver(driver){
    this.driverId = driver.id;
  };

  setPassenger(passenger){
    this.passengerId = passenger.id;
  };

  driver() {
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    })
  }

  passenger() {
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    })
  }
};
