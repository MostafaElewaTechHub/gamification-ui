import * as React from "react";
import { FormLabel } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import { th } from "date-fns/locale";
import TextField from "@mui/material/TextField";
import SelectMenu from "./dropDownMenu";

export default function QuizTextQuestion(props) {
  return (
    <div>
        <TextField
          id="outlined-multiline-static"
          label="Question"
          size="medium"
          onChange={(e) => {
            props.setQues(e.target.value);
          }}
          multiline
          rows={1}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>

    {/*<input type="file" onChange={(e) => setFile1(e.target.files[0].name)} />*/}

        <FormLabel>Answer</FormLabel>
        <SelectMenu type="T&F" setValue={props.setAns}/>
    </div>
  );
}
