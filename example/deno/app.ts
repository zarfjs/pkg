import { Zarf } from "../../deno_dist/core/server.ts"
import { serve } from "https://deno.land/std@0.158.0/http/server.ts"

interface AppLocals {
    user: string
}

const app = new Zarf<AppLocals>()

app.get("/hello", (ctx) => {
    return ctx.json({
        hello: "hello"
    })
})

app.get("/", (ctx) => {
    return ctx.html(`Welcome to Zarf App server`)
})

console.log(`Server started on 3000`)
await serve(app.handle, { port: 3000 });
