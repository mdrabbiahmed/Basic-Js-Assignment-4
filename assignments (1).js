// Problem-1

function radianToDegree(radians) {
    if(typeof radians == 'number'){
        let radianConvert = radians * (180 / Math.PI);
        let twodigitConvert = radianConvert.toFixed(2);
        return twodigitConvert;
    }
   else{
    return "please given a valid input?";
   }
}
let radianValue = radianToDegree(10);
console.log(radianValue);


// Problem-2

function isJavaScriptFile(str) {
    if(typeof str == 'string'){
        if (str.endsWith('.js')){
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return "please given a valid input?";
    }
  
}
let newString = isJavaScriptFile('image.js.png'); 
console.log(newString);



// Problem-3

function oilPrice(diselQuantity, petrolQuantity, octenQuantity) {
    
    if(typeof diselQuantity == 'number' && typeof petrolQuantity == 'number' && typeof octenQuantity == 'number'){
        let diselPrice = 114 * diselQuantity;
        let petrolPrice = 130 * petrolQuantity;
        let octenPrice = 135 * octenQuantity;
        let totalPrice = diselPrice + petrolPrice + octenPrice;
        return totalPrice;
    }
    else{
        return "please given a valid input?";
    }
    
    
}
let value = oilPrice(1,1,1);
console.log(value);



// Problem-4

function publicBusFare(manQuantity) {

    if(typeof manQuantity == 'number'){
        let busRemainingMan = manQuantity % 50;
        let newBusRemainingMan = busRemainingMan % 11;
        let publicBuserVhara = newBusRemainingMan * 250;
        return publicBuserVhara;
    }
    else{
        return "please given a valid input?";
    }

}
let passengers = publicBusFare(0);
console.log(passengers);



// Problem -5

function isBestFriend(namelist1, namelist2) {
    if(typeof namelist1 == 'object'  && typeof namelist2 == 'object'){
        if (namelist1.name === namelist2.friend  && namelist1.friend === namelist2.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return "please given a valid input?";
    }
    
}
let list1 = {name: 'doe', friend: 'john'};
let list2 = {name: 'john', friend: 'doe'};
let bestFriendList = isBestFriend(list1, list2);
console.log(bestFriendList);
