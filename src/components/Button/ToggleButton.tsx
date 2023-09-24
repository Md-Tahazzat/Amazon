type ToggleButtonPropsType = {
  isChecked: boolean;
  handleChangeRole: (role: "seller" | "buyer") => void;
};
const ToggleButton = (props: ToggleButtonPropsType) => {
  const { isChecked, handleChangeRole } = props;
  return (
    <button
      onClick={() =>
        isChecked === false
          ? handleChangeRole("seller")
          : handleChangeRole("buyer")
      }
      className="toggle-btn"
    >
      <span className="text-white font-semibold">Yes</span>{" "}
      <span className="text-white font-semibold">Yes</span>
      <span
        className={`btn-toggler ${
          isChecked === true && "translate-x-[25.5px]"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
