// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers = (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) =>{
    return drivers.slice(0,2)

}
const returnLastTwoDrivers = ( drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'])=> {
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
    return (input)=>{
        return fare * input
    }
}

const fareDoubler = (fare) => {
    return fare * 2;
}
const fareTripler = (fare) => {
    return fare * 3;
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const selectDifferentDrivers = (arrayOfDrivers, func3) => {
    return func3(arrayOfDrivers);
}