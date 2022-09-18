
// module.exports = getDate; // This is if you only have one function to export in the module

// module.exports.getDate = getDate; // This is for export one func among multiple functions
// function getDate() {
//     let today = new Date();
//     let options = {
//         weekday: "long",
//         day: "numeric", 
//         month: "long"
//     }
//     return today.toLocaleDateString("en-US", options);
// }

exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric", 
        month: "long"
    }
    return today.toLocaleDateString("en-US", options);
}


// module.exports.getDay = getDay; // This is for export one func among multiple functions
// function getDay() {
//     let today = new Date();
//     let options = {
//         weekday: "long",
//     }
//     return today.toLocaleDateString("en-US", options);
// }

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", options);
}