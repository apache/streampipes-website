---
id: extend-customize-ui
title: UI customization
description: "Brand the StreamPipes user interface with your own logos, colors, application name and module selection by building the UI with a custom deployment configuration or theme files."
sidebar_label: UI customization
---

## What can be customized

The StreamPipes UI is an Angular application. Before every build, a small script applies a deployment configuration and a set of theme files to the source tree, and that is the hook for customization. Without touching the application code you can replace:

* **Logos.** The main logo on the login page and the smaller logo in the navigation bar.
* **Favicon.** Shown in the browser tab and used as the loading image while the application starts.
* **Colors.** The primary and secondary colors, the colors of the menu bar and toolbar, and separate values for dark mode. In addition, the Material 3 color palettes that Angular Material derives buttons, form fields and other components from.
* **Application name and contact address.** The strings shown in the window title, the login page and a few dialogs.
* **Active modules.** Which modules appear in the navigation at all, for example a build that only contains Dashboards and Charts for a display installation.
* **Translations.** The UI ships English, German and Polish language files; you can adjust wording or add a language.

All of this is applied at build time. There is no runtime branding setting in the current version, so a customized UI means a customized build of the `ui` image.

## Prerequisite: build the UI

The UI lives in the `ui` folder of the StreamPipes repository and needs Node.js and npm.

```bash
cd ui
npm install

# Development server with live reload
npm run start

# Production build
npm run build
```

`npm run build` validates the translation files, runs the prebuild script described below, builds the two shared libraries and then runs `ng build --configuration production`. The result in `dist/streampipes/ui/browser` is what the `ui` Docker image serves.

## How the prebuild step works

`deployment/prebuild.js` runs at the start of `npm run start` and `npm run build`. It takes the name of a deployment configuration as its only argument and falls back to `dev` when none is given or the configuration does not exist:

```bash
node deployment/prebuild.js dev
```

The script then:

1. reads `deployment/<name>/config.yml` for the logo paths and the list of active modules,
2. generates the routing, navigation and home screen from `deployment/modules.yml` for exactly those modules,
3. copies `deployment/app-constants.ts` to `src/app/services/app.constants.ts`,
4. copies the two theme files from `deployment/theme/` to `src/scss/custom-theme/`,
5. copies the logos and the favicon into `src/assets/img/`,
6. copies the translation files from `deployment/i18n/` to `src/assets/i18n/`.

Afterwards it checks a handful of environment variables and, where set, overwrites the file copied in the previous steps. That gives you two ways to customize: a deployment configuration of your own, or environment variables on top of the default one.

## Option 1: Your own deployment configuration

Create a folder next to `deployment/dev`, for example `deployment/acme`, with a `config.yml` and an `img` folder:

```yaml
login:
    logo: 'deployment/acme/img/logo.png'
    logo-navigation: 'deployment/acme/img/logo-navigation.png'
    favicon: 'deployment/acme/img/favicon.png'
modules:
    - spHome
    - spPipelines
    - spDashboard
    - spChart
    - spAssets
    - spConnect
    - spDatasets
    - spConfiguration
```

Remove modules from the list to hide them. The keys are the ones defined in `deployment/modules.yml`; the current set is `spHome`, `spConnect`, `spPipelines`, `spDatasets`, `spChart`, `spDashboard`, `spAssets` and `spConfiguration`. A module that is not listed gets no route, no navigation entry and no card on the home screen.

Then build with the configuration name:

```bash
node deployment/prebuild.js acme && npm run build-libraries && ng build --configuration production
```

`npm run build` always passes `dev`, so for a named configuration call the steps yourself as shown, or add a script to `package.json`.

## Option 2: Environment variables

If the default module set is fine and you only want different logos, colors or strings, set one or more of these variables and run the normal build. Each one points to a file that replaces the corresponding default.

| Variable | Replaces | Notes |
| --- | --- | --- |
| `LOGO_HEADER_LOC` | `src/assets/img/sp/logo.png` | Logo on the login page |
| `LOGO_NAV_LOC` | `src/assets/img/sp/logo-navigation.png` | Logo in the navigation bar |
| `FAVICON_LOC` | `src/assets/img/favicon/favicon-96x96.png` | Favicon, also used as loading image; 96 by 96 pixels |
| `THEME_VARIABLES` | `src/scss/custom-theme/_custom-variables.scss` | Colors as CSS custom properties, see below |
| `THEME_COLORS` | `src/scss/custom-theme/_theme-colors.scss` | Material 3 palettes, see below |
| `CONSTANTS_FILE` | `src/app/services/app.constants.ts` | Application name, title and contact address |

Example, with all custom files in one folder:

