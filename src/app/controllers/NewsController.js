class NewsController {
    //[GET] /news
    news(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController();
