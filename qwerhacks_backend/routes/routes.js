
var appRouter = function (app) {
    app.get('/', (req, res, next) => {
        console.log("req.params: " + JSON.stringify(req.params));
        res.status(200).json({
            message: "route: '/', This API works"
        });
    });

    app.get('/email-list/:email', (req, res, next) => {
        email = req.params.email;
        db.collection('emails').add({
            name: "placeholder name",
            email: req.params.email,
        })
        
        res.status(200).json({
            message: ("route: '/email-list/:email', email sent: " + req.params.email)
        })
    });
}

module.exports(appRouter);