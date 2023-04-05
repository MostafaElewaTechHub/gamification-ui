import * as React from "react";
import { useState } from "react";

import QuizTextQuestion from "./textQuestion";

export default function QuizForm(props,x,y,z) {
  const fields = props.tourType;
  
  return (
    <>
      {(fields["tuornament-type"] === "true_false") ? (
        <>
        <QuizTextQuestion setQues={props.setQues[0]} setAns={props.setAns[0]} setFiles={props.setFiles[0]}/>
        <QuizTextQuestion setQues={props.setQues[1]} setAns={props.setAns[1]} setFiles={props.setFiles[1]}/>
        <QuizTextQuestion setQues={props.setQues[2]} setAns={props.setAns[2]} setFiles={props.setFiles[2]}/>
        <QuizTextQuestion setQues={props.setQues[3]} setAns={props.setAns[3]} setFiles={props.setFiles[3]}/>
        </>
      ) : null}
      </>
  );
}
