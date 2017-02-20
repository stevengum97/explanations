function knapsacker(weight, arr) {
    if(typeof weight != "number" || !Array.isArray(arr)) {
        // Verify inputs
        return false;
    }
    if(weight == 0 || arr.length == 0) {
        // Since objects with a weight exceeding the current threshold are removed
        // The case for arr.length == 0 could be placed at the end of the while loop
        // Doing this would prevent another unecessary recursive call.
        return arr;
    }

    let temp = 0;
    let i = 0;

    while(i < arr.length) {
        if(arr[i]["value"] > arr[temp].value && arr[i]["weight"] < weight) {
            temp = i;
        }
        if(arr[i]["weight"] > weight) {
            arr.splice(i,1);
            i--;
        }
        i++;
    }
    // Array after manipulation and index of element to be removed.
    // console.log("\ncurrent array:\n",arr);
    // console.log("current temp:",temp);

    let currWeight = arr[temp] ? arr[temp]["weight"] : null;

    // Weight of object removed, and weight threshold remaining.
    // console.log("The weight of the object being removed from array:",currWeight);
    // console.log("The remaining weight allowable after removal:", weight-currWeight);

    return arr.splice(temp,1).concat(knapsacker( weight-currWeight, arr));
    // Splice works on empty arrays, it returns...... []! Who knew?
}

let max_weight = 20;
let bundle = [
    {'name': 'DarkGoldenRod', 'weight': 2, 'value': 17},
    {'name': 'Linen', 'weight': 9, 'value': 19},
    {'name': 'MediumBlue', 'weight': 2, 'value': 5},
    {'name': 'RebeccaPurple', 'weight': 8, 'value': 12},
    {'name': 'Teal', 'weight': 5, 'value': 1}
]

let firstResults = knapsacker(max_weight, bundle)
console.log("The maximized knapsack:", firstResults);
console.log("This is the total weight of the contents:", sumWeight(firstResults));
console.log("This is the total value of the contents:", sumValue(firstResults));



