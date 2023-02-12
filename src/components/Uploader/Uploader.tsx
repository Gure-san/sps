// React
import { useRef } from 'react';

// Type
import { 
  CostumComponentPropType,
  HANDLE_CASE
} from '../../types/components/formGroupType';

const defaultPlaceholder = 'Tidak ada file yang diupload!';

export function Uploader({dataForm, dispatch}: CostumComponentPropType) {
  const inputFileElement = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => { inputFileElement.current?.click() }}
        className="bg-black text-white rounded-md text-sm px-4 py-2">
        Upload File
      </button>
      <p className="ml-4">{dataForm.uploader.fileName ?? defaultPlaceholder}</p>
      <input
        onChange={() => {
          dispatch({
            type: HANDLE_CASE.UPLOADER.VALUE_UPLOADER_COMPONENT,
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
