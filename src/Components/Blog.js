import React, { useEffect, useState } from 'react';
import '../CSS Components/Blog.css';
import { useTheme } from '../contexts/ThemeContext';
import Satellite from '../Assets/Icons/Comet.svg';
import ArticleCard from './Cards/ArticleCard';

function lengthOfArticle(numberOfWords) {
  const averageWordsPerMinute = 1000;
  return Math.round(numberOfWords / averageWordsPerMinute);
}

export default function Skills() {
  const { darkMode } = useTheme();

  const [articleData, setArticleData] = useState([]);

  async function retrieveBlogPosts() {
    const query = `
    query GetUserArticles($page: Int!) {
        user(username: "reilly") {
            publication {
                posts(page: $page) {
                    cuid,
                    slug,
                    title,
                    totalReactions,
                    replyCount,
                    responseCount,
                    dateAdded,
                    coverImage,
                    dateUpdated,
                    contentMarkdown,
                }
            }
        }
    }
`;

    const variables = { page: 0 };

    const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await data.json();

    const articles = result?.data?.user?.publication?.posts ?? [];
    setArticleData(articles);
  }

  useEffect(() => {
    retrieveBlogPosts();
  }, []);

  return (
    <>
      <section id="blog">
        <div className="portfolio-container">
          <div className={darkMode ? 'blog-header' : 'blog-header-light'}>
            <img alt="satellite" src={Satellite} />
            <h1>Recent Writings</h1>
          </div>
          <div className="row-cards">
            {articleData.map((item) => {
              const date = item?.dateUpdated ?? item.dateAdded;
              const uniqueKey = `${item?.slug}-${item.dateAdded}`;
              const link = `https://blog.reilly.dev/${item?.slug}`;
              const content = item?.contentMarkdown;
              const length = lengthOfArticle(content?.length ?? 0);
              return (
                <ArticleCard
                  key={item?.cuid ?? uniqueKey}
                  link={link}
                  title={item.title}
                  image={item.coverImage}
                  date={date}
                  length={length}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
