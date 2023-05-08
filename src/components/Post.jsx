import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Muito bacana esse post, hein?!'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  /*   
    Formatando data com intl Javascript

    const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }).format(publishedAt) 

  */

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText]) // ""...comments" está copiando tudo que já existia dentro de "comments" e adicionando no "setComments"
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('') // retorna a validação para o estado inicial
    setNewCommentText(event.target.value)
  }

  function handlesNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é orbigatório') // altera o texto da validação do campo textarea
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewcommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {author.name} </strong>
            <span> {author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormated}
          datatime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handlesNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewcommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} deleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}
