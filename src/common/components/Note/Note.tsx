import React from "react";
import { EditableElement } from "..";
import { INote } from "../../../modules/Notepad/Interfaces";
import "./Note.styles.scss";

interface IProps {
  data: INote;
  onNoteChange: (key: string, value: string, id: string) => void;
}

const Note: React.FC<IProps> = ({ data, onNoteChange }) => {
  const [saved, setSaved] = React.useState(false);

  const handleChange = (key: string, value: string, id: string) => {
    console.log("change", key, value);
    onNoteChange(key, value, id);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);
  };

  console.log("render");

  return (
    <li>
      <div className="wrapper">
        <i className="fa fa-remove" />
        <EditableElement
          onChange={(value: string) => handleChange("title", value, data.id)}
        >
          <div className="header">{data.title}</div>
        </EditableElement>
        <EditableElement
          onChange={(value: string) =>
            handleChange("description", value, data.id)
          }
        >
          <p className="body">{data.description}</p>
        </EditableElement>
        {saved && <i className="fa fa-check saved">Saved</i>}
      </div>
    </li>
  );
};

export default Note;
