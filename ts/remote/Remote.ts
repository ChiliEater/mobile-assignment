import Post from "./Post";

class Remote {
    public static host: string = "http://100.64.0.4:7777";
    private static postPath: string = "post";

    public static async getPost(id: number) {
        try {
            const res = await fetch(`${this.host}/${this.postPath}/${id}.json`);
            const json = await res.json();
            console.log(json);
            return new Post(json);
        } catch (err) {
            console.log(err);
        }
    }
}

export default Remote;