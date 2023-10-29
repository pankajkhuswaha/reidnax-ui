import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="absolute  bg-[#747fbf16] w-full h-full z-100 top-0 flex justify-center items-center min-h-[100vh]">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
