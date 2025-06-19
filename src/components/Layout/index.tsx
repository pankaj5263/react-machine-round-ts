import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout: React.FC = () => {
  return(<div>
  <Header/>
  <div className='layout'>
  <Outlet/>
  </div>
  
  </div>);
}

export default Layout;