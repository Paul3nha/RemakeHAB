import { PhotoList } from "../components/PhotoList.jsx";
import { SearchForm } from "../components/SearchForm.jsx";

export const SearchPhotos = () => {
  return (
    <section id="search-photos">
      <h2>Search Photos</h2>
      <SearchForm />
      <PhotoList />
    </section>
  );
};
