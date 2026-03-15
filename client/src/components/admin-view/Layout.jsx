import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#020617]">
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <Header setOpen={setOpenSidebar} />
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;