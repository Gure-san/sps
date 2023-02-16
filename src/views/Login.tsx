// React
import { useReducer, useRef, useContext, useEffect } from 'react';

// Type
import {
  InitialState,
  LOGIN_HANDLE_CASE,
  ReducerPropType,
} from '../types/components/loginType';
import {
  APP_HANDLE_CASE
} from '../types/components/appType';


// Components
import { Modal } from '../components/Modal';

// Context
import { RootData } from '../context';

const initialState: InitialState = {
  name: '',
  password: '',
  phoneNumber: '',
  class: '',
  modal: false,
  valid: false
};

function reducer(
  state: InitialState,
  { type, payload }: ReducerPropType
): InitialState {
  switch (type) {
    case LOGIN_HANDLE_CASE.NAME:
      return {
        ...state,
        name: payload?.name,
      };

    case LOGIN_HANDLE_CASE.PASSWORD:
      return {
        ...state,
        password: payload?.password,
      };

    case LOGIN_HANDLE_CASE.SUBMIT:
      // effect fetch data
      return {
        ...state,
        class: 'XII RPL A',
        phoneNumber: '081235918140',
        valid: true // Pass Validation 
      }

    case LOGIN_HANDLE_CASE.MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    default:
      return state;
  }
}

export default function Login() {
  const {data, dispatch} = useContext(RootData);
  const [loginData, setLoginData] = useReducer(reducer, initialState);
  const modalActiver = useRef(null);

  useEffect(() => {
    if (loginData.valid) {
      dispatch({
        type: APP_HANDLE_CASE.USER.LOGIN,
        payload: {
          user: {
            name: loginData.name,
            phoneNumber: loginData.phoneNumber,
            class: loginData.class,
            authenticated: loginData.valid
          }
        }
      })
    }
  }, [loginData.valid])

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center over">
      <div className="-translate-y-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">SPS</h1>
          <p>Sistem Presensi Siswa</p>
        </div>

        {/* Body (Form) */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoginData({
              type: LOGIN_HANDLE_CASE.SUBMIT,
            });
          }}
          className="flex flex-col items-center my-6">
          <h2 className="font-bold mb-2 text-xl">Login</h2>
          <div className="flex flex-col w-full">
            <input
              onChange={(e) =>
                setLoginData({
                  type: LOGIN_HANDLE_CASE.NAME,
                  payload: {
                    name: e.target.value,
                  },
                })
              }
              value={loginData.name}
              type="text"
              className="px-4 py-2 mt-2 border border-dark-100 bg-white focus:border-black rounded-md text-sm "
              placeholder="Nama Lengkap"
            />
            <input
              onChange={(e) =>
                setLoginData({
                  type: LOGIN_HANDLE_CASE.PASSWORD,
                  payload: {
                    password: e.target.value,
                  },
                })
              }
              value={loginData.password}
              type="password"
              className="px-4 py-2 mt-2 border border-dark-100 bg-white focus:border-black rounded-md text-sm "
              placeholder="Password"
            />
          </div>
          <button
            onSubmit={(e) =>
              setLoginData({
                type: LOGIN_HANDLE_CASE.SUBMIT,
              })
            }
            type="submit"
            className="bg-black text-white text-sm w-full py-2 mt-4 rounded-md">
            Masuk
          </button>
        </form>

        {/* Footer */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold">Tidak bisa login?</p>
          <div
            ref={modalActiver}
            onClick={() => setLoginData({ type: LOGIN_HANDLE_CASE.MODAL })}
            className="text-sm underline cursor-pointer">
            Hubungi Admin untuk mengatasi login kamu
          </div>

          {/* Modal ( using portal ) */}
          {loginData.modal && (
            <Modal
              loginData={loginData}
              dispatch={setLoginData}
              refActiver={modalActiver}
            />
          )}
        </div>
      </div>
    </div>
  );
}
