import { createOrderList } from "../Utilities/create-order-list.utility.js";

// order-list.data.js
class orderListData {
  constructor() {
    this.data = createOrderList();
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

export default new orderListData();
