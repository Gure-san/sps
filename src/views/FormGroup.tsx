// React
import { useEffect, useRef, useState } from 'react';

// React Roter
import { useOutletContext } from 'react-router-dom';

// Components
import { Notification } from '../components/Notification';
import { SkeletonMap } from '../components/Skeleton';
import { Select } from '../components/Select';
import { Textarea } from '../components/Textarea';

// Type
import { 
  formType, 
  FormGroupPropType,
  DataFormPermission 
} from '../types/components/formGroupType';
import { notificationType } from '../types/components/notificationType';

export default function FormGroup() {
  const contextFormType: FormGroupPropType = useOutletContext();
  const [dataForm, setDataForm] = useState<DataFormPermission>({
    selectData: null,
    textareaData: null,
    pushState: false,
  });

  switch (contextFormType.type) {
    case formType.ATTEDANCE:
      let message = 'Kamu berada di dalam area SMKN 4 MALANG';
      return (
        <div>
          <p className="text-sm mb-2.5">
            *pastikan kamu masuk wilayah
            <span className="font-semibold"> smkn 4 malang pada map </span>
          </p>

          <Notification type={notificationType.VALID} message={message} />

          <button className="mb-6 text-sm text-white bg-black py-2 px-4 rounded-md">
            Presensi - <span>06.02</span>
          </button>

          {/* Map */}
          <SkeletonMap />
        </div>
      );

    case formType.PERMISSION:
      return (
        <div>
          <form action="">
            <div className='mb-4'>
              <h2 className="mb-2 font-semibold text-lg">* Jenis Izin : </h2>
              <Select/>
            </div>

            <div className='mb-4'>
              <h2 className="mb-2 font-semibold text-lg">Tambahan : </h2>
              <Textarea/>
            </div>

            <button
            onClick={() => {

            }}
            className='px-4 py-2 bg-black text-white rounded-md'>
              coba lihat data form
            </button>
          </form>
        </div>
      );
  }
}
