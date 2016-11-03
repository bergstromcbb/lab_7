//lab 7



var shoppingList = 
    [
    {
      name: "lettuce",
      price: 2.00
},
    {
      name: "milk",
      price: 4.10
},
    {
      name: "chocolate",
      price: 3.50
}, 
];

for (var i=0; i<shoppingList.length; i++){
  console.log(shoppingList[i].name, "$" + shoppingList[i].price);
}

 shoppingList.totalAmount = function(){
  
   var total = 0;
        for (var i = 0; i < shoppingList.length; i++) {
        total = total + shoppingList[i].price;
  //    console.log(total);
             }
       return total;
 };

   console.log("Total $" + shoppingList.totalAmount());
