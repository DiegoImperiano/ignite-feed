import { ImgHTMLAttributes } from 'react'; // componente global, não precisa importar

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { // ...props está pegando todas as propriedades do elemento "ImgHTMLAttributes<HTMLImageElement>"
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props} 
        />
    )
}


/* 

const user = { name: "Diego" }

const { name } = user -----> (Conceito de desestruturação) Pegando apenas a propriedade "name" de dentro de "user"

*/