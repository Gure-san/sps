// React
import { createContext } from "react";

// Type 
import { RootInitialStateType } from "../types/components/appType";

// App Context
const RootInitialState: RootInitialStateType = {
  data: null,
  dispatch: () => null,
};

const RootData = createContext(RootInitialState);

export {
  RootData
}