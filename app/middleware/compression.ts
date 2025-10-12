import compression from 'compression'
import { fromNodeMiddleware } from 'h3'

export default fromNodeMiddleware(
    compression({
        threshold: 1024,
        filter: () => true
    }) as any
)