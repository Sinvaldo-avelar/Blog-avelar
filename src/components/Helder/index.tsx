

import clsx from 'clsx';
import Link from 'next/link';

export function Helder(){
    return (
        <header>
         <h1 className={clsx(
        'text-4xl/normal font-extrabold py-8',
        'sm:text-5x1/nomal sm:py-10',
        'md:text-6xl/normal md:py-11',
        'lg:text-7xl/normal lg:py-12')}>
            <Link href="/">Meu Blog</Link>
         </h1>

        </header>
    )
}
