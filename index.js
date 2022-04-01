// code your solution here

// testing data
// const broncos = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//   ];

//   const packers = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "L"},
//     {year: "2016", result: "N/A"},
//     {year: "2015", result: "N/A"}
//   ];

function lookForAWin(object) {
    return object.result === 'W';
}

// Takes an array of objects with the record of a specific team and looks for the first year they won the SB, if any.
// Receives
//      - data: Team's record.
// Return
//      Year they won the SB or undefined if they didn't.
function superbowlWin(data) {
    console.log(data);
    const record = data.find(lookForAWin);
    if (typeof record === 'undefined') {
        // This is necessary because when it is undefined we can't access the property year
        return record;
    }
    else return record.year;
}

// tests
// console.log('Packers record');
// console.log(superbowlWin(packers));
// console.log('---------------\n');

// console.log('Broncos record');
// console.log(superbowlWin(broncos));
// console.log('---------------\n');
