import Stories from './Stories';
import InputBox from './InputBox';
import Post from './Post';

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4  overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-wlg">
        <Stories />
        <InputBox />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
