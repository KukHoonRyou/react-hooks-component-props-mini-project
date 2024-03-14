import React from "react";
import Article from "./Article.js"

function ArticleList ({ posts }) {
    const newArticles = posts.map((arr) => (
        <Article
            key = {arr.id}
            title = {arr.title}
            date = {arr.date}
            preview = {arr.preview}
            minutes = {arr.minutes}
        />
    ))
    return(
        <main>
            { newArticles }
        </main>      
    )
}

export default ArticleList;