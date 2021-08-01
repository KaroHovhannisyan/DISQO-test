import React from "react";
import { EditableElement } from "..";
import { INote, INotepad } from "../../../modules/Notepad/Interfaces";
import "./Note.styles.scss";

interface IProps {
  data: INote;
  onNoteChange: (key: string, value: string, id: string) => void;
  onNoteRemove: (data: INote) => void;
}

const Note: React.FC<IProps> = ({ data, onNoteChange, onNoteRemove }) => {
  const [saved, setSaved] = React.useState(false);

  const handleChange = (key: string, value: string, id: string) => {
    onNoteChange(key, value, id);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);
  };

  return (
    <li>
      <div className="wrapper">
        <i className="fa fa-remove" onClick={() => onNoteRemove(data)} />
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
