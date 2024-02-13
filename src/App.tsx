import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/landev01.png',
      name: 'Alan Gonçalves',
      role: 'Desenvolvedor Frond End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😁' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab ad et autem? Tempore delectus minima similique aliquam voluptate impedit eos, deserunt vero doloribus, facere veniam. Ullam accusantium hic laudantium!'},
      { type: 'link', content: 'alan.design/doctorcare'},     
    ],
    publishedAt: new Date('2024-02-12 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😁' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab ad et autem? Tempore delectus minima similique aliquam voluptate impedit eos, deserunt vero doloribus, facere veniam. Ullam accusantium hic laudantium!'},
      { type: 'link', content: 'alan.design/doctorcare'},     
    ],
    publishedAt: new Date('2024-02-11 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 😁' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab ad et autem? Tempore delectus minima similique aliquam voluptate impedit eos, deserunt vero doloribus, facere veniam. Ullam accusantium hic laudantium!'},
      { type: 'link', content: 'alan.design/doctorcare'},     
    ],
    publishedAt: new Date('2024-02-5 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
