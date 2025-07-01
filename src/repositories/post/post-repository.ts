import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
    findAllPublic(): Promise<PostModel[]>
    findByid(id: string): Promise<PostModel>;
}


