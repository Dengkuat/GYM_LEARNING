function formatValue(value: string | number){
  if(typeof value === 'string'){
      return value.toUpperCase();
  }
      return value;
}

console.log(formatValue(10));
console.log(formatValue('10'));



//union type is a type that can be one of many so its under or 
//when we have 2 optionas of what the input would like like then 
//thoes inputs could be having 2 different methods
//string methods and number methods are not the same 
//so we will need to narrow down usign the type narrowing 
