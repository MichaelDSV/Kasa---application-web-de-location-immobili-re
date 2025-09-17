import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "../components/Collapse";

test("Collapse: fermé par défaut puis s’ouvre/ferme au clic", () => {
  render(
    <Collapse title="Description">
      <p>Contenu de test</p>
    </Collapse>
  );

  const toggle = screen.getByRole("button", { name: /description/i });
  expect(toggle).toBeInTheDocument();

  expect(screen.queryByText(/contenu de test/i)).not.toBeVisible();

  fireEvent.click(toggle);
  expect(screen.getByText(/contenu de test/i)).toBeVisible();

  fireEvent.click(toggle);
  expect(screen.queryByText(/contenu de test/i)).not.toBeVisible();
});
