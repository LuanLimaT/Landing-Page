import '../styles/globals.css';

export const metadata = {
  title: 'Imptus',
  description: 'Descrição da minha página para SEO',
  icons: {
    icon: '/favicon.svg'
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
