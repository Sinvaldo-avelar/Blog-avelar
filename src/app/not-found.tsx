import ErrorMessage from "@/components/ErrorMessage";


export default function NotFound() {
    return (

        <ErrorMessage
        pageTitle='Página não encontrada'
        contentTitle='404'
        content= 'A página que você procura não existe.'
        contentLink="    Voltar para a página inicial"
        />

    );
}
