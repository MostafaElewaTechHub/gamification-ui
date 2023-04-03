import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormLabel } from "@mui/material";
import LabeledValuesSlider from "src/components/formSlider";
import SelectMenu from "src/components/dropDownMenu";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Form Submitted");
};

export default function TouranmentForm() {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Tournament</h2>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Touranment Title"
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Touranment Theme"
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-number"
            label="Touranment Max Size"
            defaultValue={0}
            size="medium"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            label="Touranment Description"
            size="medium"
            multiline
            rows={3}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="datetime-local"
            size="medium"
            label="Touranment Start Time"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="datetime-local"
            size="medium"
            label="Touranment End Time"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Touranment Sort Type</FormLabel>
          <SelectMenu type="sort" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Touranment Operator</FormLabel>
          <SelectMenu type="operator" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormLabel>Touranment Filter</FormLabel>
          <SelectMenu type="criteria" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Touranment Government</FormLabel>
          <SelectMenu type="govern" />
        </Grid>
        <Grid alignSelf={"center"} alignItems={"center"} justifyContent={"right"}>
          <Button variant="contained" type="submit" size="large">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
