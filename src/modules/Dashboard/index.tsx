import axios from "axios";
import React from "react";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./Dashboard.styles.scss";
import { useHistory } from "react-router-dom";
import { NotepadDemo } from "..";

axios.interceptors.request.use(function (config) {
    config.headers.Authoirzation = "token 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";
    config.headers.Accept ='application/vnd.github.v3+json';
    config.headers["Access-Control-Allow-Origin"] ='*';

    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

const Dashboard = () => {


    const [data, setData ] = React.useState([]);
    const history = useHistory();

    console.log(data);
    React.useEffect(() => {
        fetch("https://api.github.com/gists", {
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": `token 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`
            }
        })
        .then(response => response.json())
        .then(d => setData(d));
    }, [])

    return (
        <div className="dashboard">
            <Button text={"Create Notepad"} onClick={() => history.push("/create")}/>
            <hr/>
            <div className="notePads">
                {
                    data.map(e => (
                        <NotepadDemo />
                    ))
                }
            </div>

        </div>
    )
}

export default Dashboard;
