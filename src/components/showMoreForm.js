import * as React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function ShowMoreForm({ tournment }) {
  console.log("🚀 ~ file: showMoreForm.js:6 ~ ShowMoreForm ~ tournment:", tournment);

  return (
    <form>
      <h2>Tournament Details</h2>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-read-only-input"
            label="Touranment Title"
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            defaultValue={`${tournment.title}`}
          >
            sasa
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-read-only-input"
            label="Touranment Max Size"
            defaultValue={`${tournment.maxSize}`}
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-read-only-input"
            label="Touranment Description"
            size="medium"
            multiline
            rows={3}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            defaultValue={`${tournment.description}`}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-read-only-input"
            size="medium"
            label="Touranment Start Time"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            defaultValue={new Date(tournment.startTime * 1000).toLocaleString()}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-read-only-input"
            size="medium"
            label="Touranment End Time"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            defaultValue={tournment.endTime ? tournment.endTime : "Infinity"}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-read-only-input"
            size="medium"
            label="Touranment Sort Type"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            defaultValue={`${tournment.sortOrder}`}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="outlined-read-only-input"
            size="medium"
            label="Touranment Operator"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true,
            }}
            defaultValue={`${tournment.operator}`}
          ></TextField>
        </Grid>
      </Grid>
    </form>
  );
}
