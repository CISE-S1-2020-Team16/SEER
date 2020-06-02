const Article = require('../models/article')

createArticle = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a article',
        })
    }

    const article = new Article(body)

    if (!article) {
        return res.status(400).json({ success: false, error: err })
    }

    article
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: article._id,
                message: 'article created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Article not created!',
            })
        })
}

updateArticle = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Article not found!',
            })
        }
        article.article = body.article
        article.author = body.author
        article.title = body.title
        article.journal = body.journal
        article.year = body.year
        article.volume = body.volume
        article.number = body.number
        article.pages = body.pages
        article.month = body.month
        article
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: article._id,
                    message: 'article updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'article not updated!',
                })
            })
    })
}

deleteArticle = async (req, res) => {
    await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `article not found` })
        }

        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticleById = async (req, res) => {
    await Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticles = async (req, res) => {
    await Article.find({}, (err, articles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!articles.length) {
            return res
                .status(404)
                .json({ success: false, error: `article not found` })
        }
        return res.status(200).json({ success: true, data: articles })
    }).catch(err => console.log(err))
}

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle,
    getArticles,
    getArticleById,
}