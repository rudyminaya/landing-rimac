import React, { useEffect, useState } from 'react'
import styles from '../../../styles/form.module.scss'
import Title, { SmallTitle, Subtitle } from '../../tools/title'
import { useForm, SubmitHandler } from 'react-hook-form'
import SelectDocument from '../input'
import { Submitbtn } from '../../tools/button'
import BreadCrumb from '../breadcrumb'

interface Props {
    datos?: {
        numDocumento: string
        nombres: string
        apellidoPaterno: string
        apellidoMaterno: string
        fecNacimiento: string
        sexo: string
    }
    nombre: string
    onClick: any
}

type Inputs = {
    ndoi: string
    date: string
    nombres: string
    apellidoPaterno: string
    apellidoMaterno: string
    sexo: boolean
    asegurado: boolean
}

const FirstStep = (props: Props) => {
    let datosPersonales = props.datos

    const nombreCorto = props.nombre

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = () => {
        props.onClick()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.register} ${styles.table}`}
        >
            <BreadCrumb paso="1" />
            <Title
                thinTitle="Hola, "
                boldTitle={`${nombreCorto
                    .charAt(0)
                    .toUpperCase()}${nombreCorto.slice(1)}`}
            />
            <SmallTitle titulo="Valida que los datos sean correctos" />
            <Subtitle titulo="Datos personales del titular" />
            <div className={styles.register__doc}>
                <SelectDocument disabled={datosPersonales && true} />
                <div className={styles.form__input}>
                    <input
                        type="tel"
                        className={styles.text}
                        id="ndoi"
                        placeholder=" "
                        defaultValue={
                            datosPersonales ? datosPersonales.numDocumento : ''
                        }
                        disabled={datosPersonales && true}
                        {...register('ndoi', {
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
                    type="text"
                    className={styles.text}
                    id="nombres"
                    placeholder=" "
                    defaultValue={
                        datosPersonales ? datosPersonales.nombres : ''
                    }
                    disabled={datosPersonales && true}
                    {...register('nombres', {
                        minLength: 2,
                        maxLength: 50,
                    })}
                />
                <label className={styles.label} htmlFor="nombres">
                    Nombres
                </label>
            </div>
            <div className={styles.form__input}>
                <input
                    type="text"
                    className={styles.text}
                    id="apellidoPaterno"
                    placeholder=" "
                    defaultValue={
                        datosPersonales ? datosPersonales.apellidoPaterno : ''
                    }
                    disabled={datosPersonales && true}
                    {...register('apellidoPaterno', {
                        minLength: 2,
                        maxLength: 50,
                    })}
                />
                <label className={styles.label} htmlFor="apellidoPaterno">
                    Apellido Paterno
                </label>
            </div>
            <div className={styles.form__input}>
                <input
                    type="text"
                    className={styles.text}
                    id="apellidoMaterno"
                    placeholder=" "
                    defaultValue={
                        datosPersonales ? datosPersonales.apellidoMaterno : ''
                    }
                    disabled={datosPersonales && true}
                    {...register('apellidoMaterno', {
                        minLength: 2,
                        maxLength: 50,
                    })}
                />
                <label className={styles.label} htmlFor="apellidoMaterno">
                    Apellido Materno
                </label>
            </div>
            <div className={styles.form__input}>
                <input
                    type="text"
                    className={styles.text}
                    id="date"
                    placeholder=""
                    value={datosPersonales ? datosPersonales.fecNacimiento : ''}
                    disabled={datosPersonales && true}
                    {...register('date')}
                />
                <label className={styles.label} htmlFor="date">
                    Fecha de Nacimiento
                </label>
            </div>
            <div className={styles.form__options}>
                <p className={styles.titleOptions}>Género</p>
                <div className={styles.form__checkRadio}>
                    <input
                        type="radio"
                        className={styles.radio}
                        id="M"
                        checked={
                            datosPersonales
                                ? datosPersonales.sexo == 'M'
                                    ? true
                                    : false
                                : null
                        }
                        disabled={true}
                        {...register('sexo')}
                    />
                    <label htmlFor="masculino">Masculino</label>
                </div>
                <div className={styles.form__checkRadio}>
                    <input
                        type="radio"
                        className={styles.radio}
                        id="F"
                        checked={
                            datosPersonales
                                ? datosPersonales.sexo == 'F'
                                    ? true
                                    : false
                                : null
                        }
                        disabled={true}
                        {...register('sexo')}
                    />
                    <label htmlFor="femenino">Femenino</label>
                </div>
            </div>
            <div className={styles.form__options}>
                <p className={styles.titleOptions}>
                    ¿A quién vamos a asegurar?
                </p>
                <div className={styles.form__checkRadio}>
                    <input
                        type="radio"
                        className={styles.radio}
                        defaultChecked={true}
                        value="me"
                        id="me"
                        {...register('asegurado', { required: true })}
                    />
                    <label htmlFor="me">Solo a mí</label>
                </div>
                <div className={styles.form__checkRadio}>
                    {errors.asegurado && (
                        <div className={styles.form__errors}>
                            <p> ● Selecciona una opción para continuar</p>
                        </div>
                    )}

                    <input
                        type="radio"
                        className={styles.radio}
                        value="family"
                        id="family"
                        {...register('asegurado', { required: true })}
                    />
                    <label htmlFor="family">A mí y a mi familia</label>
                </div>
            </div>
            <Submitbtn disabled={false} textButton="Continuar >" />
        </form>
    )
}

export default FirstStep
