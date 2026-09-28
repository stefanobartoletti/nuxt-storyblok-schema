import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
)
  .prepend(
    stefanobartoletti(
      {
        vue: true,
        typescript: true,
        ignores: [
          '**/public/**/*',
          'sample-content/{components,stories,assets}/**/*',
        ],
      }, // Options, required
      vue,
      tailwind({
        cssConfigPath: './app/assets/css/main.css',
      }),
    ),
  )
