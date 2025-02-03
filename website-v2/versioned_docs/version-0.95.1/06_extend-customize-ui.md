---
id: extend-customize-ui
title: UI customization
sidebar_label: UI customization
---


## Custom theme

It is possible to use a custom theme with individual styles, logos and images instead of the default StreamPipes theme.

In this section, we describe the necessary steps to build and deploy a custom theme.


### Prerequisite: Learn how to run and build the UI

To use a custom theme, it is required to build the UI with the custom settings.
In general, the UI can be found in the `ui` folder of the source code.

Perform the following steps to build the UI;

```bash

# Install all necessary packages
npm install 

# Start the UI for development purposes
npm run start

# Build the StreamPipes UI
npm run build 

```

## Customizable assets

The following assets can be provided in a customized theme:

* **Logo** This is the main logo image, which is shown e.g., on the login page.
* **Navigation Logo** This is the logo which appears in the top navigation bar after successful login
* **Favicon** The favicon is shown in the browser navbar. It is also used as the loading animation in StreamPipes.
* **String constants** Customizable strings, e.g., when you want to use another application name than **Apache StreamPipes**.
* **Theme variables** An scss file which defines custom colors and layouts.

## Customize constants

To customize constants, you can create a custom file `app.constants.ts` and modify the content based on the template below:

```javascript

import {Injectable} from '@angular/core';

@Injectable()
export class AppConstants {

  public readonly APP_NAME = "Apache StreamPipes";
  public readonly APP_TITLE = 'Apache StreamPipes';
  public readonly EMAIL = "admin@streampipes.apache.org";
}


```

## Customize theme

To customize the theme, we provide a file named `variables.scss` which can be overridden with default color and style settings.

See the example below:

```scss

/*!
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

$sp-color-primary: rgb(57, 181, 74);
$sp-color-primary-600: #06c12a;

$sp-color-accent: #1b1464;

$sp-color-accent-light-blue: rgb(59, 92, 149);
$sp-color-accent-light: rgb(156, 156, 156);
$sp-color-accent-light-transparent: rgba(156, 156, 156, 0.4);

$sp-color-accent-dark: #83a3de;

$sp-color-adapter: #7f007f;
$sp-color-stream: #ffeb3b;
$sp-color-processor: #009688;
$sp-color-sink: #3f51b5;

$sp-color-error: #b71c1c;

body {
    --color-data-view: rgb(122, 206, 227);
    --color-dashboard: rgb(76, 115, 164);
    --color-adapter: rgb(182, 140, 97);
    --color-data-source: #ffeb3b;
    --color-pipeline: rgb(102, 185, 114);
    --color-measurement: rgb(39, 164, 155);
    --color-file: rgb(163, 98, 190);

    --button-border-radius: 5px;
    --iconbar-width: 35px;
    --navbar-icon-border-radius: 0;
    --navbar-icon-padding: 0;
}

:root {
    --color-loading-bar: #{$sp-color-accent};
}

.dark-mode {
    --color-primary: #{$sp-color-primary};
    --color-accent: #{$sp-color-accent-dark};
    --color-bg-outer: var(--color-bg-1);
    --color-bg-page-container: var(--color-bg-0);
    --color-bg-main-panel-header: var(--color-bg-0);
    --color-bg-main-panel-content: var(--color-bg-0);
    --color-bg-navbar-icon: inherit;
    --color-bg-navbar-icon-selected: inherit;
    --color-bg-0: #121212;
    --color-bg-1: #282828;
    --color-bg-2: #404040;
    --color-bg-3: #424242;
    --color-bg-4: #5f5f5f;
    --color-bg-dialog: rgb(66, 66, 66);
    --color-shadow: #c4c4c4;
    --color-pe: #404040;
    --color-default-text: rgba(255, 255, 255, 0.87);
    --color-warn: #b36161;

    --color-tab-border: #cccccc;

    --color-navigation-bg: var(--color-primary);
    --color-navigation-link-text: var(--color-bg-0);
    --color-navigation-text: #121212;
    --color-navigation-selected: #{$sp-color-primary};
    --color-navigation-hover: #{$sp-color-primary-600};
    --color-navigation-bg-selected: var(--color-bg-1);
    --color-navigation-divider: #{$sp-color-primary};

    --content-box-color: #404040;
    --canvas-color: linear-gradient(
            90deg,
            rgba(50, 50, 50, 0.5) 10%,
            transparent 0%
        ),
        linear-gradient(rgba(50, 50, 50, 0.5) 10%, transparent 0%);
}

.light-mode {
    --color-primary: #{$sp-color-primary};
    --color-accent: #{$sp-color-accent};
    --color-bg-outer: var(--color-bg-1);
    --color-bg-page-container: var(--color-bg-0);
    --color-bg-main-panel-header: var(--color-bg-0);
    --color-bg-main-panel-content: var(--color-bg-0);
    --color-bg-navbar-icon: inherit;
    --color-bg-navbar-icon-selected: inherit;
    --color-bg-0: #ffffff;
    --color-bg-1: #fafafa;
    --color-bg-2: #f1f1f1;
    --color-bg-3: rgb(224, 224, 224);
    --color-bg-4: rgb(212, 212, 212);
    --color-bg-dialog: #ffffff;
    --color-shadow: #555;
    --color-pe: #ffffff;
    --color-default-text: #121212;
    --color-warn: #b71c1c;

    --color-tab-border: #cccccc;

    --color-navigation-bg: var(--color-primary);
    --color-navigation-link-text: var(--color-bg-0);
    --color-navigation-text: #ffffff;
    --color-navigation-selected: #{$sp-color-primary};
    --color-navigation-hover: #{$sp-color-primary-600};
    --color-navigation-bg-selected: var(--color-bg-1);
    --color-navigation-divider: var(--color-primary);

    --content-box-color: rgb(156, 156, 156);
    --canvas-color: linear-gradient(
            90deg,
            rgba(208, 208, 208, 0.5) 10%,
            transparent 0%
        ),
        linear-gradient(rgba(208, 208, 208, 0.5) 10%, transparent 0%);
}

```
## Run a customized build

To create a new UI build with customized themes, use the following command:

````bash

UI_LOC=PATH_TO_FOLDER_WITH_CUSTOM_TEMPLATES \\
THEME_LOC=$UI_LOC/_variables.scss \\
LOGO_HEADER_LOC=$UI_LOC/img/logo.png \\
FAVICON_LOC=$UI_LOC/img/favicon.png \\
LOGO_NAV_LOC=$UI_LOC/img/logo-navigation.png \\
CONSTANTS_FILE=$UI_LOC/app.constants.ts \\
npm run build

````

First, we create a helper environment variable that links to a folder which includes custom logos, the theme file and constants.
Next, we set the variables above to override default logos and stylings.
Finally, the usual build process is executed.

Once finished, you've successfully customized an Apache StreamPipes instance!
