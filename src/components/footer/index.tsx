import Link from "next/link";

export function Footer(){
    return (
      <footer className="b pb-16 text-center">
        <p> <span>Copyright &copy; {new Date().getFullYear()} - </span>  <Link href='/'>Meu Blog</Link></p>
     </footer>
    )
}