```bash
UI_LOC=/path/to/acme-branding
THEME_VARIABLES=$UI_LOC/_custom-variables.scss \
THEME_COLORS=$UI_LOC/_theme-colors.scss \
LOGO_HEADER_LOC=$UI_LOC/img/logo.png \
LOGO_NAV_LOC=$UI_LOC/img/logo-navigation.png \
FAVICON_LOC=$UI_LOC/img/favicon.png \
CONSTANTS_FILE=$UI_LOC/app.constants.ts \
npm run build
```

Variables that are not set keep the defaults. `UI_LOC` is only a shell helper here; the build does not read it.

## The theme files

### Custom variables

`deployment/theme/_custom-variables.scss` is the file meant for external customization. It defines CSS custom properties, so values can be plain colors or references to other properties. Start from the default and change what you need:

```scss
:root {
    --color-primary: #1b1464;
    --color-primary-dark: #83a3de;
    --color-secondary: rgb(57, 181, 74);
    --color-secondary-dark: #7ac98a;
    --color-loading-bar: var(--color-primary);
    --color-primary-alt: rgb(59, 92, 149);

    --color-menubar-bg: var(--color-secondary);
    --color-menubar-bg-menu-item: var(--color-secondary);
    --color-menubar-bg-menu-item-hover: var(--color-secondary);
    --color-menubar-bg-menu-item-selected: var(--color-secondary);
    --color-menubar-bg-menu-group-hover: var(--color-secondary);
    --color-menubar-bg-menu-group-selected: var(--color-secondary);
    --color-menubar-text-menu-item: var(--color-bg-1);
    --color-menubar-text-menu-group: var(--color-primary);
    --color-menubar-text-menu-item-hover: var(--color-bg-1);
    --color-menubar-text-menu-group-hover: var(--color-primary);

    --color-toolbar-bg: var(--color-bg-0);
    --color-toolbar-text: var(--color-secondary);
    --color-toolbar-text-hover: var(--color-secondary-dark);
    --color-toolbar-icon: var(--color-secondary);
    --color-toolbar-icon-hover: var(--color-secondary-dark);
    --color-toolbar-icon-selected: var(--color-secondary-dark);
}

.dark-mode {
    --color-primary: var(--color-primary-dark);
    --color-secondary: var(--color-secondary-dark);
    --color-navigation-bg: #123b28;
    --color-navigation-hover: #185236;
    --color-navigation-selected: var(--color-secondary);
    --color-navigation-text: rgba(255, 255, 255, 0.9);
    --color-navigation-link-text: rgba(255, 255, 255, 0.86);
    --color-navigation-divider: rgba(255, 255, 255, 0.12);
    --color-menubar-bg: var(--color-navigation-bg);
    --color-menubar-bg-menu-item: transparent;
    --color-menubar-bg-menu-item-hover: var(--color-navigation-hover);
    --color-menubar-text-menu-item: var(--color-navigation-link-text);
    --color-menubar-text-menu-item-hover: var(--color-navigation-text);
    --content-box-color: #404040;
}

.light-mode {
    --color-navigation-text: #ffffff;
    --content-box-color: rgb(156, 156, 156);
}
```

The `:root` block applies to both modes; `.dark-mode` and `.light-mode` override values per mode. The full default file in the repository contains a few more properties for the dark navigation. The base variables in `src/scss/_variables.scss` are internal and are not replaced by the build; change colors in the custom variables file instead.

### Material 3 palettes

`deployment/theme/_theme-colors.scss` holds the tonal palettes Angular Material uses for its components. It is generated, not written by hand. To create one for your brand colors, run the Angular Material schematic from the `ui` folder and point `THEME_COLORS` at the result:

```bash
ng generate @angular/material:theme-color \
  --primary-color=#1b1464 --secondary-color=#39b54a --error-color=#b71c1c \
  --directory=/path/to/acme-branding
```

Use the same primary and secondary values as in the custom variables file, otherwise buttons and form fields take on a different hue than the navigation.

## Application name and contact address

`CONSTANTS_FILE` must point to a file with the same shape as `deployment/app-constants.ts`:

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConstants {
    public readonly APP_NAME = 'Apache StreamPipes';
    public readonly APP_TITLE = 'Apache StreamPipes';
    public readonly EMAIL = 'dev@streampipes.apache.org';
}
```

`APP_TITLE` is the browser window title, `APP_NAME` appears on the login page and in a few dialogs, and `EMAIL` is the contact address shown to users who need help.

## Translations

Most visible strings come from the translation files in `deployment/i18n/`, one JSON file per language (`en`, `de`, `pl`). Change a string there to reword it in your build, or add a file for another language. After editing, run `npm run i18n:validate` to check that all files have the same keys; `npm run build` runs the same check and fails on a mismatch.

## Package the result

Build the `ui` Docker image from your customized `dist/streampipes/ui/browser` and use it in place of `apachestreampipes/ui` in your Compose file or Helm values. The backend and the extension services are unaffected by UI customization and keep using the official images.
