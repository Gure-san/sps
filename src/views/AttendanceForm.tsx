// Components
import { SkeletonMap } from '../components/Skeleton';
import { Notification } from '../components/Notification';
import { ConfirmActionModal } from '../components/Modal';

// Type
import { notificationType } from '../types/components/notificationType';
import {
  CostumComponentPropType,
  FORM_GROUP_HANDLE_CASE,
} from '../types/components/formGroupType';
import { useRef } from 'react';

export function AttendanceForm({
  formGroupData,
  dispatch,
}: CostumComponentPropType) {
  const refModalActiver = useRef<HTMLButtonElement>(null);

  return (
    <div>
      {/* Map */}
      <SkeletonMap />

      <div className="my-4">
        <p className="text-sm mb-2">
          *pastikan kamu masuk wilayah
          <span className="font-semibold"> smkn 4 malang pada map </span> agar
          dapat melakukan presensi dengan status Hadir
        </p>

        <Notification
          className="text-sm"
          type={notificationType.VALID}
          noClose={true}>
          <p>
            Kamu berada di dalam area{' '}
            <span className="font-semibold">SMKN 4 MALANG</span>
          </p>
        </Notification>
      </div>

      <button
        ref={refModalActiver}
        onClick={() =>
          dispatch({
            type: FORM_GROUP_HANDLE_CASE.ATTEDANCE.CONFIRM_MODAL.ACTIVE,
          })
        }
        className="mb-6 text-sm text-white bg-black py-2 px-4 rounded-md">
        Hadir
      </button>

      {/* Confirm Action Modal */}
      {formGroupData.attedance.confirmAction && (
        <ConfirmActionModal 
        refActiver={refModalActiver} dispatch={() => {
          dispatch({
            type: FORM_GROUP_HANDLE_CASE.ATTEDANCE.CONFIRM_MODAL.ACTIVE
          })
        }}>
          <div className="flex flex-col p-4">
            {/* Header */}
            <h1 className="text-lg font-bold">Informasi Presensi Kamu</h1>

            {/* Info */}
            <div className="my-4">
              <p className='mb-1 w-full truncate'>
                Nama : Abdul Aziz Rahmat Ibnu Fani
              </p>
              <p className='mb-1'>
                Kelas : XII RPL A - 1
              </p>
              <p className='mb-1'>
                Status : <span>Hadir</span>
              </p>
              <p>
                Pukul : 06.23
              </p>
            </div>

            {/* Button Group */}
            <div>
              <button
              onClick={() => dispatch({
                type: FORM_GROUP_HANDLE_CASE.ATTEDANCE.CONFIRM_MODAL.ACTIVE
              })} 
              className='text-sm border px-4 py-2 rounded-md mr-4'>Batal</button>
              <button
              onClick={() => dispatch({
                type: FORM_GROUP_HANDLE_CASE.ATTEDANCE.SUBMIT
              })} 
              className='text-sm bg-black text-white px-4 py-2 rounded-md'>Konfirmasi</button>
            </div>
          </div>
        </ConfirmActionModal>
      )}
    </div>
  );
}
