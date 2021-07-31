import React from "react";
import Button from "../Button";
import "./Tabs.styles.scss";

interface IProps {
  entries: {
    title: string;
    render: any;
  }[];
}

const Tabs: React.FC<IProps> = ({ entries }) => {
  const [activeTab, setActiveTab] = React.useState(entries[0].title);
  return (
    <>
      <div className="tab">
        {entries.map((entry) => (
          <Button
            className={entry.title === activeTab ? "active-tab" : ""}
            key={entry.title}
            text={entry.title}
            onClick={() => setActiveTab(entry.title)}
          />
        ))}
      </div>

      {entries.map((entry) => (
        <div
          className={`tabcontent ${activeTab === entry.title ? "active" : ""}`}
          key={entry.title}
        >
          {entry.render()}
        </div>
      ))}
    </>
  );
};

export default Tabs;
