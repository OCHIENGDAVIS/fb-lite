import Image from 'next/image';
import { useRef, useState } from 'react';
import firebase from 'firebase';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db, storage } from '../firebase';

function InputBox() {
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [session] = useSession();
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const data = {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    try {
      const doc = await db.collection('posts').add(data);
      if (imageToPost) {
        const uploadTask = storage
          .ref(`posts/${doc.id}`)
          .putString(imageToPost, 'data_url');
        uploadTask.on(
          'state_changed',
          null,
          (err) => console.log(err),
          () => {
            // when the upload completes
            storage
              .ref('posts')
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                db.collection('posts').doc(doc.id).set(
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
          }
        );
      }
      inputRef.current.value = '';
    } catch (err) {
      setError(err);
    }
  };
  const [imageToPost, setImageToPost] = useState(null);
  const addImage = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removerImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          width={40}
          height={40}
          src={session.user.image}
          layout="fixed"
          alt="facebook"
          className="rounded-full cursor-pointer"
        />
        <form action="" className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none"
            type="text"
            placeholder={`wha'ts on your mind, ${session.user.name}`}
            ref={inputRef}
          />

          <button type="submit" className="" hidden onClick={sendPost}></button>
        </form>

        {imageToPost && (
          <div onClick={removerImage} className="flex flex-col">
            <img
              src={imageToPost}
              className="h-10 object-contain filter hover:brightness-110 transition duration-150 tranform hover:scale-105 cursor-pointer "
            />
            <p className="text-xs text-red-700 text-center">Remove</p>
          </div>
        )}
        {error && <div className="text-red-900">{error}</div>}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-700 " />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400 " />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} type="file" hidden onChange={addImage} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300 " />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
