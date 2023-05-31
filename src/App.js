import "./App.css";
import NavBar from "./components/navbar";
import SecondNav from "./components/secondNav";
import Calender from "./components/calender";
import InputModal from "./components/modal";

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
