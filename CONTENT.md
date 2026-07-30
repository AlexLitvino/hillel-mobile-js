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
