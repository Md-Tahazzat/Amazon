import axios from "axios";
import {
  SignInFormAction,
  SignInFormState,
  SignUpFormAction,
  SignUpFormState,
} from "../tsInterfaces&types/UserAccount";

// function for signInFormReducer in signInForm
export const signInFormReducer = (
  state: SignInFormState,
  action: SignInFormAction
): SignInFormState => {
  return {
    firebaseError: action.firebaseError
      ? action.firebaseError
      : state.firebaseError,
    showPassword:
      action.showPassword === undefined
        ? state.showPassword
        : action.showPassword,
    loading: action.loading === undefined ? state.loading : action.loading,
  };
};

// function for signUpFormReducer in signUpForm
export const signUpFormReducer = (
  state: SignUpFormState,
  action: SignUpFormAction
): SignUpFormState => {
  return {
    firebaseError: action.firebaseError ? action.firebaseError : "",
    loading: action.loading === undefined ? state.loading : action.loading,
    showPassword:
      action.showPassword === undefined
        ? state.showPassword
        : action.showPassword,
    agreeToTermsAndConditions:
      action.agreeToTermsAndConditions === undefined
        ? state.agreeToTermsAndConditions
        : action.agreeToTermsAndConditions,
  };
};

// upload image in imgbb website and return url.
export const uploadImageInImgbb = async (imgFile: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", imgFile);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMG_BB_API_KEY
  }`;

  // post in imgbb
  try {
    const res = await axios.post(url, formData);
    const imageUrl = res.data?.data?.url;
    return imageUrl;
  } catch (error: any) {
    return "error";
  }
};
