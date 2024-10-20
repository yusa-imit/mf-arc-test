import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote1',

  exposes: {
    './Module': './src/remote-entry.ts',
    './button': './src/button.ts',
  },
};

export default config;
