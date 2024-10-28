import Article from "./Article.jsx"

function ArticleList( { posts } ) {
    return (
        <main>
           { posts.map(article => (
        <Article
          key= { article.id }
          title= { article.title }
          date= { article.date }
          time= { article.minutes }
          preview= { article.preview }
        />
      ))}
        </main>
    )
}

export default ArticleList