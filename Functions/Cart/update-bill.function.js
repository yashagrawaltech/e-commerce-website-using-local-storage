import { calculateTotalBill } from "../../Utilities/calculate-total-bill.utility.js";

export function updateBill() {
  const totalBill = document.querySelector(".total-bill");
  totalBill.textContent = `Total Bill: ${calculateTotalBill()}`;
}
