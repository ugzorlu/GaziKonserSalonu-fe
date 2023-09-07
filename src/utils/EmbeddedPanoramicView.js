import React, { useState, useEffect } from 'react';

const EmbeddedPanoramicView = (props) => {
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

	function getCurrentDimension() {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	}
	console.log('screenSize:');
	console.log(screenSize);

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize(getCurrentDimension());
		};
		window.addEventListener('resize', updateDimension);

		return () => {
			window.removeEventListener('resize', updateDimension);
		};
	}, [screenSize]);

	return (
		<div>
			<iframe
				title='Embbedded Panoramic View'
				width={screenSize.width * 0.75}
				height={screenSize.height * 0.75}
				src='https://www.google.com/maps/embed?pb=!4v1694091661418!6m8!1m7!1sCAoSLEFGMVFpcFByckFCMk80R05xNHB3blJkSkVlWE9Vc0pwTEFoalRNeTJKcWYx!2m2!1d38.3967707841247!2d27.0782960421401!3f20!4f20!5f0.7820865974627469'
				allowfullscreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
			/>
		</div>
	);
};

export default EmbeddedPanoramicView;
