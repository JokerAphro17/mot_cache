import "./App.css";
import Header from "./components/Header";

import GameContainer from "./components/GameContainer";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";
import { getUser, login } from "./api/request";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => handleLogin())();
  }, []);

  const handleLogin = async () => {
    try {
      const id = JSON.parse(localStorage.getItem("user"))?.id;
      const { data } = await getUser(id);
      if (data.success) {
        setUser(data.data);
      } else {
        setUser(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {user ? (
        <>
          <Header />
          <GameContainer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
