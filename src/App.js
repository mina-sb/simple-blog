import { useContext } from "react";
import "./App.css";
import { AppContext } from "./Components/AppContext";
import Backdrop from "./Components/Backdrop/Backdrop";
import Banner from "./Components/Banner/Banner";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  const { showModal, showLogin, showRegister } = useContext(AppContext);
  const [modal, setModal] = showModal;
  const [login, setLogin] = showLogin;
  const [register, setRegister] = showRegister;
  return (
    <div className="App">
      {modal ? <Backdrop /> : ""}
      {login ? <SignIn /> : ""}
      {register ? <SignUp /> : ""}
      <Header />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
