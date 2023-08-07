import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="max-w-[100rem] mx-auto px-2 md:px-4 lg:px-10">
        <Outlet />
      </div>
      <footer className="px-2 md:px-4 lg:px-10">some footer el</footer>
    </>
  );
}
