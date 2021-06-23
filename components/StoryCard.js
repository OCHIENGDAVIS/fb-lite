import Image from 'next/image';
import { useSession } from 'next-auth/client';
function StoryCard({ name, src, profile }) {
  const [session] = useSession();
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-52 lg:w-32 cursor-pointer overflow-x p-3">
      <Image
        width={40}
        height={40}
        src={session.user.image}
        layout="fixed"
        alt="facebook"
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
      />
      <Image
        src={session.user.image}
        layout="fill"
        alt="facebook"
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      />
    </div>
  );
}

export default StoryCard;
