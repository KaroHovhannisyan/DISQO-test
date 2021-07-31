import React from "react";
import {
  TextArea,
  Button,
  Input,
  Switch,
  EditableElement,
} from "../../common/components";
import { INote } from "../Notepad/Interfaces";
import "./Note.styles.scss";

interface IProps {
  data: INote;
  onNoteChange: (key: string, value: string, id: string) => void;
}

const Note: React.FC<IProps> = ({ data, onNoteChange }) => {
  return (
    <li>
      <div className="wrapper">
        <img
          src="https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DeleteRed.png"
          className="remove"
        />
        <EditableElement
          onChange={(value: string) => onNoteChange("title", value, data.id)}
        >
          <div className="header">{data.title}</div>
        </EditableElement>
        <hr />
        <EditableElement
          onChange={(value: string) =>
            onNoteChange("description", value, data.id)
          }
        >
          <p className="body">{data.description}</p>
        </EditableElement>
      </div>
    </li>
  );
};

export default Note;
