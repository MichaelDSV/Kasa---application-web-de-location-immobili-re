import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Slideshow from "../components/Slideshow";

const IMGS = [
  "https://example.com/one.jpg",
  "https://example.com/two.jpg",
  "https://example.com/three.jpg",
];

test("Slideshow: navigue avant/arrière et boucle", () => {
  render(<Slideshow images={IMGS} alt="Photos du logement" />);

  const img = screen.getByRole("img", { name: /photos du logement/i });
  expect(img).toHaveAttribute("src", IMGS[0]);

  const next = screen.getByRole("button", { name: /suivant/i });
  const prev = screen.getByRole("button", { name: /précédent/i });

  fireEvent.click(next);
  expect(img).toHaveAttribute("src", IMGS[1]);

  fireEvent.click(next);
  expect(img).toHaveAttribute("src", IMGS[2]);

  fireEvent.click(next);
  expect(img).toHaveAttribute("src", IMGS[0]);

  fireEvent.click(prev);
  expect(img).toHaveAttribute("src", IMGS[2]);
});
