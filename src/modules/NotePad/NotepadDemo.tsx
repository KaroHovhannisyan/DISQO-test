import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./NotePad.styles.scss";

const NotepadDemo = () => {
  const history = useHistory();
  const id = "asdasdasdasasdas";

  return (
    <div className="notePad" onClick={() => history.push(`/notepads/${id}`)}>
      <h3>Test(7)</h3>
      <img src="./images/notepad.png" />
    </div>
  );
};

export default NotepadDemo;
