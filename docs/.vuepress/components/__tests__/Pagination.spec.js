import Pagination from "../Pagination.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

describe("If no page or number of items is passed", () => {
  const wrapper = mount(Pagination, {});

  it("previous and next buttons should be disabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If there is one page", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: { page: 1, numberOfItems: 10 }
  });

  it("previous and next buttons should be disabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If there are more than one page and current page is first page", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: { page: 1, numberOfItems: 30 }
  });

  it("previous button should be disabled and next button should be enabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If there are more than one page and current page is last page", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: { page: 2, numberOfItems: 20 }
  });

  it("previous button should be enabled and last button should be disabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If there are more than two pages and current page is a middle one", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: { page: 2, numberOfItems: 30 }
  });

  it("previous and next button should be enabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If current page is 1", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: { page: 1, numberOfItems: 30 }
  });

  const expectedTo = { path: "/posts/2" };

  it("next page should be 2", () => {
    expect(wrapper.find(RouterLinkStub).props().to).toStrictEqual(expectedTo);
  });
});

describe("If current page is 2", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: { page: 2, numberOfItems: 20 }
  });

  const expectedTo = { path: "/posts/1" };

  it("previous page should be 1", () => {
    expect(wrapper.find(RouterLinkStub).props().to).toStrictEqual(expectedTo);
  });
});
