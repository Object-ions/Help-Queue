import React from "react";
import Header from "./components/Header";
import TicketList from "./components/TicketList";

function App() {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
}

export default App;