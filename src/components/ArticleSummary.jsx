import { useState, useEffect } from 'react';

import { linkIcon } from '../assets';
import { useLazyGetSummaryQuery } from '../services/apis/articleApi';

const ArticleSummary = () => {
  const [getSummary, { isLoading, error }] = useLazyGetSummaryQuery();

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  // if (isLoading) return 'Loading...';

  // if (error) throw new Error(error?.message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article?.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data?.summary };

      setArticle(newArticle);
    }
  };

  useEffect(() => {}, []);

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
      </div>

      {/* Display results */}
      <div>
        <p>{article?.summary}</p>
      </div>
    </section>
  );
};

export default ArticleSummary;
