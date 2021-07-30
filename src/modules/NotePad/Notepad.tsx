import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Note } from "..";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./NotePad.styles.scss";

const NotePad = () => {
  const [data, setData] = React.useState([{
    title: "test",
    file: "dzyaaaana",
    id: "sd",
  }]);
  return (
    <div>
      <div className="note-view">
        <ul>
          {data.map((e) => (
            <Note key={e.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotePad;
