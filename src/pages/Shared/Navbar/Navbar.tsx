import Logo from "../../../components/Navbar/Logo";

const Navbar = () => {
  return (
    <nav className="bg-[#232f3e] mx-auto px-6">
      {/* top nav section starts */}
      <div
        id="nav-top"
        className="flex bg-[#232f3e] py-1 items-center justify-between"
      >
        {/* logo section starts */}
        <div className="flex items-center justify-between">
          <Logo />
          <p className="text-white">Deliver to</p>
        </div>

        <div className="w-5/6 text-white flex flex-col-reverse md:flex-row items-center justify-between">
          {/* search input section starts */}
          <div className="w-4/6">
            <input
              className="w-full"
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Search Amazon"
            />
            <label htmlFor="searchInput">Search</label>
          </div>

          {/* login and cart section starts */}
          <div>
            <div>
              <p>Sign In option</p>
            </div>
            <div>
              <p>
                cart and <br /> cart content{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom nav section starts */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
