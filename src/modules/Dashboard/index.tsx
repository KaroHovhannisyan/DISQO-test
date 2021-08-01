import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TextArea, Button, Input, Switch, Tabs } from "../../common/components";
import "./Dashboard.styles.scss";
import { useHistory } from "react-router-dom";
import { NotepadDemo } from "..";
import { CREATE_NOTEPAD } from "../../configs/constants";
import { INotepad } from "../Notepad/Interfaces";
import { getNotepads } from "../Notepad/redux/actions";
import Charts from "./components/Charts";

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
              <div className="flex space-beetwen">
                <h1>My Notepads</h1>
              <Button
                  text={"Create Notepad"}
                  onClick={() => history.push(CREATE_NOTEPAD)}
                />
              </div>
               <div className="notepads">
                  {notepads?.map((notepad: INotepad) => (
                    <NotepadDemo
                      title={`${notepad.title}`}
                      notesCount={notepad.notesLength ?? 0}
                      id={notepad.id}
                      key={notepad.id}
                      createdAt={notepad.createdAt}
                    />
                  ))}
                  {!notepads.length ? <h1>You don't have any notepads yet (</h1> : null }
                </div>
              </>
            ),
          },
          {
            title: "Charts",
            render: () => <Charts />
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
