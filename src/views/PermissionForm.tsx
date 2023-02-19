// React
import { useRef } from 'react';

// Components
import { Select } from '../components/Select';
import { Uploader } from '../components/Uploader';
import { Textarea } from '../components/Textarea';
import { ConfirmActionModal } from '../components/Modal';

// Type
import {
  CostumComponentPropType,
  FORM_GROUP_HANDLE_CASE,
} from '../types/components/formGroupType';

export function PermissionForm({
  formGroupData,
  dispatch,
}: CostumComponentPropType) {
  const refConfirmActionModal = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('ngirim form');
          dispatch({
            type: FORM_GROUP_HANDLE_CASE.PERMISSION.CONFIRM_MODAL
              .ACTIVE,
          })
        }}>
        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-lg">* Jenis Izin : </h2>
          <Select formGroupData={formGroupData} dispatch={dispatch} />
        </div>

        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-lg">
            * Bukti Surat / Gambar :{' '}
          </h2>
          <Uploader formGroupData={formGroupData} dispatch={dispatch} />
        </div>

        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-lg">Tambahan : </h2>
          <Textarea formGroupData={formGroupData} dispatch={dispatch} />
        </div>

        <button
          ref={refConfirmActionModal}
          className="bg-black text-white text-sm rounded-md px-4 py-2"
          type="submit">
          Kirim
        </button>
      </form>

      {/* Confirm Actionn Modal */}
      {formGroupData.permission.confirmAction && (
        <ConfirmActionModal
          dispatch={() => {
            dispatch({
              type: FORM_GROUP_HANDLE_CASE.PERMISSION.CONFIRM_MODAL.ACTIVE,
            });
          }}
          refActiver={refConfirmActionModal}>
          <div className="flex flex-col p-4">
            {/* Header */}
            <h1 className="text-lg font-bold">Informasi Presensi Kamu</h1>

            {/* Info */}
            <div className="my-4">
              <p className="mb-1 w-full truncate">
                Nama : Abdul Aziz Rahmat Ibnu Fani
              </p>
              <p className="mb-1">Kelas : XII RPL A - 1</p>
              <p className="mb-1">
                Status : <span>Izin</span>
              </p>
              <p>Pukul : 06.23</p>
            </div>

            {/* Button Group */}
            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: FORM_GROUP_HANDLE_CASE.PERMISSION.CONFIRM_MODAL
                      .ACTIVE,
                  })
                }
                className="text-sm border px-4 py-2 rounded-md mr-4">
                Batal
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: FORM_GROUP_HANDLE_CASE.PERMISSION.SUBMIT,
                  })
                }
                className="text-sm bg-black text-white px-4 py-2 rounded-md">
                Konfirmasi
              </button>
            </div>
          </div>
        </ConfirmActionModal>
      )}
    </div>
  );
}
