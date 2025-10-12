import compression from 'compression'
import { fromNodeMiddleware } from 'h3'

const middleware =
    import.meta.dev
        ? ((_req: any, _res: any, next: any) => next())
        : compression({ threshold: 0, filter: () => true })
export default fromNodeMiddleware(middleware as any)