import "./App.css";
import TableComponent from "./components/TableComponent";
import { useEffect, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import Form from "./components/Form";
import Menubar from "./components/Menubar";
import Cards from "./components/Cards";
import Modals from "./components/Modals";
import Containers from "./components/Containers";
import ListComponent from "./components/ListComponent";

function App() {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="App">
      {/* <Menubar />
      <Cards />
      <Modals />
      <Form /> */}
      {/* <Containers /> */}
      <ListComponent />
    </div>
  );
}

export default App;
