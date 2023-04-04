import * as React from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function ShowMoreForm() {

  return (
    <form >
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
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-read-only-input"
            label="Touranment Max Size"
            defaultValue={0}
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
          ></TextField>
          </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
          id="outlined-read-only-input"
            size="medium"
            label="Touranment Filter"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
                readOnly: true,
              }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          id="outlined-read-only-input"
            size="medium"
            label="Touranment Government"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
                readOnly: true,
              }}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
          id="outlined-read-only-input"
            size="medium"
            label="Touranment Theme"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
                readOnly: true,
              }}
          ></TextField>
        </Grid>
      </Grid>
    </form>
  );
}
