import axios from "axios";
import React from "react";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./Dashboard.styles.scss";
import NotePad from "../NotePad";

const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="notePads">
                <NotePad />
                <NotePad />
                <NotePad />
                <NotePad />
            </div>

        </div>
    )
}

export default Dashboard;
