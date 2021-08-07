# js13k-base

Boilerplate template for making very small games

### Usage

Run `npm install`

- `npm run dev`

  - builds files from `./src/index.js` as an entry point
  - places files into `./build`
  - serves `./build`
  - watches `./src` for specific file types

- `npm run final`

  - builds minified files from `./src/index.js` as an entry point
  - places files into `./build`
  - builds a single html file and moves assets into `./compiled`
  - serves `./compiled`
  - watches `./src` for specific file types

- `npm run zip`
  - builds minified files from `./src/index.js` as an entry point
  - places files into `./build`
  - builds a single html file and moves assets into `./compiled`
  - zips `./compile` into a `./releases`
