import {useCallback, useEffect, useState} from "react";

const ImageLazy = ({ src, placeholder, className, ...props }) => {
	const [img, setImg] = useState(placeholder || src);
	const onLoad = useCallback(() => setImg(src), [src]);
	const onError = useCallback(() => setImg(placeholder), [placeholder]);

	useEffect(() => {
		const imgObj = new Image();
		imgObj.src = src;
		imgObj.addEventListener('load', onLoad);
		imgObj.addEventListener('error', onError);
		return () => {
			imgObj.removeEventListener('load', onLoad);
			imgObj.removeEventListener('error', onError);
		};
	}, [src, onLoad, onError]);

	return (
		<img
			src={img}
			alt={img}
			className={`object-cover w-full h-full ${className}`}
			{...props}
		/>
	);
};

export default ImageLazy;

ImageLazy.defaultProps = {
	placeholder: "https://cmsapi1.novocinemas.com/images/NoImage/Movie/220x322/placeholder.jpg"
};
