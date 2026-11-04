const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/markdown_blog')

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const articles = await (await Article.find()).toSorted({
        createdOn: 'desc'
    })
    res.render('articles/index', { articles: articles })
})

app.use(express.urlencoded({ extended: false }))

app.use('/articles', articleRouter)

app.listen(5000)