class ParkingSpot {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.isOccupied = false;
  }

  park() {
    this.isOccupied = true;
  }

  leave() {
    this.isOccupied = false;
  }
}

class ParkingFloor {
  constructor() {
    this.spots = [];
  }

  addSpot(spot) {
    this.spots.push(spot);
  }

  findAvailableSpot(type) {
    return this.spots.find(
      spot => spot.type === type && !spot.isOccupied
    );
  }
}

class ParkingLot {
  constructor() {
    this.floors = [];
  }

  parkVehicle(type) {
    for (let floor of this.floors) {
      const spot = floor.findAvailableSpot(type);
      if (spot) {
        spot.park();
        return `Parked at spot ${spot.id}`;
      }
    }
    return "No spots available";
  }
}

