// React
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Components
import { SkeletonContactList } from '../Skeleton';

// Costum Hooks
import { useClickOutside } from '../../hooks/useClickOutside';
import { useParsePhoneNumber } from '../../hooks/useParsePhoneNumber';

// Type
import {
  DataForModalType,
  HANDLE_CASE,
} from '../../types/components/loginType';

// Asset
import arrowRight from '../../assets/arrow-right.svg';
import whatsapp from '../../assets/whatsapp.svg';
import { useEventListener } from '../../hooks/useEventListener';

const dataDummy = [
  {
    name: 'Abdul Aziz Rahmat Ibnu Fani',
    phone: '0812351918140',
  },
  {
    name: 'Andre Firmansyah',
    phone: '0814141234013',
  },
  {
    name: 'Andre Firmansyah',
    phone: '0814141234013',
  },
  ,
  {
    name: 'Andre Firmansyah',
    phone: '0814141234013',
  },
  ,
  {
    name: 'Andre Firmansyah',
    phone: '0814141234013',
  },
];

function ContactItem() {
  return (
    <div>
      {/* Whatsapp Icon */}
      <img src={whatsapp} />

      {/* Info User */}
      <div>
        <p>Nama</p>
        <p>Nomer Telephone</p>
      </div>

      {/* Button */}
      <button>
        <img src={arrowRight} />
      </button>
    </div>
  );
}

export function Modal({ loginData, dispatch }: DataForModalType) {
  const [contactList, setContactList] = useState([]);
  const refModal = useRef(null);

  return createPortal(
    <div
      className="absolute left-0 right-0 top-0 bottom-0 z-10 bg-dark-700/90 flex items-center justify-center">
      <div
        className="bg-white rounded-md border w-full max-w-[220px]"
        ref={refModal}>
        {/* Header */}
        <h2 className='text-sm text-slate-500 px-4 py-2 border-b'>Daftar Kontak</h2>

        {/* Contact List */}
        <SkeletonContactList />
      </div>
    </div>,
    document.getElementById('portal')!
  );
}
