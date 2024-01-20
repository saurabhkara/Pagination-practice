import useApi from "./network/useApi";
import { TextField } from "@mui/material";
import "./App.css";
import TableComponent from "./components/TableComponent";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const recordPerPage = 5;

function App() {
  const { isLoading, isError, data, searchFinal, setSearchFinal } = useApi();
  const [searchData, setSearchData] = useState("");
  const [sortPararm, setSortParam] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = searchFinal.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

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

  const handleNextPage = () => {
    if (currentPage !== numbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectedPage = (page) => {
    setCurrentPage(page);
  };

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
      <TableComponent data={records} isLoading={isLoading} isError={isError} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "50px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "20px",
            backgroundColor: "gray",
            margin: "10px",
          }}
          onClick={handlePrevPage}
        >
          Prev
        </div>
        {numbers.map((item) => {
          return (
            <div
              style={{
                width: "45px",
                height: "20px",
                backgroundColor: "gray",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleSelectedPage(item)}
              key={item}
            >
              {item}
            </div>
          );
        })}
        <div
          style={{
            width: "45px",
            height: "20px",
            backgroundColor: "gray",
            margin: "10px",
            cursor: "pointer",
          }}
          onClick={handleNextPage}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
