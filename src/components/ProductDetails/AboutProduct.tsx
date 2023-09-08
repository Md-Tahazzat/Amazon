import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type AboutProductType = {
  about: string[];
};

const AboutProduct = ({ about }: AboutProductType) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <>
      <h4 className="text-xl pt-1 flex items-center justify-between font-semibold">
        About this item{" "}
        <span
          className="flex items-center gap-2"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </h4>
      <ol className="list-disc ml-4">
        {seeMore ? (
          about.map((list, index) => (
            <li className="mb-0.5" key={index}>
              {list}
            </li>
          ))
        ) : (
          <li>{about[0]}</li>
        )}
      </ol>
    </>
  );
};

export default AboutProduct;
