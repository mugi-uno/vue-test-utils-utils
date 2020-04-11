import { useAddtionalFinder } from './../src/useAdditionalFinder';
import { mount } from "@vue/test-utils";

describe('find by text', () => {
  test("the wrapper is returned if found a matching element", () => {
    useAddtionalFinder(require("@vue/test-utils").Wrapper);

    const wrapper = mount({
      template: `
        <div>
          <span id="foo">foo</span>
          <span id="bar">bar</span>
          <span id="baz">baz</span>
        </div>
      `
    });

    expect(wrapper.find("span", { text: "bar" }).text()).toBe("bar");
  });

  test("the wrapper is returned if found a matching element (RegExp)", () => {
    useAddtionalFinder(require("@vue/test-utils").Wrapper);

    const wrapper = mount({
      template: `
        <div>
          <span id="foo">foo</span>
          <span id="bar">bar</span>
          <span id="baz">baz</span>
        </div>
      `
    });

    expect(wrapper.find("span", { text: /ar$/ }).text()).toBe("bar");
  });

  test("error is thrown if not found a matching element", () => {
    useAddtionalFinder(require("@vue/test-utils").Wrapper);

    const wrapper = mount({
      template: `
        <div>
          <span id="foo">foo</span>
          <span id="bar">bar</span>
          <span id="baz">baz</span>
        </div>
      `
    });

    expect(() => wrapper.find("span", { text: "xxx" })).toThrowError();
  });
});

