
# Rights Frontend Application (Blue Print)

[![codecov](https://codecov.io/gh/pearson-meta/rights/branch/master/graph/badge.svg?token=oh5FCFoLDN)](https://codecov.io/gh/pearson-meta/rights)
 [![BUILD](https://img.shields.io/badge/RIGHTS-CI-blue.svg)](http://ec2-34-193-15-130.compute-1.amazonaws.com:8080/job/rights/job/master/)
## Steps to create build for development environment ##

1. **Install the dependencies** : `npm install`
2. **Build node server** : `npm run build`
3. **Update you local host file** : see steps below 
4. **Start the webpack and node app** : `npm run dev` and open [https://blueprint-local.pearson.com:3000](https://blueprint-local.pearson.com:3000) in Chrome
5. **Run test** : `npm run test` - **Test Loop** : `npm run test:watch`
6. **Lint** : `npm run lint` - **Lint Fix** : `npm run lint:fix`

## Updating your host file
```bash
#1. open new terminal tab/window
sudo nano /etc/hosts

#2. Enter your password

#3. Add teh following line to the file
#127.0.0.1       blueprint-local.pearson.com

#4. ctrl+o to write the file
#5. ctrl+x to close the file

#6. Flush the DNS cache
dscacheutil -flushcache
```

## Running application in SSL mode locally

To ensure that our front-end code is served locally via `https`, you will have to do the following:

1. Within `variables.json' change `APP_PORT` to `443` (you will require to `run npm run` dev as root)
2. vist the following URL: `https://blueprint-local.pearson.com` and do a login with the test account. 

The application will otherwise run on standard http, via `http://localhost:3000` and api is served from `http://localhost:4000`

## Environments

| Name | URL | S3 
|---|---|---|
| LOCAL | https://blueprint-local.pearson.com:3000 | ~
| DEV | https://blueprint-dev.pearson.com | ~
| QA | https://blueprint-qa.pearson.com | ~
| PPE | https://blueprint-ppe.pearson.com | ~
| PROD | https://blueprint.pearson.com | ~


## Login Details
| UserName  | Password  | Role  | Permissions  |
|---|---|---|---|
|blueprint-user|Password1| ContentPlanningUser  |canView, canSearch  |
|blueprint-editor|Password1| ContentPlanningEditor  |canView, canSearch, canCreate, canEdit, canDeleteAssetRequirement, canImport  |
|blueprint-admin|Password1 | ContentPlanningAdmin  |canView, canSearch, canCreate, canCreateAssetPlan, canEdit, canEditAssetPlan, canDeletePlan, canDeleteAssetRequirement, canImport   |

### Checking User Attributes
There is a script called *fectUserAttributes.js* located at the base of our code repo.  The script will help you find Active Directory
User attributes for a given user account.  For example running the command below will output all user attributes.
`babel-node fectUserAttributes.js -U blueprint-user -P Password1`

For more information about this helper script, run `babel-node fectUserAttributes.js --help`

---

## [Commit Message Guidelines](#git-commit)

### The reasons for these conventions:
- leads to more readable messages that are easy to follow when looking through the project history
- (Coming soon...) automatic generating of the changelog

### Format of the commit message:
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```bash
<type>(<scope>): <subject>

<body>

<footer>
```

The **header**  is mandatory.


### Example commit message:

```bash
fix(middleware): ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use `range-parser` (Express dependency) to compute
range. It is more well-tested in the wild.

Fixes #CPRI-2717
```

### Message subject (first line)
* uses the imperative, present tense: “change” not “changed” nor “changes”
* The first line cannot be longer than 70 characters, the second line is always blank and
other lines should be wrapped at 80 characters. The type and scope should
always be lowercase as shown below.

#### Allowed `<type>` values:

* **feat** (new feature for the user, not a new feature for build script)
* **fix** (bug fix for the user, not a fix to a build script)
* **docs** (changes to the documentation)
* **style** (formatting, missing semi colons, etc; no production code change)
* **refactor** (refactoring production code, eg. renaming a variable)
* **test** (adding missing tests, refactoring tests; no production code change)
* **perf** (code change that improves performance)
* **chore** (updating grunt tasks etc; no production code change)

#### Example `<scope>` values:

* init
* runner
* watcher
* config
* web-server
* proxy
* etc.

The `<scope>` can be empty (e.g. if the change is a global or difficult
to assign to a single component), in which case the parentheses are
omitted.

### Message body
* uses the imperative, present tense: “change” not “changed” nor “changes”
* includes motivation for the change and contrasts with previous behavior

### Message Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference Jira tickets that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

---

# Useful links 
## SVG
REPO : https://github.com/encharm/Font-Awesome-SVG-PNG/tree/master/black/svg
steps:
1. download svg
2. Ask Andy or Sabeur to make the svg size to 30x30
3.

## Using SVG Icons from Pearson-SDK

Repo : https://github.com/Pearson-Higher-Ed/elements-sdk
File Location : client/styles/icons/p-icons-sprite-1.1.svg

In the current scenario only 6 icons are being used for Pagination so all the other svg's from the file has been manually removed. 

# List of the icons being used currently:

1. chevron-back-sm-18
2. chevron-next-sm-18
3. ellipsis-18
4. chevron-back-sm-24
5. chevron-next-sm-24
6. ellipsis-24

# Steps to add more Icons:

1. Go to location node_modules\@pearson-components\elements-sdk\src\styles\assets\icons\p-icons-sprite-1.1.svg
(The current version of file is 1.1 -> p-icons-sprite-1.1.svg but it can be updated later)
2. Copy the svg from file that you want to use.
3. Add it inside client/styles/icons/p-icons-sprite-1.1.svg
4. done

# Updating the Pearson-SDK Library

When the pearson library is updated, it is possible that the version of p-icons-sprite may also change.
It is better to keep the file name same as p-icons-sprite-1.1.svg
If for any reason the file name needs change, please update the same in rootBodyScripts.js file.

# React component build guidelines

No function binding or callbacks in render function.
Use arrow function in class property i.e. use this syntax: handleChange = () => {}. This negates need to bind in the constructor or use autobind decorator.
No static propTypes and defaultProps.
Use PropType.shape if passing down arrays e.g. 
  selectedFilters : PropTypes.arrayOf(
    PropTypes.shape({...})
  )
Always add propTypes and defaultProps.
Destructure objects and arrays if possible.
No index in keys, use stable and unique values.
Do not use export default, use named components.
No deriving data in render. Create a function instead.
Use non-mutating array functions see for more info [https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)
