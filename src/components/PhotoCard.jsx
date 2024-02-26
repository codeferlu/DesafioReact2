import IconFollowing from './IconFollowing';

const PhotoCard = ({
  id,
  photographer,
  url,
  liked,
  src,
  alt,
  filled,
  handleFollow,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center w-[300px] bg-black rounded-lg p-3 relative">
        {/* Aumentar el tamaño de la imagen */}
        <div className="flex items-center justify-center relative">
          <figure className="w-[200px] h-[200px] relative">
            <img
              className="w-full h-full object-contain rounded-lg"
              src={src.medium}
              alt={alt}
            />
            {/* Mover el botón de seguir dentro de la imagen en la esquina superior derecha */}
            <button
              onClick={() => handleFollow(id)}
              className="absolute top-0 right-0 p-2 bg-black bg-opacity-80 text-white rounded-full"
            >
              <IconFollowing filled={filled} />
            </button>
          </figure>
        </div>
        <div>
          <strong>
            <p>{photographer}</p>
          </strong>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PhotoCard; // Asegúrate de exportar el componente PhotoCard por defecto


export { PhotoCard };
