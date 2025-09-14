// Coding Challenge 3a

const customers = [
    {name:"Jane Doe",email:"janedoe@gmail.com",purchases:["purse","shoes","Lipstick"]},
    {name:"John Smith", email:"johnsmith@gmail.com",purchases:["shorts","volleyball","sunglasses"]},
    {name:"Bella James", email:"bellajames@gmail.com",purchases:["skirt","socks","bracelet"]}
];

const newCustomer = {name:"Arthur Young",email:"arthuryoung@gmail.com",purchases:["notebook","pencil","eraser"]};
customers.push(newCustomer);

customers.shift();

customers[0].email = "Johnnyapplesmith@gmail.com";

customers[1].purchases.push("shorts");

console.log("\n=== Final Customer Information ===");
customers.forEach(cust =>console.log(`Name: ${cust.name} | Email: ${cust.email} | Total Purchases: ${cust.purchases.length}`));












