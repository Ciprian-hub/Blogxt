import {defineNuxtPlugin} from "#app";
import { $fetch } from "ohmyfetch"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    nuxtApp.provide(
        'apiFetch',
        $fetch.create({
            baseURL: config.public.baseURL
        }))
})