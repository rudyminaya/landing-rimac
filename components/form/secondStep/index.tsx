import React from 'react'
import styles from '../../../styles/form.module.scss'
import plans from '../../../styles/comparative.module.scss'
import Title, { SmallTitle, Subtitle } from '../../tools/title'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Submitbtn } from '../../tools/button'
import BreadCrumb from '../breadcrumb'

interface Props {}

type Inputs = {}

const SecondStep = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.register} ${styles.table}`}
        >
            <BreadCrumb paso="2" />
        </form>
    )
}

export default SecondStep
