let season = prompt("Enter the season: spring, summer, autumn or winter");
let lowerCaseSeason = season.toLowerCase();
let plantType = prompt("Enter the plant type: flower, vegetable, fruit");
let lowerCasePlantType = plantType.toLowerCase();
let adviceData = {
  spring: {
    flower: {
      advice: "Plant and cover to protect from frost",
      suggestedPlants: "Daffodil, Tulip, Bluebell",
    },
    vegetable: {
      advice: "Sow seeds in greenhouse or on a windowsill",
      suggestedPlants: "Lettuce, Spinach, Kale",
    },
    fruit: {
      advice: "Prune back any woody branches",
      suggestedPlants: "Strawberries, Raspberries, Rhubarb",
    },
  },
  summer: {
    flower: {
      advice: "Water regularly and provide shade",
      suggestedPlants: "Sunflowers, Dahlias, Lavender",
    },
    vegetable: {
      advice: "Keep soil moist and watch for pests",
      suggestedPlants: "Tomatoes, Cucumbers, Peppers",
    },
    fruit: {
      advice: "Water regularly and move into spot with full sun",
      suggestedPlants: "Blackberry, Blueberry, Grape",
    },
  },
  autumn: {
    flower: {
      advice: "Remove any dead flowers",
      suggestedPlants: "Chrysanthemums, Asters, Cyclamen",
    },
    vegetable: {
      advice: "Harvest vegatables and store",
      suggestedPlants: "Carrots, Kale, Broccoli",
    },
    fruit: {
      advice: "Remove any unripened fruit to prevent disease",
      suggestedPlants: "Apples, Pears, Plums",
    },
  },
  winter: {
    flower: {
      advice: "Protect from frost",
      suggestedPlants: "Snowdrops, Pansies, Winter Jasmine",
    },
    vegetable: {
      advice: "Use greenhouse or covers",
      suggestedPlants: "Kale, Leeks, Parsnips",
    },
    fruit: {
      advice: "Prune back any woody branches",
      suggestedPlants: "Apples, Pears, Raspberries",
    },
  },
};

if (
  adviceData[lowerCaseSeason] &&
  adviceData[lowerCaseSeason][lowerCasePlantType]
) {
  console.log(adviceData[lowerCaseSeason][lowerCasePlantType].advice);
  console.log(
    "Suggested plants: " +
      adviceData[lowerCaseSeason][lowerCasePlantType].suggestedPlants
  );
} else {
  console.log("Please enter valid season and plant type");
}

// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given seasons.
