import React, { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader';
import { PostsList } from '@/components/PostsList';
import { PostFeatured } from '@/components/PostFeatured';



export default async function HomePage(){

    return (
      <>
        <Suspense fallback={<SpinLoader />}>
        <PostFeatured/>
        </Suspense>
        <Suspense fallback={<SpinLoader />}>
            <PostsList />
        </Suspense>
     </>
    )
}





















// https://br.xhamster.com/videos/big-ass-and-incredible-huge-boobs-fucking-a-fatty-is-great-xhtLUQP

