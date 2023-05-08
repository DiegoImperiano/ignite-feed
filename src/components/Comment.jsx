import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, deleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    deleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(state =>{ //padrão de função para atualizar um estado que depende de seu valor anterior
      return state + 1
    })
  }

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

            <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  )
}