let bigMax_weight = 198;
let bigBundle = [
    {'value': 379, 'name': 'AliceBlue', 'weight': 33},
    {'value': 359, 'name': 'Aquamarine', 'weight': 51},
    {'value': 63, 'name': 'Azure', 'weight': 97},
    {'value': 7, 'name': 'Bisque', 'weight': 80},
    {'value': 194, 'name': 'BlanchedAlmond', 'weight': 88},
    {'value': 34, 'name': 'BlueViolet', 'weight': 92},
    {'value': 399, 'name': 'Blueberry', 'weight': 97},
    {'value': 36, 'name': 'BostonUniversityRed', 'weight': 119},
    {'value': 371, 'name': 'Brown', 'weight': 149},
    {'value': 83, 'name': 'BurlyWood', 'weight': 179},
    {'value': 359, 'name': 'Chartreuse', 'weight': 106},
    {'value': 363, 'name': 'Cherry', 'weight': 185},
    {'value': 45, 'name': 'Coral', 'weight': 181},
    {'value': 5, 'name': 'CornflowerBlue', 'weight': 66},
    {'value': 224, 'name': 'Crimson', 'weight': 142},
    {'value': 157, 'name': 'DarkCyan', 'weight': 40},
    {'value': 221, 'name': 'DarkGoldenRod', 'weight': 111},
    {'value': 99, 'name': 'DarkGray', 'weight': 152},
    {'value': 232, 'name': 'DarkGreen', 'weight': 133},
    {'value': 321, 'name': 'DarkKhaki', 'weight': 41},
    {'value': 253, 'name': 'DarkMagenta', 'weight': 141},
    {'value': 13, 'name': 'DarkOliveGreen', 'weight': 42},
    {'value': 250, 'name': 'DarkRed', 'weight': 124},
    {'value': 255, 'name': 'DarkSalmon', 'weight': 120},
    {'value': 331, 'name': 'DarkSlateBlue', 'weight': 15},
    {'value': 9, 'name': 'DarkViolet', 'weight': 163},
    {'value': 108, 'name': 'DeepSkyBlue', 'weight': 107},
    {'value': 73, 'name': 'DimGray', 'weight': 21},
    {'value': 362, 'name': 'DodgerBlue', 'weight': 174},
    {'value': 125, 'name': 'FloralWhite', 'weight': 101},
    {'value': 88, 'name': 'ForestGreen', 'weight': 26},
    {'value': 210, 'name': 'Fuchsia', 'weight': 68},
    {'value': 109, 'name': 'Gainsboro', 'weight': 74},
    {'value': 280, 'name': 'GhostWhite', 'weight': 123},
    {'value': 347, 'name': 'Gold', 'weight': 175},
    {'value': 58, 'name': 'GoldenRod', 'weight': 116},
    {'value': 105, 'name': 'Gray', 'weight': 37},
    {'value': 4, 'name': 'HoneyDew', 'weight': 61},
    {'value': 72, 'name': 'Ivory', 'weight': 5},
    {'value': 239, 'name': 'Khaki', 'weight': 144},
    {'value': 318, 'name': 'Kiwi', 'weight': 51},
    {'value': 124, 'name': 'Lavender', 'weight': 128},
    {'value': 240, 'name': 'LawnGreen', 'weight': 157},
    {'value': 399, 'name': 'Lemon', 'weight': 79},
    {'value': 381, 'name': 'LightBlue', 'weight': 151},
    {'value': 134, 'name': 'LightCoral', 'weight': 68},
    {'value': 1, 'name': 'LightGoldenRodYellow', 'weight': 69},
    {'value': 91, 'name': 'LightPink', 'weight': 111},
    {'value': 56, 'name': 'LightSeaGreen', 'weight': 168},
    {'value': 367, 'name': 'LightSkyBlue', 'weight': 64},
    {'value': 217, 'name': 'LightSlateGray', 'weight': 1},
    {'value': 186, 'name': 'Lime', 'weight': 132},
    {'value': 321, 'name': 'LimeGreen', 'weight': 97},
    {'value': 93, 'name': 'Linen', 'weight': 30},
    {'value': 100, 'name': 'Maroon', 'weight': 179},
    {'value': 129, 'name': 'MediumAquaMarine', 'weight': 60},
    {'value': 28, 'name': 'MediumPurple', 'weight': 53},
    {'value': 115, 'name': 'MediumSeaGreen', 'weight': 155},
    {'value': 317, 'name': 'MediumSlateBlue', 'weight': 77},
    {'value': 28, 'name': 'MediumTurquoise', 'weight': 79},
    {'value': 113, 'name': 'MediumVioletRed', 'weight': 164},
    {'value': 398, 'name': 'MidnightBlue', 'weight': 118},
    {'value': 150, 'name': 'Moccasin', 'weight': 90},
    {'value': 181, 'name': 'NavajoWhite', 'weight': 88},
    {'value': 289, 'name': 'OliveDrab', 'weight': 187},
    {'value': 171, 'name': 'Orange', 'weight': 183},
    {'value': 89, 'name': 'OrangeRed', 'weight': 151},
    {'value': 162, 'name': 'PaleVioletRed', 'weight': 51},
    {'value': 103, 'name': 'PapayaWhip', 'weight': 124},
    {'value': 371, 'name': 'PeachPuff', 'weight': 11},
    {'value': 232, 'name': 'Pepper', 'weight': 159},
    {'value': 87, 'name': 'Peru', 'weight': 91},
    {'value': 170, 'name': 'Pink', 'weight': 147},
    {'value': 394, 'name': 'Plum', 'weight': 94},
    {'value': 43, 'name': 'PowderBlue', 'weight': 4},
    {'value': 234, 'name': 'Puce', 'weight': 128},
    {'value': 297, 'name': 'Pumpkin', 'weight': 186},
    {'value': 340, 'name': 'Purple', 'weight': 32},
    {'value': 224, 'name': 'RebeccaPurple', 'weight': 155},
    {'value': 355, 'name': 'Red', 'weight': 36},
    {'value': 224, 'name': 'RosyBrown', 'weight': 61},
    {'value': 325, 'name': 'RoyalBlue', 'weight': 58},
    {'value': 222, 'name': 'SaddleBrown', 'weight': 2},
    {'value': 343, 'name': 'Salt', 'weight': 121},
    {'value': 209, 'name': 'SandyBrown', 'weight': 129},
    {'value': 204, 'name': 'SeaShell', 'weight': 4},
    {'value': 56, 'name': 'Sienna', 'weight': 121},
    {'value': 193, 'name': 'Silver', 'weight': 136},
    {'value': 202, 'name': 'SkyBlue', 'weight': 111},
    {'value': 216, 'name': 'SlateBlue', 'weight': 151},
    {'value': 212, 'name': 'Snow', 'weight': 26},
    {'value': 296, 'name': 'SpringGreen', 'weight': 34},
    {'value': 200, 'name': 'SteelBlue', 'weight': 86},
    {'value': 395, 'name': 'Teal', 'weight': 142},
    {'value': 238, 'name': 'Thistle', 'weight': 100},
    {'value': 149, 'name': 'Tomato', 'weight': 116},
    {'value': 324, 'name': 'Turquoise', 'weight': 98},
    {'value': 53, 'name': 'Violet', 'weight': 157},
    {'value': 330, 'name': 'Wheat', 'weight': 31},
    {'value': 256, 'name': 'White', 'weight': 164},
]

