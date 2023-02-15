// React
import { useRef } from 'react';
import { createPortal } from 'react-dom';

// Costum Hooks
import { useClickOutside } from '../../hooks/useClickOutside';

// Type 
import { DataForModalType, HANDLE_CASE } from '../../types/components/loginType';

export function Modal({loginData, dispatch}: DataForModalType) {
  const refModal = useRef(null);

  useClickOutside({
    refElement: refModal,
    closeTrigger: () => {
      if(loginData.modal) {
        console.log('gas')
        dispatch({
          type: HANDLE_CASE.MODAL
        })
      }
    }
  })

  return createPortal(
    <div ref={refModal}>
      Modal
      <button>coba</button>
    </div>,
    document.getElementById('portal')!
  );
}
