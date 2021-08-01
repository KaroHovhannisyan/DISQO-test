import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, Tabs } from "../../common/components";
import { useHistory } from "react-router-dom";
import { NotepadDemo } from "..";
import { CREATE_NOTEPAD } from "../../configs/constants";
import { INotepad } from "../Notepad/Interfaces";
import { getNotepads } from "../Notepad/redux/actions";
import Charts from "./containers/Charts";
import { RootState } from "../../redux/reducers";
import "./Dashboard.styles.scss";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const notepads: INotepad[] = useSelector(
    (state: RootState) => state.notepads.data,
    shallowEqual
  );

  React.useEffect(() => {
    dispatch(getNotepads());
  }, [dispatch]);

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
                  {!notepads.length ? (
                    <h1>You don't have any notepads yet (</h1>
                  ) : null}
                </div>
              </>
            ),
          },
          {
            title: "Charts",
            render: () => <Charts />,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
