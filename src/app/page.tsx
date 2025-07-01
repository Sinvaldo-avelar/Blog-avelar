import React, { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader';
import { PostsList } from '@/components/PostsList';
import { Container } from '@/components/Container';
import { Helder } from '@/components/Helder';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage(){

    return (
       <Container>
        < Helder/>
        <Suspense fallback={<SpinLoader />}>
        <PostFeatured/>
        </Suspense>
        <Suspense fallback={<SpinLoader />}>
            <PostsList />
        </Suspense>
            <footer>
                <p className='text-6xl font-bold text-center py-8'>Footer</p>
            </footer>
        </Container>

    )
}





















// https://br.xhamster.com/videos/big-ass-and-incredible-huge-boobs-fucking-a-fatty-is-great-xhtLUQP

