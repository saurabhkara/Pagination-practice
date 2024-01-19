import useApi from "./network/useApi";
import { TextField } from "@mui/material";
import "./App.css";
import TableComponent from "./components/TableComponent";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function App() {
  const { isLoading, isError, data, searchFinal, setSearchFinal } = useApi();
  const [searchData, setSearchData] = useState("");
  const [sortPararm, setSortParam] = useState("");

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
        return firstName?.toLowerCase().includes(value.toLowerCase());
      });
      setSearchFinal(result);
    }
  }

  function sortData(e) {
    let value = e.target.value;
    setSortParam(value);
    let final = data.sort((a, b) => {
      if (value === "firstName") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return a[value] - b[value];
      }
    });
    setSearchFinal(final);
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
          value={searchData}
          onChange={handleOnchange}
        />
        <div style={{ width: "150px", marginLeft: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{sortPararm}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={setSortParam}
              label={sortPararm}
              onChange={sortData}
            >
              <MenuItem value={"id"}>Id</MenuItem>
              <MenuItem value={"age"}>Age</MenuItem>
              <MenuItem value={"firstName"}>First Name</MenuItem>
            </Select>
          </FormControl>
        </div>
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
