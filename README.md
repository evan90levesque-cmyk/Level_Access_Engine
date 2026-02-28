# Pre-requisites
This project requires Node, NPM, babel, rollup, and Maven.

# Bootstrap
You will need to bootstrap NPM packages: babel & rollup

```
mvn clean -Dbootstrap
# or
npm install
```

## Rollupjs
Read https://code.lengstorf.com/learn-rollup-js/

# Compiling
Engine builds are configured to run the babel and rollup compilation steps during builds
```
mvn compile
# or
npm run build
```

To run manually, use these commands
```
rollup AccessEngine.professional.js --o target/Unminified/AccessEngine.professional.rollup --output.format iife --name "LevelAccess_AccessEngine"
babel target/Unminified/AccessEngine.professional.rollup  --out-file target/AccessEngine.professional.js
```
```
rollup AccessEngine.community.js --o target/Unminified/AccessEngine.community.rollup --output.format iife --name "LevelAccess_AccessEngine"
babel target/Unminified/AccessEngine.community.rollup  --out-file target/AccessEngine.community.js
```

## Karma
To run karma tests locally:
```
mvn test -Dkarma
# or
npm run test
```

To manually run karma scripts, you will need to install karma via npm
```
npm install -g karma karma-chrome-launcher karma-firefox-launcher karma-jasmine karma-junit-reporter jasmine-core
```

`versions/professional/tests/karma_maven_professional.conf.js` is used by maven to run tests and report results for professional version

`versions/community/tests/karma_maven_community.conf.js` is used by maven to run tests and report results for community version

### Sauce Labs
To run Karma tests in Sauce Labs against the Professional version of Engine:
1. Set the environment variable `SAUCE_USERNAME` to your Sauce Labs username. If you don't have an account, you can sign up [here](https://saucelabs.com/sign-up) for a free 14-day trial with 1 hour of allotted automation time. You can also contact Janice Davis to get credentials on our paid Sauce Labs account.
2. Set the environment variable `SAUCE_ACCESS_KEY` to your Sauce Labs access key, which is generated for you automatically by Sauce Labs. You can see it on [the User Settings page](https://app.saucelabs.com/user-settings) after you've logged in.
3. Execute the following from your terminal:
```
mvn test -Dkarma-saucelabs
# or
npm run test:saucelabs
```

# Packaging
Maven is configured to run a full build for local packaging or deployment to Cloudsmith. It will run Karma test suites for both Professional and Community versions.
```
mvn clean package
# or
cp versions/professional/target/AccessEngine.professional.js ./
npm pack
```
