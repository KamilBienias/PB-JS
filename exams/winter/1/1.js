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

