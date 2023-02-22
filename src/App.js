import "./App.css";
import Backdrop from "./Components/Backdrop/Backdrop";
import Banner from "./Components/Banner/Banner";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Backdrop />
      <SignUp />
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
