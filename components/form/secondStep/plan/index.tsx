import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import plans from '../../../../styles/plans.module.scss'

interface Props {
    defaultPlan: boolean
    type: string
    period: string
    price: string
    currency: string
}

interface Details {
    data: { icon: ''; type: ''; coverage: ''; benefits: []; nobenefits: [] }
}

type Inputs = {
    plan: boolean
}

export const Plan = (props: Props) => {
    const {
        register,
        formState: { errors },
    } = useForm<Inputs>()

    return (
        <div className={plans.plans__item}>
            <p className={plans.plans__item__type}>{props.type}</p>
            <input
                className={plans.plans__item__pin}
                type="radio"
                id={props.type}
                value={props.type}
                defaultChecked={props.defaultPlan}
                {...register('plan', { required: true })}
            />
            <label htmlFor={props.type} className={plans.plans__item__button}>
                <span>{props.currency}</span> <span>{props.price}</span>
            </label>
            <p className={plans.plans__item__period}>{props.period}</p>
        </div>
    )
}

export const DetailPlan = (props: Details) => {
    return (
        <div className={plans.plans__details}>
            <p>Cuentas con estos beneficios:</p>
            <div className={plans.plans__summary}>
                <div className={plans.plans__summary__content}>
                    <p>Cobertura máxima</p>
                    <p>{props.data.coverage}</p>
                    <p>plan {props.data.type}</p>
                </div>
                <div className={plans.plans__summary__icon}>
                    <img
                        src={`/assets/plans/${props.data.icon}.png`}
                        alt={`icono del plan ${props.data.type}`}
                    />
                </div>
            </div>
            <ul className={plans.plans__benefits}>
                {props.data.benefits.map((e, i) => {
                    return (
                        <li key={i} className={plans.plans__benefits__active}>
                            {e}
                        </li>
                    )
                })}
                {props.data.nobenefits.map((v, z) => {
                    return (
                        <li key={z} className={plans.plans__benefits__inactive}>
                            {v}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
