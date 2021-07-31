import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Note } from "..";
import { TextArea, Button, Input, Switch } from "../../common/components";
import { CREATE_ROUTE_FOR_NOTEPAD, MAIN_PATH } from "../../configs/constants";
import { deepClone, generateId } from "../../utils/helperFunctions";
import { INote } from "./Interfaces";
import "./Notepad.styles.scss";
import { addNotepad, editNotepad, getNotepadById } from "./redux/actions";

interface IProps {
  createMode?: boolean;
}

const NotePad: React.FC<IProps> = ({ createMode }) => {
  const [editableMode, setEditableMode] = React.useState(false);
  const [notes, setNotes] = React.useState<INote[]>([]);
  const [title, setTitle] = React.useState("");

  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const notepad: any = useSelector(
    (state: any) => state.notepads.idMap[id],
  );

  React.useEffect(() => {
    if(!createMode) {
      dispatch(getNotepadById(id))
    }
  }, [])

  React.useEffect(() => {
    setTitle(notepad?.title);
    setNotes(notepad?.notes);
  }, [ notepad ]);

  // React.useEffect(() => {
  //   notes?.forEach(note => {
  //     if(!note.description && note.raw_url) {
  //       dispatch(getNoteContent(note.raw_url, note.title, notepad.id))
  //     }
  //   })
  // }, [notes]);

  const handleAddNote = () => {
    setNotes([...notes, { title: "", description: "", id: generateId() }]);
  };

  const handleSaveNotepad = () => {
    dispatch(
      addNotepad({ title, notes, id: generateId() }, (id: string) =>
        history.push(CREATE_ROUTE_FOR_NOTEPAD(id))
      )
    );
  };

  const handleNoteChange = React.useCallback(
    (key: string, value: string, id: string) => {
      console.log(key, value);
      const notesClone = deepClone(notes);
      const foundIndex = notesClone.findIndex((note: INote) => note.id == id);
      if (value !== notesClone[foundIndex][key]) {
        notesClone[foundIndex][key] = value;
        setNotes(notesClone);
        if (!createMode) {
          dispatch(editNotepad(notesClone[foundIndex], notepad.id))
        }
      }
    },
    [notes, dispatch, notepad]
  );

    return (
      <>
        <div className="header">
          <div className="back" onClick={() => history.push(MAIN_PATH)}>
            <img src="https://static.thenounproject.com/png/3403548-200.png" />
            <h1>Dashboard</h1>
          </div>

          <Button text="Add note" onClick={handleAddNote} />
        </div>

        <div className="add-description">
          <Input
            name="title"
            placeholder="Notepad name"
            onChange={(e) => setTitle(e.currentTarget.value)}
            value={title}
          />
        </div>

        <div className="note-view">
          <ul>
            {notes?.map((note) => (
              <Note key={note.id} data={note} onNoteChange={handleNoteChange} />
            ))}
          </ul>
        </div>

        {createMode && <Button
          text="Create notepad"
          onClick={handleSaveNotepad}
          disabled={!title || !notes.length}
        />}
      </>
    );
};

export default NotePad;
