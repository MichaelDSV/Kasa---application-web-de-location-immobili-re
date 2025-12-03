import { render, screen } from "@testing-library/react";
import Rating from "../components/Rating";

test("Rating affiche le bon nombre d'étoiles remplies", () => {
  const { container } = render(<Rating value={3} outOf={5} label="Note" />);

  const allStars = container.querySelectorAll(".star");
  expect(allStars).toHaveLength(5);

  const filledStars = container.querySelectorAll(".star.filled");
  expect(filledStars).toHaveLength(3);

  expect(
    screen.getByLabelText("Note : 3/5")
  ).toBeInTheDocument();
});

test("Rating limite la valeur au maximum (outOf)", () => {
  const { container } = render(<Rating value={10} outOf={5} label="Note" />);

  const filledStars = container.querySelectorAll(".star.filled");
  expect(filledStars).toHaveLength(5);

  expect(
    screen.getByLabelText("Note : 5/5")
  ).toBeInTheDocument();
});

test("Rating ne descend pas en dessous de 0", () => {
  const { container } = render(<Rating value={-2} outOf={5} label="Note" />);

  const filledStars = container.querySelectorAll(".star.filled");
  expect(filledStars).toHaveLength(0); 

  expect(
    screen.getByLabelText("Note : 0/5")
  ).toBeInTheDocument();
});