let bigResults = knapsacker(bigMax_weight, bigBundle);

console.log("~~~");
console.log("This is the total weight of the contents:", sumWeight(bigResults));
console.log("This is the total value of the contents:", sumValue(bigResults));


// Helper functions:

function sumWeight (arr) {
    let weights = 0;
    for(let i = 0; i < arr.length; i++) {
        weights += arr[i]["weight"];
    }
    return weights;
}
function sumValue (arr) {
    let values = 0;
    for(let i = 0; i < arr.length; i++) {
        values += arr[i]["value"];
    }
    return values;
}

// More datasets:

// let max_weight = 8;
// let bundle = [
//     {'name': 'Blue', 'weight': 2, 'value': 11},
//     {'name': 'DarkCyan', 'weight': 2, 'value': 6},
//     {'name': 'DarkKhaki', 'weight': 5, 'value': 16},
//     {'name': 'HotPink', 'weight': 6, 'value': 19},
//     {'name': 'PaleTurquoise', 'weight': 6, 'value': 14},
// ]
//
// let max_weight = 44
// let bundle = [
//     {'name': 'BurlyWood', 'weight': 20, 'value': 21},
//     {'name': 'DarkSlateBlue', 'weight': 8, 'value': 27},
//     {'name': 'DarkViolet', 'weight': 14, 'value': 22},
//     {'name': 'ForestGreen', 'weight': 14, 'value': 11},
//     {'name': 'Gainsboro', 'weight': 16, 'value': 33},
//     {'name': 'IndianRed', 'weight': 10, 'value': 25},
//     {'name': 'Pepper', 'weight': 6, 'value': 14},
//     {'name': 'RebeccaPurple', 'weight': 10, 'value': 11},
//     {'name': 'SeaGreen', 'weight': 2, 'value': 23},
//     {'name': 'Thistle', 'weight': 5, 'value': 38},
// ]
//
// let max_weight = 20
// let bundle = [
//     {'name': 'Blade', 'weight': 12, 'value': 31},
//     {'name': 'Blueberry', 'weight': 19, 'value': 36},
//     {'name': 'DarkOrchid', 'weight': 12, 'value': 22},
//     {'name': 'Fuchsia', 'weight': 3, 'value': 9},
//     {'name': 'LavenderBlush', 'weight': 5, 'value': 13},
//     {'name': 'LightCoral', 'weight': 11, 'value': 40},
//     {'name': 'Lime', 'weight': 13, 'value': 35},
//     {'name': 'MintCream', 'weight': 6, 'value': 26},
//     {'name': 'RoyalBlue', 'weight': 12, 'value': 5},
//     {'name': 'SkyBlue', 'weight': 4, 'value': 28},
// ]
//
// let max_weight = 148
// let bundle = [
//     {'name': 'Aqua', 'weight': 4, 'value': 47},
//     {'name': 'BlanchedAlmond', 'weight': 1, 'value': 4},
//     {'name': 'Brown', 'weight': 32, 'value': 38},
//     {'name': 'Cyan', 'weight': 3, 'value': 10},
//     {'name': 'DarkGoldenRod', 'weight': 21, 'value': 9},
//     {'name': 'ForestGreen', 'weight': 17, 'value': 43},
//     {'name': 'Gray', 'weight': 12, 'value': 28},
//     {'name': 'HotPink', 'weight': 26, 'value': 4},
//     {'name': 'Khaki', 'weight': 10, 'value': 15},
//     {'name': 'Lemon', 'weight': 30, 'value': 16},
//     {'name': 'LightBlue', 'weight': 40, 'value': 79},
//     {'name': 'Maroon', 'weight': 3, 'value': 2},
//     {'name': 'Orange', 'weight': 36, 'value': 76},
//     {'name': 'PaleVioletRed', 'weight': 23, 'value': 48},
//     {'name': 'PapayaWhip', 'weight': 19, 'value': 65},
//     {'name': 'Plum', 'weight': 29, 'value': 36},
//     {'name': 'RosyBrown', 'weight': 1, 'value': 74},
//     {'name': 'Salmon', 'weight': 33, 'value': 70},
//     {'name': 'Silver', 'weight': 37, 'value': 36},
//     {'name': 'WhiteSmoke', 'weight': 16, 'value': 12},
// ]
