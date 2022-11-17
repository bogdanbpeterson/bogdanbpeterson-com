import { A, Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Looks like the page you looking for cannot be found. You can head to{" "}
        <A href="/">
          main page
        </A>{" "}
        and try again.
      </p>
    </main>
  );
}
