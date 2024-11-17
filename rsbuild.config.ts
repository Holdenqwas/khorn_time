import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import Title from 'antd/es/skeleton/Title';

export default {
  html: {
    favicon: './src/shared/images/лого с белым фоном.png',
    title: 'Alpha Revolver',
    meta: {
      description: 'Alpha Revolver - персональная страница - блог Антона Хорн',
    },
  },

  plugins: [pluginReact()],
};
