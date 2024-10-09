// local-cart.data.js
class localCartData {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("local-cart")) || [];
  }

  getData() {
    return this.data;
  }

  updateData(newData) {
    this.data = newData;
    localStorage.setItem("local-cart", JSON.stringify(newData));
  }
}

export default new localCartData();
