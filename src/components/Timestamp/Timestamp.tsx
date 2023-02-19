// Type
import {
  TimestampePropType,
  timestampType,
} from '../../types/components/timpestampType';

export function Timestamp({ category, time, className }: TimestampePropType) {
  switch (category) {
    case timestampType.OPEN:
      return (
        <span
          className={`${className} bg-blue-100 text-blue-900 px-1 py-0.5 rounded-md`}>
          {time}
        </span>
      );

    case timestampType.CLOSE:
      return (
        <span
          className={`${className} bg-red-100 text-red-900 px-1 py-0.5 rounded-md`}>
          {time}
        </span>
      );
  }
}
