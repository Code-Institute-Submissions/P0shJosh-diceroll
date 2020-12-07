window.addEventListener("load", () => {
  const allthedice = [
    {
      selected: "boost",
      image: "assets/images/starwars/dice_boost.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/result_success.png" },
        { image: "assets/images/starwars/result_advantage.png" },
        { image: "assets/images/starwars/result_twoadvantage.png" },
        { image: "assets/images/starwars/result_adv_suc.png" },
      ],
    },
    {
      selected: "ability",
      image: "assets/images/starwars/dice_ability.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/result_success.png" },
        { image: "assets/images/starwars/result_success.png" },
        { image: "assets/images/starwars/result_advantage.png" },
        { image: "assets/images/starwars/result_advantage.png" },
        { image: "assets/images/starwars/result_adv_suc.png" },
        { image: "assets/images/starwars/result_twosuccess.png" },
        { image: "assets/images/starwars/result_twoadvantage.png" },
      ],
    },
    {
      selected: "proficiency",
      image: "assets/images/starwars/dice_proficiency.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/result_triumph.png" },
        { image: "assets/images/starwars/result_success.png" },
        { image: "assets/images/starwars/result_success.png" },
        { image: "assets/images/starwars/result_advantage.png" },
        { image: "assets/images/starwars/result_adv_suc.png" },
        { image: "assets/images/starwars/result_adv_suc.png" },
        { image: "assets/images/starwars/result_adv_suc.png" },
        { image: "assets/images/starwars/result_twosuccess.png" },
        { image: "assets/images/starwars/result_twosuccess.png" },
        { image: "assets/images/starwars/result_twoadvantage.png" },
        { image: "assets/images/starwars/result_twoadvantage.png" },
      ],
    },
    {
      selected: "setback",
      image: "assets/images/starwars/dice_setback.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/result_failure.png" },
        { image: "assets/images/starwars/result_failure.png" },
        { image: "assets/images/starwars/result_threat.png" },
        { image: "assets/images/starwars/result_threat.png" },
      ],
    },
    {
      selected: "difficulty",
      image: "assets/images/starwars/dice_difficulty.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/result_failure.png" },
        { image: "assets/images/starwars/result_threat.png" },
        { image: "assets/images/starwars/result_threat.png" },
        { image: "assets/images/starwars/result_threat.png" },
        { image: "assets/images/starwars/result_failure.png" },
        { image: "assets/images/starwars/result_fail_threat.png" },
        { image: "assets/images/starwars/result_twothreat.png" },
      ],
    },
    {
      selected: "challenge",
      image: "assets/images/starwars/dice_challenge.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/result_despair.png" },
        { image: "assets/images/starwars/result_failure.png" },
        { image: "assets/images/starwars/result_failure.png" },
        { image: "assets/images/starwars/result_threat.png" },
        { image: "assets/images/starwars/result_threat.png" },
        { image: "assets/images/starwars/result_twofailure.png" },
        { image: "assets/images/starwars/result_twofailure.png" },
        { image: "assets/images/starwars/result_twothreat.png" },
        { image: "assets/images/starwars/result_twothreat.png" },
        { image: "assets/images/starwars/result_fail_threat.png" },
        { image: "assets/images/starwars/result_fail_threat.png" },
      ],
    },
    {
      selected: "force",
      image: "assets/images/starwars/dice_force.png",
      results: [
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/force_light.png" },
        { image: "assets/images/starwars/force_twolight.png" },
        { image: "assets/images/starwars/force_twolight.png" },
        { image: "assets/images/starwars/force_twolight.png" },
        { image: "assets/images/starwars/force_twolight.png" },
        { image: "assets/images/starwars/force_dark.png" },
        { image: "assets/images/starwars/force_dark.png" },
        { image: "assets/images/starwars/force_dark.png" },
        { image: "assets/images/starwars/force_dark.png" },
        { image: "assets/images/starwars/force_dark.png" },
        { image: "assets/images/starwars/force_twodark.png" },
      ],
    },
  ];

  const diceDiv = document.getElementById("allthedice");
  const diceSelectedDiv = document.getElementById("selected");
  const diceResultDiv = document.getElementById("results");
  const diceHistoryDiv = document.getElementById("historicRolls");
  const dicePurposeDiv = document.getElementById("rollPurpose");

  let SelectedDice = [];
  let rolledNumbers = [];
  let history = [];
  let hasRolled = false;

  /* 
The following will move the Roll History Section from
the left hand side of the page to the top, for mobile
resolutions.
*/

  if ($(window).width() > 760) {
    $("#hideHistory").removeAttr("data-target");
    $("#historicRolls").removeAttr("class");
    $("#history").attr("class", "col-md-4");
  }

  if ($(window).width() < 760) {
    $("#history").removeAttr("class");
  }

  windowResize = () => {
    if ($(window).width() > 760) {
      $("#hideHistory").removeAttr("data-target");
      $("#historicRolls").removeAttr("class");
      $("#history").attr("class", "col-md-4");
    } else {
      $("#hideHistory").attr("data-target", "#historicRolls");
      $("#historicRolls").attr("class", "collapse");
      $("#history").removeAttr("class");
    }
  };

  $("#results").hide();

  //Renders the initial dice images
  allthedice.forEach((item) => {
    let dice = document.createElement("div");
    dice.innerHTML = `<img src="${item.image}"/>`;
    dice.addEventListener("click", () => {
      if (!hasRolled) {
        SelectedDice = [...SelectedDice, allthedice[allthedice.indexOf(item)]];
        renderDiceSelected();
        rollingDiceSelected();
      }
    });
    diceDiv.append(dice);
  });

  //Each initial dice selected will now render in the "Selected" box
  renderDiceSelected = () => {
    diceSelectedDiv.innerHTML = "";
    SelectedDice.forEach((item) => {
      let dice = document.createElement("div");
      dice.innerHTML = `<img src="${item.image}"/>`;
      diceSelectedDiv.append(dice);
    });
  };

  //As dice are rendered, results are also randomised, but not display to the user
  rollingDiceSelected = () => {
    diceResultDiv.innerHTML = "";
    SelectedDice.forEach((item, index) => {
      let rolledNumber = Math.floor(Math.random() * `${item.results.length}`);
      let dice = document.createElement("div");
      dice.innerHTML = `<img src="${item.results[rolledNumber].image}"/>`;
      rolledNumbers[index] = rolledNumber;
      diceResultDiv.append(dice);
    });
  };

  //Stores the information on which dice were rolled on press of Roller button
  saveHistory = () => {
    if (hasRolled) {
      let rolls = [];
      SelectedDice.forEach((item, index) => {
        let rolledNumber = rolledNumbers[index];
        rolls = [
          ...rolls,
          { dice: item, rolled: item.results[rolledNumber].image },
        ];
      });
      let roll_data = { purpose: dicePurposeDiv.value, rolls: rolls };
      history = [...history, roll_data];
    }
  };

  //Renders on pressing of the Roller button
  renderHistory = () => {
    if (hasRolled) {
      diceHistoryDiv.innerHTML = "";
      history.forEach((round) => {
        round.rolls
          .slice()
          .reverse()
          .forEach((roll) => {
            let div = document.createElement("div");
            div.style = "display: inline-grid; vertical-align: baseline";
            div.innerHTML = `<img src="${roll.rolled}"/>`;
            diceHistoryDiv.prepend(div);
          });
        rollReason(round.purpose);
        diceHistoryDiv.prepend(document.createElement("hr"));
      });
    }
  };

  //If the user enters a reason into the text box, prepends it to the history
  rollReason = (purpose) => {
    let rollingFor = document.createElement("div");
    rollingFor.innerText = purpose;
    diceHistoryDiv.prepend(rollingFor);
  };

  //Displays the results from rollingDiceSelected function
  rollalldice = () => {
    if (SelectedDice == "") {
      hasrolled = false;
    } else {
      $("#results").show();
      hasRolled = true;
    }
    if (hasRolled) {
      rollingDiceSelected();
      saveHistory();
      renderHistory();
    }
  };

  removeDice = () => {
    SelectedDice = [];
    rolledNumbers = [];
    hasRolled = false;
  };

  //If there were Selected dice, button press empties selection
  $("#restart").click(function () {
    $("#selected").empty();
    $("#results").empty();
    $("#results").hide();
  });
});
