import clsx from "clsx";

export default function NotFound() {
    return (
        <div className={clsx('min-h-[320px] bg-slate-800 text-slate-100', 'mb-16 py-8 rounded-xl', 'flex itms-center justify-center', 'text-center')}>
            <div>
             <h1 className="text-6xl mb-4 font-extrabold">404</h1>
             <h2>Página não encontrada</h2>
             <p>A página que você procura não existe.</p>
             <a href="/" style={{ color: '#00f33d', textDecoration: 'underline' }}>
                Voltar para a página inicial
             </a>
            </div>
        </div>
    );
}
