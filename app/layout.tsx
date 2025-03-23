import './globals.css';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'ESP32 Ultrasonic Radar Visualizer',
  description: 'Real-time radar visualization for ESP32 ultrasonic sensor data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="radar-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}