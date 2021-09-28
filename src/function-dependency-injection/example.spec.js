/* 
  1. Let's import makeSimpleFunction
*/
import { makeSimpleFunction } from "./example";

/*
  2. if we need string, this variable conts is used.
*/
const testStr = "testing";

/*
  3. We do not want to test our dependencies, they should have their own tests! So we do stubs, style is free.
*/

const dependencies = {
  analyseString: (p) => p,
  variableDependency: testStr
};

/*
  4. Before every test we make fresh instance of simpleFunctions.
*/

let simpleFunction;
beforeEach(() => {
  simpleFunction = makeSimpleFunction(dependencies);
});

/*
  5. Now we can test our logic. We test here ONLY logic what we have in example.js file. 
*/

it("returns null if no length", () => {
  /*
    So if property is empty string, then it returns null
  */

  const r = simpleFunction("");
  expect(r).toBe(null);
});

it("returns isLong false", () => {
  /*
    Now we wanna get Short string scenario, so let's stub analyseString function to returning length 5, spaces and numbers can be 0 so we get only Short string return
  */

  simpleFunction = makeSimpleFunction({
    ...dependencies,
    analyseString: () => {
      return {
        length: 5,
        spaces: 0,
        numbers: 0,
      };
    },
  });

  // in this case property can be anything, because only logic there is to check that it is not empty.
  const r = simpleFunction("anything");
  expect(r.isLong).toBe(false);
});

it("returns isLong true", () => {
  /*
    Now we wanna get Long string, so lets put length to 16
  */

  simpleFunction = makeSimpleFunction({
    ...dependencies,
    analyseString: () => {
      return {
        length: 16,
        spaces: 0,
        numbers: 0,
      };
    },
  });
  const r = simpleFunction("xxxxxx");
  expect(r.isLong).toBe(true);
});

it("returns containsSpaces true", () => {
  /*
    here we stub it to giving some spaces! 
  */

  simpleFunction = makeSimpleFunction({
    ...dependencies,
    analyseString: () => {
      return {
        length: 4,
        spaces: 4,
        numbers: 0,
      };
    },
  });
  const r = simpleFunction(testStr);
  expect(r.containsSpaces).toBe(true);
});

it("returns containsNumbers true", () => {
  /*
    Lets put some numbers so containsNumbers is true 
  */

  simpleFunction = makeSimpleFunction({
    ...dependencies,
    analyseString: () => {
      return {
        length: 4,
        spaces: 0,
        numbers: 4,
      };
    },
  });
  const r = simpleFunction(testStr);
  expect(r.containsNumbers).toBe(true);
});

it("returns string from testStr", () => {
  const r = simpleFunction(testStr);
  expect(r.variableDependency).toBe(testStr);
});
