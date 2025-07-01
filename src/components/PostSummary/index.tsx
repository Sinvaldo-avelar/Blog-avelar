import { formatDatetime } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeadng";
import { PostModel } from "@/models/post/post-model";

type PostSummaryProps ={
  postHeading: 'h1'| 'h2';
  postLink: string;
  post: PostModel;
  createdAt: string
  title: string;
  excerpt: string;
}

export async function PostSummary({
     postHeading,
     postLink,
     createdAt,
     title,
     excerpt,

}: PostSummaryProps){
    return (
         <div className='flex flex-col gap-4 sm:justify-center'>
                        <time className='text-slate-600 block text-sm/tight' dateTime={createdAt}>

                         {formatDatetime(createdAt)}

                        </time>
                        <PostHeading as={ postHeading} url={postLink}>
                            {title}
                        </PostHeading>

                        <p>{excerpt}</p>

                    </div>
    )
}
