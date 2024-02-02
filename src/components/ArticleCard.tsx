import { List, Typography, Image } from "antd";
import { Props, Article } from "../types/ArticlesTypes";

const { Text } = Typography;

function ArticleCard({ articles }: Props) {
  return (
    <List
      data-testid="article"
      itemLayout="horizontal"
      dataSource={articles}
      renderItem={(article: Article) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Image alt={article.title} src={article.urlToImage} width={100} />
            }
            title={<a href={article.url}>{article.title}</a>}
            description={
              <>
                <Text>{article.description}</Text>
                <br />
                <Text type="secondary">{article.source.name}</Text>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default ArticleCard;
