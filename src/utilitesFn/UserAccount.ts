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
        : action.showPassword
        ? true
        : false,
    loading:
      action.loading === undefined
        ? state.loading
        : action.loading
        ? true
        : false,
  };
};

// function for signUpFormReducer in signUpForm
export const signUpFormReducer = (
  state: SignUpFormState,
  action: SignUpFormAction
): SignUpFormState => {
  return {
    firebaseError: action.firebaseError ? action.firebaseError : "",
    loading:
      action.loading === undefined
        ? state.loading
        : action.loading
        ? true
        : false,
    showPassword:
      action.showPassword === undefined
        ? state.showPassword
        : action.showPassword
        ? true
        : false,
    agreeToTermsAndConditions:
      action.agreeToTermsAndConditions === undefined
        ? state.agreeToTermsAndConditions
        : action.agreeToTermsAndConditions
        ? true
        : false,
  };
};
