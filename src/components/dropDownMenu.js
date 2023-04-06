import * as React from "react";
import SelectUnstyled, { selectUnstyledClasses } from "@mui/base/SelectUnstyled";
import OptionUnstyled, { optionUnstyledClasses } from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled, Box } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === "dark" ? grey[900] : grey[200]};
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const Label = styled("label")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
  color: ${theme.palette.mode === "dark" ? grey[400] : grey[700]};
  `
);

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

export default function SelectMenu(props) {
  const type = props.type;
  const setValue = props.setValue;
  // console.log(props);
  const handleChange = (event, newValue) => {
    if (event) {
      console.log("🚀 ~ file: dropDownMenu.js:157 ~ handleChange ~ newValue:", newValue);
      setValue(newValue);
    }
  };
  let data = null;
  // console.log(props);
  if (type == "sort") {
    data = [
      { key: "Ascending", value: "ascending", description: "Sort ascending of users" },
      { key: "Descending", value: "descending", description: "Sort descending of users" },
    ];
    // data = [{ ascending: "Ascending" }, { descending: "Descending" }];
  }
  if (type === "operator") {
    data = [
      { key: "Best", value: "best", description: "Choose the best score the user had" },
      { key: "Set", value: "set", description: "Reset the old score and choose the last one only" },
      { key: "Incrementally", value: "increment", description: "Add the new score to the old one" },
    ];
    // data = [{ best: "Best" }, { set: "Set" }, { increment: "Incrementally" }];
  }
  if (type === "criteria") {
    data = [
      {
        key: "Location",
        value: "location",
        description: "Filter the users that can join the tournament based on location",
      },
      {
        key: "Age",
        value: "age",
        description: "Filter the users that can join the tournament based on age",
      },
      {
        key: "Height",
        value: "height",
        description: "Filter the users that can join the tournament based on height",
      },
    ];
    // data = [{ location: "Location" }, { age: "Age" }, { height: "Height" }];
  }
  if (type === "govern") {
    data = [
      { key: "Giza", value: "Giza", description: "city of Giza" },
      { key: "Cairo", value: "Cairo", description: "city of Cairo" },
      { key: "Damietta", value: "Damietta", description: "city of Damietta" },
    ];
    // data = [{ Giza: "Giza" }, { Cairo: "Cairo" }, { Ismailia: "Ismailia" }];
  }
  if (type === "theme") {
    data = [
      {
        key: "True and False",
        value: "true_false",
        description: "Create true and false questions",
      },
      { key: "Multiple Choose Questions", value: "mcq", description: "Create mcq questions" },
      { key: "Points", value: "points", description: "Depends on points from the aplication" },
    ];
    // data = ["true_false", "mcq", "points"];
  }
  if (type === "T&F") {
    data = [
      { key: "Ascending", value: "ascending", description: "ascending" },
      { key: "Descending", value: "descending", description: "dscending" },
    ];
    // data = [{ true: "True" }, { false: "False" }];
  }
  return (
    <div>
      <Box>
        <CustomSelect
          defaultValue={"None"}
          id="named-select"
          name="demo-select"
          onChange={handleChange}
        >
          {data.map((x) => {
            return (
              <Tooltip key={x.key} title={x.description} placement="right-end">
                <StyledOption key={x.key} value={x.value}>
                  {x["key"]}
                </StyledOption>
              </Tooltip>
            );
          })}
        </CustomSelect>
      </Box>
    </div>
  );
}
