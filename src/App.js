import "./App.css";
import Banner from "./Components/Banner/Banner";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
