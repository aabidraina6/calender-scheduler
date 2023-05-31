import "./App.css";
import NavBar from "./components/navbar";
import SecondNav from "./components/secondNav";
import Calender from "./components/calender";
import DateRangePickerComponent from "./components/dateRangePicker";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SecondNav/>
      <hr></hr>
      <Calender/>
    </div>
  );
}

export default App;
