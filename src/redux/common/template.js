import { createSlice } from "@reduxjs/toolkit";

const template = createSlice({
  name: "template",
  initialState: {
    signInSection: true,
    signUpSection: false,
    passwordRecoverSection: false,
    signUpVarificationModal: false,
    showModalEventDetails: false,
    newAgencyModal: false,
    notificationTosta: {
      message: "",
      from: "",
      status: "",
    },
  },
  reducers: {
    singUpSectionAction: (state, action) => {
      state.signUpSection = action.payload;
      state.signInSection = false;
      state.passwordRecoverSection = false;
    },
    singInSectionAction: (state, action) => {
      state.signInSection = action.payload;
      state.signUpSection = false;
      state.passwordRecoverSection = false;
    },
    passwordRecoverSectionAction: (state, action) => {
      state.passwordRecoverSection = action.payload;
      state.signInSection = false;
      state.signUpSection = false;
    },
    notificationTostaAction: (state, action) => {
      state.notificationTosta = action.payload;
    },

    setSignUpVarificationModal: (state, action) => {
      state.signUpVarificationModal = action.payload;
    },

    showModalAction: (state, action) => {
      state.showModalEventDetails = action.payload;
    },
    showNewAgencyModalAction: (state, action) => {
      state.newAgencyModal = action.payload;
    },
  },
});

export const {
  passwordRecoverSectionAction,
  showModalAction,
  showNewAgencyModalAction,
  userRequestAction,
  notificationTostaAction,
  singInSectionAction,
  singUpSectionAction,
  setSignUpVarificationModal,
} = template.actions;

export default template.reducer;
