import React, { useEffect, useState } from 'react'
import styles from '../../styles/form.module.scss'
import SelectDocument from '../form/input'
import Title, { Subtitle } from '../tools/title'
import { Submitbtn } from '../tools/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'

type Inputs = {
    ndoi: string
    date: string
    celular: string
    tycdatos: string
    tycpolitica: string
}

const Register = () => {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let maxfecha = `${year}-${month}-${day}`

    const [btn, setBtn] = useState<boolean>(false)
    const [datos, setDatos] = useState({
        doi: '',
        ndoi: '',
        date: '',
        celular: '',
        tycdatos: false,
        tycpolitica: false,
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = () => router.push('/plan-a-medida')

    const router = useRouter()

    const errores = Object.keys(errors).map((v: string) => {
        switch (v) {
            case 'ndoi':
                return 'El número de documento ingresado no es válido'

            case 'date':
                return 'Ingrese una fecha válida'

            case 'celular':
                return 'El teléfono ingresado debe ser mayor a 9 digitos y menor a 16'

            case 'tycdatos':
                return 'Es importante aceptar los Términos y Condiciones de Protección de Datos'
        }
        return 'Ocurrió un problema'
    })

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.register} ${styles.table}`}
        >
            <Title thinTitle="Obtén tu" boldTitle=" seguro ahora" />
            <Subtitle titulo="Ingresa los datos para comenzar" />
            <div className={errores ? styles.form__errors : null}>
                {errores.map((e, i) => {
                    return <p key={i}>{`●   ${e}`}</p>
                })}
            </div>
            <div className={styles.register__doc}>
                <SelectDocument disabled={false} />
                <div className={styles.form__input}>
                    <input
                        type="tel"
                        className={styles.text}
                        id="ndoi"
                        placeholder=" "
                        {...register('ndoi', {
                            required: true,
                            minLength: 8,
                            maxLength: 8,
                            valueAsNumber: true,
                        })}
                    />
                    <label className={styles.label} htmlFor="ndoi">
                        Nro de Documento
                    </label>
                </div>
            </div>
            <div className={styles.form__input}>
                <input
                    type="date"
                    className={styles.text}
                    id="date"
                    placeholder=""
                    defaultValue=""
                    max={maxfecha}
                    {...register('date', {
                        required: true,
                    })}
                />
                <label className={styles.label} htmlFor="date">
                    Fecha de Nacimiento
                </label>
            </div>
            <div className={styles.form__input}>
                <input
                    type="tel"
                    className={styles.text}
                    id="celular"
                    placeholder=" "
                    {...register('celular', {
                        required: true,
                        minLength: 9,
                        maxLength: 15,
                    })}
                />
                <label className={styles.label} htmlFor="ndoi">
                    Celular
                </label>
            </div>
            <div className={styles.form__checkInput}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    id="tycdatos"
                    {...register('tycdatos', { required: true })}
                />
                <label htmlFor="tycdatos">
                    Acepto la{' '}
                    <a href="#" target="_blank">
                        Política de Protección de Datos Personales y los
                        Términos y Condiciones
                    </a>
                </label>
            </div>
            <div className={styles.form__checkInput}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    id="tycpolitica"
                    {...register('tycpolitica', { required: false })}
                />
                <label htmlFor="tycpolitica">
                    Acepto la{' '}
                    <a href="#" target="_blank">
                        Política de Envío de Comunicaciones Comerciales
                    </a>
                </label>
            </div>
            <Submitbtn disabled={btn} onClick={null} textButton="Comencemos" />
        </form>
    )
}

export default Register
