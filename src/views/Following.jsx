import { useContext } from 'react';
import { FollowContext } from '../context/ContextProvider';
import { PhotoCard } from '../components/PhotoCard';
import { PhotoCardSkeleton } from '../components/PhotoCardSkeleton';

const Following = () => {
	const { photos } = useContext(FollowContext);
	const photosFiltered = photos.filter((photo) => photo.liked === true);

	return (
		<div>
			<h1>Photos Liked</h1>
			<div className="flex flex-wrap gap-3 p-3">
				{photosFiltered.length ? (
					photosFiltered.map((photo, key) => (
						<PhotoCard
							key={key}
							id={photo.id}
							photographer={photo.photographer}
							url={photo.url}
							liked={photo.liked}
							src={photo.src}
							alt={photo.alt}
							filled={photo.liked}
						/>
					))
				) : (
					<>
						<h1>No photos liked</h1>
						<hr />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
					</>
				)}
			</div>
		</div>
	);
};

export default Following;


export { Following };
