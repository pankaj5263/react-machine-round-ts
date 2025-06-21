import React from 'react';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tabs/Tab';

const TabsPage = () => {
   return <><Tabs>
   <Tab label="Overview">This is the overview.</Tab>
   <Tab label="Details">These are the details.</Tab>
   <Tab label="Settings">Here are the settings.</Tab>
 </Tabs></>
}

export default TabsPage