// React
import React from "react";

// Type
import { DeepPartial } from "../utils/deepPartial"

const LOGIN_HANDLE_CASE = {
  NAME: 'name',
  PASSWORD: 'password',
  SUBMIT: 'submit',
  MODAL: 'modal'
};

type InitialState = {
  name: string | undefined,
  password: string | undefined,
  phoneNumber: string | undefined
  class: string | undefined,
  modal: boolean | undefined,
  valid: boolean
}

type ReducerPropType = {
  type: string,
  payload?: DeepPartial<InitialState>
}

type DataForModalType = {
  loginData: InitialState;
  dispatch: React.Dispatch<ReducerPropType>,
  refActiver: React.RefObject<HTMLDivElement>
};

export {
  InitialState,
  ReducerPropType,
  DataForModalType,
  LOGIN_HANDLE_CASE
}