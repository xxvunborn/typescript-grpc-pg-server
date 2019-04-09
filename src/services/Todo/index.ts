import * as grpc from 'grpc'

class Services { 
  crud: any

  public constructor(crud: any) {
    this.crud = crud
    //console.log(crud)

  }

  public GetById = async( ctx: any) => {
    const todo_id = 1
    console.log(this)
    const result = this.crud.GetById(todo_id)
    ctx.res = result
    //resolve(ctx.res = {name: "hola"})
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
