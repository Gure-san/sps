import React from 'react';
import { notificationType, NotificationPropType } from '../../types/components/notificationType';

const defaultMessage = 'isi pesan';

export function Notification({message = defaultMessage, type}: NotificationPropType) {
  switch(type) {
    case notificationType.VALID :
      return (
        <div className='mb-2.5 text-sm font-semibold flex items-center justify-between rounded-md py-2 px-4 bg-green-100 text-green-900 border-green-900'>
          <p>{message}</p>
          <button className='font-bold px-4 h-full'>X</button>
        </div>
      )

    case notificationType.INVALID :
      return (
        <div className='mb-2 text-sm font-semibold flex items-center justify-between rounded-md py-2 px-4 bg-red-100 text-red-900'>
          <p>{message}</p>
          <button className='font-bold px-4 h-full'>X</button>
        </div>
      )
  }
}
