function customRender(reactElement, root) {}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const root = document.getElementById("#id");

customRender(reactElement, root);
