class Services { 
  crud: any

  public constructor(crud: any) {
    this.crud = crud
  }

  public async GetById(ctx: any) {
    const todo_id = ctx.req.id

    const result = this.crud.GetById(todo_id)
    ctx.res = result
  }

  public async GetAll(ctx: any) {
    const result = this.crud.GetAll()
    ctx.res = result
  }

  public async Create(ctx: any) {
    const name = ctx.req.name

    const result = this.crud.Create(name)
    ctx.res = result
  }

  public async Update(ctx: any) {
    const id = ctx.req.id
    const isDone = ctx.req.isDone

    const result = this.crud.Update(id, isDone)
    ctx.res = result
  }

  public async Delete(ctx: any) {
    const id = ctx.req.id

    const result = this.crud.Delete(id)
    ctx.res = result
  }
}

export default Services
