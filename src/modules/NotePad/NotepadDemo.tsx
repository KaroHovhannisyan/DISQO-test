import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./Notepad.styles.scss";

interface IProps {
  title: string;
  id: string;
}

const NotepadDemo: React.FC<IProps> = ({ id, title }) => {
  const history = useHistory();

  return (
    <div className="notePad" onClick={() => history.push(`/notepads/${id}`)}>
      <h3>{title}</h3>
      <img src="./images/notepad.png" />
    </div>
  );
};

export default NotepadDemo;
