import styled from 'styled-components'
import { AbsoluteFill } from 'remotion';

import { staticFile, Video } from "remotion";

export const HelloWorld = () => {
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
				<Text>Somi video now broadcast various and reliable reviews</Text>
			</Container>
			<Caption>Made by SEI</Caption>
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
