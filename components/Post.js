import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { ShareIcon, ChatAltIcon, ThumbUpIcon } from '@heroicons/react/outline';

function Post() {
  const [session] = useSession();
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 roundend-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            width={40}
            height={40}
            src={session.user.image}
          />
          <div>
            <p className="font-medium">name</p>
            <p className="text-xs text-gray-400">time</p>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Repudiandae ducimus ullam aliquid aspernatur
          doloremque facere minima esse unde consectetur mollitia, excepturi,
          enim distinctio, nihil quae aperiam! Laboriosam earum consequuntur
          ipsum!
        </p>
      </div>
      {/* check if an immage has a post before rendering */}
      {
        <div className="relative h-56 md:h-80 bg-white">
          <h3>iage</h3>
          <Image src={session.user.image} objectfit="cover" layout="fill" />
        </div>
      }
      {/* footer section of the post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow shadw-md text-gray-400 border-t ">
        <div className="inputIcon rounded-none">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs md:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs md:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-4" />
          <p className="text-xs md:text-base">share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
