import { shallowMount } from "@vue/test-utils";
import SfButton from "./SfButton.vue";
describe("SfButton.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfButton);
    expect(wrapper.classes("sf-button")).toBe(true);
  });
  it("renders component as SfLink", () => {
    const wrapper = shallowMount(SfButton, {
      propsData: {
        link: "/",
      },
    });
    expect(wrapper.classes("sf-link")).toBe(true);
  });
  it("renders component as disabled button", () => {
    const wrapper = shallowMount(SfButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.classes("is-disabled--button")).toBe(true);
  });
  it("renders component as `submit` button", () => {
    const wrapper = shallowMount(SfButton, {
      propsData: {
        type: "submit",
      },
    });
    expect(wrapper.attributes("type")).toBe("submit");
  });
  it("renders component as disabled link", () => {
    const wrapper = shallowMount(SfButton, {
      propsData: {
        link: "/",
        disabled: true,
      },
    });
    expect(wrapper.classes("is-disabled--link")).toBe(true);
  });
  it("renders component as button with aria-label", () => {
    const wrapper = shallowMount(SfButton, {
      propsData: {
        ariaLabel: "Go to ...",
      },
    });
    expect(wrapper.attributes("aria-label")).toBe("Go to ...");
  });
  it("renders content via default slot", () => {
    const msg = "HelloWorld";
    const wrapper = shallowMount(SfButton, {
      slots: {
        default: msg,
      },
    });
    expect(wrapper.find(".sf-button").text()).toMatch(msg);
  });
});
