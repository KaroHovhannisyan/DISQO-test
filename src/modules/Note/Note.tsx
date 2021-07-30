import axios from "axios";
import React from "react";
import {
  TextArea,
  Button,
  Input,
  Switch,
  EditableElement,
} from "../../common/components";
import "./Note.styles.scss";

interface IProps {
  data: any;
  notepad: any;
}

const Note: React.FC<IProps> = ({ data, notepad }) => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    fetch(data.raw_url)
      .then((r) => r.text())
      .then((d) => setContent(d));
  }, [data]);

  const handleContentChange = (description: string) => {
    if (!description) {
      return;
    }

    return;

    fetch(`https://api.github.com/gists/${notepad.id}`, {
      method: "PATCH",
      headers: {
        Authorization: "token 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",
      },
      body: JSON.stringify({
        files: {
          [data.filename]: {
            content: "",
          },
        },
      }),
    });
  };

  return (
    <li>
      <div className="wrapper">
        <img
          src="https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DeleteRed.png"
          className="remove"
        />
        <EditableElement onChange={() => ""}>
          <div className="header">{data.filename}</div>
        </EditableElement>
        <hr />
        <EditableElement onChange={handleContentChange}>
          <p className="body">{content}</p>
        </EditableElement>
      </div>
    </li>
  );
};

export default Note;
