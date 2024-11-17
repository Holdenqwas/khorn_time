import { pluginReact } from '@rsbuild/plugin-react';

export default {
  html: {
    favicon: './src/shared/images/лого с белым фоном.png',
    title: 'Horn', // 'Alpha Revolver'
    meta: {
      description: 'Horn - персональная страница - блог Антона Хорн',
    },
  },

  plugins: [pluginReact()],
};
