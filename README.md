# gandhi

**Version 0.1.0**

A MERN stack application template.

Featuring all elements of a web application that would be needed to run a complete MERN environment locally, with docker or on sloppy.io.

## Start

locally: `npm install` then `npm start` in root project folder, don't forget that you also have to have a mongodb instance running.

docker: `docker-compose up -d` in root project folder.

sloppy.io: `sloppy start` in root project folder.

## Features

- Dockerfile
- docker-compose file
- sloppy.io file
- .env file
- Server and Client in one project
- Webpack configuration
- User interaction handling
- Database handling
- external data access handling

## Menu

### Home

This is the homepage of the project.

### Counter

*Based on ... by ...*

A Page showing a list of counters, originally always editable, but changed so it can only edit counters if a user is logged in, to proof interaction with the user system.

### Repos

*Based on ... by ...*

A Page showcasing a list of repositories, fetched from the github api (external).

### Dashboard

*Based on ... by ...*

A Page showcasing user registration, user editing, user login and fetching user data.

### 404

A Page showcasing a bad link.

## Todo

- User Settings
- Admin dashboard

## Dependencies

| Name                         | Version            |
| ---------------------------- | -------------------|
| @babel/core                  | `^7.0.0-beta.42`   |
| @babel/preset-env            | `^7.0.0-beta.42`   |
| @babel/preset-react          | `^7.0.0-beta.42`   |
| @cloudant/cloudant           | `^3.0.2`           |
| autoprefixer                 | `^8.2.0`           |
| axios                        | `^0.19.0`          |
| babel-loader                 | `^8.0.0-beta.2`    |
| body-parser                  | `^1.17.x`          |
| cfenv                        | `^1.2.2`           |
| connect-history-api-fallback | `^1.5.0`           |
| copy-webpack-plugin          | `^4.5.1`           |
| css-loader                   | `^0.28.11`         |
| dotenv                       | `^4.0.0`           |
| express                      | `^4.16.3`          |
| express-session              | `^1.15.1`          |
| extract-text-webpack-plugin  | `^4.0.0-beta.0`    |
| html-webpack-plugin          | `^3.1.0`           |
| ibmcloud-appid               | `^6.0.0`           |
| mongodb                      | `^3.0.10`          |
| mongoose                     | `^5.0.11`          |
| node-sass                    | `^4.7.2`           |
| nodemon                      | `^1.17.2`          |
| passport                     | `^0.3.2`           |
| postcss-loader               | `^2.1.3`           |
| react                        | `^16.2.0`          |
| react-dom                    | `^16.2.0`          |
| react-hot-loader             | `^4.12.11`         |
| react-router                 | `^4.2.0`           |
| react-router-dom             | `^4.2.2`           |
| sass-loader                  | `^6.0.7`           |
| style-loader                 | `^0.20.3`          |
| webpack                      | `^4.2.0`           |
| webpack-cli                  | `^3.1.2`           |
| webpack-dev-middleware       | `^3.0.1`           |
| webpack-hot-middleware       | `^2.21.2`          |
| webpack-merge                | `^4.1.2`           |
| whatwg-fetch                 | `^2.0.3`           |

## License

Copyright (c) 2019 F. Rick Reich. Licensed under the terms of the MIT license. http://frickreich.mit-license.org/