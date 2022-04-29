const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="bg-slate-100 dark:bg-gray-900 p-5 text-center text-slate-800 dark:text-slate-400">
        © {year}
        <br />
        <span className="text-lg">📝 Easy Notes </span>
      </div>
    </>
  );
};

export default Footer;
