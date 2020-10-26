# [MS2 - DiceRoll](https://p0shjosh.github.io/diceroll/index.html)

- [Introduction](#introduction)
- [UX](#ux)
  * [The Design](#the-design)
  * [Wireframes](#wireframes
  * [User-stories](#user-stories)
- [Features](#features)
  * [Existing Features](#--existing-features--)
  * [Future Features](#--future-features--)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Inspiration](#inspiration)
  * [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Introduction

This year, over half a million people have joined the r/DnD subreddit alone. As people went into lockdown, many people have turned to socialising online with friends playing Dungeons & Dragons, or other table top role playing games (table top under normal circumstances). People are using services such as Roll20, Discord, Skype, Zoom to coordinate and play these games. One of the things any player needs to join in these games is a specific set of dice. Different TTRPGs use different dice systems, and so having to purchase sets can get expensive. Thankfully, some of these services have ways included to roll dice, through chat commands - not all of them do however. And, in the future, when people begin to socialise in person again, these games may continue in person too. And so then people cannot rely on the dice systems specific to some websites. The purpose of this DiceRoll website is to give players another option. Whilst owning dice can be fantastic and fun to collect, this site is meant to create an easy alternative for people who do not have any, or simply forgot to bring them to the session - these things happen. 

# UX

## The Design

![Colors Used](/readme/images/features/color_body.PNG)

#FFF7DD was chosen as the colour for the body of this website for for its simple nature. The image has an almost papyrus or tea-stained map like quality, to provide that fantasy-map like feeling. The choice of this colour was purely down to the site creator's preference. 
#DDE5FF was chosen due to it being the complementary colour to #FFF7DD, and so was selected as the colour for all buttons on the site. The high contrast of this colour provides a nice accent paired with the neutral palette of the body. 

In terms of the actual layout of the pages, the idea was to make it as simple as possible. The user should simply be able to click the dice, have the selected dice visible, and their results displayed, with as minimal interaction as possible. I also wanted the user to be able to see their previous rolls, so they could have a constant log as to what they had rolled previously. In some games, debates over rolls do occur, and so having a record would provide for clarity that physically rolling dice cannot. For mobile users, the minimal interactivity was key, and so ensuring that all the content displayed without y-scrolling was critical. Of course, if the user selects a good few dice, this is unavoidable without making the images too small, but this seemed a compromise. For the majority of users, only a few dice would ever be chosen, so this should not be an issue. For users who do require larger numbers of dice to be rolled, then a small bit of scrolling is the compromise. 

It was also important for me to ensure that both the D&D and Star Wars FFG Dice Rollers were symmetrical, for consistencies sake. 

## [Wireframes](/wireframes/)

[Adobe XD](https://www.adobe.com/uk/products/xd.html) was used to create the initial wireframes, the pdf file with all the wireframes can be viewed in [/wireframes/DiceRoll.pdf](/wireframes/DiceRoll.pdf). 

From the wireframes to the final product, the main difference was the removal of the top navbar. The main reason a navbar was included was for the Invite button, however at present, there is no multi-user functionality, as that is a future feature, and so it seemed redundant to have the navbar. If a navbar were to be included, it would then add y-scrolling to the pages. This removal does mean there is also no home button present on the site. Whilst this could be considered poor design, I think that would be unfair in this instance. A user on this website should not have a need to return to the index page, for if they are on this site, it is for the obvious purpose of using its dice rolling functionality. The index page serves as simply a place to select the initial game. Most users should not even require a switch game button, as it is unlikely they will be using both game systems at the same time, however, in the rare instance someone would need to switch game, rather than force them back to the index page and then into the other games system (which with a home button, would require two button presses - one to home, the second to the game), the user can do it in one button press, thus rendering an index page moot. 

With the removal of the navbar, and no chatbox/multi-user functionality present, it seemed ideal to move the "Past Rolls" section from hidden on the left of the page on the mobile resolutions, to the top of the page, thus allowing the dice boxes to all be wider and make maximum use of the available space. 

Another change was moving the "Clear" button from beneath the historic rolls to beside the "Roll" button, to make it clearer and easier for the user. A "Dice Purpose" text box was also added at a later date, upon discussion that adding a feature like a timestamp, so the user could "label" the rolls, would provide further clarity. 

## User-stories

- As a player, I want to be able to select which game’s dice I want to use. 
    - [If they're on the index page, they just have to click one of the two options](/readme/images/features/selected_game.PNG)
    - [If they're already on a page and want to swap to the other game, just click the "Switch Game" button](/readme/images/features/button_switch.PNG)

- As a player, I want to have all the options and results visible without scrolling, so that I can use this app whilst playing with friends in person. 
    - [The player shouldn't need to scroll unless they've selected a good few dice](/readme/images/features/mobile_game.PNG)

- As a player, I want to be able to easily select which dice I want to roll, and to have everything visible simply. 
    - [Standard array of dice is visisble for the player](/readme/images/features/dice_choose.PNG)

- As a player, I want to be able to see previous results, so that the group can see what Ive done previously and be clear there’s no lying about the roll. 
    - [After rolling, results will display on the left hand side of the page](/readme/images/features/dice_history.PNG)
    - [Or hidden behind the "Past Rolls" button at the top of the page for mobile users](/readme/images/features/mobile_dice_history.PNG)

- As a mobile player, I want to be able to hide the previous results, and only have them open as an when needed, so that I don’t have to keep scrolling or changing pages. 
    - [Results are hidden behind the "Past Rolls" button](/readme/images/features/mobile_dice_history.PNG)

- As a player, I want to see individual dice results, so that I can use the dice for other game systems too that rely solely on individual dice results, such as VTM. 
    - [Results of each of the selected dice is rendered for the user](/readme/images/features/dice_results.PNG)

- As a player, I want to be able to message the site creator easily, to ask them to include a dice set I want to play with.
    - [Upon selecting the "Contact" button, the user has a form to email the site creator.](/readme/images/features/modal_contact.PNG)
    
- As a player, I want to be able to view instructions on how to use the dice roller, in case I’m unfamiliar with the games system. 
    - [Upon selecting the "How to Play" button, clear instructions are displayed for the user](/readme/images/features/modal_how.PNG)

- As a player, I want to be able to find my nearest Board Game Cafe, a place where I could potentially meet other people to play these games with.
    - [All the player has to do is click the "Where to Play" button visible on all pages](/readme/images/features/modal_map.PNG)
    
- As a player, I want to be able to easily invite friends to the same room I'm in, so we can all view each others’ dice rolls. 
    - [See future features](#--future-features--)

- As a group, we want to be able to message each other, so that we can tell each other what to roll, or just talk in between.  
    - [See future features](#--future-features--)

# Features

## **Existing Features**

- [Ability to choose which dice set.](/readme/images/features/dice_choose.PNG)

- [Select specifically which dice to roll, and visualise said dice pool. ](/readme/images/features/dice_selected.PNG)

- [Click to roll. ](/readme/images/features/dice_roll.PNG)

- [Displays results for all the dice rolls.](/readme/images/features/dice_results.PNG)

- [Display previous roll results.](/readme/images/features/dice_history.PNG)

- [Contact page to reach site creator. ](/readme/images/features/modal_contact.PNG)

- [Google Maps Api to find nearest Board Game Cafe ](/readme/images/features/modal_map.PNG)

- [Information panel on how to use the site. ](/readme/images/features/modal_how.PNG)

## **Future Features**

- Provide real time results with an invite link allowing other users to join the room.

- Chat box to talk to the other users in the room.

- Settings to change username, in case of connectivity.

    - These features will be implemented upon completion of my Coding Institute course, and shall be implemented through the use of node.js and socket.io 
    - These ought to provide the capability intended. 

# Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - Semantic markup language as the shell of the site.

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - Cascading Style Sheets as the design of the site.

- [JS](https://en.wikipedia.org/wiki/JavaScripts)
    - JavaScript used to enable interactivity of the webpages.

- [jQuery](https://jquery.com)
    - Lightweight Javascript Library used to simply some functions.

- [Font Awesome 5](https://fontawesome.com)
    - Used for some of the smaller logos such as to "Close". 

- [Bootstrap 4.5](https://getbootstrap.com)
    - Used to provide layout for elements, such as navbar and the timeline, as well as styling such as the timeline and hover effects. 

- [Google Fonts](https://fonts.google.com)
    - Fonts used; "Exo2", "Fjalla One", "Inconsolata", "Poppins", "Roboto Mono". 

- [Visual Studio Code](https://code.visualstudio.com)
    - All code for this project was written in VS Code.

- [Git](https://git-scm.com)
    - Git was used for version-control and for pushing through to my Github Repo.

- [Photoshop](https://www.adobe.com/uk/products/photoshop.html)
    - Used to edit all images related to Dice and the results for the Star Wars rolls, as well as the DiceRoll logo from red to purple. 

# Testing


# Deployment 

This project is currently deployed to [Github Pages](https://pages.github.com) and is available to view [here](https://p0shjosh.github.io/diceroll/index.html)

In order to deploy to [Github Pages](https://pages.github.com): 

- Create a new repository name "user.github.io".
    - It's important to make sure the username matches, otherwise it won't work. 

- Clone the new repository. 

- Add an index.html file in the project folder. 

- Add --all, commit, and push. 

- Navigate to the repository on github and click Settings. 

- From there, go to the Source section within the Github Pages section. 

- Select master branch on the dropdown menu, and click save. 

- Now all repositories can be found at user.github.io/repository-name 

- Any time commits and pushes are sent to Github, the Github Pages site should update shortly after. 

To run the project locally:

- Click the green Clone or Download button on the [Github Repository](https://github.com/P0shJosh/MS1-thekernelbrewery)

- Using the Clone with HTTPS option, copy the link displayed. 

- Open your IDE, and ensure the Git Terminal is open.

- Change the working directory to the location where the cloned directory is to go.

- Use the "git clone" command and paste the url copied in the second step.

# Credits

## Content

- [DiceRoll Studios](https://dicerollstudios.com), where the logo for this site was originally taken from, and then editted in Photoshop to fit more in line with my site's theme. 

- [Colorlib](https://colorlib.com/etc/cf/ContactFrom_v2/index.html), provided the template for the Contact Form used on the site.

## Media 

- [Game Icons](https://game-icons.net/tags/dice.html), provided the png files used for the Dungeons & Dragons dice. 

- [Fantasy Flight Games - Genysys](https://www.fantasyflightgames.com/en/news/2017/6/27/genesys/), this page provided the png files used to create the dice for the Star Wars FFG page.

## Inspiration

- [Dungeons and Dragons WOTC](https://dnd.wizards.com), Wizards the Coast, developers of the Dungeons & Dragons TTRPG.

- [Star Wars FFG](https://www.fantasyflightgames.com/en/starwarsrpg/), Fantasy Flight Games, developers of the Star Wars TTRPG.

## Acknowledgements 

- To [Guilherme](https://github.com/guilhermegarcz/), for all the answers you've given me and helping me get this project off the ground.  

- To [Steven](https://github.com/steventomlinson/), for all your explanations and assistance in getting this project done.

- To [Precious](https://github.com/precious-ijege), my mentor for this, for all the advice you've given, and ensuring this project was completed to the best of my ability.