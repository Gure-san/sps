// React
import React, { useEffect, useRef } from 'react';

// React Dom
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../hooks/useClickOutside';

// Costum Hooks
import { useEventListener } from '../../hooks/useEventListener';

// Type
import { CostumComponentPropType, FORM_GROUP_HANDLE_CASE } from '../../types/components/formGroupType';
import { ConfirmActionModalPropType } from '../../types/components/confirmActionModalType';

export function ConfirmActionModal({refActiver, dispatch, children}: ConfirmActionModalPropType) {
  const refConfirmActionModa = useRef<HTMLDivElement>(null);

  useClickOutside({
    refElement: refConfirmActionModa,
    closeTrigger: () => {
      dispatch()
    },
    refActiver: refActiver
  })

  return createPortal(
    <div className="fixed left-0 right-0 top-0 bottom-0 z-10 bg-dark-700/90 flex items-center justify-center">
      <div
      ref={refConfirmActionModa} 
      className='min-w[280px] max-h-[280px] max-w-[355px] bg-white text-black rounded-md overflow-hidden'>
        {children}
      </div>
    </div>,
    document.getElementById('portal')!
  );
}
