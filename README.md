# tf-command

## Overview
tf-command is a wrapper arround the Microsoft Java tf command line interface TEE-CLC

## Install
To install it, run `npm install tf-command`
You will also need JAVA_HOME environment variable set

## Use
```javascript
const tf = require("tf-command");
// tf(arg, [arg, arg, ...]);
tf("eula", "-accept");
```

The java Xmx is set to 256M by default. To change it use tf with a number as string:
````javascript
tf("1024"); // sets Xmx to 1024 Mbytes
````

To know more about the requirements and the commands, please visit the site
https://github.com/Microsoft/team-explorer-everywhere