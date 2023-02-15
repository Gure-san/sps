// React
import { useReducer, useRef } from 'react';

// Type
import {
  InitialState,
  HANDLE_CASE,
  ReducerPropType,
} from '../types/components/loginType';

// Components
import { Modal } from '../components/Modal';
import { useClickOutside } from '../hooks/useClickOutside';

const initialState: InitialState = {
  name: '',
  password: '',
  modal: false,
};

function reducer(
  state: InitialState,
  { type, payload }: ReducerPropType
): InitialState {
  switch (type) {
    case HANDLE_CASE.NAME:
      return {
        ...state,
        name: payload?.name,
      };

    case HANDLE_CASE.PASSWORD:
      return {
        ...state,
        password: payload?.password,
      };

    case HANDLE_CASE.SUBMIT:
      alert(`
        nama: ${state.name}
        password: ${state.password}
      `);

    case HANDLE_CASE.MODAL:
      return {
        ...state,
        modal: !state.modal,
      };

    default:
      return state;
  }
}

export default function Login() {
  const [loginData, setLoginData] = useReducer(reducer, initialState);

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
              type: HANDLE_CASE.SUBMIT,
            });
          }}
          className="flex flex-col items-center my-6">
          <h2 className="font-bold mb-2 text-xl">Login</h2>
          <div className="flex flex-col w-full">
            <input
              onChange={(e) =>
                setLoginData({
                  type: HANDLE_CASE.NAME,
                  payload: {
                    name: e.target.value
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
                  type: HANDLE_CASE.PASSWORD,
                  payload: {
                    password: e.target.value
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
                type: HANDLE_CASE.SUBMIT,
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
          <button
            onClick={() => setLoginData({ type: HANDLE_CASE.MODAL })}
            className="text-sm underline">
            Hubungi Admin untuk mengatasi login kamu
          </button>
        </div>

        {/* Modal ( using portal ) */}
        {loginData.modal && <Modal loginData={loginData} dispatch={setLoginData}/>}
      </div>
    </div>
  );
}
