import ProjectDesc from "../components/projectDes";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// test 1: render successfully with attribute
describe("Testing project component", () => {
  it("render successfully when have all attribute", () => {
    render(
      <ProjectDesc
        name={"Jane Store"}
        des={
          "A fully functional SSR e-commercial website that uses session to keep track of a cart and customer orders"
        }
        languageArray={["ExpressJS", "MongoDB", "EJS", "Bootstrap"]}
        image={"image/projects/janestore.png"}
        github={"https://github.com/Vivy24/JaneStore"}
        publicLink={"https://janestore12.herokuapp.com/"}
      />
    );

    expect(screen.getByText("Jane Store")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toHaveTextContent(
      "A fully functional SSR e-commercial website that uses session to keep track of a cart and customer orders"
    );
    expect(screen.getByTestId("languages")).toHaveTextContent("ExpressJS");

    expect(screen.getAllByTestId("link")).toHaveLength(2);

    expect(screen.getAllByTestId("link")[0]).toHaveAttribute(
      "href",
      "https://github.com/Vivy24/JaneStore"
    );

    expect(screen.getAllByTestId("link")[1]).toHaveAttribute(
      "href",
      "https://janestore12.herokuapp.com/"
    );
  });

  it("render successfully without public page", () => {
    render(
      <ProjectDesc
        name={"Jane Store"}
        des={
          "A fully functional SSR e-commercial website that uses session to keep track of a cart and customer orders"
        }
        languageArray={["ExpressJS", "MongoDB", "EJS", "Bootstrap"]}
        image={"image/projects/janestore.png"}
        github={"https://github.com/Vivy24/JaneStore"}
      />
    );

    expect(screen.getAllByTestId("link")).toHaveLength(1);
  });
});
