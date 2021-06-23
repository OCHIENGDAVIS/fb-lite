import Image from 'next/image';
import { useSession } from 'next-auth/client';

function Contact() {
  const [session] = useSession();
  return (
    <div className="flex items-center space-x-3 mb-3 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={session.user.image}
        height={50}
        width={50}
        layout="fixed"
      />
      <p>name</p>
      <div className="absolute bottom-1 lef-7 bg-green-400 h-3 w-3 rounded-full animate-pulse"></div>
    </div>
  );
}

export default Contact;
