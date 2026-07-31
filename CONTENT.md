# 1 Що таке WDIO
WDIO (WebdriverIO) based on WebDriver protocol.
WDIO the only JS framework that supports integration with Appium for mobile testing.

Usage:
- Web testing
- Mobile testing (Android/iOS)
- API testing
- Visual testing

![WDIO tests architecture](lesson01/WDIO_tests_architecture.jpeg)

## Client-side
- Using JS library you could write tests
- Interaction with browser or mobile device: client side uses JSON wire protocol to send commands to browser or mobile emulator.
- WDIO uses asynchronous approach

## Server-side
- WebDriver server - separate processthat controls browser or emulator. It receives commands from client side and executes them and returns results.
- Browsers and emulators
- WebDriver protocol (JSON wire protocol)

WDIO Introduction
https://webdriver.io/docs/api/


# 2 Що таке Appium?
Appium:
- cross-platform (Android/iOS)
- multilanguage (Java, Python, Ruby, JS)
- Visual inspector

Possibilities:
- Automation of native, hybrid and mobile applications
- Automating gestures (swipe, zoom, scroll, etc)
- Automating on real devices and emulators

Client library <-> Mobile JSON Wire Protocol <-> Appium Server <-> Mobile Device

## Appium architecture
Drivers (XCUITest for iOS, UIAutomator for Android)

![Appium architecture](lesson02/appium_architecture.png)

Appium Documentation
https://appium.io/docs/en/latest/


# 3 VS Code + Node JS setup (Windows)
## VS Code
Install VS Code  
Set theme:
```
Preferences→Settings→User→Workbench→Appearance→Color Customizations
```

Popular extensions:
- ESLint: linter for JavaScript
- Prettier: formatter
- Live Server: starts local server for viewing Web-pages
- GitLens: extends possibilities Git in VS Code
- Material Icon Theme: changes icons in VS Code to material design
- Bracket Pair Colorizer: highlights pairs of brackets with different colors for better navigation in code

## Node.js
Install Node.js - environment for running JS code  
To check Node.js installation run:
```
node -v
npm -v
```

NPM commands:
```
npm install <PACKAGE>  // install packgae
npm uninstall <PACKAGE>  // removes package
npm init  // initialize project and creates package.json
npm install -g <PACKAGE>  // install package globally
npm install <PACKAGE>@<VERSION>  // install specific package version
```

### Additional options
-save: adds package to dependency list in package.json
-save-dev: adds package to dependency list for development
-save-optional: adds package to dependency list as non-obligatory dependency

VS Code
https://code.visualstudio.com/

Visual Studio Code Extensions to Boost Your Productivity in 2024
https://www.freecodecamp.org/news/best-vscode-extensions/

Node.js
https://nodejs.org/en
