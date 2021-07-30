import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Note } from "..";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./Notepad.styles.scss";

interface IProps {
  createMode?: boolean;
}

const NotePad: React.FC<IProps> = ({ createMode }) => {
  const [editableMode, setEditableMode] = React.useState(false);
  const [notes, setNotes] = React.useState([]);
  const { id }: { id: string } = useParams();
  const notepad: any = useSelector(
    (state: any) => state.notepads.idMap[id],
    shallowEqual
  );

  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    setTitle(notepad.description);
  }, [notepad]);

  if (createMode) {
    return (
      <>
        <Input
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
        />
        <div className="note-view">
          <ul>
            {notes.map((key) => (
              <Note key={key} data={notepad.files[key]} notepad={notepad} />
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <div>
      {editableMode ? (
        <Input value={title} />
      ) : (
        <h1 onClick={() => setEditableMode(true)}>{notepad?.description}</h1>
      )}
      <div className="note-view">
        <ul>
          {Object.keys(notepad?.files || {}).map((key) => (
            <Note key={key} data={notepad.files[key]} notepad={notepad} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotePad;
