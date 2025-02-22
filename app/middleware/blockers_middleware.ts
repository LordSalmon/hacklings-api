import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class BlockersMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const allow_fields: string[] = ["id", "start", "end"];
    const json: any = ctx.request.body();

    if (!allow_fields.every(field => field in json)) {
      throw new Error('Incorrect JSON-Format');
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
