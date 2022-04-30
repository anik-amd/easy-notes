import Link from "next/link";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="bg-slate-100 dark:bg-gray-900 p-5 text-center text-slate-800 dark:text-slate-400">
        © {year}
        <br />
        <Link href="/">
          <a>
            <span className="text-lg hover:text-slate-600 dark:hover:text-slate-500">
              📝 Easy Notes
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
