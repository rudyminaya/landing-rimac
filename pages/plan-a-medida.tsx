import Form from '../components/form'
import Features from '../components/features'
import styles from '../styles/home.module.scss'

export default function Plan() {
    return (
        <>
            <div className={styles.home}>
                <Features />
                <Form />
            </div>
        </>
    )
}
