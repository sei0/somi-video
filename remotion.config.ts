// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import { Config } from 'remotion';

Config.Rendering.setImageFormat('jpeg');
Config.Output.setOverwriteOutput(true);
Config.Puppeteer.setChromiumOpenGlRenderer('angle') // HDR 렌더링을 위해 필요 https://indentcorp.slack.com/archives/C04599WR6AH/p1671808018940539
