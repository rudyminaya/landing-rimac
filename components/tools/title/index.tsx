import React from 'react'
import { TypeFlags } from 'typescript'
import styles from '../../../styles/title.module.scss'

interface Props {
    thinTitle: string
    boldTitle: string
}

interface SubTitle {
    titulo: string
}

const Title = (props: Props) => {
    return (
        <h3 className={styles.title}>
            {props.thinTitle}
            <span className={styles.title__bold}>{props.boldTitle}</span>
        </h3>
    )
}

export default Title

export const Subtitle = (props: SubTitle) => {
    return <h4 className={styles.subtitle}>{props.titulo}</h4>
}
