// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//Retuns the First Two Drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}
const  firstTwoDrivers = returnFirstTwoDrivers(drivers)
console.log(firstTwoDrivers)


//Returns the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
const lastTwoDrivers = returnLastTwoDrivers(drivers)
console.log(lastTwoDrivers)

//Arrat containing first and last two drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//fare multiplayer
const createFareMultiplier = function(fare) {
  return function(fareMultiplier) {
    return fare * fareMultiplier;
  };
}

//Doubles the fare
const fareDoubler = function createFareMultiplier( fare ){
  return fare * 2;
};

// Triplicates the fare
const fareTripler = function createFareMultiplier( fare ){
  return fare * 3;
};



//High order function---It takes argument  selectingDrivers places it in drivers array to find the drivers
function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers);
}






 
