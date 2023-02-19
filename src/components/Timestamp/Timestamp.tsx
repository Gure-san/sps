// Type
import { TimestampePropType } from "../../types/components/timpestampType"

export function Timestamp({time, className}: TimestampePropType) {
  return (
    <span 
    className={`${className} bg-blue-100 text-blue-900 px-1 py-0.5 rounded-md`}>
      {time}
    </span>
  )
}
