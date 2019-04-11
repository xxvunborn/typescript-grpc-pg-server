import * as grpc from 'grpc'

class Todo {
  id: any
  name: any
  isDone: any

  constructor(result: any){
    this.id = result.id
    this.name = result.name
    this.isDone = result.is_done
  }
}

class Services { 
  crud: any

  public constructor(crud: any) {
    this.crud = crud
  }

  public GetById = async(ctx: any) => {
    const todo_id = ctx.req.id
    const result = await this.crud.GetById(todo_id)

    ctx.res = {data: new Todo(result.rows[0])}
  }

  public GetAll = async (ctx: any) => {
    const result = await this.crud.GetAll()

    let convert = []
    for(let i = 0; i < result.rows.length; i++) {
      convert.push(new Todo(result.rows[i]))
    }

    ctx.res = { data: convert }
  }

  public Create = async (ctx: any) => {
    const name = ctx.req.name
    const result = await this.crud.Create(name)

    ctx.res = {data: new Todo(result.rows[0])}
  }

  public Update = async (ctx: any) => {
    const id = ctx.req.id
    const isDone = ctx.req.isDone
    const result = await this.crud.Update(id, isDone)

    ctx.res = { data: new Todo(result.rows[0]) }
  }

  public Delete = async (ctx: any) => {
    const id = ctx.req.id
    const result = await this.crud.Delete(id)

    ctx.res = { data: new Todo(result.rows[0]) }
  }
}

export default Services
