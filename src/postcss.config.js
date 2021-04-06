const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: 'default'
})
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./layouts/**/*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')(('src/tailwind.config.js')),
    require('postcss-nesting'),
    ...process.env.NODE_ENV === 'production' ?
    [autoprefixer, cssnano, purgecss] :
    []
  ]
}