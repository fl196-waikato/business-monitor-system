import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';                         




function HomePage(){
    const location = useLocation();
    // 从路由状态中获取用户名
    const username = location.state?.userId || localStorage.getItem('userId') || 'Guest'; // 如果没有传递用户名，则默认为 'Guest'
    console.log('Username:', username); // 打印用户名以供调试
    const [selectedPage, setSelectedPage] = useState('Product Management');
    return(
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
      <Header username={username}  />
      
       {/* Main content */}
         <div className="flex flex-1">
            {/* Sidebar */}
            <Sidebar onSelect={setSelectedPage} selectedItem={selectedPage} className="w-64 bg-white shadow-md" />
            {/* Dashboard */}
            <main className="flex-1 p-6">
             <DashboardContent selectedItem={selectedPage} />
            </main>
         </div>
       </div>
      

    );
}

export default HomePage;