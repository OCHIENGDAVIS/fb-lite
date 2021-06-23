import { useSession } from 'next-auth/client';
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from '@heroicons/react/solid';
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

import SideBarRow from '../components/SideBarRow';

function SideBar() {
  const [session] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SideBarRow src={session.user.image} />
      <SideBarRow Icon={UserIcon} title="Friends" />
      <SideBarRow Icon={UserGroupIcon} title="Groups" />
      <SideBarRow Icon={ShoppingCartIcon} title="Market Place" />
      <SideBarRow Icon={DesktopComputerIcon} title="Watch" />
      <SideBarRow Icon={CalendarIcon} title="Events" />
      <SideBarRow Icon={ClockIcon} title="Memories" />
      <SideBarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default SideBar;
