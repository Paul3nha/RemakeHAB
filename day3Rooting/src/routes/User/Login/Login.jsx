export const Login = () => {
  return (
    <div className="text-center p-4">
      <h1 className="font-bold">Login now 🍳</h1>
      <form className="flex flex-col p-4">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="border-dotted border-2 border-sky-500 m-4">
          Go in
        </button>
      </form>
    </div>
  );
};
