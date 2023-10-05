// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}
const  firstTwoDrivers = returnFirstTwoDrivers(drivers)
console.log(firstTwoDrivers)

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
const lastTwoDrivers = returnLastTwoDrivers(drivers)
console.log(lastTwoDrivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(fare) {
  return function(fareMultiplier) {
    return fare * fareMultiplier;
  };
}


const fareDoubler = function createFareMultiplier( fare ){
  return fare * 2;
};

const fareTripler = function createFareMultiplier( fare ){
  return fare * 3;
};




function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers);
}






 
