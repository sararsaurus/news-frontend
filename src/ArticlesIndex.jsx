export function ArticlesIndex(props) {
  return (
    <div id="articles-index">
      <h1 className="text-center">Cybersecurity Roundup</h1>
      <br />
      <div className="row">
        {props.articles.map((article) => (
          <div className="col-4" key={article.title}>
            <div class="card">
              <h2 className="card-title text-center">{article.title}</h2>
              <p className="card-text">{article.description}</p>
              <p className="card-text">{article.publishedAt}</p>
              <a className="card-text" href={article.url} target="_blank">
                Link
              </a>
              <br />
              <br />
              <img src={article.urlToImage} className="card-img-top rounded mx-auto d-block" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
