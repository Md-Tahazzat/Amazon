import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import auth from "../../firebase/firebase.config";
import { useShopContext } from "../../provider/ContextProvider";
import { uploadImageInImgbb } from "../../utilitesFn/UserAccount";

type UpdateFormData = {
  name: string;
  image: { 0: File; length: number };
};

const UpdateProfile = () => {
  const { user } = useShopContext();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>();

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    const image = data.image[0];
    const name = data.name;

    // check if the user update the name field value
    if (data.name === user.displayName && !image) {
      // TODO: have to make the alert fancy;
      setLoading(false);
      alert("please update at least one field");
      return;
    }

    // upload image in imgbb conditionally
    if (image) {
      uploadImageInImgbb(image).then((imageUrl) => {
        if (imageUrl !== "error" && auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageUrl,
          });
        }
      });
    } else {
      auth.currentUser &&
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: user.photoURL,
        });
    }
    setLoading(false);
  });

  return (
    <div className="py-10 px-10 bg-slate-200 rounded max-w-[440px] w-full mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-5">
        Update your profile
      </h1>
      <form className="w-full " onSubmit={onSubmit}>
        <div className="input-box">
          <label className="input-label" htmlFor="name">
            Update Name
          </label>
          <input
            className={`input-field ${
              errors.name ? "border-red-500" : "border-slate-400"
            }`}
            defaultValue={user.displayName ? user.displayName : ""}
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter update name"
            required
          />
        </div>
        {/* Image file input */}
        <div className="input-box">
          <label className="input-label" htmlFor="image">
            Update current image
          </label>
          <input
            className="mb-2"
            id="image"
            type="file"
            {...register("image")}
            accept="image/*"
          />
        </div>

        <button
          disabled={loading}
          className={`input-btn ${
            loading ? "cursor-not-allowed" : "hover:bg-orange-600 duration-200"
          }`}
          type="submit"
        >
          {loading ? (
            <ImSpinner9 className="animate-spin block mx-auto text-2xl my-0.5" />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
