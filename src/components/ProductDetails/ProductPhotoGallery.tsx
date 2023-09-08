const ProductPhotoGallery = ({
  galleryPhotos,
}: {
  galleryPhotos: string[];
}) => {
  return (
    <>
      <h1 className="text-2xl mb-3 mt-10 lg:my-20 font-semibold">
        Product gallery
      </h1>
      <div className="md:grid max-w-4xl lg:mx-auto md:grid-cols-2 mb-6 md:gap-10">
        {galleryPhotos.map((src, index) => (
          <img
            className="my-4 mx-auto md:my-0 max-w-full"
            key={index}
            src={src}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPhotoGallery;
