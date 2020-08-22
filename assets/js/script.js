window.addEventListener("load", () => {
    const allthedice = [
        {value: 4, image:'assets/images/d4.png'},
        {value: 6, image:'assets/images/d6.png'},
        {value: 8, image:'assets/images/d8.png'},
        {value: 10, image:'assets/images/d10.png'},
        {value: 12, image:'assets/images/d12.png'},
        {value: 20, image:'assets/images/d20.png'},
        {value: 100, image:'assets/images/d100.png'},
    ];

    const diceDiv = document.getElementById("allthedice");
    const diceSelectedDiv = document.getElementById("selected");
    const diceResultDiv = document.getElementById("results");

    let SelectedDice = [];

    allthedice.forEach((item)=>{
        let dice = document.createElement("div");
        dice.innerHTML = `<img src="${item.image}"/>`;
        dice.addEventListener("click", ()=>{
            SelectedDice = [...SelectedDice, allthedice[allthedice.indexOf(item)]];
            renderDiceSelected();
            rollingDiceSelected();
        });
        diceDiv.append(dice);
    });

    renderDiceSelected = () => {
        diceSelectedDiv.innerHTML = "";
        SelectedDice.forEach(item => {
            let dice = document.createElement("div");
            dice.innerHTML = `<img src="${item.image}"/>`;
            diceSelectedDiv.append(dice);
        });
    };

    rollingDiceSelected = () => {
        diceResultDiv.innerHTML = "";
        SelectedDice.forEach(item => {
            let dice = document.createElement("div");
            dice.innerHTML = Math.floor((Math.random() * `${item.value}`) + 1);
            diceResultDiv.append(dice);
        });
    };

    $( "#results" ).hide();
    $( "#roller" ).click(function() {
        $( "#results" ).show();
    });
});

