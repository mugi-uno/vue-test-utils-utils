import { Wrapper } from '@vue/test-utils';

export const useAddtionalFinder = (Wrapper: Wrapper<any>) => {
  const {
    find,
    findAll
  } = (Wrapper as any).prototype as Wrapper<any>;

  (Wrapper as any).prototype.find = function(this: Wrapper<any>, selector: any, option: any) {
    if (typeof option !== 'object' || option === null || option === undefined) {
      return find.apply(this, selector);
    }

    if ("text" in option) {
      // find by text element
      const all = findAll.call(this, selector);
      const wrapper = all.wrappers.find(w => w.text().match(new RegExp(option.text)))

      if (!wrapper) {
        throw new Error(`[vue-test-utils-utils]: invalid text selector "${option.text}"`);
      }

      return wrapper;
    }

    return find.apply(this, selector);
  };
};
