export default (nitroApp: any) => {
    nitroApp.hooks.hook('render:response', (response: any, _ctx: any) => {
        const headers = (response.headers ||= {})
        const ct = headers['content-type'] || headers['Content-Type'] || 'text/html'
        if (!response.body || !String(ct).includes('text/html')) return

        let html = typeof response.body === 'string'
            ? response.body
            : String(response.body)

        const re = /<link\s+rel=["']stylesheet["']\s+href=["']\/_nuxt\/([^"']+\.css)["']([^>]*)>/gi
        const matches = [...html.matchAll(re)]
        if (matches.length === 0) return

        html = html.replace(
            re,
            (_m: any, file: any, rest: any) =>
                `<link rel="preload" as="style" href="/_nuxt/${file}"${rest} onload="this.onload=null;this.rel='stylesheet'">`
        )

        const noscripts = matches.map((m) => {
            const file = m[1]
            const rest = m[2] || ''
            const hasCross = /\bcrossorigin\b/i.test(rest) ? ' crossorigin' : ''
            return `<noscript><link rel="stylesheet" href="/_nuxt/${file}"${hasCross}></noscript>`
        }).join('')

        html = html.replace(/<\/body>/i, `${noscripts}</body>`)

        response.body = html
    })
}
