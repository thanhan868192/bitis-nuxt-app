import { LoggerService } from "~/services/logger-service"

export default defineNuxtPlugin(() => {
    const logger = new LoggerService('info')

    return {
        provide: { logger }
    }
})