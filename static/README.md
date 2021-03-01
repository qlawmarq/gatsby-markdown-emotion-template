# Static folder

This folder is for static file, images, stylesheets, scripts, PDF, JSON.

Basically, we recommend Importing Assets Directly in JavaScript or TypeScript files, because of the benefits it provides:

- Scripts and stylesheets are minified and bundled together to avoid extra network requests.
- Missing files cause compilation errors instead of 404 errors for your users.
- Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

Meaning, it's better to use `src/assets`.

This folder is an escape hatch that you can use to add an asset outside of the module system.

For more info:
https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/
