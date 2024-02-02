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
import AccordianComp from "./components/AccordianComp";
import AutoCompleteComp from "./components/AutoCompleteComp";
import DrawerMenu from "./components/DrawerMenu";
import SnackBarComp from "./components/SnackBarComp";
import ProgressBarComp from "./components/ProgressBarComp";
import GridSystem from "./components/GridSystem";

function App() {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="App">
      {/* <Menubar />
      <Cards />
      <Modals />
      <Form /> */}
      {/* <Containers /> */}
      {/* <ListComponent /> */}
      {/* <AccordianComp /> */}
      {/* <AutoCompleteComp /> */}
      {/* <DrawerMenu /> */}
      {/* <SnackBarComp /> */}
      {/* <ProgressBarComp /> */}
      <GridSystem />
    </div>
  );
}

export default App;
