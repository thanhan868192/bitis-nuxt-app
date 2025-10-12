import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LoggerService } from "~/services/loggerService";

describe('LoggerService', () => {
    let logSpy: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
        logSpy = vi.spyOn(console, 'log').mockImplementation(() => { })
    })

    afterEach(() => {
        logSpy.mockRestore()
    })

    it('info logs when leve is info', () => {
        const logger = new LoggerService('info')
        logger.info('message')
        expect(logSpy).toHaveBeenCalledWith('[INFO]', 'message', undefined)
    })

    it('info does not log when level is error', () => {
        const logger = new LoggerService('error')
        logger.info('should not log')
        expect(logSpy).not.toHaveBeenCalled()
    })
})