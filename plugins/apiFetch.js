import {defineNuxtPlugin} from "#app";
import {$fetch} from "ofetch"
import Cookies from 'js-cookie'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    nuxtApp.provide(
        'apiFetch',
        $fetch.create({baseURL: config.public.baseURL}
        ))
})

// credentials: 'include',
//     headers: {
//     Accept: "application/json",
//         "X-XSRF-TOKEN": useCookie('XSRF-TOKEN').value
// }