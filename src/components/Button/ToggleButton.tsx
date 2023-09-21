type ToggleButtonPropsType = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<boolean>;
};
const ToggleButton = (props: ToggleButtonPropsType) => {
  const { isChecked, setIsChecked } = props;
  return (
    <button onClick={() => setIsChecked(!isChecked)} className="toggle-btn">
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
