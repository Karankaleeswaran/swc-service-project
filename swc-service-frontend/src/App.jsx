import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import BookService from "./components/BookService";
import ShopDetails from "./components/ShopDetails";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  if (!loggedIn) {
    return showRegister ? (
      <Register setShowRegister={setShowRegister} />
    ) : (
      <Login
        setLoggedIn={setLoggedIn}
        setShowRegister={setShowRegister}
      />
    );
  }

  if (currentPage === "bookService") {
    return <BookService setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === "ShopDetails") {
    return <ShopDetails setCurrentPage={setCurrentPage} />;
  }

  return (
    <Home
      setLoggedIn={setLoggedIn}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;