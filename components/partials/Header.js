import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <button onClick={() => setTheme("light")}>🌞</button>;
    } else {
      return <button onClick={() => setTheme("dark")}>🌙</button>;
    }
  };
  return (
    <>
      <Head>
        <title>Easy Notes || Privacy focused browser based notepad.</title>
        <meta
          name="description"
          content="Privacy focused browser based notepad."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between bg-slate-200 dark:bg-slate-800 py-3 px-10">
        <Link href={"/"}>
          <a>
            <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-400">
              Easy Notes
            </h1>
          </a>
        </Link>
        {renderThemeChanger()}
      </div>
    </>
  );
};

export default Header;
