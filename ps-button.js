// This site you can run this React code on without anything setup: https://jscomplete.com/playground


/*
function logRandom() {
  console.log(Math.random());
}

is the same as the ES6 arrow function declaration...

() => console.log(Math.random())
*/


// This is the button counter component

//This function has no fucking clue what these embedded function names are, they are simply the bitch to the parent, that can pass information into its children. Since App is the parent component, we can access the information in the child component Button by passing props.onClickFunction and props.increment since were allowing our button to receive this information in the App component. 

//handleClick grabs the props.increment value and feeds it into props.onClickFunction every time a button is pressed. This value is fed into incrementCounter as the incrementValue value, and then adds that amount to the current state of the counter.

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}


// This is the display value component
function Display(props) {
  return (
  <div>
    {props.message}
  </div>
  );
}

//App
function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return(
  <div>
    <Button onClickFunction={incrementCounter} increment={1}/>
    <Button onClickFunction={incrementCounter} increment={5}/>
    <Button onClickFunction={incrementCounter} increment={10}/>
    <Button onClickFunction={incrementCounter} increment={100}/>
    <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);

