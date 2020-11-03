import logo from './logo.svg';
import './App.css';
var greetings=""

var curDate= new Date()
curDate=curDate.getHours()
if (curDate>1 && curDate>12) {
    greetings="Good Morning"
}
else if(curDate>=12 && curDate<=20)
{
  greetings="Good Evening"
}else
{
  greetings="Good Evening"
}

function App() {
  return (
    <div className="App">
      <h1>Helo Sir, {greetings} 🌹</h1>
    </div>
  );
}

export default App;
