import React from 'react'
import styles from '../../styles/features.module.scss'
import Title from '../tools/title'
import Copyright from './copyright'
import data from './data/features.json'
import SingleFeature from './singleFeature'

interface Props {}

const Features = (props: Props) => {
    return (
        <div className={styles.features}>
            <div className={styles.features__content}>
                <Title thinTitle="Seguro de" boldTitle=" Salud" />
                <div className={styles.features__items}>
                    {data.map((e, i) => (
                        <SingleFeature
                            key={`f-${i}`}
                            icon={e.icon}
                            description={e.description}
                        />
                    ))}
                </div>
                <Copyright />
            </div>
            <img
                className={styles.features__illustration}
                src="/assets/features/Illustration-1.png"
            />
        </div>
    )
}
export default Features
