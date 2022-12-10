import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "./actions";
import { login } from "./actions/loginAction";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      <h2>Counter is {counter}</h2>
      <button
        onClick={() => {
          dispatch(increament());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decreament());
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch(login());
        }}
      >
        Login
      </button>
      {isLoggedIn ? <h3>Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
