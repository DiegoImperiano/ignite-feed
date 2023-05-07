import styles from './Avatar.module.css'

export function Avatar({hasBorder = true , src} ){
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
    )
}


/* 

const user = { name: "Diego" }

const { name } = user -----> (Conceito de desestruturação) Pegando apenas a propriedade "name" de dentro de "user"

*/