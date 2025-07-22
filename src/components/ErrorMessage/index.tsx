'use client';

import clsx from "clsx";
import Link from "next/link";


type ErrorMessageProps = {
    pageTitle: string;
    contentTitle: string;
    content: React.ReactNode;
    contentLink: string;

}

export default function ErrorMessage({pageTitle, contentTitle, content, contentLink}: ErrorMessageProps) {
    return (
        <>
        <title>{pageTitle}</title>
       <div className={clsx(
         'min-h-[320px] bg-slate-800 text-slate-100',
         'mb-16 py-8 rounded-xl',
         'flex itms-center justify-center', 'text-center'
         )}>
         <div>
             <h1 className="text-6xl mb-4 font-extrabold">{contentTitle}</h1>
             <h2>Página não encontrada</h2>
             <div>{content}</div>
             <Link href="/" style={{ color: '#00f33d', textDecoration: 'underline' }}>
                {contentLink}
             </Link>
         </div>
      </div>
      </>
    );
}
