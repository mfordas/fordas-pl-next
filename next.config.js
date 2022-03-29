const path = require("path");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "svg", "webp", "gif"],
        optimizeImagesInDev: true,
      },
    ],
  ],
  {
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  }
);
