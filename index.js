// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(x) {
    const y = [x[0], x[1]];
    return y;
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(x) {
    // This is another way to take data from one array and adding it to a variable
    const y = drivers.slice(2);
    return y;
}
returnLastTwoDrivers(drivers);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
selectingDrivers[0](drivers);
selectingDrivers[1](drivers);

function createFareMultiplier(z) {
    console.log(function () { return z**2;})
    return function () { return z**2;};
}
const fareMultiplier = createFareMultiplier(2);

fareMultiplier
// console.log(fareMultiplier)

const fareQuintupler = createFareMultiplier(5);

// DOUBLE FARE
const fareDoubler = function(y) {
    let h = createFareMultiplier(y)();
    let d2 = Math.sqrt(h) * 2;
    // console.log(`${d2} This is the line of h`);
    return d2;
}

fareDoubler;
fareDoubler(10);
console.log(fareDoubler(10));


// TRIPLE FARE
const fareTripler = function(i) {
    let h3 = createFareMultiplier(i)();
    let t3 = Math.sqrt(h3) * 3;
    // console.log(`${d2} This is the line of h3`);
    return t3;
}

fareTripler;
fareTripler(12);
console.log(fareTripler(12));


function selectDifferentDrivers(arrayOfDrivers, fn) {
    let fnDrivers = fn(arrayOfDrivers);
    // console.log(fnDrivers);
    return fnDrivers;
};

selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);