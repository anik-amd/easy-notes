import { useState, useEffect } from "react";
import Head from "next/head";
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
      return (
        <button onClick={() => setTheme("light")}>🌞</button>
        // <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      );
    } else {
      return (
        <button onClick={() => setTheme("dark")}>🌙</button>
        // <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      );
    }
  };
  return (
    <>
      <Head>
        <title>Easy Notes</title>
        <meta name="description" content="Take notes in your browser." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between bg-slate-200 dark:bg-slate-800 py-3 px-10">
        <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-300">
          Easy Notes
        </h1>
        {/* <button>🔆</button> */}
        {renderThemeChanger()}
      </div>
    </>
  );
};

export default Header;
