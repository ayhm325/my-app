'use client';
import { DoctorSidebar } from './DoctorSidebar';
import { DoctorHeader } from './DoctorHeader';

const DoctorLayout = ({ children, activePath }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <DoctorSidebar activePath={activePath} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DoctorHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
