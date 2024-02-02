import ArticleCard from "./components/ArticleCard";
import useArticles from "./hooks/useArticles";

const App = () => {
  const { articlesData } = useArticles();

  return (
    <div data-testid="article-card">
      <ArticleCard articles={articlesData} />
    </div>
  );
};

export default App;
