export const HearthIcon = ({ fillColor, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0))" }}
      onClick={onClick}
    >
      <path d="M20.84 4.61c-1.91-1.73-5.04-1.73-6.95 0L12 6.5l-1.89-1.89c-1.91-1.73-5.04-1.73-6.95 0-2.08 1.89-2.08 4.95 0 6.84L12 21.23l8.84-9.77c2.08-1.89 2.08-4.95 0-6.84z"></path>
    </svg>
  );
};
