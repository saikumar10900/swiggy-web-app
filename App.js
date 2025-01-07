const root = document.getElementById("root");
const h1 = React.createElement("h1", { id: "heading" }, "Welcome to React");
const reactRoot = ReactDOM.createRoot(root);
const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a H1"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a H1"),
  ]),
]);
reactRoot.render(div);
