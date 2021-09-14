import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from './Tab';
import "./styles.css";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
`;

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div className="App">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Production" value={0}></Tab>
          <Tab label="Design" value={1}></Tab>
          <Tab label="Upcycle" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h2>Production</h2>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h2>Design</h2>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h2>Upcycle</h2>
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}