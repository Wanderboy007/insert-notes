import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <nav className="flex gap-20 justify-center mb-5 py-5 bg-teal-500 rounded-b-lg">
        <a className="text-xl cursor-pointer">Home</a>
        <a className="text-xl cursor-pointer">About us</a>
        {user ? (
          <div className="flex gap-20">
            <div className="text-xl">welcome,{user.name}</div>
            <a
              className="text-xl cursor-pointer"
              href="api/auth/logout"
            >
              Logout
            </a>
          </div>
        ) : (
          <a
            className="text-xl cursor-pointer"
            href="api/auth/login"
          >
            Login
          </a>
        )}
      </nav>
      <div>
        <h1 className="text-5xl text-center m-20">Topics</h1>
        <div className="grid grid-cols-4 m-20 gap-y-10">
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center "
          >
            Cardiac
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            Endocrine
          </a>
          <a
            href="./topicburn"
            className="rounded-lg text-2xl hover:bg-cyan-900 opacity-100 text-center"
          >
            Burn
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            Neurology
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            Dermal
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            Respiratory
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            Muscular
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            Reproductive
          </a>
          <a
            href=""
            className="rounded-lg text-2xl hover:bg-cyan-500 opacity-40 text-center"
          >
            yo Digestive
          </a>
        </div>
      </div>
    </>
  );
}
