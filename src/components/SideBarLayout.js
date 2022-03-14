import Sidebar from "./Sidebar";

export default function SidebarLayout({ children, currentPage }) {
  return (
    <>
      <div className="relative md:flex">
        <Sidebar currentPage={currentPage} />
        {children}
      </div>
    </>
  );
}
