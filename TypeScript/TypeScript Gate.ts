// Solve all the typing issues in the code without changing the implementation


const sendMessage = (message: { to: string; text?: string }) => {
  if(typeof message.text === 'string'){
      return message.text.toUpperCase();
  }else{
      return `Text does not exist in the input sorry`
  }
};
console.log(sendMessage({ to: 'Alice'}));

// const sendMessage = (message: { to: string; text?: string }) => {
//   return message.text.toUpperCase();
// };

// sendMessage({ to: 'Alice' });

const sendMessage = (message: { to: string; text?: string }) => {
  return message.text?.toUpperCase();
};

sendMessage({ to: 'Alice' });






