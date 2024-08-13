// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  // console.log(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  let submitButton = document.querySelector("formSubmit");
  submitButton.addEventListener("submit", function (event) {
    if (
      validateInput(pilot.name) === "Empty" ||
      validateInput(copilot.name) === "Empty" ||
      validateInput(fuelLevel.name) === "Empty" ||
      validateInput(cargoMass.name) === "Empty"
    ) {
      alert("All fields are required!");
      event.preventDefault();
      return;
    } else if (
      validateInput(pilot.value) === "Is a Number" ||
      validateInput(copilot.value) === "Is a Number"
    ) {
      alert("Please enter a name");
      event.preventDefault();
      return;
    } else if (
      validateInput(fuelLevel.value) === "Not a Number" ||
      validateInput(cargoMass.value) === "Not a Number"
    ) {
      alert("Please enter a number");
      event.preventDefault();
      return;
    }
    // event.preventDefault();
  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
