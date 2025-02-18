// 04-names.js code //
const names = require("./04-names.js");
console.log('04-names.js, value of apples:', names.apples)
console.log()

// 05-utils.js code //
const fruits = require("./05-utils.js");
console.log('05-utils.js:', fruits);
fruits(names.apples);
fruits(names.oranges);
fruits(names.lemons);


// 06-alternative-flavor code //
const alternativeFlavor = require('./06-alternative-flavor');
console.log('06-alternative-flavor.js, List of Fruits:', alternativeFlavor.fruits);
console.log('06-alternative-flavor.js, Smoothie Recipe:', alternativeFlavor.smoothie());
console.log('06-alternative-flavor.js, Smoothie Slogan:', alternativeFlavor.slogan);

// 07-mind-grenade code //
require('./07-mind-grenade');

// 08-os-module.js //
// note: did not include more due to privacy concerns//
const os = require("os");
console.log('08-os-module.js, Type:', os.type());
require('./08-os-module');

// 09-path-module //
require('./09-path-module.js');







