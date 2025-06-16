import "./globals.css";

export const metadata = {
  title: "Abdullah-Portfolio",
  description: "Abdullah portfolio, This is my portfolio built in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="bg-slate-950 text-white">
        
        {/* Background Wrapper */}
        <div className="min-h-screen">
          <div className="relative min-h-screen">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            {/* Content Layer */}
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
