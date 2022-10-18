import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Routing from "./routes/Routing";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Profile from "./components/Profile";
import ImportEnv from "./components/Import-env";
import GameOrder from "./components/GameOrder";
import GameTime from "./components/GameTime";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem,setDir  } from './redux/login/LoginAction'
import RTL from './components/RTL'
function App() {
  const [connect, setConnect] = useState(false);
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // dispatch(deleteItem());

  return (
    <Provider store={store}>
      <RTL direction={'ltr'}>
     
      <Router>
        <div className="App">
         {/* <h1>App</h1>   */}
          {/* <Header /> */}
          <ImportEnv />
          {/* <GameTime /> */}


          {/* <Routing setConnect={setConnect} connect={connect} /> */}
          {/* <Cart /> */}
        </div>
      </Router>
      </RTL>
    </Provider>
  );
}

export default App;
