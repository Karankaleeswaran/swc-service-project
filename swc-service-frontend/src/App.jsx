import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (loggedIn) {
    return <Home />;
  }

  return (
    <>
      {showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <Login
          setLoggedIn={setLoggedIn}
          setShowRegister={setShowRegister}
        />
      )}
    </>
  );
}

export default App;
