/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category already exists in the map, add the price to the total
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      // Otherwise, create a new entry in the map
      categoryMap[category] = price;
    }
  });

  // Convert the map to an array of objects
  const result = Object.keys(categoryMap).map(category => ({
    category,
    totalSpent: categoryMap[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
