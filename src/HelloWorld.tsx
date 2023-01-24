import { AbsoluteFill } from 'remotion';

export const HelloWorld = () => {
	return (
		<AbsoluteFill style={{
			backgroundColor: 'white',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
		}}>
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
				<div style={{
					width: 400,
					height: 400,
					backgroundColor: '#2B28B8',
				}} />
				<h1 style={{
					textAlign: 'center',
					borderStyle: 'solid',
				}}>
					전수열
				</h1>
			</div>
		</AbsoluteFill>
	);
};
