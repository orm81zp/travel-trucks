import css from "./DetailImage.module.css";

const DetailImage = ({ gallery, alt = "", showFirst = false }) => {
  const images = showFirst && gallery.length ? [gallery[0]] : gallery;

  return (
    <div className={css.wrapper}>
      {images.map(({ thumb }) => (
        <img
          key={thumb}
          className={css.image}
          src={thumb}
          alt={alt}
          width="292"
          height="320"
        />
      ))}
    </div>
  );
};

export default DetailImage;
