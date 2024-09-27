import { PostList } from "./components/PostList.jsx";
import posts from "./db/posts.json"; //importo los posts

function App() {
  return (
    <>
      <h1>Generando una lista de Dioses Egipcios</h1>

      {/* Genera aquí la lista de posts */}
      <PostList posts={posts} />
    </>
  );
}

export default App;
