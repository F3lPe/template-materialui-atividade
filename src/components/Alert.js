import { Notify } from "notiflix"

export default function handleAlert({ type, message }) {
    Notify.init({
        success: { background: '#2e7d32' },
        failure: { background: '#d32f2f' }
    })

    Notify[type](message)
}