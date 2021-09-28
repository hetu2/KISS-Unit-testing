/*
  1. Import here what you need... your own modules, third party etc.
*/
import analyseString from "../lib/analyseString";
import variableDependency from "../lib/variableDependency";

/*
  2. Let's put here dependenies what we want to stub in our test file. 
*/
const dependencies = {
  analyseString,
  variableDependency,
};

/*
  3.1. Here we make our Function with those dependencies...
*/
export const makeSimpleFunction = (injectedDependencies) => (str) => {
  // 4. dependencies are injected now here!
  const { analyseString, variableDependency } = injectedDependencies;

  // 5.0. fancy function logic
  if (str.length < 1) {
    return null;
  }

  const { length, spaces, numbers } = analyseString(str);

  let output = {
    isLong: false,
    containsSpaces: false,
    containsNumbers: false,
    variableDependency,
  };

  if (length > 15) {
    output.isLong = true;
  }

  if (spaces) {
    output.containsSpaces = true;
  }

  if (numbers) {
    output.containsNumbers = true;
  }

  // 5.3. return output object
  return output;
};

/*
  3.2. ...and here we run it with our dependencies constant, so we build our function with a function
*/
const simpleFunction = makeSimpleFunction(dependencies);

/*
  6. Let's export default simpleFunction "end product"
*/
export default simpleFunction;
