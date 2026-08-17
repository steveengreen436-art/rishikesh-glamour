import './globals.css';

export const metadata = {
  title: 'Rishikesh Majesty | Luxury Hotel',
  description: 'Where supreme modern luxury meets the timeless flow of the holy Ganges.',
}

export default function RootLayout({
  children,
}, {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
