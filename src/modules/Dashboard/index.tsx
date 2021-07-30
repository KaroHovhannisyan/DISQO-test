import axios from "axios";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { TextArea, Button, Input, Switch } from "../../common/components";
import "./Dashboard.styles.scss";
import { useHistory } from "react-router-dom";
import { NotepadDemo } from "..";

axios.interceptors.request.use(
  function (config) {
    config.headers.Authoirzation =
      "token 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";
    config.headers.Accept = "application/vnd.github.v3+json";
    config.headers["Access-Control-Allow-Origin"] = "*";

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const Dashboard = () => {
  const history = useHistory();
  const notepads: any = useSelector(
    (state: any) => state.notepads.data,
    shallowEqual
  );

  console.log(notepads);
  // React.useEffect(() => {
  //     fetch("https://api.github.com/gists", {
  //         headers: {
  //             "Accept": "application/vnd.github.v3+json",
  //             "Authorization": `token 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`
  //         }
  //     })
  //     .then(response => response.json())
  //     .then(d => setData(d));
  // }, [])

  return (
    <div className="dashboard">
      <Button text={"Create Notepad"} onClick={() => history.push("/create")} />
      <hr />
      <div className="notePads">
        {notepads?.map((e: any) => (
          <NotepadDemo
            title={`${e.description}(${Object.keys(e.files).length})`}
            id={e.id}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
