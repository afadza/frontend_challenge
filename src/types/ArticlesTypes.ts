export interface Article {
  title: string;
  urlToImage: string;
  url: string;
  description: string;
  source: {
    name: string;
  };
}

export interface Props {
  articles: Article[];
}
