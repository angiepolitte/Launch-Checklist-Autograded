// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image
) {
  // let chosenPlanet = pickPlanet(myFetch(index));
  // Here is the HTML formatting for our mission target div.
  //  let index= 0 , do i call the pickPlanet here? do i use listedPlanets as the key.value pair, the the random planet pick being called here? or in script?
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
  
  
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src='${image}'>`;
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (validateInput(pilot) === "Is a Number") {
    alert("Please enter a name for 'Pilot'");
  } else if (validateInput(copilot) === "Is a Number") {
    alert("Please enter a name for 'Co-Pilot'");
  } else if (validateInput(fuelLevel) === "Not a Number") {
    alert("Please enter a number for 'Fuel Level'");
  } else if (validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter a number for 'Cargo Mass'");
  }

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
  } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  } else if (fuelLevel < 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  } else {
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is Ready for Launch.";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }
}

async function myFetch() {
  let response = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  let planetsReturned = await response.json();
  return planetsReturned;
  // let data = await response.json();

  // for (let i = 0; i < data.length; i++) {
  //   let planetsReturned = data;
  //   return planetsReturned;
  // }
}

function pickPlanet(planets) {
  let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
  return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
