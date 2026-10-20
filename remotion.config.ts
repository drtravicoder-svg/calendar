import { Config } from '@remotion/cli/config';

// Serve the existing assets/ folder through staticFile().
Config.setPublicDir('assets');
Config.setVideoImageFormat('jpeg');
