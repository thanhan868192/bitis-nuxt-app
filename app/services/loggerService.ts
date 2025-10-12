export class LoggerService {
    constructor(private logLevel: 'debug' | 'info' | 'error') { }

    info(msg: string, data?: any) {
        if (this.logLevel !== 'error') {
            console.log('[INFO]', msg, data)
        }
    }

    error(msg: string, data?: any) {
        console.log('[ERROR]', msg, data)
    }
}