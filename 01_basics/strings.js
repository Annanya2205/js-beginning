const name = "annanya-as"
const repoCount = 50

// console.log(name + repoCount + " saxena");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`Annanya-as-21`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

  const newString = gameName.substring(0,4)
  console.log(newString);

  const anotherString = gameName.slice(-8, 4)
  console.log(anotherString);

  const newStringOne = "   annanya   "
  console.log(newStringOne);
  console.log(newStringOne.trim());

  const url = "https://annanya.com/annanya%22saxena"

  console.log(url.replace('%22','_'))
  console.log(url.includes('annanya'))
  console.log(gameName.split('-'));