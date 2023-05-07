import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lorenatoscano.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Imeperiano</strong>
              <time title="07 de Maio de 2023" datatime="2023-05-07 ">
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
                <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  )
}
