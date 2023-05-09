import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DiegoImperiano.png',
      name: 'Diego Imperiano',
      role: 'Front end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      {
        type: 'paragraph',
        content:
          'Acabei de Subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return'
      },
      { link: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-05-07 22:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lorenatoscano.png',
      name: 'Lorena Toscano',
      role: 'Software Engenier'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      {
        type: 'paragraph',
        content:
          'Acabei de Subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-04-24 14:00:00')
  }
]

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
  )
}
