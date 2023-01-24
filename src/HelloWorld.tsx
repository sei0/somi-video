import styled from 'styled-components'
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';

import { staticFile, Video } from "remotion";

export const HelloWorld = () => {
	const currentFrame = useCurrentFrame()
	const { fps } = useVideoConfig()

	const textOpacity = (currentFrame - (0.5 * fps)) / (0.5 * fps)

	const textTranslateY = spring({
		frame: currentFrame - (0.5 * fps),
		fps,
		from: -30,
		to: 0,
		config: {
			mass: 0.4
		}
	})
	const textTransform = `translateY(${textTranslateY}px)`

	const captionOpacity = (currentFrame - (1 * fps)) / (0.5 * fps)

	const captionTranslateY = spring({
		frame: currentFrame - (1 * fps),
		fps,
		from: -30,
		to: 0,
		config: {
			mass: 0.4
		}
	})
	const captionTransform = `translateY(${captionTranslateY}px)`


	return (
		<AbsoluteFill style={{
			backgroundColor: 'white',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'center',
		}}>
			<Container>
				<VideoBox>
					<ContentVideo src={staticFile("IMG_4828.mov")} />
				</VideoBox>
				<Text style={{ opacity: textOpacity, transform: textTransform }}>Somi video now broadcast various and reliable reviews</Text>
			</Container>
			<Caption style={{ opacity: captionOpacity, transform: captionTransform }} >Made by SEI</Caption>
		</AbsoluteFill>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	/* Inside auto layout */
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 1;
`
const VideoBox = styled.div`
	width: 100%;
	aspect-ratio: 1;
	overflow: hidden;
`
const ContentVideo = styled(Video)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const Text = styled.h1`
	display: flex;
	text-align: center;
	font-family: poppins;
	font-weight: 500;
	font-size: 60px;
	line-height: 86px;
	color: #17171A;
	padding: 200px 100px 0px;
`
const Caption = styled.h2`
	display: flex;	
	font-family: 'Poppins';
	font-weight: 500;
	font-size: 40px;
	line-height: 60px;
	color: #76767C;
	padding: 0px 0px 80px;
`
