import styled from 'styled-components'
import { AbsoluteFill } from 'remotion';

export const HelloWorld = () => {
	return (
		<AbsoluteFill style={{
			backgroundColor: 'white',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
		}}>
			<Container>
				<Image />
				<Text>전수열바보</Text>
			</Container>
		</AbsoluteFill>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Image = styled.div`
	width: 400px;
	height: 400px;
	background-color: #2B28B8;
`
const Text = styled.h1`
	text-align: center;
	border-style: solid;
`