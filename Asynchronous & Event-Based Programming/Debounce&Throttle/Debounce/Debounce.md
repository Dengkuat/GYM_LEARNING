**What is debounce?**

- This is a technique in js that ensures a function only runs once after a certain amount of time has passed since the last time it was called
- So we can say it delays excicution untill the activity stops

**Why do we need it?**

Some events in the browser fire to many times per second like

- Input in a search box → api calls on every keystroke → server overload
- Scroll on page → function runs hundreds of timer per second → laggy ui
- Redise window → layput calculations run consistently → slow performance

**So we dont control that the app does** 

- It slows down
- Crashes the browser
- Many unecessaru api calls

**Key rememberance**

- Debouncing delay function excecution
- Only the last even counts
- Usefull when we want to wait fro inactivity

**Note**

- no matter how many events fire, debounce will only excecute the function after activity stops for a particular period of time
- So every keystroke resets our timmer untill there is no more
- So the function will be excecuted after the last key with a delay

**How debounce works internally?**

- debounce works with a setTimeout to delay a function excecution
- Each time the event fires then the timer is cleared CLEARTIMEOUT if it already exist
- A new timer starts for that delay
- So only if the timer complets without interaction then thats when the function will be excicuted

```bash
function debounce(func, delay){
	let timer; //keeps the time reference
	
	return function (...args){
		const context = this;
		clearTimeout(timer); //cancels previouse excecution
		timer = setTimeout (()=>{ //schedules function to run after a delay
			func.apply(context, args). excecute the original function with correct this and argument
		}, dalay)
	};
}
```

**Debounce variations**

Debounce behave differently on when you want the function to be excecuted

**Trailing Debounce(most common)**

- Runs after the user stops typing/ no action or keystroke
- So the search input fires after the typing has stopped

**Leading Debounce**

- Runs immiatley on the first event
- Then ignores subsequent events untill delay is over
- Button click then first click triggers immediatly then the next click are ignored for a certain amount of time

**Leading+Trailing Debounce**

- Runs immediatly on the first event and after inactivity at the end
- Really used but usefull in some advanced cases
- Animate trigger to start immediatly the finalit after stopping