# Enterwell Vladimir v0.1
This is the starter WordPress theme that will allow you to easily include **React.js and Redux** into your WordPress site.

*There is still work to be done here, but this helps us for now.*

## Quick Start
This project is WordPress theme with React and Redux bundled inside.

You should **clone** this repository into your ```wp-content/themes``` folder.

In order to start just enter the following commands in your console:

```npm install```

and then

```npm start```

Last thing is to select *Enterwell Vladimir* theme from your WordPress admin.

Everything react related is on */react* folder.
This readme will be updated, but in the meantime you can take a look at our [BLOG](http://enterwell.net/starter-wp-api-react-redux/).

## Features
- React
- Redux
- Webpack + Webpack Dev Server
- SCSS (standard) + CSS modules
    - bundling
    - autoprefixer
- **Hot reload**
- Several entry points for React
    - just in case someone would find this interesting :)

## The idea behind the Vladimir
This is starter theme. This means that you should use this only as the starter for your theme. It only contains the things that you need in order to start development.

## Styles
If you create *scss* file that ends like **.scss** it would be treated as standard scss file.
If your file ends in **.module.scss** then it will be loaded like **CSS module**.