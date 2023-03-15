//kata 1
// complete the function
// function solution(string) {
//   for (let index = 0; index < string.length; index++) {
//     const newArray = string.split(/(?=[A-Z])/);
//     const newString = newArray.toString().replaceAll(",", " ");
//     return newString;
//   }
// }

// function solution(string) {
//   return string.replace(/([A-Z])/g, " $1");
// }
// let string = "camelCaseTest";

// solution(string);
// console.log("🚀 ~ file: prueba2.jsx:17 ~ solution(string);:", solution(string));

//kata 2

function cakes(recipe, available) {
  let result;
  const recipeArray = Object.keys(recipe);
  const availableArray = Object.keys(available);
  const keys = Object.keys(recipe).map((element) => {
    result = Object.keys(available).includes(element);
  });
  if (result) {
    for (let index = 0; index < recipeArray.length; index++) {
      const newArray = [];
      newArray.push(
        available[availableArray[index]] / recipe[recipeArray[index]]
      );
      console.log(
        newArray.filter((element, index) => )
      );
    }
  }

  return result;
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
