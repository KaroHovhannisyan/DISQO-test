import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Note } from "..";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./NotePad.styles.scss";

const NotePad = () => {
  // const [data, setData] = React.useState([1]);
  return (
    <div>
      <div className="note-view">
        <ul>
          {[1, 2].map((e) => (
            <Note />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotePad;
