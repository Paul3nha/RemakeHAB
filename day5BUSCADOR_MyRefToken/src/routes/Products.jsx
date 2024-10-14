import { useRef, useState } from "react";

export const Products = () => {
  const [results, setResults] = useState(null);
  const myRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const search = myRef.current.value;
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await res.json();
    setResults(data);
    console.log("You got:", data);
  };
  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="What are you looking for?"
          ref={myRef}
        />
        <button>🔍</button>
      </form>
      {results && (
        <ul>
          {results.products.map((prod) => (
            <li key={prod.id}>{prod.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
