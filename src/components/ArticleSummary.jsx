import { useState, useEffect } from 'react';

import { linkIcon, copy, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/apis/articleApi';

const ArticleSummary = () => {
  const [getSummary, { isLoading, error }] = useLazyGetSummaryQuery();
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const articlesFromLocaleStorage = JSON.parse(
      localStorage.getItem('articles')
    );

    if (articlesFromLocaleStorage) {
      setAllArticles(articlesFromLocaleStorage);
    }
  }, []);

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

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
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
              <div
                className="copy_btn"
                onClick={() => handleCopy(article?.url)}
              >
                <img
                  src={copied === article?.url ? tick : copy}
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
      <div className="my-10 max-w-full flex justify-center items-center">
        {isLoading ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, That wasnt supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article?.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>

              <div className="summary_box ">
                <p className="font-inter font-medium text-sm text-gray-700">
                  {article?.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ArticleSummary;
