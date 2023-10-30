class Post {
    public title: string;
    public body: string;

    constructor(response: any) {
        this.title = response.title;
        this.body = response.body;
    }
}

export default Post;