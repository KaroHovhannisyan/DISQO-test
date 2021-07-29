import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { NoteView } from "..";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./NotePad.styles.scss";

const NotePad = () => {

    return (
        <div>
            <NoteView />
        </div>
    )
}

export default NotePad;
