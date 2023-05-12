let result = Math.floor(Math.random() * 100) + 1;

function checkNumber() {
  let score = "";
  while (score != result) {
    score = Number(prompt("Choississez un nombre entre 1 et 100"));
    if (score < result) {
      console.log("c'est plus grand");
    } else if (score > result) {
      console.log("c'est plus petit");
    } else {
      console.log("bravo c'est gagné");
    }
  }
}

checkNumber();
