import localCartData from "./local-cart.data.js";

// live-cart.data.js
class liveCartData {
  constructor() {
    this.data = Array.from(localCartData.getData());
  }

  getData() {
    return this.data;
  }

  updateData(newData) {
    this.data = newData;
  }

  push(data) {
    this.data.push(data);
  }

  remove(index) {
    this.data.splice(index, 1);
  }
}

export default new liveCartData();
