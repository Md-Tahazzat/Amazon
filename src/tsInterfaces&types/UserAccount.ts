// SignUpFrom

// type for SignUp FormData
export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// interfaces for signUpFromState for SignUpFrom reducer
// export interface SignUpFormState

// SignInFrom

// type for Signin FormData
export type SignInFormData = {
  email: string;
  password: string;
};

// interfaces for signInFromState for SignInFrom reducer
export interface SignInFormState {
  emailError: string;
  passwordError: string;
  showPassword: boolean;
}

// interface for action of SignInFromReducer function.
export interface SignInFormAction {
  actionType:
    | {
        target: "PASSWORD_ERROR" | "EMAIL_ERROR";
        value: string;
      }
    | {
        target: "SHOW_PASSWORD";
        value: boolean;
      };
}
