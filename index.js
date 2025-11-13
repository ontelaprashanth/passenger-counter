
//  document.getElementById("count-el").innerText = 5;
// let firstbatch = 5
// let secondbatch = 7
// let count = firstbatch
// console.log(count);

// const myAge = 18
// console.log(myAge);


// let myAge = 18
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge);

// let count = 5

// count = count + 2
// console.log(count);


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime();


// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)


function increment() {
    count += 1
    countEl.textContent = count
  
}

function save() {
  let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}



// let username = "nani"
// let message = "You have tree notifications"

// let messageTOUser = message + ", "+username + "!"
// console.log(messageTOUser);

// let name = "nani"
// let greeting = "Hi, my name is "

// let mygreeting = greeting + name
// console.log(mygreeting);

// console.log(4 + 5);
// console.log("2" + "4");
// console.log("5"+ 1);
// console.log(100 + "100");







