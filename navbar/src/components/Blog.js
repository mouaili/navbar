import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="container text-center">
      <h1 className="bgTitleColor">Mon Blog</h1>
      <section>
        <nav>
          <ul className="navigation">
            <li className="nav-items">
              <Link className="link-items" to="/blog/my-relations">
                Mes expériences
              </Link>
            </li>
            <li className="nav-items">
              <Link className="link-items" to="/blog/my-activities">
                Mes activités
              </Link>
            </li>
            <li className="nav-items">
              <Link className="link-items" to="/blog/articles">
                Mes articles
              </Link>
            </li>
            <li className="nav-items">
              <Link className="link-items" to="/blog/the-news">
                Mes infos
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Blog;
