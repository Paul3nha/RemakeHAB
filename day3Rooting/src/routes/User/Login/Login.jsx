export const Login = () => {
  return (
    <div className="flex items-center justify-center h-full p-4">
      {" "}
      {/* en vez de poner min-h-screen, poner h-full p-4 patra poder ver el footer*/}
      <div className="text-center p-4 border rounded-md shadow-lg">
        <h1 className="font-bold mb-4">Login now 🍳</h1>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded-md"
          />
          <button className="border-dotted border-2 border-sky-500 p-2 mt-4">
            Go in
          </button>
        </form>
      </div>
    </div>
  );
};
