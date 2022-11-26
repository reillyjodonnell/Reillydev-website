import '../../CSS Components/Cards/ArticleCard.css';

export default function ArticleCard({
  title,
  length = 4,
  date = new Date(),
  image,
  link,
  imageAlt = 'no image alt supplied',
}) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Date(date).toLocaleDateString('en-us', options);

  return (
    <div className="ArticleCard-parent-container">
      <a
        className="ArticleCard-link"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <div className="ArticleCard-image-container">
          <img className="ArticleCard-image" alt={imageAlt} src={image} />
        </div>
        <div className="ArticleCard-content-container">
          <div className="ArticleCard-content-parent-container">
            <div className="ArticleCard-content-padding-container">
              {/* <span className="headline">NEW WOW</span> */}
              <h2 className="ArticleCard-title">{title}</h2>
              {date && (
                <span className="ArticleCard-date">{formattedDate}</span>
              )}
              <span className="ArticleCard-date">{length} min read</span>

              <button className="ArticleCard-read-button">Read</button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
