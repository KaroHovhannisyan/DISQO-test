import React from "react";
import "./Tabs.styles.scss";

interface IProps {
  entries: {
    title: string;
    render: () => JSX.Element;
  }[];
}

const Tabs: React.FC<IProps> = ({ entries }) => {
  const [activeTab, setActiveTab] = React.useState(entries[0].title);
  return (
    <>
      <div className="tab">
        {entries.map((entry) => (
          <button
            className={entry.title === activeTab ? "active-tab" : ""}
            key={entry.title}
            onClick={() => setActiveTab(entry.title)}
          >
            {entry.title}
          </button>
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
