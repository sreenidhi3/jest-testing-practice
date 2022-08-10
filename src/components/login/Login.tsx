import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/login.services";
import { RootState } from "../../store";
import { setToken } from "../../actions/login.actions";
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export interface LoginState {
  email: {
    value: string;
    error: string;
    touched: boolean;
  };
  password: {
    value: string;
    error: string;
    touched: boolean;
  };
}

interface ReducerAction {
  type: string;
  payload?: any;
}

export const LoginReducer = (state: LoginState, action: ReducerAction): LoginState => {
  switch (action.type) {
    case "ON_EMAIL_CHANGE":
      let updatedEmail = { value: action.payload, error: "" };
      if (!emailRegex.test(action.payload)) {
        updatedEmail.error = "Enter a valid email";
      }
      return { ...state, email: { ...state.email, ...updatedEmail } };
    case "ON_PASSWORD_CHANGE":
      let updatedPassword = { value: action.payload, error: "" };
      if (action.payload.length < 6) {
        updatedPassword.error = "Password should be greater than 6 characters";
      }
      return { ...state, password: { ...state.password, ...updatedPassword } };
    case "SET_EMAIL_TOUCHED":
      return { ...state, email: { ...state.email, touched: true } };
    case "SET_PASSWORD_TOUCHED":
      return { ...state, password: { ...state.password, touched: true } };
    default:
      return state;
  }
};

const Login = () => {
  const reduxDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.loginReducer);
  console.log("ReducerState", state);
  // const [token, setToken] = useState<string>("");
  let navigate = useNavigate();
  let initialState = {
    email: {
      value: "eve.holt@reqres.in",
      error: "",
      touched: false
    },
    password: {
      value: "cityslicka",
      error: "",
      touched: false
    }
  };

  const [loginState, dispatch] = useReducer(LoginReducer, initialState);

  const handleSubmit = async () => {
    const token = postLogin({
      email: loginState.email.value,
      password: loginState.password.value
    })
      .then((data) => {
        // setToken(data.token);
        console.log(data.token);
        reduxDispatch(setToken(data.token));
        console.log(data);
      })
      .then((data) => navigate("/users"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <header style={{ padding: "3rem", margin: "auto" }}>
        <div>
          <label>
            {" "}
            Email: <br />
            <input
              type="text"
              placeholder="Email"
              value={loginState.email.value}
              onChange={(e) =>
                dispatch({ type: "ON_EMAIL_CHANGE", payload: e.target.value })
              }
              onBlur={() => dispatch({ type: "SET_EMAIL_TOUCHED" })}
            />
          </label>
          {loginState.email.touched && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {loginState.email.error}
            </p>
          )}
        </div>

        <div>
          <label>
            {" "}
            Password: <br />
            <input
              type="password"
              placeholder="Password"
              value={loginState.password.value}
              onChange={(e) =>
                dispatch({
                  type: "ON_PASSWORD_CHANGE",
                  payload: e.target.value
                })
              }
              onBlur={() => dispatch({ type: "SET_PASSWORD_TOUCHED" })}
            />
          </label>
          {loginState.password.touched && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {loginState.password.error}
            </p>
          )}
        </div>

        <button onClick={handleSubmit}>Login</button>

        <h4>{state.token}</h4>
      </header>
    </div>
  );
};

export default Login;
