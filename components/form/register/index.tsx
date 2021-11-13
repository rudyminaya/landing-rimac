import React from 'react'
import styles from '../../../styles/form.module.scss'
import { ContentInput, SelectDocument } from '../input'
import Title, { Subtitle } from '../../tools/title'

interface Props {}

const Register = (props: Props) => {
    return (
        <form className={`${styles.register} ${styles.table}`}>
            <Title thinTitle="Obtén tu" boldTitle=" seguro ahora" />
            <Subtitle titulo="Ingresa los datos para comenzar" />
            <div className={styles.register__doc}>
                <SelectDocument />
                <ContentInput
                    type="tel"
                    name="nro"
                    id="ndoi"
                    label="Nro de Documento"
                />
                <ContentInput
                    type="date"
                    name="fecha"
                    id="fecha"
                    label="Fecha de nacimiento"
                />
                <ContentInput
                    type="tel"
                    name="celular"
                    id="celular"
                    label="Celular"
                />
            </div>
        </form>
    )
}

export default Register
