import { ImSpinner9 } from "react-icons/im";

const Loading = ({ className }: { className: string }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <ImSpinner9 className="animate-spin text-3xl text-orange-500" />
    </div>
  );
};

export default Loading;
