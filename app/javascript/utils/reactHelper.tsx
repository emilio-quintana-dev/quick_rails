import type { ElementType } from "react";
import { createRoot } from "react-dom/client";

export const mountComponent = (Component: ElementType, id: string): void => {
  document.addEventListener("DOMContentLoaded", () => {
    const domNode: HTMLElement | null = document.getElementById(id);

    if (domNode) {
      const getProps: string = domNode.getAttribute("data-props") || "{}";
      const props = JSON.parse(getProps) as Record<string, unknown>;
      const root = createRoot(domNode);

      root.render(<Component {...props} />);
    }
  });
};

export default {};
