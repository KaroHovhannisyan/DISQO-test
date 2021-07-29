import axios from "axios";
import React from "react";
import {
  TextArea,
  Button,
  Input,
  Switch,
  EditableElement,
} from "../../common/components";
import "./Note.styles.scss";

const Note = () => {
  return (
    <li>
      <div className="wrapper">
        <img
          src="https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DeleteRed.png"
          className="remove"
        />
        <EditableElement onChange={(e: any) => console.log(e)}>
          <div>Title #1</div>
        </EditableElement>
        <hr />
        <EditableElement onChange={(e: any) => console.log(e)}>
          <p className="body">Text Content #1</p>
        </EditableElement>
      </div>
    </li>
  );
};

export default Note;
