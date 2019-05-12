const expect = require("chai").expect;
const packageJson = require("../package.json");

describe("package.json", () => {
  it("has the correct dependencies", () => {
    expect(Object.keys(packageJson.dependencies)).to.eql(["lodash"]);
  });

  // it('has the correct devDependencies', () => {
  //   expect(Object.keys(packageJson.devDependencies)).to.eql([
  //     'chai',
  //     'mocha',
  //     'mocha-multi'
  //   ]);
  // });
});
