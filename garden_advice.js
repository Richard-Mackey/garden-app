let season = prompt("Enter the season: spring, summer, autumn or winter");
let lowerCaseSeason = season.toLowerCase();
let plantType = prompt("Enter the plant type: flower, vegetable, fruit");
let lowerCasePlantType = plantType.toLowerCase();
let adviceData = {
  spring: {
    flower: "Plant and cover to protect from frost",
    vegetable: "Sow seeds in greenhouse or on a windowsill",
    fruit: "Prune back any woody branches",
  },
  summer: {
    flower: "Water regularly and provide shade",
    vegetable: "Keep soil moist and watch for pests",
    fruit: "Water regularly and move into spot with full sun",
  },
  autumn: {
    flower: "Remove any dead flowers",
    vegetable: "Harvest vegatables and store",
    fruit: "Remove any unripened fruit to prevent disease",
  },
  winter: {
    flower: "Protect from frost",
    vegetable: "Use greenhouse or covers",
    fruit: "Prune back any woody branches",
  },
};

if (
  adviceData[lowerCaseSeason] &&
  adviceData[lowerCaseSeason][lowerCasePlantType]
) {
  console.log(adviceData[lowerCaseSeason][lowerCasePlantType]);
} else {
  console.log("Please enter valid season and plant type");
}

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and lowerCaseSeasons.
// - Suggest plants that thrive in the given lowerCaseSeason.
