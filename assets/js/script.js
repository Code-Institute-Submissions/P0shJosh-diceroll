window.addEventListener("load", () => {
    const dices = [
        {value: 4, image:'assets/images/d4.png'},
        {value: 6, image:'assets/images/d6.png'},
        {value: 8, image:'assets/images/d8.png'},
        {value: 10, image:'assets/images/d10.png'},
        {value: 12, image:'assets/images/d12.png'},
        {value: 20, image:'assets/images/d20.png'},
        {value: 100, image:'assets/images/d100.png'},
    ];
    
    const dicesDiv = document.getElementById("dices");
    const dicesSelectedDiv = document.getElementById("selected");

    let dicesSelected = [];

    dices.forEach((item)=>{
        let dice = document.createElement("div");
        dice.innerHTML = `<img src="${item.image}"/>`;
        dice.addEventListener("click", ()=>{
            dicesSelected = [...dicesSelected, dices[dices.indexOf(item)]];
            renderDicesSelected();
        });
        dicesDiv.append(dice);
    });

    renderDicesSelected = () => {
        dicesSelectedDiv.innerHTML = "";
        dicesSelected.forEach(item => {
            let dice = document.createElement("div");
            dice.innerHTML = `<img src="${item.image}"/>`;
            dicesSelectedDiv.append(dice);
        });
    }
});
