window.addEventListener("load", () => {
    
    const allthedice = [
        { selected: 'boost', image: "assets/images/starwars/dice_boost.png", results: [
          { result: 'blank', value: 1, image: "assets/images/starwars/force_light.png" },
          { result: 'blank', value: 2, image: "assets/images/starwars/force_light.png" },
          { result: 'success', value: 3, image: "assets/images/starwars/result_success.png" },
          { result: 'advantage', value: 4, image: "assets/images/starwars/result_advantage.png" },
          { result: 'twoadvantage', value: 5, image: "assets/images/starwars/result_advantage.png" },
          { result: 'twoadvantage', value: 5, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 6, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 6, image: "assets/images/starwars/result_success.png" }
        ]},
        { selected: 'ability', image: "assets/images/starwars/dice_ability.png", results: [
          { result: 'blank', value: 1, image: "assets/images/starwars/force_light.png" },
          { result: 'success', value: 2, image: "assets/images/starwars/result_success.png" },
          { result: 'success', value: 3, image: "assets/images/starwars/result_success.png" },
          { result: 'advantage', value: 4, image: "assets/images/starwars/result_advantage.png" },
          { result: 'advantage', value: 5, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 6, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 6, image: "assets/images/starwars/result_success.png" },
          { result: 'twosuccess', value: 7, image: "assets/images/starwars/result_success.png" },
          { result: 'twosuccess', value: 7, image: "assets/images/starwars/result_success.png" },
          { result: 'twoadvantage', value: 8, image: "assets/images/starwars/result_advantage.png" },
          { result: 'twoadvantage', value: 8, image: "assets/images/starwars/result_advantage.png" }
        ]},
        { selected: 'proficiency', image: "assets/images/starwars/dice_proficiency.png", results: [
          { result: 'blank', value: 1, image: "assets/images/starwars/force_light.png" },
          { result: 'triumph', value: 2, image: "assets/images/starwars/result_ability.png" },
          { result: 'success', value: 3, image: "assets/images/starwars/result_success.png" },
          { result: 'success', value: 4, image: "assets/images/starwars/result_success.png" },
          { result: 'advantage', value: 5, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 6, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 6, image: "assets/images/starwars/result_success.png" },
          { result: 'adv&suc', value: 7, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 7, image: "assets/images/starwars/result_success.png" },
          { result: 'adv&suc', value: 8, image: "assets/images/starwars/result_advantage.png" },
          { result: 'adv&suc', value: 8, image: "assets/images/starwars/result_success.png" },
          { result: 'twosuccess', value: 9, image: "assets/images/starwars/result_success.png" },
          { result: 'twosuccess', value: 9, image: "assets/images/starwars/result_success.png" },
          { result: 'twosuccess', value: 10, image: "assets/images/starwars/result_success.png" },
          { result: 'twosuccess', value: 10, image: "assets/images/starwars/result_success.png" },
          { result: 'twoadvantage', value: 11, image: "assets/images/starwars/result_advantage.png" },
          { result: 'twoadvantage', value: 11, image: "assets/images/starwars/result_advantage.png" },
          { result: 'twoadvantage', value: 12, image: "assets/images/starwars/result_advantage.png" },
          { result: 'twoadvantage', value: 12, image: "assets/images/starwars/result_advantage.png" },
        ]},
        { selected: 'setback', image: "assets/images/starwars/dice_setback.png", results: [ 
          { result: 'blank', value: 1, image: "assets/images/starwars/force_light.png" },
          { result: 'blank', value: 2, image: "assets/images/starwars/force_light.png" },
          { result: 'fail', value: 3, image: "assets/images/starwars/result_failure.png" },
          { result: 'fail', value: 4, image: "assets/images/starwars/result_failure.png" },
          { result: 'threat', value: 5, image: "assets/images/starwars/result_difficulty.png" },
          { result: 'threat', value: 6, image: "assets/images/starwars/result_challenge.png" },
        ]},
        { selected: 'difficulty', image: "assets/images/starwars/dice_difficulty.png", results: [ 
          { result: 'blank', value: 1, image: "assets/images/starwars/force_light.png" },
          { result: 'fail', value: 2, image: "assets/images/starwars/result_failure.png" },
          { result: 'threat', value: 3, image: "assets/images/starwars/result_threat.png" },
          { result: 'threat', value: 4, image: "assets/images/starwars/result_threat.png" },
          { result: 'threat', value: 5, image: "assets/images/starwars/result_threat.png" },
          { result: 'twofail', value: 6, image: "assets/images/starwars/result_failure.png" },
          { result: 'twofail', value: 6, image: "assets/images/starwars/result_failure.png" },
          { result: 'fail&threat', value: 7, image: "assets/images/starwars/result_failure.png" },
          { result: 'fail&threat', value: 7, image: "assets/images/starwars/result_threat.png" },
          { result: 'twothreat', value: 8, image: "assets/images/starwars/result_threat.png" },
          { result: 'twothreat', value: 8, image: "assets/images/starwars/result_threat.png" }
        ]},
        { selected: 'challenge', image: "assets/images/starwars/dice_challenge.png", results: [ 
          { result: 'blank', value: 1, image: "assets/images/starwars/force_light.png" },
          { result: 'despair', value: 2, image: "assets/images/starwars/result_ability.png" },
          { result: 'fail', value: 3, image: "assets/images/starwars/result_failure.png" },
          { result: 'fail', value: 4, image: "assets/images/starwars/result_failure.png" },
          { result: 'threat', value: 5, image: "assets/images/starwars/result_threat.png" },
          { result: 'threat', value: 6, image: "assets/images/starwars/result_threat.png" },
          { result: 'twofail', value: 7, image: "assets/images/starwars/result_failure.png" },
          { result: 'twofail', value: 7, image: "assets/images/starwars/result_failure.png" },
          { result: 'twofail', value: 8, image: "assets/images/starwars/result_failure.png" },
          { result: 'twofail', value: 8, image: "assets/images/starwars/result_failure.png" },
          { result: 'twothreat', value: 9, image: "assets/images/starwars/result_threat.png" },
          { result: 'twothreat', value: 9, image: "assets/images/starwars/result_threat.png" },
          { result: 'twothreat', value: 10, image: "assets/images/starwars/result_threat.png" },
          { result: 'twothreat', value: 10, image: "assets/images/starwars/result_threat.png" },
          { result: 'fail&threat', value: 11, image: "assets/images/starwars/result_failure.png" },
          { result: 'fail&threat', value: 11, image: "assets/images/starwars/result_threat.png" },
          { result: 'fail&threat', value: 12, image: "assets/images/starwars/result_failure.png" },
          { result: 'fail&threat', value: 12, image: "assets/images/starwars/result_threat.png" }
        ]},
        { selected: 'force', image: "assets/images/starwars/dice_force.png", results: [ 
          { result: 'boost', value: 1, image: "assets/images/starwars/dice_boost.png" },
          { result: 'ability', value: 2, image: "assets/images/starwars/dice_ability.png" },
          { result: 'proficiency', value: 3, image: "assets/images/starwars/dice_proficiency.png" },
          { result: 'setback', value: 4, image: "assets/images/starwars/dice_setback.png" },
          { result: 'difficulty', value: 5, image: "assets/images/starwars/dice_difficulty.png" },
          { result: 'challenge', value: 6, image: "assets/images/starwars/dice_challenge.png" }
        ]},
    ]; 
    
    const diceDiv = document.getElementById("allthedice");
    const diceSelectedDiv = document.getElementById("selected");
    const diceResultDiv = document.getElementById("results");
    const diceHistoryDiv = document.getElementById("historicRolls");
  
    let SelectedDice = [];
    let rolledNumbers = [];
    let history = [];
    let hasRolled = false;
  
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
          rolls = [...rolls, { dice: item, rolled: rolledNumber }];
        });
        history = [...history, rolls];
      }
    };
  
    renderHistory = () => {
      if (hasRolled) {
        diceHistoryDiv.innerHTML = "";
        history.forEach((round) => {
          round
            .slice()
            .reverse()
            .forEach((roll) => {
              let div = document.createElement("div");
              div.innerText = `Dice: ${roll.dice.value} - Rolled: ${roll.rolled}`;
              diceHistoryDiv.prepend(div);
            });
          diceHistoryDiv.prepend(document.createElement("hr"));
        });
      }
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