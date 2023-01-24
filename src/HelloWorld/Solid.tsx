import { AbsoluteFill } from 'remotion';

export const Solid: React.FC = () => {
	return (
		<AbsoluteFill>
			<div style={{
				width: '300px',
				height: '150px',
				backgroundColor: '#F2C94C'
			}} />
		</AbsoluteFill>
	);
};
