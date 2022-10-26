// code your solution here

/* Implement a function called saturdayFun:

   1)It should define a function
   2) It uses a default argument, 'roller-skate' when no arguments are passed
      * allows the default argument to be overridden */


function saturdayFun(activity = 'roller-skate'){
     return `This Saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog");

/* Implement a function called mondayWork:

   1) It should define a function
   2) It uses a default argument, 'go to the office' when no arguments are passed
     * allows the default argument to be overridden */

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

mondayWork("work from home");

/* Implement a function called wrapAdjective:

1) It should return a function
  This "inner" function should:
    - take a single parameter that should default to "special". Name it however you wish.
    - return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
2) It should take as parameter a String that will be used to create visual flair
3) You may call the parameter whatever you like, but its default value should be "*"
4) Call example: const encouragingPromptFunction = wrapAdjective("!!!") */

function wrapAdjective(visualFlair = "*") {
    return function (adjective = "special"){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
} 

wrapAdjective("||");
