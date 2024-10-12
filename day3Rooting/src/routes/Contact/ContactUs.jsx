export const ContactUs = () => {
  return (
    <div>
      <h2 className="text-center p-4">
        To get more information about our activities, please contact us:
      </h2>
      <form className="flex flex-col items-center justify-center h-full p-4">
        <div className="text-center p-4 border rounded-md shadow-lg">
          <label htmlFor="chat" className="font-bold mb-4">
            Throw here your email address
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 border rounded-md"
          />
          <button className="border-dotted border-2 border-sky-500 p-2 mt-4">
            Send Petition
          </button>
        </div>
      </form>
    </div>
  );
};
