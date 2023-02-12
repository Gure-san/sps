// Asset
import close from '../../assets/close.svg';

// Type
import { notificationType, NotificationPropType } from '../../types/components/notificationType';

const defaultMessage = 'isi pesan';

export function Notification({message = defaultMessage, type}: NotificationPropType) {
  switch(type) {
    case notificationType.VALID :
      return (
        <div className='mb-4 text-sm font-semibold flex items-center justify-between rounded-md py-2 px-4 bg-green-100 text-green-900 border-green-900'>
          <p>{message}</p>
          <button className='font-bold h-full ml-2'>
            <img src={close}/>
          </button>
        </div>
      )

    case notificationType.INVALID :
      return (
        <div className='mb-4 text-sm font-semibold flex items-center justify-between rounded-md py-2 px-4 bg-red-100 text-red-900'>
          <p>{message}</p>
          <button className='font-bold h-full ml-2'>
            <img src={close}/>
          </button>
        </div>
      )
  }
}
