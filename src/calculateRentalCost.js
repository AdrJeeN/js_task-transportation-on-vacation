/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalPeriod = days;
  const rentalCost = rentalPeriod * 40;

  if (rentalPeriod >= 7) {
    return rentalCost - 50;
  } else if (rentalPeriod >= 3) {
    return rentalCost - 20;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
