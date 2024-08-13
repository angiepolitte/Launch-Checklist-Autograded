// Write your JavaScript code here!

window.addEventListener("load", function () {
  //   let list = document.getElementById("faultyItems");
  //   list.style.visibility = "visible";
  let list = document.getElementById("faultyItems");
  let pilot = document.getElementById("pilotName");
  let copilot = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");

  formSubmission(
    list.value,
    pilot.value,
    copilot.value,
    fuelLevel.value,
    cargoMass.value
  );
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
