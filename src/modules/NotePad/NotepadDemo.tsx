import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CREATE_ROUTE_FOR_NOTEPAD } from "../../configs/constants";
import "./Notepad.styles.scss";
import { removeNotepadById } from "./redux/actions";

interface IProps {
  title: string;
  id: string;
}

const NotepadDemo: React.FC<IProps> = ({ id, title }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNotepadRemove = () => {
    dispatch(removeNotepadById(id));
  };

  return (
    <div className="notepad">
      <img
        className="remove"
        src="./images/remove.png"
        onClick={handleNotepadRemove}
      />
      <div onClick={() => history.push(CREATE_ROUTE_FOR_NOTEPAD(id))}>
        <h3>{title}</h3>
        <img src="./images/notepad.png" />
      </div>
    </div>
  );
};

export default NotepadDemo;
