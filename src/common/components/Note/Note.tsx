import React from "react";
import {
  EditableElement,
} from "..";
import { INote } from "../../../modules/Notepad/Interfaces";
import "./Note.styles.scss";

interface IProps {
  data: INote;
  onNoteChange: (key: string, value: string, id: string) => void;
}

const Note: React.FC<IProps> = ({ data, onNoteChange }) => {
  return (
    <li>
      <div className="wrapper">
        <i className="fa fa-remove" />
        <EditableElement
          onChange={(value: string) => onNoteChange("title", value, data.id)}
        >
          <div className="header">{data.title}</div>
        </EditableElement>
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
