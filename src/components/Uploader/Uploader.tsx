// React
import { useRef } from 'react';

// Type
import { 
  CostumComponentPropType,
  FORM_GROUP_HANDLE_CASE
} from '../../types/components/formGroupType';

const defaultPlaceholder = 'Tidak ada file yang diupload!';

export function Uploader({formGroupData, dispatch}: CostumComponentPropType) {
  const inputFileElement = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => { inputFileElement.current?.click() }}
        className="min-w-max bg-black text-white rounded-md text-sm px-4 py-2">
        Upload File
      </button>
      <p className="ml-4">{formGroupData.permission.uploader.fileName ?? defaultPlaceholder}</p>
      <input
        onChange={() => {
          dispatch({
            type: FORM_GROUP_HANDLE_CASE.PERMISSION.UPLOADER.DATA,
            payload: inputFileElement.current?.files
          }
        )}}
        type="file"
        ref={inputFileElement}
        hidden
      />
    </div>
  );
}
