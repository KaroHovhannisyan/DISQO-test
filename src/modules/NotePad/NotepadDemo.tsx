import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CREATE_ROUTE_FOR_NOTEPAD } from "../../configs/constants";
import "./Notepad.styles.scss";
import { removeNotepadById } from "./redux/actions";

interface IProps {
  title: string;
  id: string;
  notesCount: number;
  createdAt: string | Date;
}

const NotepadDemo: React.FC<IProps> = ({
  id,
  title,
  notesCount,
  createdAt,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNotepadRemove = (e: any) => {
    e.stopPropagation();
    dispatch(removeNotepadById(id));
  };

  return (
    <div
      className="notepad2"
      onClick={() => history.push(CREATE_ROUTE_FOR_NOTEPAD(id))}
    >
      <i className="fa fa-remove" onClick={handleNotepadRemove}></i>
      <h3>{title}</h3>
      <p>Notes: {notesCount}</p>
      <p className="date">{moment(createdAt).format("MMMM DD YYYY")}</p>
    </div>
  );
};

export default NotepadDemo;
