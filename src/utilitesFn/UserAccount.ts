import {
  SignInFormAction,
  SignInFormState,
} from "../tsInterfaces&types/UserAccount";

// function for signInFormReducer in signInForm
export const signInFormReducer = (
  state: SignInFormState,
  action: SignInFormAction
): SignInFormState => {
  switch (action.actionType.target) {
    case "EMAIL_ERROR":
      return {
        ...state,
        emailError: action.actionType.value,
      };
    case "PASSWORD_ERROR":
      return {
        ...state,
        passwordError: action.actionType.value,
      };
    case "SHOW_PASSWORD":
      return {
        ...state,
        showPassword: action.actionType.value,
      };
    default:
      return state;
  }
};
