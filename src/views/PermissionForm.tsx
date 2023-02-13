// Components
import { Select } from '../components/Select';
import { Uploader } from '../components/Uploader';
import { Textarea } from '../components/Textarea';

// Type
import { CostumComponentPropType } from '../types/components/formGroupType';

export function PermissionForm({formGroupData, dispatch}: CostumComponentPropType) {
  return (
    <div>
      <form action="">
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
          className="bg-black text-white text-sm rounded-md px-4 py-2"
          type="submit">
          Kirim
        </button>
      </form>
    </div>
  );
}
