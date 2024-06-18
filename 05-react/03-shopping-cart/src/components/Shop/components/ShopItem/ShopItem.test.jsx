import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShopItem from "./ShopItem";

describe("ShopItem", () => {
  it("Renders add button on empty count", () => {
    render(
      <ShopItem
        name={"lol"}
        add={() => ""}
        remove={() => ""}
        getCount={() => 0}
        setQuantity={() => ""}
      />,
    );

    screen.getByText("Add to Cart");
  });

  it("Renders plus button on non-empty count", () => {
    render(
      <ShopItem
        name={"lol"}
        add={() => ""}
        remove={() => ""}
        getCount={() => 3}
        setQuantity={() => ""}
      />,
    );

    screen.getByText("+");
  });
});
