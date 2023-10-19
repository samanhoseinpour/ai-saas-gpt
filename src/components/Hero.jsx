import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <a href="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </a>
        <button
          type="button"
          onClick={() => {
            window.open('https://github.com/samanhoseinpour/ai-saas-gpt');
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI - GPT4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with our Summarize Articles SaaS Platform, an
        open-source article summarizer that transforms lengthy articles into
        clear and consice summaries.
      </h2>
    </header>
  );
};

export default Hero;
