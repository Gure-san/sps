import React from 'react';
import { notificationType, notification } from '../../types/notificationType';

const defaultMessage = 'isi pesan';

export function Notification({message = defaultMessage, type}: notificationType) {
  switch(type) {
    case notification.VALID :
      return (
        <div className='mb-2.5 text-sm font-semibold flex items-center justify-between rounded-md py-2 px-4 bg-green-100 text-green-900 border-green-900'>
          <p>{message}</p>
          <button className='font-bold px-4 h-full'>X</button>
        </div>
      )

    case notification.INVALID :
      return (
        <div className='mb-2 text-sm font-semibold flex items-center justify-between rounded-md py-2 px-4 bg-red-100 text-red-900'>
          <p>{message}</p>
          <button className='font-bold px-4 h-full'>X</button>
        </div>
      )
  }
}
