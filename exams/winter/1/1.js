/*	EXAM Scale riddle. With 8 balls, ex. [1,2,1,1,1,1,1,1] 
get position of the “heavy” ball. Indexes are to be chosen at random. 
Use weights comparison only two times.
*/

const balls = [1, 1, 1, 1, 1, 1, 1, 1];

function insertHeavyBall(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    arr[randomIndex] = 2;
    return arr;
}
  
insertHeavyBall(balls);
console.log(balls);

const groupA = balls.slice(0, 3);
const groupB = balls.slice(3, 6);
const groupC = balls.slice(6, 8);
console.log("groupA", groupA);
console.log("groupB", groupB);
console.log("groupC", groupC);

function compareWeights(group1, group2) {
    const weightGroup1 = group1.reduce((acc, val) => acc + val, 0);
    const weightGroup2 = group2.reduce((acc, val) => acc + val, 0);
  
    if (weightGroup1 === weightGroup2) {
      return 0;
    } else if (weightGroup1 > weightGroup2) {
      return 1;
    } else {
      return -1;
    }
}

console.log("Test: compare groupA with groupB.");
const testComparison = compareWeights(groupA, groupB);
if (testComparison == 0){
    console.log("groups have the same weight");
} else if (testComparison == 1){
    console.log("groupA is heavier");
} else if (testComparison == -1){
    console.log("groupB is heavier");
}