import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/userForm";
import EditUser from "./components/userForm/edituser";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/edit-user/:userId"
            element={<EditUser/>} />


          <Route
            exact
            path="/"
            element={<UserForm />}
          />
          <Route
            exact
            path="/userlist"
            element={<UserList />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
