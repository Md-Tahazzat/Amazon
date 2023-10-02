import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const ProductImages = ({ images }: { images: string[] }) => {
  const [largeImage, setlargeImage] = useState<string>(images[0]);

  // image changing handler to chenge the large image.
  const handleImageChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const image = e?.target as HTMLElement;
    const src = image.getAttribute("src");
    if (src !== largeImage && !!src) {
      setlargeImage(src);
    }
  };
  return (
    <div className="flex lg:sticky lg:top-4 my-4 lg:my-0 w-full lg:w-[37%] justify-center gap-2">
      {/* side images */}
      <div className="flex w-[14%] md:w-[8%] lg:w-[12%] flex-col justify-start">
        {images?.map((link, index) => {
          return (
            <img
              className={`border-2 mb-3 ml-auto rounded-2xl w-14 h-14 ${
                link === largeImage ? "border-blue-500" : "border-white"
              }`}
              onMouseOver={handleImageChange}
              key={index}
              src={link}
            />
          );
        })}
      </div>
      {/* main image */}
      <div className="w-[86%] md:w-[86%] lg:w-[88%] h-[350px] md:h-[420px] lg:h-[460px] flex items-center justify-center">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: largeImage,
            },
            largeImage: {
              src: largeImage,
              width: 1200,
              height: 1400,
            },
            enlargedImageContainerDimensions: {
              width: 800,
              height: 600,
            },
            imageClassName: "react-magnify-small-image",
            enlargedImageContainerClassName:
              "react-magnify-large-image-container",
            enlargedImagePosition: "beside",
          }}
        />
      </div>
    </div>
  );
};

export default ProductImages;
