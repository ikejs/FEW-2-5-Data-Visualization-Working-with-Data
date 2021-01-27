// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.

function getTotalPassengers(data) {
	return data.length
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	return data.filter(passenger => passenger.fields.survived === "Yes").length
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	return data.filter(passenger => passenger.fields.survived === "No").length
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Fins all of the 
// passengers whose pclass matches and return the count. 
// Return a number

function countPassengersInClass(data, pclass) {
	return data.filter(passenger => passenger.fields.pclass === pclass).length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

function getSurvivorCountForClass(data, pclass) {
	return data.filter(passenger => {
		if ((passenger.fields.pclass === pclass) && (passenger.fields.survived === "Yes")) {
			return passenger
		}
	}).length;
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

function getCasualityCountForClass(data, pclass) {
	return data.filter(passenger => {
		if ((passenger.fields.pclass === pclass) && (passenger.fields.survived === "No")) {
			return passenger
		}
	}).length;
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

function getMinAge(data) {
	const ages = [];
	// collect all available ages
	data.map(passenger => {
		if (passenger.fields.age) ages.push(passenger.fields.age);
	})
	// get min in ages array
	Array.min = (ages) => Math.min.apply(Math, ages);
	return Array.min(ages);
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

function getMaxAge(data) {
	const ages = [];
	// collect all available ages
	data.map(passenger => {
		if (passenger.fields.age) ages.push(passenger.fields.age);
	})
	// get max in ages array
	Array.max = (ages) => Math.max.apply(Math, ages);
	return Array.max(ages);
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

function getEmbarkedCount(data, embarked) {
	return data.filter(passenger => passenger.fields.embarked === embarked).length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

function getMinFare(data) {
	const fares = [];
	// collect all available fares
	data.map(passenger => fares.push(passenger.fields.fare));
	// get min in fares array
	Array.min = (fares) => Math.min.apply(Math, fares);
	return Array.min(fares);
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

function getMaxFare(data) {
	const fares = [];
	// collect all available fares
	data.map(passenger => fares.push(passenger.fields.fare));
	// get max in fares array
	Array.max = (fares) => Math.max.apply(Math, fares);
	return Array.max(fares);
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

function getPassengersByGender(data, gender) {
	return data.filter(passenger => passenger.fields.sex === gender).length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

function getSurvivorsByGender(data, gender) {
	return data.filter(passenger => (passenger.fields.sex === gender) && (passenger.fields.survived === "Yes")).length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

function getCasualitiesByGender(data, gender) {
	return data.filter(passenger => (passenger.fields.sex === gender) && (passenger.fields.survived === "No")).length
}

// 15 ---------------------------------------------------------------
// Return the number of passengers who survived by passenger class.

function getSurvivorsByPClass(data, pclass) {
	return data.filter(passenger => (passenger.fields.pclass === pclass) && (passenger.fields.survived === "Yes")).length
}

// 16 ---------------------------------------------------------------
// Return the number of passengers who survived by passenger class.

function getCasualitiesByPClass(data, pclass) {
	return data.filter(passenger => (passenger.fields.pclass === pclass) && (passenger.fields.survived === "No")).length
}

// 17 ---------------------------------------------------------------
// Write a function that returns an array of unique values for any
// property in the data. For example If we needed to find number 
// of passenger classes from data this function should return:
// [1,2,3]. If you wanted to find the number of embarkations the 
// function should return: ['S', 'C', 'Q']

function getUniqueValues(data, property) {
	const values = [];

	data.forEach(passenger => {
		values.push(passenger["fields"][property])
	});
	
	return Array.from(new Set(values));
}

// 18 ---------------------------------------------------------------
// Return all of the objects in the data where a given field is 
// not undefined. If a field is undefined it means that field is 
// missing from the data. 

function getAllOfField(data, field) {
	return 0
}

// 19 --------------------------------------------------------------
// Return the total of all fares paid. 

function getTotalFare(data) {
	const fares = [];
	data.forEach(passenger => {
		fares.push(passenger.fields.fare);
	});
	return fares.reduce((a, b) => a + b, 0);
}

// 20 --------------------------------------------------------------
// Return the average fare paid.

function getAverageFare(data) {
	const fares = [];
	data.forEach(passenger => {
		fares.push(passenger.fields.fare);
	});
	return fares.sort((a, b) => a - b).reduce((a, b) => a + b, 0) / fares.length
}

// 21 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. 

function getMedianFare(data) {
	const fares = [];
	data.forEach(passenger => {
		fares.push(passenger.fields.fare);
	});
	const mid = Math.floor(fares.length / 2);
  const nums = [...fares].sort((a, b) => a - b);
  return fares.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

// 22 --------------------------------------------------------------
// Return the average age of all passengers. 

function getAverageAge(data) {
	const ages = [];
	data.filter(passenger => passenger.fields.age).forEach(passenger => {
		ages.push(passenger.fields.age);
	});
	return ages.sort((a, b) => a - b).reduce((a, b) => a + b, 0) / ages.length
}

// 23 --------------------------------------------------------------
// Return the median age from passengers. 

function getMedianAge(data) {
	const ages = [];
	data.filter(passenger=>passenger.fields.age).forEach(passenger => {
		ages.push(passenger.fields.age);
	});
	const mid = Math.floor(ages.length / 2);
  const nums = [...ages].sort((a, b) => a - b);
  return ages.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

// 24 --------------------------------------------------------------
// 

function getAverageAgeByGender(data, gender) {
	const passengersByAge = data.filter(passenger => ((passenger.fields.sex === gender) && (passenger.fields.age)));
	const averageAge = passengersByAge.reduce((total, next) => total + next.fields.age, 0) / passengersByAge.length;

	return averageAge;
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
module.exports.getUniqueValues = getUniqueValues
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
module.exports.getSurvivorsByPClass = getSurvivorsByPClass
module.exports.getCasualitiesByPClass = getCasualitiesByPClass
module.exports.getTotalFare = getTotalFare
module.exports.getAverageFare = getAverageFare
module.exports.getMedianFare = getMedianFare
module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender