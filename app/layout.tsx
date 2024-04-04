import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Daily Vote",
		default: "Daily Vote",
	},
	authors: {
		name: "arjunsharma",
	},

	description:
		"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
	openGraph: {
		title: "Arjun Sharma",
		description:
			"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "Daily Vote",
		images: "/og.png",
		type: "website",
	},
	keywords: ["as54244", "arjunsharam", "magamind"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
