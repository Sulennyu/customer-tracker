// Coding Challenge 3a

const customers = [
    {name:"Jane Doe",email:"janedoe@gmail.com",purchases:["purse","shoes","Lipstick"]},
    {name:"John Smith", email:"johnsmith@gmail.com",purchases:["shorts","volleyball","sunglasses"]},
    {name:"Bella James", email:"bellajames@gmail.com",purchases:["skirt","socks","bracelet"]}
];
console.log("=== Initial Customer Report ===");
customers.forEach(obj =>console.log(`Name: ${obj.name} | Email: ${obj.email} | Purchases: ${obj.purchases}`))

const newObject = {name:"Arthur Young",email:"arthuryoung@gmail.com",purchases:["notebook","pencil","eraser"]};
customers.push(newObject);

customers.shift();

customers[0].email = "Johnnyapplesmith@gmail.com";

customers[1].purchases.push("shorts");

console.log("\n=== Final Customer Report ===");
customers.forEach(obj =>console.log(`Name: ${obj.name} | Email: ${obj.email} | Total Purchases: ${obj.purchases.length}`));












