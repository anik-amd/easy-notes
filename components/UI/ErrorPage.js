// props
//         type -> String -> "notes" || "404"

const ErrorPage = (props) => {
  return (
    <>
      <div className="text-center  py-5 pl-4 pr-6 m-5 block w-full">
        <p className="text-7xl text-neutral-600">¯\_(ツ)_/¯</p>
        <br />
        {props.type === "notes" && (
          <p className="text-2xl text-gray-600">
            You don&quot;t have any notes.{" "}
          </p>
        )}
        {props.type === "404" && (
          <p className="text-2xl text-gray-600">404 - Page not found.</p>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
