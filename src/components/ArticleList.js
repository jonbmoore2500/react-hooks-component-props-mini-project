import React from "react"
import Article from "./Article"

function ArticleList({ postsArr }) {
    
    const articles = postsArr.map((post) => {
        return <Article title={post.title} date={post.date} prev={post.preview} key={post.id}/> 
      })

    return (
        <main>
            {articles}
        </main>
    )  

}

export default ArticleList