import Image from 'next/image';
import { signIn } from 'next-auth/client';
function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        width={400}
        height={400}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Rw8yIenn0mRZfmWL7Ck5TwHaE8%26pid%3DApi&f=1"
        objectFit="contain"
        alt="facebook"
      />
      <h2
        className="p-5 bg-red-500 rounded-full text-white text-center cursor-pointer"
        onClick={signIn}
      >
        Sign in with Google
      </h2>
    </div>
  );
}

export default Login;
