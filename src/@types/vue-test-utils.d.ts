import '@vue/test-utils';

type FindAdditionalOption = {
  text?: string | RegExp;
}

declare module '@vue/test-utils' {
  interface Wrapper<V extends Vue | null> extends BaseWrapper {
    find(selector: string, option: FindAdditionalOption): Wrapper<Vue>
  }  
}
