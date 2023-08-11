import { ImSpinner9 } from "react-icons/im";

const Loading: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <ImSpinner9 className="animate-spin text-3xl text-orange-500" />
    </div>
  );
};

export default Loading;
