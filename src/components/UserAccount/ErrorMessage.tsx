import { BiError } from "react-icons/bi";
const ErrorMessage = () => {
  return (
    <section className="border z-10 p-2 md:p-4 rounded-lg flex mb-4 items-center gap-2 text-red-400 border-red-500">
      <BiError className="text-5xl font-thin" />

      {/* TODO: have to show dynamic error message */}
      <div>
        <h1 className="text-xl md:text-2xl">Incorrect Phone Number</h1>
        <p className="text-black">
          We cannot find an account with that mobile number
        </p>
      </div>
    </section>
  );
};

export default ErrorMessage;
