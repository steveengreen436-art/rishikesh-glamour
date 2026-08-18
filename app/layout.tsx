export const metadata = {
  title: 'Amantra Hills Rishikesh | Luxury Hotel & Geodesic Domes',
  description: 'Experience supreme modern luxury and glowing mountain vistas at Amantra Hills Rishikesh, located in Narendra Nagar, Uttarakhand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
