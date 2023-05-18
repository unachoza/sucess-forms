//@ts-nocheck
import { useState, useEffect } from "react";
import MessageList from "./components/MessageList/MessageList";
import Form from "./components/Form-Modal/Form";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"


const App = () => {
  return (
    <div>
        <NavBar/>
        <MessageList/>
        <Form/>
    </div>
  );
};


/*properties
 text
 color
 outline
 onClick */

export default App