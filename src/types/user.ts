import type Followers from "./follower";
import type Following from "./following";
import type Posts from "./posts";

export default interface User {
    username: string,
    followers: Followers[],
    following: Following[],
    posts: Posts[]
}