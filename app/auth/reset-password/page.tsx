export default function ResetPasswordPage() {
  return (
    <div className="bg-gray-800 w-[30vw] flex flex-col items-center p-10 rounded-xl gap-10">
      <h1 className="text-5xl">Reset Password</h1>
      <form className="w-full flex flex-col gap-5">
        <input
          className="p-2 rounded-lg text-lg text-black outline-none"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button className="bg-black p-3 rounded-lg text-lg font-bold transition hover:scale-105">
          Reset
        </button>
      </form>
    </div>
  );
}
