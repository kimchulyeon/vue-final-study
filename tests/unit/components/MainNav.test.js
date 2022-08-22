import { mount } from "@vue/test-utils";
import MainNav from "@/components/navbar/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("plea");
  });

  // # composition API {ref} 접근 : vm
  it("Inside MainNav component", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.vm.company).toMatch("plea");
  });
});
