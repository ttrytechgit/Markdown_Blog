const express = require('express')
const mongoose = require('mongoose')
// const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/markdown_blog')
// , 
// {
//     useNewUrlParser: true, useUnifiedTopology: true
// }
// )

app.set('view engine', 'ejs')

// app.use('/articles', articleRouter)


// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Test Article',
            description: 'Test Description',
            createdOn: new Date()
        },
        {
            title: 'Test Article 2',
            description: 'Test Description 2',
            createdOn: new Date()
        }
    ]
    res.render('articles/index', { articles: articles })
})

// app.get('/', async (req, res) => {
//     const articles = await (await Article.find()).toSorted({
//         createdOn: 'description'
//     })
//     res.render('articles/index', { articles: articles })
// })

app.use(express.urlencoded({ extended: false }))

// app.use('/articles', articleRouter)

app.listen(5000)