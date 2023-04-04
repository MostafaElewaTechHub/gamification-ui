import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormLabel } from "@mui/material";
import LabeledValuesSlider from "src/components/formSlider";
import SelectMenu from "src/components/dropDownMenu";
import ThemeSelectMenu from "src/components/themeDropDownMenu";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import QuizForm from "./quizCreation";
const baseURL = "http://localhost:5000/api/v1/tournament";

export default function TouranmentForm() {
  const keyvalue = {
    '1.jpg': 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
    '2.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/1200px-Norton_Motorcycle.jpg',
    '3.jpg': 'https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg',
    '4.jpg': 'https://iheartcraftythings.com/wp-content/uploads/2021/11/6-48.jpg',
    '5.jpg': 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F221206145132-02-american-girl-of-the-year-doll-south-asian-cec.jpg',
    '6.jpg': 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1',
    '7.jpg': 'https://static-prod-web.miniclip.com/assets/news/17_PR_SYBO.jpg',
    '8.jpg': 'https://imagevars.gulfnews.com/2021/11/12/UAE-flag_17d13e15440_medium.jpg',
    '9.jpg': 'https://t4.ftcdn.net/jpg/05/08/76/43/360_F_508764363_sCzUOxHSQJOAjc5n7o9pjYYX1r8GuRMV.jpg'
  }
  
  console.log(new Date().getTime());
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
  const [fields, setFields] = useState({"tuornament-type":"True & False"});
  const [theme, setTheme] = useState();
  const [q1, setQ1] = useState("");
  const [a1, setA1] = useState(true);
  const [q2, setQ2] = useState("");
  const [a2, setA2] = useState(true);
  const [q3, setQ3] = useState("");
  const [a3, setA3] = useState(true);
  const [q4, setQ4] = useState("");
  const [a4, setA4] = useState(true);
  
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();

  const arrSetsQues = [setQ1,setQ2,setQ3,setQ4];
  const arrSetsAns = [setA1,setA2,setA3,setA4];
  const arrSetsFiles = [setFile1,setFile2,setFile3,setFile4];

  //   const navigate = useNavigate();
  let handleSubmit = async (e) => {
    // console.log("🚀 ~ file: touranmentForm.js:22 ~ TouranmentForm ~ title:", title);
    // console.log("🚀 ~ file: touranmentForm.js:23 ~ TouranmentForm ~ description:", description);
    console.log("🚀 ~ file: touranmentForm.js:29 ~ TouranmentForm ~ operator:", operator);

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
          sortOrder: "ascending",
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
        objects: [
          {
          collection: theme,
          key: "",
          value: `{"questions": [{"question": "${q1}","answer": ${a1},"image":"${keyvalue[file1]}"},{"question": "${q2}","answer": ${a2} ,"image":"${keyvalue[file2]}"},{"question": "${q3}","answer": ${a3} ,"image":"${keyvalue[file3]}"},{"question": "${q4}","answer": ${a4} ,"image":"${keyvalue[file4]}"}]}`,
          version: null,
          permissionWrite: 1,
          permissionRead: 2
          }
      ]});
      console.log(res);
      if (res.status === 200) {
        // console.log(res.data.token);
        // localStorage.setItem("jwt", res.data.token);
        // console.log(localStorage.getItem("jwt"));
        // navigate("/tournments");
        console.log("created");
      } else {
        console.log(res);
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

console.log(q1,a1);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Tournament</h2>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Touranment Title"
            size="medium"
            onChange={(e) => setTitle(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
        </Grid>
        
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={3}>
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
        <Grid item xs={12} sm={3}>
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

        <Grid item xs={12} sm={6}>
          <FormLabel>Touranment Theme</FormLabel>
          <ThemeSelectMenu util={setFields} setValue={setTheme}/>
        </Grid>
        <Grid item xs={12} sm={12}>
            <QuizForm setQues={arrSetsQues} setAns={arrSetsAns} setFiles={arrSetsFiles} tourType={fields}/>
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
