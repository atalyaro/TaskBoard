export default interface TaskInterface {
    _id: string
    desc: String
    date: String
    completed: Boolean
    user: {
        _id: String
        name: String
    }
}