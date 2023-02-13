// Components
import { SkeletonMap } from '../components/Skeleton';
import { Notification } from '../components/Notification';

// Type
import { notificationType } from '../types/components/notificationType';
import { CostumComponentPropType } from '../types/components/formGroupType';

export function AttendanceForm({formGroupData, dispatch}: CostumComponentPropType) {
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
}
