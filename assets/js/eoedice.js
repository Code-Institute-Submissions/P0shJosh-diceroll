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
        { image: "assets/images/starwars/dice_boost.png" },
        { image: "assets/images/starwars/dice_ability.png" },
        { image: "assets/images/starwars/dice_proficiency.png" },
        { image: "assets/images/starwars/dice_setback.png" },
        { image: "assets/images/starwars/dice_difficulty.png" },
        { image: "assets/images/starwars/dice_challenge.png" },
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
  

  if ($(window).width() > 960){
  $("#hideHistory").removeAttr('data-target');
  $("#historicRolls").removeAttr('class');
  };
  
  windowResize = () => {
    if ($(window).width() > 960) {
      $("#hideHistory").removeAttr('data-target');
      $("#historicRolls").removeAttr('class');
      }
    else {
      $("#hideHistory").attr('data-target', '#historicRolls');
      $("#historicRolls").attr('class', 'collapse');
    }
  };

  $("#results").hide();

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

  renderDiceSelected = () => {
    diceSelectedDiv.innerHTML = "";
    SelectedDice.forEach((item) => {
      let dice = document.createElement("div");
      dice.innerHTML = `<img src="${item.image}"/>`;
      diceSelectedDiv.append(dice);
    });
  };

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

  saveHistory = () => {
    if (hasRolled) {
      let rolls = [];
      SelectedDice.forEach((item, index) => {
        let rolledNumber = rolledNumbers[index];
        rolls = [...rolls, { dice: item, rolled: item.results[rolledNumber].image }];
      });
      let roll_data = { purpose: dicePurposeDiv.value, rolls: rolls };
      history = [...history, roll_data];
    }
  };

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

  rollReason = (purpose) => {
    let rollingFor = document.createElement("div");
    rollingFor.innerText = purpose;
    diceHistoryDiv.prepend(rollingFor);
  };
  
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

  $("#restart").click(function () {
    $("#selected").empty();
    $("#results").empty();
    $("#results").hide();
  });

});

