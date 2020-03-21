import Pagination from "../Pagination.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

describe("If hasPrevious is false", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      hasPrevious: () => {
        return false;
      },
      hasNext: () => {
        return false;
      }
    }
  });

  it("previous should be disabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If hasPrevious is true", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      hasPrevious: () => {
        return true;
      },
      hasNext: () => {
        return false;
      }
    }
  });

  it("previous should be `a` tag", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If hasPrevious is true and previous is 1", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      hasPrevious: () => {
        return true;
      },
      hasNext: () => {
        return false;
      },
      previous: 1
    }
  });

  const expectedTo = { path: "/posts/1" };

  console.log(wrapper.find(RouterLinkStub).props().to);

  it("previous button should be `a` tag and have expected path", () => {
    expect(wrapper.find(RouterLinkStub).props().to).toStrictEqual(expectedTo);
  });
});

describe("If hasNext is false", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      hasPrevious: () => {
        return false;
      },
      hasNext: () => {
        return false;
      }
    }
  });

  it("next should be disabled", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If hasNext is true", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      hasPrevious: () => {
        return false;
      },
      hasNext: () => {
        return true;
      }
    }
  });

  it("previous should be `a` tag", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If hasNext is true and next is 1", () => {
  const wrapper = mount(Pagination, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      hasPrevious: () => {
        return false;
      },
      hasNext: () => {
        return true;
      },
      next: 1
    }
  });

  const expectedTo = { path: "/posts/1" };

  it("next button should be `a` tag and have expected path", () => {
    expect(wrapper.find(RouterLinkStub).props().to).toStrictEqual(expectedTo);
  });
});
