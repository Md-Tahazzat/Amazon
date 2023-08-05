import { useShopContext } from "../provider/ContextProvider";

const HambergerMenu = () => {
  const { menuState } = useShopContext();
  return (
    <div
      className={`${
        menuState.isMenuOpen ? "absolute top-0 left-0" : "hidden"
      } w-screen h-screen bg-slate-500/50`}
    >
      <div className="w-4/6 md:w-3/6 lg:w-96 h-full translate-inherit bg-red-300 duration-200"></div>
    </div>
  );
};

export default HambergerMenu;
