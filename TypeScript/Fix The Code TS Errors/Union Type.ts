type ID = string | number; //type alias

function getLength(id: ID) {
//   return id.length;   // lets use type narrowing to correct this because we have no idea of the outcome
    if(typeof id === 'string'){
        return id.length;
    }else {
        return id.toString().length;
    }
}

console.log(getLength(123));
console.log(getLength("abc"));