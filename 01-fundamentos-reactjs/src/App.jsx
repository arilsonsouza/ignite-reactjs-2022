import { Post } from "./Post";

export function App() {
  return (
    <>
      <Post
        author="Arilson Souza"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum quis suscipit aliquid reprehenderit veritatis quisquam dolore voluptates maxime nemo unde repudiandae doloribus labore, dolores odit perspiciatis cumque, soluta eaque?"
      />

      <Post author="Arilson Oliveira" content="Um novo post muito legal!" />
    </>
  );
}
