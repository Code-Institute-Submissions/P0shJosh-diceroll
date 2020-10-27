# Testing

![Testing Excel File](/readme/testing.PNG)

## Notes on Testing 

- The [image](/readme/testing.PNG/) above of the excel file displays all my tests across different devices and browsers. 
    - Green means passed as fully intended.
    - Yellow means not entirely as intended but acceptable.
    - Red means did not render as intended.
- The steps I took to test each feature can be viewed in the [Testing each Feature](#testing-each-feature) section below.
- Chrome browser resolutions were tested with the Vivaldi browser (Chromium Based), and through the use of Chrome Developer Tools within Vivaldi. 
- Any devices listed with an asterisk were tested within Chrome Developer Tools.
- Safari was tested on a Macbook Pro 2017.

# Testing each Feature

- Colours. 
    - Colours loaded as intended across all devices and resolutions. 

- [Index Page](/readme/images/features/index.PNG)
    - Appeared as intended across all devices. 
    
- No Y-Scroll
     - Acted as intended for almost all devices.
     - On Surface-Duo, there is a very small amount of scrolling needed, as the roller and restart buttons almost touch the footer.

- [D&D Choose Dice Images](/readme/images/features/dice_choose.PNG)
    - On loading either game page, they should appear in the top-most box. 
    - Rendered as intended across almost all devices.
    - Did not render at all in Internet Explorer

- [D&D Selected Dice](/readme/images/features/dice_selected.PNG)
    - On loading either game page, there ought to be an empty box in the middle. 
    - Upon selecting dice in the previous box, a matching image should render in this box.
    - Rendered as intended across all devices, that Choose Dice worked for.
    - Given the Choose Dice Images did not render at all in Internet Explorer, the Selected Dice could not render. 

- [D&D Dice Results](/readme/images/features/dice_results.PNG)
    - On loading either game page, they should appear in the top-most box. 
    - Rendered as intended across all devices, that Choose Dice worked for.
    - Given the Choose Dice Images did not render at all in Internet Explorer, the Dice Results could not render.

- [Star Wars Choose Dice](/readme/images/features/dice_choose_sw.PNG)
    - On loading either game page, they should appear in the top-most box. 
    - Rendered as intended across almost all devices.
    - Did not render at all in Internet Explorer.

- [Star Wars Selected Dice](/readme/images/features/dice_selected_sw.PNG)
    - On loading either game page, there ought to be an empty box in the middle. 
    - Upon selecting dice in the previous box, a matching image should render in this box.
    - Rendered as intended across all devices, that Choose Dice worked for.
    - Given the Choose Dice Images did not render at all in Internet Explorer, the Selected Dice could not render. 

- [Star Wars Dice Results](/readme/images/features/dice_results_sw.PNG)
    - On loading either game page, there ought to be an empty box at the bottom of the page. 
    - If Dice have been Selected, then pressing Roll ought to reveal results in this box.
    - Rendered as intended across all devices, that Choose Dice worked for.
    - Given the Choose Dice Images did not render at all in Internet Explorer, the Dice Results could not render.

- [Past Rolls Button](/readme/images/features/mobile_dice_results.PNG)
    - Only occurs on mobile resolutions. 
    - If on a mobile, across the top of either game page, where a navbar might otherwise appear, centrally will be a button.
    - Button titled "Past Rolls". 
    - Upon clicking, if rolls have occured, it will reveal the past rolls, otherwise nothing occurs on pressing.

- [Past Rolls Content](/readme/images/features/dice_history.PNG)
    - On desktop or iPad resolutions, when the user has pressed Roll, the results will not only occur in the Results box, but also in this left hand column. 
    - If further rolls occur, the results will append to this column. 
    - If only mobile, the results will not be visible until the "Past Rolls" button has been pressed.
    - Results are appended for mobile too. 

- [Roll Purpose](/readme/images/features/dice_purpose.PNG)
    - At all resolutions, text box with title text appears below the results box, but above the roll/restart buttons. 
    - Entirely option, but the user can enter text. 
    - If the user does enter text, whatever text present will be appended to the "Previous Roll" results. 
    - User can change this text for each roll without affecting previous rolls. 

- [Roller Button](/readme/images/features/dice_roll.PNG)
    - Occurs beneath the Roll Purpose at all resolutions. 
    - Depending on resolution will either appear beside the Restart button or above it. 
    - On pressing the button, if dice are present in the Selected Box, the results will then be displayed in the results box and past rolls section. 
    - User can continue to press the button for fresh results. 

- [Restart Button](/readme/images/features/dice_empty.PNG)
    - Occurs beneath the Roll Purpose at all resolutions. 
    - Depending on resolution will either appear beside the Roller button or below it. 
    - If dice are present in the Selected box, and/or results in the results box, then pressing this button will empty the arrays and allow the user to select new dice.

- [Contact Button](/readme/images/features/button_contact.PNG)
    - Appears at the bottom of the page, the most left button of the footer. 
    - Pressing this will reveal a modal for the user with the contact form.

- [Contact Form](/readme/images/features/modal_contact.PNG)
    - Only appears once the user has pressed the "Contact" button.
    - User must fill all sections; "name", "email", "message", and then press Send message.
    - If any section is not filled, a warning will be triggered informing the user they must fill it. 
    - Successful sending will send myself an email with the relevant content. 

- [Maps Button](/readme/images/features/button_contact.PNG)
    - 

- [Google Map Api](/readme/images/features/modal_map.PNG)
    - 

- [Switch Game Button](/readme/images/features/button_switch.PNG)
    - 

- [How to Play Button](/readme/images/features/button_how.PNG)
    - 

- [How to Play Content](/readme/images/features/modal_how.PNG)
    - 

# Testing the User-stories

- [As a player, I want to be able to select which game’s dice I want to use.](/readme/images/features/selected_game.PNG)
    - On the index page, two large buttons are present in the center, text indicating which game. 
    - Upon hovering over the buttons, they grow and add shadow to indicate interactivity. 
    - If a user is already on a game page, scroll to the bottom of the page. 
    - Located in the footer of the page is a "Switch Game" Button. 
    - Clicking that will swap the user to the other game system.

- [As a player, I want to have all the options and results visible without scrolling, so that I can use this app whilst playing with friends in person.](/readme/images/features/mobile_game.PNG)
    - On loading any page, the user should not have to scroll unless they have added a fair few dice to push the boxes to new lines. 

- [As a player, I want to be able to easily select which dice I want to roll, and to have everything visible simply. ](/readme/images/features/dice_choose.PNG)
    - Upon loading the page, the only images visible will be of the dice. Each die has its own image and for any player they should be instantly recognisable. Players using the dice system will be aware of what each image corresponds to. 
    - As the user clicks on an image, it will render into the next box, making it clearly obvious which dice they will be rolling. 

- [As a player, I want to be able to see previous results, so that the group can see what Ive done previously and be clear there’s no lying about the roll. ](/readme/images/features/dice_history.PNG)
    -  On iPad or Desktop resolutions, after the user clicks roll, the roll will appear to in the column on the left. 
    - As the user continues to roll, each result will be appended into this column. 
    - For mobile users, at the top of the page will be a button for "Past Rolls". 
    - Upon clicking the button, the previous rolls will pop out and be clear to the user. 

- [As a mobile player, I want to be able to hide the previous results, and only have them open as an when needed, so that I don’t have to keep scrolling or changing pages.](/readme/images/features/mobile_dice_history.PNG)
    - At the top of the page, there is a button labeled "Past Rolls", selecting this will reveal previous rolls, and selecting it again will hide the results.

- [As a player, I want to see individual dice results, so that I can use the dice for other game systems too that rely solely on individual dice results, such as VTM. ](/readme/images/features/dice_results.PNG)
    - After selecting dice and pressing the roll button, the results of the dice roll will be rendered in the final box. 
    - Each individual dice result will be displayed, in line with the dice selected so it is clear which result pairs with which dice. 

- [As a player, I want to be able to message the site creator easily, to ask them to include a dice set I want to play with.](/readme/images/features/modal_contact.PNG)
    - In the footer of the page there is a button labeled "Contact". 
    - Clicking that will reveal a modal contact form. 
    - The user must fill in all sections, otherwise warnings will display for the user. 
    - Sending a message will send an email to myself. 

- [As a player, I want to be able to view instructions on how to use the dice roller, in case I’m unfamiliar with the games system.](/readme/images/features/modal_how.PNG) 
    - In the footer of the page there is a button labelled "How to Play".
    - Upon pressing the button, a modal box will appear with instructions for the user to read. 

- [As a player, I want to be able to find my nearest Board Game Cafe, a place where I could potentially meet other people to play these games with.](/readme/images/features/modal_map.PNG)
    - In the footer of the page there is a button labelled "Where to Play". 
    - Upon pressing the button, a modal google maps api will appear. 
    - The map should use the users location and show them their closest open game board cafe.

# Validation Testing

- HTML has been validated using [W3C HTML Validator](https://validator.w3.org/nu/) 

- CSS has been validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 

- In both instances, files were validated from local file upload. Validation through URL lead to errors and warnings in regards to bootstrap, which is of no fault regarding my code, and the reason why these errors occured is discussed on the [Bootstrap Site](https://getbootstrap.com/docs/4.5/getting-started/browsers-devices/#validators)

- JS has been validated using [JSHint](https://jshint.com)
    - The line /*jshint esversion: 6 */ was added to the start each file for testing purposes. 

## Validation Testing Results 

### **Index.html**

![Index.html validation](/readme/images/validation/index.PNG)

### **dandd.html**

![dandd.html validation](/readme/images/validation/dungeons.PNG)

### **starwars.html**

![starwars.html validation](/readme/images/validation/starwars.PNG)

### **Style.css**

![Style.css validation](/readme/images/validation/css.PNG)

### **dddice.js**

![dddice.js validation](/readme/images/validation/js_dd.PNG)

### **eoedice.js**

![eoedice.js validation](/readme/images/validation/js_eoe.PNG)

### **contact.js**

![contact.js validation](/readme/images/validation/js_contact.PNG)

### **map.js**

![map.js validation](/readme/images/validation/js_map.PNG)

