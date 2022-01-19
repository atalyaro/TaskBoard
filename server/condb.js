module.exports = {
    connect: async () => {
        try {
            await require('mongoose').connect('mongodb://localhost/SPA', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            })
            console.log('connected to mongo')
        } catch (err) {
            console.log("couldn't connect to mongo", err)
        }
    },
}
