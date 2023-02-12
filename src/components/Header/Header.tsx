// React Router
import { Link } from 'react-router-dom';

// Asset
import UserIcon from '../../assets/user.svg';

// Type
import {
  HeaderPropType,
  deviceSizeHeaderComponent,
} from '../../types/components/headerType';

function Profil({ size }: HeaderPropType) {
  switch (size) {
    case deviceSizeHeaderComponent.DEKSTOP:
      return (
        <div className="flex items-center">
          {/* Icon */}
          <div className="bg-white shadow-md border border-dark-50 p-2 rounded-full w-max mr-4">
            <img src={UserIcon} />
          </div>

          {/* Info User */}
          <div>
            <p className="text-sm font-semibold">Abdul Aziz Rahmat Ibnu Fani</p>
            <p className="text-dark-300 text-xs">XII RPL A - 1</p>
          </div>
        </div>
      );

    case deviceSizeHeaderComponent.MOBILE:
      return (
        <Link
        to={'/user'} 
        className="bg-white shadow-md border border-dark-50 p-2 rounded-full">
          <img src={UserIcon} />
        </Link>
      );
  }
}

export function Header({ size }: HeaderPropType) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-dark-100 mb-6">
      {/* App Name */}
      <div>
        <h1 // ini nanti elu ganti pake component <Link> punya nya react router yak
          className="text-xl font-bold">
          SPS
        </h1>
      </div>

      {/* User Icon / Link */}
      <Profil size={size} />
    </div>
  );
}
