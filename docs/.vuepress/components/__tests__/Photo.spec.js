import Photo from "../Photo.vue";
import { RouterLinkStub, shallowMount } from "@vue/test-utils";

jest.mock("../twMediaQueryAdapter", () => ({
  get mediaConditions() {
    let mediaConditions = new Map();
    mediaConditions.set("sm", "(min-width: 640px) and (max-width: 767px)");
    return mediaConditions;
  }
}));

jest.mock("../urlUtils.js", () => ({
  url: jest.fn(() => "/path/foto.jpg")
}));

describe("If no breakpoints are passed", () => {
  const wrapper = shallowMount(Photo, {
    propsData: {
      name: "foto.jpg",
      alt: "descripcion de la foto"
    }
  });

  it("source tags are not displayed", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("If a breakpoint is passed", () => {
  const wrapper = shallowMount(Photo, {
    propsData: {
      name: "foto.jpg",
      alt: "descripcion de la foto",
      breakpoints: ["sm"]
    }
  });

  it("source tags is displayed with corresponding media condition", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
