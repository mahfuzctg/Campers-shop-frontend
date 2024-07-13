 
 

import { FallingLines } from "react-loader-spinner";

interface LoaderProps {
  height: string; // Define the type of the `height` prop
}

const Loader = ({ height }: LoaderProps) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto ${height} flex items-center justify-center`}
    >
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        // ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loader;
