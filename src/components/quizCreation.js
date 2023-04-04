import * as React from "react";
import { useState } from "react";

import QuizTextQuestion from "./textQuestion";

export default function QuizForm(props,x,y,z) {
  const fields = props.tourType;
  
  return (
    <>
      {(fields["tuornament-type"] === "True & False") ? (
        <QuizTextQuestion setQues={props.setQues[0]} setAns={props.setAns[0]} setFiles={props.setFiles[0]}/>
      ) : null}
      </>
  );
}
