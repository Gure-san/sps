// Type
import { CostumComponentPropType, HANDLE_CASE } from '../../types/components/formGroupType';

export function Textarea({dataForm, dispatch}: CostumComponentPropType) {
  return (
    <textarea
    value={dataForm.textarea} 
    onChange={(e) => dispatch({
      type: HANDLE_CASE.TEXTAREA.VALUE_TEXTAREA_COMPONENT,
      payload: e.target.value
    })}
    className="resize-none w-full rounded-md bg-white border h-[200px] py-3 px-4 outline-black shadow-sm scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded-md" />
  );
}