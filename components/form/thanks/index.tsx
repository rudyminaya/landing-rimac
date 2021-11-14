import React from 'react'
import styles from '../../../styles/thanks.module.scss'
import { Homebtn } from '../../tools/button'
import Title from '../../tools/title'

interface Props {}

const Thanks = (props: Props) => {
    return (
        <div className={styles.thanks}>
            <Title thinTitle="¡Gracias por " boldTitle="confiar en nosotros!" />
            <p className={styles.thanks__parrafo}>
                Queremos conocer mejor la salud de los asegurados. Un asesor{' '}
                <strong>se pondrá en contacto</strong> contigo en las siguientes{' '}
                <strong>48 horas.</strong>
            </p>

            <Homebtn link="/" textLink="Ir a Salud" />
        </div>
    )
}

export default Thanks
