import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Note } from "..";
import { Button, Input } from "../../common/components";
import { MAIN_PATH } from "../../configs/constants";
import { RootState } from "../../redux/reducers";
import { deepClone, generateId } from "../../utils/helperFunctions";
import { INote, INotepad } from "./Interfaces";
import { addNotepad, editNotepad, getNotepadById } from "./redux/actions";

import "./Notepad.styles.scss";


interface IProps {
  createMode?: boolean;
}

const NotePad: React.FC<IProps> = ({ createMode }) => {
  // const [editableMode, setEditableMode] = React.useState(false);
  const [notes, setNotes] = React.useState<INote[]>([]);
  const [title, setTitle] = React.useState("");

  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const notepad: INotepad = useSelector(
    (state: RootState) => state.notepads.idMap[id]
  );

  React.useEffect(() => {
    if (!createMode) {
      dispatch(getNotepadById(id));
    }
  }, [createMode, dispatch, id]);

  React.useEffect(() => {
    if (!notepad) return;
    setTitle(notepad?.title);
    setNotes(notepad?.notes);
  }, [notepad]);

  const handleAddNote = () => {
    setNotes([
      ...notes,
      { title: "TITLE", description: "Description", id: generateId() },
    ]);
  };

  const handleSaveNotepad = () => {
    dispatch(
      addNotepad(
        { title, notes, id: generateId(), createdAt: new Date() },
        () => history.push(MAIN_PATH)
      )
    );
  };

  const handleNoteChange = React.useCallback(
    (key: string, value: string, id: string) => {
      const notesClone = deepClone(notes);
      const foundIndex = notesClone.findIndex((note: INote) => note.id === id);
      if (value !== notesClone[foundIndex][key]) {
        notesClone[foundIndex][key] = value;
        setNotes(notesClone);
        if (!createMode) {
          dispatch(editNotepad(notesClone[foundIndex], notepad.id));
        }
      }
    },
    [notes, dispatch, notepad, createMode]
  );

  return (
    <div>
      <div className="header">
        <div className="back" onClick={() => history.push(MAIN_PATH)}>
          <img
            src="https://static.thenounproject.com/png/3403548-200.png"
            alt="back"
          />
          <h1>Dashboard</h1>
        </div>
        {createMode && (
        <Button
          text="Create notepad"
          onClick={handleSaveNotepad}
          disabled={!title || !notes.length}
        />
      )}
      </div>

      <hr/>

      <div className="add-description flex space-beetwen">
        <Input
          name="title"
          placeholder="Notepad name"
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
        />
        <Button text="Add note" onClick={handleAddNote} />
      </div>
      <div className="note-view">
        <ul>
          {notes?.map((note) => (
            <Note key={note.id} data={note} onNoteChange={handleNoteChange} />
          ))}
        </ul>
      </div>

    </div>
  );
};

export default NotePad;
