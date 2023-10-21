import { useState, useEffect } from 'react';

import { linkIcon, copy } from '../assets';
import { useLazyGetSummaryQuery } from '../services/apis/articleApi';

const ArticleSummary = () => {
  const [getSummary, { isLoading, error }] = useLazyGetSummaryQuery();
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const articlesFromLocaleStorage = JSON.parse(
      localStorage.getItem('articles')
    );

    if (articlesFromLocaleStorage) {
      setAllArticles(articlesFromLocaleStorage);
    }
  }, []);
  // if (isLoading) return 'Loading...';

  // if (error) throw new Error(error?.message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article?.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data?.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  };

  return (
    <section className="w-full max-w-xl mt-16">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            className="url_input peer"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            required
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse URL History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((article, index) => (
            <div
              className="link_card"
              key={`link-${index}`}
              onClick={() => setArticle(article)}
            >
              <div className="copy_btn">
                <img
                  src={copy}
                  alt="copy"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {article?.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display results */}
      <div>
        <p>{article?.summary}</p>
      </div>
    </section>
  );
};

export default ArticleSummary;
