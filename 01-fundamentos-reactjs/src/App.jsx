import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Siderbar";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Scarlet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum quis suscipit aliquid reprehenderit veritatis quisquam dolore voluptates maxime nemo unde repudiandae doloribus labore, dolores odit perspiciatis cumque, soluta eaque?"
          />

          <Post author="Scarlet" content="Um novo post muito legal!" />
        </main>
      </div>
    </>
  );
}