export function ArticlesIndex(props) {
  return (
    <div id="articles-index">
      <h1>All articles</h1>

      {props.articles.map((article) => (
        <div key={article.title} className="articles">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.urlToImage} />
        </div>
      ))}
    </div>
  );
}
