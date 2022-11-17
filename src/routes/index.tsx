import { Title } from "solid-start";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        height: "100dvh",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        "background-color": "#0E0E10",
        color: "#E5DED4",
        padding: "2rem",
      }}
    >
      <Title>bogdanbpeterson | home</Title>
      <h1>My name is Bogdan and I'm...</h1>
      <p>...not your developer (yet).</p>
    </main>
  );
}
