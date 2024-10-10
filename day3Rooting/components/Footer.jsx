export const Footer = () => {
  return (
    <footer
      className="bg-black
                text-white
                text-center 
                p-4"
    >
      This page was created by {import.meta.env.VITE_AUTHOR}
    </footer>
  );
};
