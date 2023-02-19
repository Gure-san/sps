// React
import { useEffect, useRef, useState } from 'react';

// React Dom
import { createPortal } from 'react-dom';

// Type
import {
  DataForContactListModalType,
  LOGIN_HANDLE_CASE,
} from '../../types/components/loginType';
import {
  DataContactList,
  ContactItemPropType,
} from '../../types/components/contactListModalType';

// Costum Hooks
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEventListener } from '../../hooks/useEventListener';
import { useParsePhoneNumber } from '../../hooks/useParsePhoneNumber';

// Components
import { SkeletonContactList } from '../Skeleton';

// Utils
import { v4 as uuidv4 } from 'uuid';

// Assets
import arrowRight from '../../assets/arrow-right.svg';
import whatsapp from '../../assets/whatsapp.svg';

const dataDummy: (DataContactList | undefined)[] = [
  {
    name: 'Abdul Aziz Rahmat Ibnu Fani alsdfjals;',
    phoneNumber: '0812351918140',
  },
  {
    name: 'Andre Firmansyah',
    phoneNumber: '0814141234013',
  },
  {
    name: 'Andre Firmansyah',
    phoneNumber: '0814141234013',
  },
  ,
  {
    name: 'Andre Firmansyah',
    phoneNumber: '0814141234013',
  },
  ,
  {
    name: 'Andre Firmansyah',
    phoneNumber: '0814141234013',
  },
  {
    name: 'Andre Firmansyah',
    phoneNumber: '0814141234013',
  },
];

function ContactItem({ name, phoneNumber }: ContactItemPropType) {
  const formattedNumber = useParsePhoneNumber({
    formatType: 'international',
    phoneNumber: phoneNumber,
  });

  return (
    <li className="mb-4 px-4 flex items-start justify-between">
      <div className="flex items-start">
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
    </li>
  );
}

export function ContactListModal({
  dispatch,
  refActiver,
}: DataForContactListModalType) {
  const [contactList, setContactList] = useState<
    (DataContactList | undefined)[] | null
  >(null);
  const refContactListModal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetching Contact List Data
    setContactList(dataDummy);
  }, [contactList]);

  useClickOutside({
    refActiver: refActiver,
    closeTrigger: () => {
      dispatch({
        type: LOGIN_HANDLE_CASE.MODAL,
      });
    },
    refElement: refContactListModal,
  });

  return createPortal(
    <div className="fixed left-0 right-0 top-0 bottom-0 z-10 bg-dark-700/90 flex items-center justify-center">
      <div
        className="bg-white rounded-md border w-max max-w-[280px] max-h-[335px] overflow-auto scrollbar-thin scrollbar-thumb-slate-300"
        ref={refContactListModal}>
        {/* Header */}
        <h2 className="text-sm text-slate-500 px-4 mb-4 py-2 border-b">
          Daftar Kontak Admin
        </h2>

        {/* Contact List */}
        <ul>
          {contactList !== null ? (
            contactList.map((data) => (
              <ContactItem
                key={uuidv4()}
                name={data?.name}
                phoneNumber={data?.phoneNumber}
              />
            ))
          ) : (
            <SkeletonContactList />
          )}
        </ul>
      </div>
    </div>,
    document.getElementById('portal')!
  );
}
