import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#FFB5B5"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;