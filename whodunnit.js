// episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}
  
const verdict = declareMurderer();
console.log(verdict);

// the murderer is Miss Scarlet.
// no variables have been altered. Scenario (const) is defined in global scope, so available to
// the function declareMurderer 
  
  
  // episode 2
  const murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
// code won't run. murderer is declared const in global scope. any attempt to change
// murderer in function changeMurderer will throw an error  



// episode 3
  let murderer = 'Professor Plum';
  
  const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
  }
  
  const firstVerdict = declareMurderer();
  console.log('First Verdict: ', firstVerdict);
  
  const secondVerdict = `The murderer is ${murderer}.`;
  console.log('Second Verdict: ', secondVerdict);
  
// first verdict will be Mrs Peacock, second verdict will be Professor Plum.
// first murderer is in global scope declared with let
// second murderer is defined inside declareMurderer with let so is locally scoped
// firstVerdict uses result from declareMurderer while secondVerdict uses globally scoped variable murderer
  
//episode 4
  let suspectOne = 'Miss Scarlet';
  let suspectTwo = 'Professor Plum';
  let suspectThree = 'Mrs. Peacock';
  
  const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  }
  
  const suspects = declareAllSuspects();
  console.log(suspects);
  console.log(`Suspect three is ${suspectThree}.`);
  
  // suspects = Miss Scarlet, Professor Plum and Colonel Mustard
  // second console.log call will print Suspect three is Mrs Peacock.
  // suspectThree is globally scoped and declared with let so remains unchanged
  // inside declareAllSuspects, new suspectThree is locally scoped using let keyword
  

 // episode 5
  const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);
  // verdict is "The weapon is the Revolver". scenario is a globally scoped const object but the contents of scenario
  // are legitimately altered inside the function changeWeapon
  
  // episode 6
  
  let murderer = 'Colonel Mustard';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
  
    plotTwist();
  }
  
  const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  //murderer is Mrs White. murderer is globally scoped using let and not redeclared in any inner function
  // plotTwist is called AFTER assignment of murderer to Mr Green so is changed to Mrs White.
  // verdict is "The murderer is Mrs White"
  
  //episode 7
  let murderer = 'Professor Plum';
  
  const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      let murderer = 'Colonel Mustard';
  
      const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
      }
  
      unexpectedOutcome();
    }
  
    plotTwist();
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  changeMurderer();
  const verdict = declareMurderer();
  console.log(verdict);
  // verdict = "The murderer is Mr Green". first murderer is declared global scope with let. 
  // inside changeMurderer it's reassigned to Mr Green. inner function plotTwist declares a new murderer
  // variable using let, and the inner inner function unexpectedOutcome uses this new murderer variable, not
  // the globally scoped one. Since changeMurderer returns nothing, the outer murderer remains Mr Green 
  
  //episode 8
  const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);
  // verdict is "The weapon is Candle Stick". scenario is global const object. inner functions change 
  // elements of it but never attempt to reassign it so each element is altered because the conditions
  // for the inner functions are always met

  // episode 9
  let murderer = 'Professor Plum';
  
  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);
  // Murderer is Professor Plum. The if statement declares a new murderer variable which goes out 
  // of scope once the if statement is closed off. The globally scoped murderer variable remains Professor Plum