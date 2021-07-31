import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TextArea, Button, Input, Switch, Tabs } from "../../common/components";
import "./Dashboard.styles.scss";
import { useHistory } from "react-router-dom";
import { Charts, NotepadDemo } from "..";
import { CREATE_NOTEPAD } from "../../configs/constants";
import { INote, INotepad } from "../Notepad/Interfaces";
import { getNotepads } from "../Notepad/redux/actions";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const notepads: any = useSelector(
    (state: any) => state.notepads.data,
    shallowEqual
  );

  React.useEffect(() => {
    dispatch(getNotepads());
  }, []);

  console.log(notepads);
  // React.useEffect(() => {
  //     fetch("https://api.github.com/gists", {
  //         headers: {
  //             "Accept": "application/vnd.github.v3+json",
  //         }
  //     })
  //     .then(response => response.json())
  //     .then(d => setData(d));
  // }, [])

  return (
    <div className="dashboard">
      <Tabs
        entries={[
          {
            title: "Notepads",
            render: () => (
              <>
                <Button
                  text={"Create Notepad"}
                  onClick={() => history.push(CREATE_NOTEPAD)}
                />
                <hr />
                <div className="notePads">
                  {notepads?.map((notepad: INotepad) => (
                    <NotepadDemo
                      title={`${notepad.title}(${notepad.notesLength})`}
                      id={notepad.id}
                      key={notepad.id}
                    />
                  ))}
                </div>
              </>
            ),
          },
          {
            title: "Charts",
            render: () => <div className="charts"><Charts /></div>,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
