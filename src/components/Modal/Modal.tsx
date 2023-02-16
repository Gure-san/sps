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
  LOGIN_HANDLE_CASE,
} from '../../types/components/loginType';
import { ContactItemPropType } from '../../types/components/modalType';

// Asset
import arrowRight from '../../assets/arrow-right.svg';
import whatsapp from '../../assets/whatsapp.svg';
import { useEventListener } from '../../hooks/useEventListener';

const dataDummy = [
  {
    name: 'Abdul Aziz Rahmat Ibnu Fani alsdfjals;',
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
  {
    name: 'Andre Firmansyah',
    phone: '0814141234013',
  },
];

function ContactItem({ name, phoneNumber }: ContactItemPropType) {
  const formattedNumber = useParsePhoneNumber({
    formatType: 'international',
    phoneNumber: phoneNumber
  });

  return (
    <div className="mb-4 px-4 flex items-start justify-between">
      <div className='flex'>
        {/* Whatsapp Icon */}
        <img src={whatsapp} />

        {/* Info User */}
        <div className="text-sm mx-2">
          <p className="w-max font-semibold max-w-[20ch] truncate">{name}</p>
          <p>{typeof formattedNumber === 'string' ? formattedNumber : '-'}</p>
        </div>
      </div>

      {/* Button */}
      <button>
        <img src={arrowRight} />
      </button>
    </div>
  );
}

export function Modal({ loginData, dispatch, refActiver }: DataForModalType) {
  const [contactList, setContactList] = useState([]);
  const refModal = useRef<HTMLDivElement>(null);

  useEventListener({
    eventType: 'click',
    callback: (e) => {
      if (
        refModal.current === null ||
        e.target === refActiver.current ||
        refModal.current.contains(e.target)
      )
        return;
      dispatch({
        type: LOGIN_HANDLE_CASE.MODAL,
      });
    },
  });

  return createPortal(
    <div className="absolute left-0 right-0 top-0 bottom-0 z-10 bg-dark-700/90 flex items-center justify-center">
      <div
        className="bg-white rounded-md border w-max max-w-[280px] max-h-[335px] overflow-auto scrollbar-thin scrollbar-thumb-slate-300"
        ref={refModal}>
        {/* Header */}
        <h2 className="text-sm text-slate-500 px-4 mb-4 py-2 border-b">
          Daftar Kontak Admin
        </h2>

        {/* Contact List */}
        {dataDummy.map((data) => (
          <ContactItem name={data?.name} phoneNumber={data?.phone} />
        ))}
      </div>
    </div>,
    document.getElementById('portal')!
  );
}
