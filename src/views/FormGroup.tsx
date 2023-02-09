// React Roter
import { useOutletContext } from 'react-router-dom';

// Components
import { Notification } from '../components/Notification';
import { SkeletonMap } from '../components/Skeleton';
import { Select } from '../components/Select';

// Type
import { formType, FormGroupPropType } from '../types/formGroupType';
import { notificationType } from '../types/notificationType';

export default function FormGroup() {
  const contextFormType: FormGroupPropType = useOutletContext();

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
            <div>
              <h2 className='mb-2 font-semibold text-lg'>* Jenis Izin : </h2>
              <Select/>
            </div>
          </form>
        </div>
      );
  }
}
