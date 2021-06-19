import Image from 'next/image';
import {
  BellIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/client';

import HeaderIcon from '../components/HeaderIcon';

function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center px-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          width={40}
          height={40}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M2NTvCjpu6Q9jPLBEkSctgHaEK%26pid%3DApi&f=1"
          layout="fixed"
          alt="facebook"
          className="rounded-full"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 px-2 py-1">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-1">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end ">
        <Image
          width={40}
          height={40}
          src={session.user.image}
          layout="fixed"
          alt="facebook"
          className="rounded-full cursor-pointer"
          onClick={signOut}
        />
        <p className=" whitespace-nowrap font-semibold pr-3">
          {session.user.email}
        </p>
        <ViewGridIcon className="icons" />
        <ChatIcon className="icons" />
        <BellIcon className="icons" />
        <ChevronDownIcon className="icons" />
      </div>
    </div>
  );
}

export default Header;
