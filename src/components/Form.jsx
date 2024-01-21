import React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    terms: false,
    gender: "",
  });

  function handleOnChange(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          variant="outlined"
          placeholder="Enter Name"
          sx={{ margin: "20px" }}
          value={data.name}
          type="text"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          type="email"
          name="email"
          variant="outlined"
          placeholder="Enter email"
          sx={{ margin: "20px" }}
          value={data.email}
          onChange={handleOnChange}
        />
        <br />
        <TextField
          type="password"
          name="password"
          variant="outlined"
          placeholder="Enter password"
          sx={{ margin: "20px" }}
          value={data.password}
          onChange={handleOnChange}
        />
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setData((prevState) => ({
                    ...prevState,
                    terms: !data.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel id="menu">Select </InputLabel>
          <Select
            labelId="menu"
            label="Courses"
            name="course"
            value={data.course}
            onChange={handleOnChange}
          >
            <MenuItem value="mongodb">Mongo DB</MenuItem>
            <MenuItem value="react">React</MenuItem>
            <MenuItem value="express">Express js</MenuItem>
            <MenuItem value="node">Node js</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl>
          <RadioGroup name="gender" onChange={handleOnChange}>
            <FormControlLabel label="Male" value="male" control={<Radio />} />
            <FormControlLabel
              label="Female"
              value="female"
              control={<Radio />}
            />
            <FormControlLabel label="Other" value="Other" control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type="submit" sx={{ margin: "20px" }} variant="outlined">
          Submit form
        </Button>
      </form>
      <br />
    </div>
  );
}
