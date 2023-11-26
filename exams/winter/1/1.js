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