
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vab's Clean | Nettoyage Vitres & Solaire",
  description: "Nettoyage professionnel à Mirambeau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
