import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Helder } from "@/components/Helder";
import { Footer } from "@/components/footer";




export const metadata: Metadata = {
  title: {
    default: 'Meu Blog - Es é um blog com Next.js',
    template: '%s Meu Blog'
  },
  description: "Essa seria a descrição dessa página",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BA" >
      <body>
      <Container>
      < Helder/>
        {children}
    <Footer/>
      </Container>
      </body>
    </html>
  );
}
