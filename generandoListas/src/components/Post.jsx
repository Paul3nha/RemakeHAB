import PropTypes from "prop-types"; //importamos poprtypes para validar las props de Post

//componente Post recibe por props los datos de cada artículo
export const Post = ({ post }) => {
  return (
    <li>
      <article>
        <header>
          <img src={post.avatar} alt={post.username} />
          <h2>{post.username}</h2>
        </header>
        <p>{post.content}</p>
        <p>
          {post.likes}
          <img
            src="https://www.svgrepo.com/show/13666/heart.svg"
            alt="heart icon"
          />
        </p>
      </article>
    </li>
  );
};

//definición de las props para poder validarlas
Post.propTypes = {
  post: PropTypes.array.isRequired,
};
