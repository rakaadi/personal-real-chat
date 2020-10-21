import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { GlobalStyle } from "./App.styles";

import ChatBox from "./components/chatbox/ChatBox.component";
import JoinChat from "./components/join-chat/JoinChat.component";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={JoinChat} />
        <Route path="/chat" component={ChatBox} />
      </Router>
    </>
  );
}

export default App;
