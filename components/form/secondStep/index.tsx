import React, { useState } from 'react'
import styles from '../../../styles/form.module.scss'
import plans from '../../../styles/plans.module.scss'
import Title, { SmallTitle } from '../../tools/title'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Mailbtn, Submitbtn } from '../../tools/button'
import BreadCrumb from '../breadcrumb'
import dataPlans from './plan/plans.json'
import { DetailPlan, Plan } from './plan'
import Services from './services'

interface Props {
    datos?: {
        nombres: string
    }
    nombre: string
}

type Inputs = {}

const SecondStep = (props: Props) => {
    const nombreCorto = props.nombre

    const {
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.steps}>
            <BreadCrumb paso="2" />
            <Title
                thinTitle="Hola, "
                boldTitle={`${nombreCorto
                    .charAt(0)
                    .toUpperCase()}${nombreCorto.slice(1)}`}
            />
            <SmallTitle titulo="Valida que los datos sean correctos" />
            {dataPlans ? (
                <div className={plans.plans}>
                    {dataPlans.map((e, i) => {
                        return (
                            <Plan
                                key={i}
                                {...e}
                                defaultPlan={i === 0 ? true : false}
                            />
                        )
                    })}
                </div>
            ) : null}
            {dataPlans ? <DetailPlan data={dataPlans[0]} /> : null}
            <Services />
            <div className={styles.boxButtons}>
                <Mailbtn
                    mail="mail@mail.com"
                    textButton="Enviar cotización por correo"
                />
                <Submitbtn disabled={false} textButton="Comprar plan" />
            </div>
        </form>
    )
}

export default SecondStep
