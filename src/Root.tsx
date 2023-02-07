import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { template } from './template-1';

import './styles/global.css'

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="test"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
			// You can override these props for each render:
			// https://www.remotion.dev/docs/parametrized-rendering
			// defaultProps={{
			// 	titleText: 'Welcome to Somi-video',
			// 	titleColor: 'black',
			// }}
			/>
			<Composition
				id="template-1"
				component={template}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
