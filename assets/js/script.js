window.addEventListener("load", () => {
  const allthedice = [
    { value: 4, image: "assets/images/d4.png" },
    { value: 6, image: "assets/images/d6.png" },
    { value: 8, image: "assets/images/d8.png" },
    { value: 10, image: "assets/images/d10.png" },
    { value: 12, image: "assets/images/d12.png" },
    { value: 20, image: "assets/images/d20.png" },
    { value: 100, image: "assets/images/d100.png" },
  ];

  const diceDiv = document.getElementById("allthedice");
  const diceSelectedDiv = document.getElementById("selected");
  const diceResultDiv = document.getElementById("results");
  const diceHistoryDiv = document.getElementById("historicRolls");

  let SelectedDice = [];
  let rolledNumbers = [];
  let history = [];
  var hasRolled = false;

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

  rollingDiceSelected = () => {
    diceResultDiv.innerHTML = "";
    SelectedDice.forEach((item, index) => {
      let rolledNumber = Math.floor(Math.random() * `${item.value}` + 1);
      let dice = document.createElement("div");
      dice.innerHTML = rolledNumber;
      rolledNumbers[index] = rolledNumber;
      diceResultDiv.append(dice);
    });
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

  $("#results").hide();

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
