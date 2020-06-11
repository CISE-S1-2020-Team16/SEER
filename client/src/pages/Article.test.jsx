import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("", () => {
    it("Renders Article Title", () => {
      act(() => {
        ReactDOM.render(<App />, rootContainer);
      });
      const h1 = rootContainer.querySelector("h1");
      expect(h1.textContent).to.equal("Hello World");
    });
  });