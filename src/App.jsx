import { Hero, ArticleSummary } from './components';

const App = () => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <ArticleSummary />
      </div>
    </>
  );
};

export default App;
