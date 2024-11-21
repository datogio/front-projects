export default function SignInPage() {
  return (
    <div className="bg-gray-800 w-[30vw] flex flex-col items-center p-10 rounded-xl gap-10">
      <h1 className="text-5xl">Sign In</h1>
      <form className="w-full flex flex-col gap-5">
        <input
          className="p-2 rounded-lg text-lg text-black outline-none"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className="p-2 rounded-lg text-lg text-black outline-none"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div>
          <span className="cursor-pointer transition hover:text-gray-300">
            Forgot password?
          </span>
        </div>
        <button className="bg-black p-3 rounded-lg text-lg font-bold transition hover:scale-105">
          Sign In
        </button>
        <div className="flex justify-between">
          <span>{"Don't have an account?"}</span>
          <span className="cursor-pointer transition hover:text-gray-300">
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
}
