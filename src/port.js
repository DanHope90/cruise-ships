class Port {
  constructor(name) {
    this.ports = name;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  removeShip() {
    this.ships.pop();
  }
}

module.exports = Port;
