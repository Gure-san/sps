// React
import { createPortal } from 'react-dom';

export function Modal() {
  return createPortal(
    <div>
      Modal
      <button>coba</button>
    </div>,
    document.getElementById('portal')!
  );
}
