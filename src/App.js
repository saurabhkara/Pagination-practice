import useApi from "./network/useApi";
import { TextField } from "@mui/material";
import "./App.css";
import TableComponent from "./components/TableComponent";
import { useEffect, useState } from "react";

function App() {
  const { isLoading, isError, data, searchFinal, setSearchFinal } = useApi();
  const [searchData, setSearchData] = useState("");

  function handleOnchange(e) {
    handleSearchFilter(e.target.value);
    setSearchData(e.target.value);
  }

  function handleSearchFilter(value) {
    if (value === "") {
      setSearchFinal(data);
    } else {
      let result = data.filter((item) => {
        const { firstName } = item;
        return firstName?.toLowerCase().includes(searchData.toLowerCase());
      });
      setSearchFinal(result);
    }
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search "
          variant="outlined"
          onChange={handleOnchange}
        />
      </div>
      <TableComponent
        data={searchFinal}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default App;
