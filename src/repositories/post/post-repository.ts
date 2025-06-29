import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
    findAll(): Promise<PostModel[]>
    findByid(id: string): Promise<PostModel>;
}


