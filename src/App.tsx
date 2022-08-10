import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./components/login/Login";
import UserList from "./components/userList/UserList";
import UserDetails from "./components/userDetails/UserDetails";
import { Provider } from "react-redux";
import { store } from "./store";


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="login">Go to Login</Link>
    </div>
  );
};

function App() {
  return (
    <div>
       <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;

