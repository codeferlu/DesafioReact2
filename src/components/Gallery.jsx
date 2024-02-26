import { useContext } from 'react';
import PhotoCard from './PhotoCard';
import { FollowContext } from '../context/ContextProvider';
import PhotoCardSkeleton from './PhotoCardSkeleton';

const Gallery = () => {
  const { photos, setPhotos } = useContext(FollowContext);

  const handleFollow = (id) => {
    const newPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    );

    setPhotos(newPhotos);
  };

  return (
    <div className="flex flex-wrap gap-3 p-3">
      {photos.length ? (
        photos.map((photo, key) => (
          <PhotoCard
            key={key}
            id={photo.id}
            photographer={photo.photographer}
            url={photo.url}
            liked={photo.liked}
            src={photo.src}
            alt={photo.alt}
            filled={photo.liked}
            handleFollow={handleFollow}
          />
        ))
      ) : (
        <>
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
        </>
      )}
    </div>
  );
};

export default Gallery;
