// React
import React from "react";

// Type
import { DeepPartial } from "../utils/deepPartial"

const HANDLE_CASE = {
  NAME: 'name',
  PASSWORD: 'password',
  SUBMIT: 'submit',
  MODAL: 'modal'
};

type InitialState = {
  name: string | undefined,
  password: string | undefined,
  modal: boolean | undefined 
}

type ReducerPropType = {
  type: string,
  payload?: DeepPartial<InitialState>
}

type DataForModalType = {
  loginData: InitialState,
  dispatch: React.Dispatch<ReducerPropType>
}

export {
  InitialState,
  ReducerPropType,
  DataForModalType,
  HANDLE_CASE
}