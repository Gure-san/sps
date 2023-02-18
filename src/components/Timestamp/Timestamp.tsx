// Type
import { TimestampePropType } from "../../types/components/timpestampType"

export function Timestamp({time}: TimestampePropType) {
  return (
    <span 
    className="bg-blue-100 text-blue-900 px-1 py-0.5 rounded-md">
      {time}
    </span>
  )
}
