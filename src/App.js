import "./App.css";
import TableComponent from "./components/TableComponent";
import { useEffect, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import Form from "./components/Form";
import Menubar from "./components/Menubar";
import Cards from "./components/Cards";

function App() {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="App">
      <Menubar />
      <Cards />
      {/* <Form /> */}
    </div>
  );
}

export default App;
