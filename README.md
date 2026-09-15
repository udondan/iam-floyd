# IAM Floyd

[![Source](https://img.shields.io/github/stars/udondan/iam-floyd?logo=github&label=GitHub%20Stars)][source]
[![iam-floyd](https://img.shields.io/github/v/release/udondan/iam-floyd)][source]
[![libraries.io](https://img.shields.io/badge/packages-libraries.io-yellow)][libraries.io]
[![Documentation](https://img.shields.io/badge/Documentation-Read%20the%20Docs-orange)][documentation]
[![GitHub](https://img.shields.io/github/license/udondan/iam-floyd)][license]

<!-- put back - when we actually have tests
[![Test Coverage](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/test_coverage)](https://codeclimate.com/github/udondan/iam-floyd/test_coverage)
-->

**AWS [IAM policy statement][statement] generator with fluent interface.**

<!-- stats -->
Support for:

- 455 Services
- 21872 Actions
- 2308 Resource Types
- 2470 Condition keys
<!-- /stats -->

![EXPERIMENTAL](https://img.shields.io/badge/stability-experimantal-orange?style=for-the-badge)**<br>This is an early version of the package. The API will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.**

## Documentation

Find the documentation at [Read the Docs][documentation].

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/movie-preview.png)](https://www.youtube.com/watch?v=4dHY8qPHbKA 'Auto completion demo')

## Packages

There are two different package variants available:

- **iam-floyd**: Can be used in AWS SDK or for whatever you need an IAM policy statement for <br>[![npm](https://img.shields.io/npm/dt/iam-floyd?label=npm&color=blueviolet)](https://www.npmjs.com/package/iam-floyd)
- **cdk-iam-floyd**: Integrates into [AWS CDK] and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)<br>[![npm](https://img.shields.io/npm/dt/cdk-iam-floyd?label=npm&color=orange)](https://www.npmjs.com/package/cdk-iam-floyd)

  **Starting with version 0.300.0, the packages are compatible with CDK v2.** For CDK v1 you can use any version up to:<br>
  [![npm CDK v1](https://img.shields.io/badge/npm-0.286.0-yellow)](https://www.npmjs.com/package/cdk-iam-floyd/v/0.286.0)

  Find them all on [libraries.io].

## CDK Compatibility Matrix

| CDK        | cdk-iam-floyd              |
| ---------- | -------------------------- |
| <= 1.151.0 | <= 0.285.0                 |
| >= 1.152.0 | 0.286.0                    |
| >= 1.158.0 | **No compatible version!** |
| >= 2.0.0   | >= 0.300.0                 |
| >= 2.20.0  | >= 0.351.0                 |
| >= 2.26.0  | >= 0.377.0                 |
| 2.29.x     | **No compatible version!** |
| >= 2.30.0  | >= 0.391.0                 |

---

## Legal

The code contained in the [lib/generated](https://github.com/udondan/iam-floyd/tree/main/lib/generated) folder is generated from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

IAM Floyd is licensed under [Apache License 2.0][license]. Dependencies might be released under different licenses.

   [source]: https://github.com/udondan/iam-floyd
   [documentation]: https://iam-floyd.readthedocs.io/en/latest/
   [npm]: https://www.npmjs.com/package/iam-floyd
   [license]: https://github.com/udondan/iam-floyd/blob/main/LICENSE
   [statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
   [libraries.io]: https://libraries.io/search?q=iam-floyd
   [AWS CDK]: https://aws.amazon.com/cdk/


## 🌐 Web Resources & Aesthetic Symbols Index
- [SYM 1F61D](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f61d/)
- [SYM 1D456](https://cyber-clan-tags-90.pages.dev/symbol/sym-1d456/)
- [SYM 26DA](https://cyber-clan-tags-23.pages.dev/symbol/sym-26da/)
- [COQUETTE BOW RIBBON](https://cyber-clan-tags-23.pages.dev/symbol/coquette-bow-ribbon/)
- [SYM 1F62A](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f62a/)
- [SYM 26DE](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-26de/)
- [SYM 1F924](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f924/)
- [SYM 1F49F](https://vintage-library-rune-80.pages.dev/symbol/sym-1f49f/)
- [SYM 1D455](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1d455/)
- [SIX POINTED BLACK STAR](https://scholarly-cross-symbols-35.pages.dev/symbol/six-pointed-black-star/)
- [SYM 1D4A1](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d4a1/)
- [SYM 26BA](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-26ba/)
- [BRACKETS](https://dolly-kaomoji-text-94.pages.dev/brackets/)
- [SYM 1F910](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f910/)
- [SYM 1F618](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f618/)
- [SYM 1D407](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1d407/)
- [SYM 2637](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-2637/)
- [SCORPIO ZODIAC SCORPION](https://scholarly-cross-symbols-35.pages.dev/symbol/scorpio-zodiac-scorpion/)
- [SYM 1D485](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d485/)
- [SYM 1F973](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f973/)
- [TENDER GENTLE TEAR KAOMOJI](https://dolly-kaomoji-text-94.pages.dev/symbol/tender-gentle-tear-kaomoji/)
- [SYM 263F](https://vintage-library-rune-80.pages.dev/symbol/sym-263f/)
- [SYM 1D44B](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d44b/)
- [BOLD TIPPED ARROW](https://dolly-kaomoji-text-94.pages.dev/symbol/bold-tipped-arrow/)
- [SYM 1F628](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f628/)
- [SYM 1D46C](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1d46c/)
- [SYM 1FAE4](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1fae4/)
- [SYM 1D45C](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1d45c/)
- [SYM 1D46A](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d46a/)
- [CLOCKWISE OPEN CIRCLE ARROW](https://scholarly-cross-symbols-35.pages.dev/symbol/clockwise-open-circle-arrow/)
- [DOLLY KAOMOJI TEXT 94.PAGES.DEV](https://dolly-kaomoji-text-94.pages.dev/)
- [SYM 1F61C](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f61c/)
- [BEAMED EIGHTH NOTES](https://dolly-kaomoji-text-94.pages.dev/symbol/beamed-eighth-notes/)
- [SYM 1F49C](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f49c/)
- [ANGEL WINGS HEART](https://scholarly-cross-symbols-35.pages.dev/symbol/angel-wings-heart/)
- [SYM 1D4A0](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1d4a0/)
- [SYM 1D435](https://ribbon-heart-fonts-86.pages.dev/symbol/sym-1d435/)
- [SYM 2672](https://vintage-angel-symbols-66.pages.dev/symbol/sym-2672/)
- [DOWNWARD DIAGONAL ARROW](https://ribbon-heart-fonts-86.pages.dev/symbol/downward-diagonal-arrow/)
- [SYM 1F61E](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f61e/)
- [SYM 1F63D](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f63d/)
- [SYM 1F971](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f971/)
- [SYM 1D45E](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1d45e/)
- [SYM 1D492](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d492/)
- [SYM 1D481](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d481/)
- [SYM 1D486](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d486/)
- [SYM 1F635 200D 1F4AB](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f635-200d-1f4ab/)
- [SYM 1D49C](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d49c/)
- [RIGHT BLACK LENTICULAR BRACKET](https://kawaii-kaomoji-hub-96.pages.dev/symbol/right-black-lenticular-bracket/)
- [SYM 1D4A4](https://coquette-aesthetic-symbols-14.pages.dev/symbol/sym-1d4a4/)
- [ROBLOX NAMES](https://vintage-library-rune-80.pages.dev/roblox-names/)
- [BIOHAZARD SYMBOL](https://kawaii-kaomoji-hub-96.pages.dev/symbol/biohazard-symbol/)
- [SYM 1D46F](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d46f/)
- [KAOMOJI](https://vintage-library-rune-80.pages.dev/es/kaomoji/)
- [SYM 1D465](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1d465/)
- [SYM 1F641](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f641/)
- [SYM 1D482](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d482/)
- [SYM 26C0](https://vintage-angel-symbols-66.pages.dev/symbol/sym-26c0/)
- [ARROWS LINES](https://vintage-library-rune-80.pages.dev/es/arrows-lines/)
- [SYM 1F479](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1f479/)
- [SYM 1D489](https://coquette-aesthetic-symbols-14.pages.dev/symbol/sym-1d489/)
- [SYM 1D47A](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d47a/)
- [ANTICLOCKWISE OPEN CIRCLE ARROW](https://scholarly-cross-symbols-35.pages.dev/symbol/anticlockwise-open-circle-arrow/)
- [SYM 1D495](https://coquette-aesthetic-symbols-14.pages.dev/symbol/sym-1d495/)
- [MUSIC SHARP SIGN](https://kawaii-kaomoji-hub-96.pages.dev/symbol/music-sharp-sign/)
- [SYM 1D449](https://ribbon-heart-fonts-86.pages.dev/symbol/sym-1d449/)
- [STARS](https://ribbon-heart-fonts-86.pages.dev/es/stars/)
- [CUTE BUNNY RABBIT FACE](https://vintage-library-rune-80.pages.dev/symbol/cute-bunny-rabbit-face/)
- [CLOUD WEATHER SYMBOL](https://vintage-angel-symbols-66.pages.dev/symbol/cloud-weather-symbol/)
- [SYM 1F608](https://vintage-library-rune-80.pages.dev/symbol/sym-1f608/)
- [ARROWS LINES](https://ribbon-heart-fonts-86.pages.dev/arrows-lines/)
- [SYM 2734](https://vintage-angel-symbols-66.pages.dev/symbol/sym-2734/)
- [SYM 26B0](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-26b0/)
- [DISCORD STATUS](https://dolly-kaomoji-text-94.pages.dev/ru/discord-status/)
- [INSTAGRAM BIO](https://dolly-kaomoji-text-94.pages.dev/pt/instagram-bio/)
- [AQUARIUS ZODIAC WATER BEARER](https://kawaii-kaomoji-hub-96.pages.dev/symbol/aquarius-zodiac-water-bearer/)
- [RIGHT HEAVY BRACKET BOX](https://scholarly-cross-symbols-35.pages.dev/symbol/right-heavy-bracket-box/)
- [SYM 1F642 200D 2195 FE0F](https://vintage-library-rune-80.pages.dev/symbol/sym-1f642-200d-2195-fe0f/)
- [SYM 1D41F](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1d41f/)
- [CROSSED SWORDS](https://scholarly-cross-symbols-35.pages.dev/symbol/crossed-swords/)
- [GAMING WEAPONS](https://ribbon-heart-fonts-86.pages.dev/pt/gaming-weapons/)
- [NATURE FLOWERS](https://ribbon-heart-fonts-86.pages.dev/ja/nature-flowers/)
- [WHITE SUN WITH RAYS](https://vintage-library-rune-80.pages.dev/symbol/white-sun-with-rays/)
- [GAMING WEAPONS](https://vintage-library-rune-80.pages.dev/pt/gaming-weapons/)
- [SYM 1D48B](https://coquette-aesthetic-symbols-14.pages.dev/symbol/sym-1d48b/)
- [SYM 1F604](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f604/)
- [SYM 1D477](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d477/)
- [NATURE FLOWERS](https://ribbon-heart-fonts-86.pages.dev/pt/nature-flowers/)
- [ROTATED FLORAL HEART](https://scholarly-cross-symbols-35.pages.dev/symbol/rotated-floral-heart/)
- [SYM 1F922](https://vintage-angel-symbols-66.pages.dev/symbol/sym-1f922/)
- [SYM 1F922](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f922/)
- [WARM HUG EMBRACE KAOMOJI](https://dolly-kaomoji-text-94.pages.dev/symbol/warm-hug-embrace-kaomoji/)
- [SYM 26D0](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-26d0/)
- [CURLY RIBBON LOOP](https://scholarly-cross-symbols-35.pages.dev/symbol/curly-ribbon-loop/)
- [EIGHT POINTED BLACK STAR](https://scholarly-cross-symbols-35.pages.dev/symbol/eight-pointed-black-star/)
- [WINGED ANGELIC COQUETTE HEART](https://kawaii-kaomoji-hub-96.pages.dev/symbol/winged-angelic-coquette-heart/)
- [SYM 1D45C](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d45c/)
- [INSTAGRAM BIO](https://ribbon-heart-fonts-86.pages.dev/es/instagram-bio/)
- [SYM 1D4A4](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d4a4/)
- [SYM 1F924](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-1f924/)
- [LEFT RIGHT EXCHANGE ARROWS](https://vintage-library-rune-80.pages.dev/symbol/left-right-exchange-arrows/)
- [WATER BUBBLES](https://raven-gothic-kaomoji-25.pages.dev/symbol/water-bubbles/)
- [SYM 26AC](https://vintage-library-rune-80.pages.dev/symbol/sym-26ac/)
- [SYM 268E](https://vintage-angel-symbols-66.pages.dev/symbol/sym-268e/)
- [SYM 1F911](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f911/)
- [SKULL AND CROSSBONES](https://scholarly-cross-symbols-35.pages.dev/symbol/skull-and-crossbones/)
- [LATIN CROSS HEAVY](https://raven-gothic-kaomoji-25.pages.dev/symbol/latin-cross-heavy/)
- [TIKTOK CAPTIONS](https://raven-gothic-kaomoji-25.pages.dev/tiktok-captions/)
- [SYM 26CB](https://dolly-kaomoji-text-94.pages.dev/symbol/sym-26cb/)
- [SYM 1D46E](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d46e/)
- [SYM 1D437](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1d437/)
- [SYM 1D448](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d448/)
- [ARROWS LINES](https://raven-gothic-kaomoji-25.pages.dev/arrows-lines/)
- [SYM 260E](https://ribbon-heart-fonts-86.pages.dev/symbol/sym-260e/)
- [SYM 2738](https://vintage-library-rune-80.pages.dev/symbol/sym-2738/)
- [TIKTOK CAPTIONS](https://scholarly-cross-symbols-35.pages.dev/vi/tiktok-captions/)
- [FREEFIRE NAMES](https://ribbon-heart-fonts-86.pages.dev/es/freefire-names/)
- [TENDER GENTLE TEAR KAOMOJI](https://vintage-angel-symbols-66.pages.dev/symbol/tender-gentle-tear-kaomoji/)
- [INSTAGRAM BIO](https://ribbon-heart-fonts-86.pages.dev/ru/instagram-bio/)
- [SYM 1F604](https://kawaii-kaomoji-hub-96.pages.dev/symbol/sym-1f604/)
- [RIGHT MATHEMATICAL WHITE SQUARE BRACKET](https://dolly-kaomoji-text-94.pages.dev/symbol/right-mathematical-white-square-bracket/)
- [SYM 1F63A](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1f63a/)
- [STARS](https://futuristic-gaming-fonts-52.pages.dev/stars/)
- [SYM 268E](https://futuristic-gaming-fonts-52.pages.dev/symbol/sym-268e/)
- [SYM 1F498](https://ribbon-heart-fonts-86.pages.dev/symbol/sym-1f498/)
- [SYM 26E9](https://futuristic-gaming-fonts-52.pages.dev/symbol/sym-26e9/)
- [SYM 1D49E](https://gothic-bio-fonts-13.pages.dev/symbol/sym-1d49e/)
- [SYM 2656](https://futuristic-gaming-fonts-52.pages.dev/symbol/sym-2656/)
- [SYM 2742](https://mecha-synth-kaomoji-92.pages.dev/symbol/sym-2742/)
- [SYM 1D44C](https://scholarly-cross-symbols-35.pages.dev/symbol/sym-1d44c/)
