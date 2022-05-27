import React, { useEffect, useState } from 'react';
import '../CSS Components/Blog.css';
import { useTheme } from '../contexts/ThemeContext';
import Satellite from '../Assets/Icons/Comet.svg';
import ArticleCard from './Cards/ArticleCard';

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

  useEffect(() => {
    console.log(articleData);
  }, [articleData]);

  return (
    <>
      <section id="blog">
        <div className="portfolio-container">
          <div className={darkMode ? 'blog-header' : 'blog-header-light'}>
            <img alt="satellite" src={Satellite} />
            <h1>Recent Writings</h1>
          </div>
          <div className="row-cards">
            {articleData.map((item, index) => {
              return (
                <>
                  <ArticleCard
                    key={index}
                    link="https://blog.reilly.dev/react-essentials-props"
                    title={item.title}
                    image={item.coverImage}
                    date={item.dateUpdated}
                    length="3"
                  />
                </>
              );
            })}
            <ArticleCard
              link="https://blog.reilly.dev/react-essentials-props"
              title="This article is coming soon 👀"
              image="https://images.pexels.com/photos/12003586/pexels-photo-12003586.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              length="3"
              imageAlt="Green petals of a plant with their white flowers blossomed."
            />
          </div>
          {/* <a target="_blank" rel="noreferrer" href="https://blog.reilly.dev">
            <div
              className={darkMode ? 'blog-button' : 'blog-button blog-light'}
            >
              Visit Blog
            </div>
          </a> */}
        </div>
      </section>
    </>
  );
}
