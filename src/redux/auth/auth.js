import { createSlice } from "@reduxjs/toolkit";

const authentication = createSlice({
  name: "authInfo",
  initialState: {
    error: "",
    user: null,
  },
  reducers: {
    signUpSuccess: (state, action) => {
      state.user = action.payload;
    },
    signUpFailure: (state, action) => {
      state.error = action.payload;
      state.user = null;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.user = null;
    },
    passwordResetSuccess: (state, action) => {
      return {
        ...state,
        isPasswordResetEmailSent: true,
      };
    },
    passwordResetFailure: (state, action) => {
      state.error = action.payload;
    },
    resetEmailVerificationStatus: (state, action) => {
      return {
        ...state,
        isEmailVerificationSend: false,
      };
    },
    sendEmailVerification: (state, action) => {
      return {
        ...state,
        isEmailVerificationSend: true,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        uid: action.payload,
      };
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  signUpFailure,
  signUpSuccess,
  signInFailure,
  signInSuccess,
  sendEmailVerification,
  loginSuccess,
  googleAuthASuccess,
  passwordResetSuccess,
  passwordResetFailure,
  logout,
} = authentication.actions;

export default authentication.reducer;
