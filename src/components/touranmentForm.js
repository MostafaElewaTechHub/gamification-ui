import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, FormLabel } from "@mui/material";
import LabeledValuesSlider from "src/components/formSlider";
import SelectMenu from "src/components/dropDownMenu";
import { Box, textAlign } from "@mui/system";
import { Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const baseURL = "http://localhost:5000/api/v1/tournament";

const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(event);
  alert("Form Submitted");
};

export default function TouranmentForm() {
  // console.log(new Date().getTime());
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");

  const [message, setMessage] = useState("");
  const [joinRequired, setJoinRequired] = useState("");
  const [subject, setSubject] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [operator, setOperator] = useState("best");
  const [maxSize, setMaxSize] = useState("");
  const [startTime, setStartTime] = useState(Math.floor(new Date().getTime() / 1000));
  const [governorate, setGovernorate] = useState("Giza");
  const [endTime, setEndTime] = useState(0);

  //   const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(baseURL, {
        notification: {
          subject: "New tournment",
          content: {
            message: "you have been added to a new tournment",
          },
          code: 101,
          persistent: true,
        },
        users: [],
        filter: {
          location: governorate,
        },
        tournament: {
          authoritative: false,
          sortOrder,
          operator,
          duration: 360000,
          resetSchedule: "0,50 0,59 0,3 ? * * *",
          metadata: {
            weatherConditions: "rain",
          },
          title,
          description,
          category: 0,
          startTime: 1648622837,
          endTime: 0,
          maxSize,
          maxNumScore: 2,
          joinRequired: true,
        },
      });
      console.log(res);
      if (res.status === 200) {
        setMessage("Succefully created And you will be redirected within Two seconds");
        setTimeout(() => {
          router.push("/touranments");
        }, 2000);

        console.log("created");
      } else {
        console.log(res);
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Create Tournament</h2>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Touranment Title"
              size="medium"
              onChange={(e) => setTitle(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Touranment Theme"
              size="medium"
              onChange={(e) => console.log(e.target.value)}
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
              onChange={(e) => setMaxSize(Number(e.target.value))}
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
              onChange={(e) => setDescrption(e.target.value)}
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
              onChange={(e) => console.log(e.target.value)}
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
            <SelectMenu setValue={setSortOrder} type="sort" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Touranment Operator</FormLabel>
            <SelectMenu setValue={setOperator} type="operator" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormLabel>Touranment Filter</FormLabel>
            <SelectMenu type="criteria" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormLabel>Touranment Government</FormLabel>
            <SelectMenu setValue={setGovernorate} type="govern" />
          </Grid>
          <Grid alignSelf={"center"} alignItems={"center"} justifyContent={"right"}>
            <Button variant="contained" type="submit" size="large">
              Submit
            </Button>
          </Grid>
        </Grid>
        <h1 style={{ "text-align": "center" }}>{message}</h1>
      </form>
    </Container>
  );
}
