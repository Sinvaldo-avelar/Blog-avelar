import React, { Suspense } from 'react';
import clsc, { clsx } from 'clsx';
import { SpinLoader } from '@/components/SpinLoader';
import { postRepository } from '@/repositories/post';
import { PostsList } from '@/components/PostsList';

export default async function HomePage(){

    return (
        <div>
            <header>
                <h1 className='text-6xl font-bold text-center py-8'>Aqui é meu HEADER</h1>
            </header>
            <Suspense fallback={<SpinLoader />}>
            <PostsList />
            </Suspense>
            <footer>
                <p className='text-6xl font-bold text-center py-8'>Footer</p>
            </footer>
        </div>
    )
}

