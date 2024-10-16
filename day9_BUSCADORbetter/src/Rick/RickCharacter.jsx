import { useParams } from "react-router-dom";

export const RickCharacter = () => {
  const { id } = useParams();
  return <div>RickCharacter</div>;
};
