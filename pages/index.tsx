import Head from 'next/head'
import Features from '../components/features'
import Form from '../components/form'
import styles from '../styles/home.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>RIMAC Seguros | Cotizador de Seguros</title>
                <meta
                    name="description"
                    content="Encuentra Aquí el Seguro que Buscas con el Respaldo de RIMAC. ¡Cotiza Aquí! Ampliamos Nuestros Servicios Digitales y Canales de Atención para Asistirte En Línea. Pago Seguro."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.home}>
                <Features />
                <Form />
            </div>
        </>
    )
}
