import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/globals.css";

export const metadata = {
  title: "LexDex - Home",
  description:
    "A place for linux devlopers where they can share their experience with linux and write blogs related to linux topics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-slate-700 px-6 font-sans">
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
