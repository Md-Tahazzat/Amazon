// SignUpFrom
// type for SignUp FormData
export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// interfaces for signUpFromState for SignUpFrom reducer
export interface SignUpFormState {
  firebaseError: string;
  agreeToTermsAndConditions: boolean;
  loading: boolean;
  showPassword: boolean;
}

// interface for action of SignUpFromReducer function.
export interface SignUpFormAction {
  firebaseError?: string;
  agreeToTermsAndConditions?: boolean;
  loading?: boolean;
  showPassword?: boolean;
}

// SignInFrom
// type for Signin FormData
export type SignInFormData = {
  email: string;
  password: string;
};

// interfaces for signInFromState for SignInFrom reducer
export interface SignInFormState {
  firebaseError: string;
  showPassword: boolean;
  loading: boolean;
}

// interface for action of SignInFromReducer function.
export interface SignInFormAction {
  firebaseError?: string;
  showPassword?: boolean;
  loading?: boolean;
}
