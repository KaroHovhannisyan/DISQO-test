import axios from "axios";
import React from "react";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./Note.styles.scss";


axios.interceptors.request.use(function (config) {
    config.headers.Authoirzation = "token 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";
    config.headers.Accept ='application/vnd.github.v3+json';
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

const NoteView = () => {

    return (
        <div className="note-view">
            <ul>
              {[1,2,3,4,5,6,7,8,9].map(e => (
                <li>
            <a href="#" contentEditable>
              <h2 onInput={(e) => console.log(e)}>Title #1</h2>
              <p onInput={(e) => console.log(e)}>Text Content #1</p>
            </a>
          </li>
              ))}
</ul>
        </div>
    )
}

export default NoteView;
