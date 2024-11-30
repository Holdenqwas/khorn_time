import { pluginReact } from '@rsbuild/plugin-react';

export default {
  html: {
    favicon: './src/shared/images/лого с белым фоном.png',
    title: 'Khorn', // 'Alpha Revolver'
    meta: {
      description: 'Khorn - персональная страница - блог Антона Хорн',
    },
  },

  plugins: [pluginReact()],
};
