const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: String,
    profession: String,
    phone: String,
    email: String
})

const initiateTeams = async () => {
    const Atalya = new UserModel({ name: "Atalya", profession: "seller", phone: "0544528103", email: "atalyya0@walla.com" })
    await Atalya.save()
    const Amir = new UserModel({ name: "Amir", profession: "basketball player", phone: "0542171141", email: "amirgab13@gmail.com" })
    await Amir.save()
    const Avishag = new UserModel({ name: "Avishag", profession: "engineer", phone: "0544528571", email: "avishagroichman@gmail.com" })
    await Avishag.save()
    const Iftah = new UserModel({ name: "Iftah", profession: "physicist", phone: "0544528900", email: "iftahtheking@walla.com" })
    await Iftah.save()
}

const UserModel = model('user', userSchema)

module.exports = { UserModel, initiateTeams }
