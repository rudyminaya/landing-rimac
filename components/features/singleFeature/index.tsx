import React from 'react'
import styles from '../../../styles/features.module.scss'

interface Props {
    icon: string
    description: string
}

const SingleFeature = (props: Props) => {
    return (
        <div className={styles.features__item}>
            <img
                src={`/assets/features/${props.icon}.png`}
                alt="ícono de la característica..."
            />
            <p>{props.description}</p>
        </div>
    )
}

export default SingleFeature
