const prompt = require("prompt-sync")({sigint:true});

let totalItems = prompt("How many items are required for this module? ");

let itemList = [];

for (i = 0; i < totalItems; i++) {
    itemList[i] = prompt(`Please enter item no. ${i+1}: `);
}

console.log(itemList);