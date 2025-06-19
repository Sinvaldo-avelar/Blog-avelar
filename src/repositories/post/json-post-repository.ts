import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile, writeFile } from 'fs/promises';

// Define o diretório raiz e o caminho do arquivo JSON
const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',  // Corrigido para apontar para a pasta correta
  'posts.json',
);
const SIMULATE_WAIT_IN_MS = 5000; // Simula um atraso de 500ms para simular uma opração assincrono


export class JsonPostRepository implements PostRepository {
    private async simulateWait(){
        if (SIMULATE_WAIT_IN_MS <= 0) return;

        await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
    }
    private async readFromDisk(): Promise<PostModel[]>{
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
        const parsedJson = JSON.parse(jsonContent);
        const {posts} = parsedJson;
        return posts;

    }

    async findAll(): Promise<PostModel[]> {
        await this.simulateWait();
        // Lê os posts do arquivo json
        const posts = await this.readFromDisk();
        return posts;
    }

    async findByid(id: string): Promise<PostModel> {
         await this.simulateWait();
         // Lê os posts do arquivo json
        const posts = await this.readFromDisk();
        const post = posts.find((post: { id: string; }) => post.id === id);

        if (!post) throw new Error('Post not found');

        return post;
    }
}

// Exemplo de uso (descomente se necessário)
// (async () => {
//     const postRepository = new JsonPostRepository();
//     const posts = await postRepository.findAll();
//     posts.forEach(post => {
//         console.log(post.id);
//     });
//     console.log(posts);
// })();
