import { Hero, ArticleSummary } from './components';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <ArticleSummary />
      </div>
    </main>
  );
};

export default App;
