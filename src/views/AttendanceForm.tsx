// Components
import { SkeletonMap } from '../components/Skeleton';
import { Notification } from '../components/Notification';

// Type
import { notificationType } from '../types/components/notificationType';
import { CostumComponentPropType } from '../types/components/formGroupType';

export function AttendanceForm({
  formGroupData,
  dispatch,
}: CostumComponentPropType) {
  return (
    <div>
      {/* Map */}
      <SkeletonMap />

      <div className='my-4'>
        <p className="text-sm mb-2">
          *pastikan kamu masuk wilayah
          <span className="font-semibold"> smkn 4 malang pada map </span> agar dapat melakukan presensi dengan status Hadir
        </p>

        <Notification
          className='text-sm'
          type={notificationType.VALID}
          noClose={true}>
          <p>Kamu berada di dalam area <span className='font-semibold'>SMKN 4 MALANG</span></p>
        </Notification>
      </div>

      <button className="mb-6 text-sm text-white bg-black py-2 px-4 rounded-md">
        Hadir
      </button>
    </div>
  );
}
