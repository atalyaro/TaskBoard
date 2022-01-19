import TaskInterface from "./task.interface";
import UserInterface from "./user.interface";

export default interface ResponseInterface {
    err: boolean
    users?: UserInterface[]
    tasks?: TaskInterface[]
}
