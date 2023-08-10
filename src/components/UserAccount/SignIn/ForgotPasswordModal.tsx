import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast/headless";
import { FaXmark } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import auth from "../../../firebase/firebase.config";

const ForgotPasswordModal = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<{ resetEmail: string }>();

  //   reset email handler
  const onSubmit: SubmitHandler<{ resetEmail: string }> = (data): void => {
    setLoading(true);
    console.log("called");
    sendPasswordResetEmail(auth, data.resetEmail)
      .then(() => {
        reset();

        document.getElementById("forgot_modal_close")?.click();
        toast.success("A password reset link has sent to your email", {
          position: "top-center",
        });
        console.log("inside success");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("inside error");
        console.log(err);
        setError("resetEmail", {
          type: "manual",
          message: err.message.split("/")[1].slice(0, -2),
        });
      });
  };
  return (
    <>
      {/* modal controller input */}
      <input
        type="checkbox"
        id="forgot_password_modal"
        className="modal-toggle"
      />

      {/* forgot password modal */}
      <div className="modal">
        <div className="modal-box rounded-none border-l-[15px] border-l-black relative">
          <h3 className="font-bold text-lg">Enter password reset email</h3>
          {/* modal close button */}
          {!loading && (
            <label
              id="forgot_modal_close"
              htmlFor="forgot_password_modal"
              className="md:mt-10 inline-block absolute top-2 md:-top-4 z-50 right-2 md:right-4 border-y border-white duration-200 hover:border-slate-400 py-1 px-2  font-semibold"
            >
              <FaXmark />
            </label>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("resetEmail")}
              className="block mt-3 border-y w-full py-1 px-2 outline-none focus:border-slate-400 duration-150"
              type="email"
              placeholder="example@gmail.com"
            />

            {/* error message */}
            {errors?.resetEmail ? (
              <p className="text-red-500">{errors.resetEmail?.message}</p>
            ) : null}
            <button
              disabled={loading}
              type="submit"
              className="mt-4 md:mt-10 inline-block border-y border-white duration-200 hover:border-slate-400 py-1 px-2  font-semibold"
            >
              {loading ? (
                <ImSpinner9 className="animate-spin block mx-auto text-2xl" />
              ) : (
                "Send"
              )}
            </button>
          </form>

          {/* paper corner image */}
          <img
            src="https://i.ibb.co/343Z5DM/corner-fold-1.png"
            className="absolute bottom-0 w-20 md:w-32 lg:w-40 right-0"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
