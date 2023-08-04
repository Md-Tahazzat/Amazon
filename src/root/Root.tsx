import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="max-w-[100rem] mx-auto px-4 md:px-8 lg:px-10">
        <Outlet />
      </div>
      <footer>some footer el</footer>
    </>
  );
}
