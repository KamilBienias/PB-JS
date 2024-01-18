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
console.log("balls", balls);

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
const firstComparison = compareWeights(groupA, groupB);
if (firstComparison == 0){
    console.log("groupA and groupB have the same weight");
    console.log("Test: compare [groupC[0]] with [groupC[1]].");
    const secondComparison = compareWeights([groupC[0]], [groupC[1]]);
    if (secondComparison == 1) {
      console.log("Ball 6 is heavier than ball 7. The heavy ball is at index 6");
    } else if (secondComparison == -1) {
      console.log("Ball 7 is heavier than ball 6. The heavy ball is at index 7");
    }
} else if (firstComparison == 1){
    console.log("groupA is heavier than groupB");
    console.log("Test: compare [groupA[0]] with [groupA[1]].");
    const secondComparison = compareWeights([groupA[0]], [groupA[1]]);
    if (secondComparison === 0) {
        console.log("Ball 0 and ball 1 have the same weight. The heavy ball is at index 2.");
    } else if (secondComparison === 1) {
        console.log("Ball 0 is heavier than ball 1. The heavy ball is at index 0.");
    } else {
        console.log("Ball 1 is heavier than ball 0. The heavy ball is at index 1.");
    }
} else if (firstComparison == -1){
    console.log("groupB is heavier than groupA");
    console.log("Test: compare [groupB[0]] with [groupB[1]].");
    const secondComparison = compareWeights([groupB[0]], [groupB[1]]);
    if (secondComparison === 0) {
        console.log("Ball 3 and ball 4 have the same weight. The heavy ball is at index 5.");
    } else if (secondComparison === 1) {
        console.log("Ball 3 is heavier than ball 4. The heavy ball is at index 3.");
    } else {
        console.log("Ball 4 is heavier than ball 3. The heavy ball is at index 4.");
    }
}