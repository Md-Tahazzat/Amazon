import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="max-w-[100rem] mx-auto px-2 md:px-4 lg:px-10">
        <Outlet />
      </div>
      <Toaster position="top-center" />
      <footer className="px-2 md:px-4 lg:px-10">some footer el</footer>
    </>
  );
}
