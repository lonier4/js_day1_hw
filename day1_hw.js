//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

/* loop through the list
check if the index value is in the string
if yes return "Matched Dog_name"
if no match is found then console.log 'No Matches'
*/

function findWords(dog_string, dog_names) {
  dog_names.forEach(name => {
    if (dog_string.includes(name)) { 
    console.log(`Matched ${name}`);
   } else console.log("No matches");
  })
};
findWords(dog_string, dog_names);
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given 
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]  

let replaceEvens = (input) => {
  for(let even = 0; even < input.length; even++ ) {
    if (even % 2 == 0) {
    input.splice(even, 1, "even index");
    }
  }
    return input
}
console.log(replaceEvens(arr));

