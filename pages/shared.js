import apiConf from '../api.conf.json'
import axios from 'axios'

export async function init({store, redirect, isClient}) {
    if (isClient) return

    try {
        const res = await axios.get(`${apiConf.baseUrl}/todos`)
        store.commit('init', res.data)
    } catch (error) {
        redirect('/error')
    }
}