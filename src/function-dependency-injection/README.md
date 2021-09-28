# KISS! Unit testing (JS/TS) - Function dependency injection


Keep it simple, stupid! Unit testing (JavaScript or TypeScript).
DevMastery inspirated pattern to do easy way unit testing! This setup needs only your JavaScript or TypeScript code and some testing framework (this example uses Jest). 

## example.js

**Basic pattern**

```javascript
const dependencies = {};

export const makeSimpleFunction = (injectedDependencies) => (prop) => {
  /* Function logic here */
};

const simpleFunction = makeSimpleFunction(dependencies);

export default simpleFunction;

```

### So let's go thru example.js

![picture 1](./images/1.png)

So basic thing, let's import or initialize anything what we want to start of the js/ts file.

***

![picture 2](./images/2.png)

Then we add imports to dependencies const variable, so we can stub them when we do some unit testing.

***

![picture 3](./images/3.png)

Notice the double arrow! So we have a function what is returning a function!
First function scope contains **a dependency injection**. Second contains basic properties (if needed). 

![picture 4](./images/4.png)

After 3.1 we make simpleFunction, calling makeSimpleFunction with dependencies const variable. So simpleFunction have now dependencies injected! 

***

![picture 5](./images/5.png)

Now let's check inside our function wrapper. 
So injectedDependencies contains our dependencies and we can desctructure it to functionDependency and variableDependeny or what there ever is.

***

![picture 6](./images/6.png)

Now dependencies can be used how we want and we can write our fancy logic. 


***

![picture 7](./images/7.png)

Export  default our simpleFunction. Now you can import this module and call simpleFunction('rock n roll'). 


***

### Let's check example.spec.js

**Basic pattern**

```javascript
import { makeSimpleFunction } from "./example";

const dependencies = {
  /* basic dependency stubs here */
};

let simpleFunction;
beforeEach(() => {
  simpleFunction = makeSimpleFunction(dependencies);
});

it('returns what it should', () => {
  const r = simpleFunction(...)
  expect(r).toBe(...)
})
```

***

![picture 8](./images/8.png)

Import maker function, we wanna do testing simpleFunctions

***

![picture 9](./images/9.png)

Testing const, if we have string anywhere then we can use this (like section 3.)

***

![picture 10](./images/10.png)

Here is our dependencies, these can be stubbed here. That variableDependency is string so lets put testStr there.

***

![picture 11](./images/11.png)

Lets do new fresh instance from simpleFunction start of every test

***

![picture 12](./images/12.png)

So here we can do our tests

***
