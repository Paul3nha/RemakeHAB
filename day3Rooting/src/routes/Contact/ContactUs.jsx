export const ContactUs = () => {
  return (
    <div>
      <h2 className="text-center p-4">
        To get more information about our activities, please contact us:
      </h2>
      <form className="text-center p-4">
        <label htmlFor="chat">Throw here your email address</label>
        <input type="text" placeholder="Enter your email" />
        <button className="border-dotted border-2 border-sky-500 m-4">
          Send Petition
        </button>
      </form>
    </div>
  );
};
