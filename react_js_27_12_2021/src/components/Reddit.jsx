import useFetch from "../hooks/useFetch";
import "./Reddit.css";

const Reddit = () => {
  const [isLoading, data, error] = useFetch(
    "https://www.reddit.com/r/reactjs.json"
  );

  return (
    <div>
      <div className={isLoading ? "loader" : ""}></div>

      <div>
        { data
          ? data.data.children.map((post, index) => (
              <li key={index}>{post.data.title}</li>
            ))
          : ""}
      </div>

      <p>{error}</p>
    </div>
  );
};

export default Reddit;
