# [Moti Example](https://moti.fyi/)

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <!-- <a href="https://docs.expo.io/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a> -->
</p>

## 🚀 How to use

> `npx create-react-native-app -t with-moti`

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)

> 💡 This demo uses **experimental** Reanimated 2 support in Expo. [Learn more](https://docs.expo.io/versions/latest/sdk/reanimated/#experimental-support-for-v2).

### TypeScript

Moti is built with TypeScript and has first-class support. Here's how to add TS support to your project:

- Rename `App.js` ➜ `App.tsx`
- Run `expo start` -- TypeScript will be automatically configured.

> 💡 Learn more about [TypeScript in Expo](https://docs.expo.io/guides/typescript/)

### Adding Native Code

This project can be run from a web browser or the Expo client app. You may find that you want to add more native code later on. You can do this by ejecting the project and rebuilding it yourself.

- Run `expo eject` to create the native projects.
- You can still run your project in the web browser or Expo client, you just won't be able to access any new native modules you add.

> 💡 Learn more about [native code in Expo](https://docs.expo.io/workflow/customizing/)

### Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.io/distribution/app-stores/).

## 📝 Notes

- [Expo Reanimated docs](https://docs.expo.io/versions/latest/sdk/reanimated)
- [Moti docs](https://moti.fyi/)
- [Reanimated docs](https://docs.swmansion.com/react-native-reanimated/docs/2.0.0-alpha.8/)
- Keep up with the creator of Moti [Fernando Rojo](https://twitter.com/FernandoTheRojo) for updates.
