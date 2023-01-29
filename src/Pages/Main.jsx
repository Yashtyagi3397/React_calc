import React, { useState } from "react";
import Allbutton from "../components/Allbutton";
import Operation from "../components/Operation";
import Textbox from "../components/Textbox";

const Main = () => {
  const [val, setVal] = useState("");
  const clearOne = () => {
    setVal(val.substring(0, val.length - 1));
  };
  const clear = () => {
    setVal("");
  };
  const calculate = () => {
    setVal(eval(val));
  };
  const fn = (title) => {
    setVal(val + title);
    console.log(val);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Calculator App</h1>
        <Textbox val={val} />
        <br />
        <br />
        <Allbutton fn={fn} title="1" />
        &nbsp;
        <Allbutton fn={fn} title="2" />
        &nbsp;
        <Allbutton fn={fn} title="3" />
        &nbsp;
        <Allbutton fn={fn} title="+" />
        &nbsp;
        <Operation fn={clearOne} title="<-" />
        <br />
        <br />
        <Allbutton fn={fn} title="4" />
        &nbsp;
        <Allbutton fn={fn} title="5" />
        &nbsp;
        <Allbutton fn={fn} title="6" />
        &nbsp;
        <Allbutton fn={fn} title="-" />
        <br />
        <br />
        <Allbutton fn={fn} title="7" />
        &nbsp;
        <Allbutton fn={fn} title="8" />
        &nbsp;
        <Allbutton fn={fn} title="9" />
        &nbsp;
        <Allbutton fn={fn} title="*" />
        <br />
        <br />
        <Allbutton fn={fn} title="0" />
        &nbsp;
        <Operation fn={clear} title="AC" />
        &nbsp;
        <Operation fn={calculate} title="=" />
        &nbsp;
        <Allbutton fn={fn} title="/" />
        &nbsp;
      </div>
    </>
  );
};

export default Main;
