import RenderlessPosts from "../RenderlessPosts.vue";
import { shallowMount } from "@vue/test-utils";

describe("Given a list of vuepress documents", () => {
  const root = { title: "Blog", frontmatter: {} };
  const about = { title: "Sobre mí", frontmatter: { layout: "About" } };
  const post = {
    title: "El objetivo - La distancia focal",
    frontmatter: { layout: "Post" }
  };
  const wrapper = shallowMount(RenderlessPosts, {
    propsData: {
      docs: [root, about, post],
      page: 1
    },
    render() {
      return "<Component scopedSlots={{ default: () => <p></p> }} />";
    }
  });

  it("only posts are returned", () => {
    expect(wrapper.vm.posts).toStrictEqual([post]);
  });
});

describe("Given a list of vuepress documents", () => {
  const post1 = {
    title: "Presentación Baffest 2020",
    frontmatter: { date: "2020-02-18T00:00:00.000Z", layout: "Post" }
  };
  const post2 = {
    title: "Algunos fotógrafos infantiles",
    frontmatter: { date: "2014-06-15T00:00:00.000Z", layout: "Post" }
  };
  const post3 = {
    title: "Cantabria 2007",
    frontmatter: { date: "2018-10-29T00:00:00.000Z", layout: "Post" }
  };
  const wrapper = shallowMount(RenderlessPosts, {
    propsData: {
      docs: [post1, post2, post3],
      page: 1
    },
    render() {
      return "<Component scopedSlots={{ default: () => <p></p> }} />";
    }
  });

  const expectedPostOrder = [post1, post3, post2];

  it("posts are ordered by date desc", () => {
    expect(wrapper.vm.postsByDate).toStrictEqual(expectedPostOrder);
  });
});

describe("Given a list of vuepress documents and a page size of 2", () => {
  const post1 = {
    title: "Post 1",
    frontmatter: { date: "2020-02-18T00:00:00.000Z", layout: "Post" }
  };
  const post2 = {
    title: "Post 2",
    frontmatter: { date: "2020-02-17T00:00:00.000Z", layout: "Post" }
  };
  const post3 = {
    title: "Post 3",
    frontmatter: { date: "2020-02-16T00:00:00.000Z", layout: "Post" }
  };
  const post4 = {
    title: "Post 4",
    frontmatter: { date: "2020-02-15T00:00:00.000Z", layout: "Post" }
  };

  const wrapper = shallowMount(RenderlessPosts, {
    propsData: {
      docs: [post1, post2, post3, post4],
      page: 2
    },
    render() {
      return "<Component scopedSlots={{ default: () => <p></p> }} />";
    }
  });
  wrapper.vm.$data.pageSize = 2;

  it("posts of page 2 are post1 and post2", () => {
    expect(wrapper.vm.postsOfPage).toStrictEqual([post3, post4]);
  });
});

describe("Given a list of 10 vuepress documents and a page size of 2", () => {
  const post1 = {
    title: "Post 1",
    frontmatter: { date: "2020-02-18T00:00:00.000Z", layout: "Post" }
  };

  const wrapper = shallowMount(RenderlessPosts, {
    propsData: {
      docs: Array(10).fill(post1),
      page: 2
    },
    render() {
      return "<Component scopedSlots={{ default: () => <p></p> }} />";
    }
  });
  wrapper.vm.$data.pageSize = 2;

  it("blog has 5 pages", () => {
    expect(wrapper.vm.pageCount).toStrictEqual(5);
  });
});

describe("When current page is first one", () => {
  const post1 = {
    title: "Post 1",
    frontmatter: { date: "2020-02-18T00:00:00.000Z", layout: "Post" }
  };

  const wrapper = shallowMount(RenderlessPosts, {
    propsData: {
      docs: Array(10).fill(post1),
      page: 1
    },
    render() {
      return "<Component scopedSlots={{ default: () => <p></p> }} />";
    }
  });

  it("previous page of blog is the first one", () => {
    expect(wrapper.vm.previous).toStrictEqual(1);
  });

  it("blog should not have previous page", () => {
    expect(wrapper.vm.hasPrevious).toBeFalsy;
  });

  it("next page of blog is the second one", () => {
    expect(wrapper.vm.next).toStrictEqual(2);
  });

  it("blog should have next page", () => {
    expect(wrapper.vm.hasPrevious).toBeTruthy;
  });
});

describe("When current page is last one", () => {
  const post1 = {
    title: "Post 1",
    frontmatter: { date: "2020-02-18T00:00:00.000Z", layout: "Post" }
  };

  const wrapper = shallowMount(RenderlessPosts, {
    propsData: {
      docs: Array(10).fill(post1),
      page: 5
    },
    render() {
      return "<Component scopedSlots={{ default: () => <p></p> }} />";
    }
  });

  it("previous page of blog is the one before last", () => {
    expect(wrapper.vm.previous).toStrictEqual(4);
  });

  it("blog should have previous page", () => {
    expect(wrapper.vm.hasPrevious).toBeTruthy;
  });

  it("next page of blog is the last one", () => {
    expect(wrapper.vm.next).toStrictEqual(5);
  });

  it("blog should not have next page", () => {
    expect(wrapper.vm.hasPrevious).toBeFalsy;
  });
});
