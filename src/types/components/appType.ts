// Type
import { DeepPartial } from "../utils/deepPartial";

const APP_HANDLE_CASE = {
  USER: {
    LOGIN: 'app_user_login',
    UPDATE_PHONE_NUMBER: 'app_user_update_phone_number'
  }
}

interface AppData {
  user: {
    name: string | null | undefined,
    class: string | null | undefined,
    phoneNumber: string | null | undefined,
    authenticated: boolean
  }
}

type AppReducerPropType = {
  type: string,
  payload: DeepPartial<AppData>
}

type RootInitialStateType = {
  data: AppData | null | undefined,
  dispatch: React.Dispatch<AppReducerPropType>
}

export {
  RootInitialStateType,
  AppData,
  AppReducerPropType,
  APP_HANDLE_CASE
}
