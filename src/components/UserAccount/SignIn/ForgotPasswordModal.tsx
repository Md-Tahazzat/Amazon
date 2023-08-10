import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { ImSpinner9 } from "react-icons/im";
import auth from "../../../firebase/firebase.config";
import { ForgetPasswordModalProps } from "../../../tsInterfaces&types/UserAccount";

const ForgotPasswordModal: React.FC<ForgetPasswordModalProps> = ({ email }) => {
  const [resetEmail, setResetEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  //   const [resetEmailError, setResetEmailError] = useState<string>("");

  //   reset email handler
  const handleResetEmail = (): void => {
    // if (email !== resetEmail) {
    //   setResetEmailError("Reset email doesn't match your account email");
    //   return;
    // }
    setLoading(true);
    console.log(resetEmail);
    sendPasswordResetEmail(auth, resetEmail)
      .then((res) => {
        setLoading(false);
        console.log("send");
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="forgot_password_modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box rounded-none border-l-[15px] border-l-black relative">
          <h3 className="font-bold text-lg">Enter password reset email</h3>
          {/* modal close button */}
          {!loading && (
            <label
              htmlFor="forgot_password_modal"
              className="md:mt-10 inline-block absolute top-2 md:-top-4 z-50 right-2 md:right-4 border-y border-white duration-200 hover:border-slate-400 py-1 px-2  font-semibold"
            >
              <FaXmark />
            </label>
          )}
          <input
            onChange={(event) => setResetEmail(event.target.value)}
            value={resetEmail}
            className="block mt-3 border-y w-full py-1 px-2 outline-none focus:border-slate-400 duration-150"
            type="email"
            placeholder="example@gmail.com"
          />

          {/* paper corner image */}
          <img
            src="https://i.ibb.co/343Z5DM/corner-fold-1.png"
            className="absolute bottom-0 w-20 md:w-32 lg:w-40 right-0"
            alt=""
          />
          <button
            onClick={handleResetEmail}
            className="mt-4 md:mt-10 inline-block border-y border-white duration-200 hover:border-slate-400 py-1 px-2  font-semibold"
          >
            {loading ? (
              <ImSpinner9 className="animate-spin block mx-auto text-2xl" />
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
