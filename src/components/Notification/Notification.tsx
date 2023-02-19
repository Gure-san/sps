// Asset
import close from '../../assets/close.svg';

// Type
import { notificationType, NotificationPropType } from '../../types/components/notificationType';

const defaultMessage = 'isi pesan';

export function Notification({
  dispatch,
  noClose = false,
  className,
  children,
  type
}: NotificationPropType) {
  switch(type) {
    case notificationType.VALID :
      return (
        <div className={`${className} flex items-center justify-between rounded-md py-2 px-4 bg-green-100 text-green-900 border-green-900`}>
          {children}
          {!noClose && 
          <button
          onClick={() => {
            console.log('bakal ngilang iki...')
            if(dispatch) dispatch();
          }} 
          className='font-bold min-w-max min-h-max ml-2'>
            <img src={close}/>
          </button>}
        </div>
      )

    case notificationType.INVALID :
      return (
        <div
        onClick={() => {
          if(dispatch) dispatch();
        }}  
        className={`${className} flex items-center justify-between rounded-md py-2 px-4 bg-red-100 text-red-900`}>
          {children}
          {!noClose && <button className='font-bold h-full ml-2'>
            <img src={close}/>
          </button>}
        </div>
      )
  }
}
