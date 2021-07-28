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

const Note = () => {

    const handleSave = () => {
        axios.get('https://api.github.com/gists',)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="note">
            <Input placeholder={"Name"} />
            <TextArea/>
            <Switch />
            <Button text="SAve" onClick={handleSave} />
        </div>
    )
}

export default Note;