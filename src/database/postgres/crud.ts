class Crud {
  db: any;

  public constructor (db: any) {
    this.db = db
  }

  public GetById = async (todos_id: number) => {
    try {
      const result = await this.db.client.query("SELECT * FROM todos WHERE id = $1", [todos_id])
      return result
    } catch (err) {
      throw err
    }
  }

  public GetAll = async () => {
    try {
      const result = await this.db.client.query("SELECT * from todos", [])
      return result
    } catch (err) {
      throw err
    }
  }

  public Create = async (name: string) => {
    try {
      const result = await this.db.client.query("INSERT INTO todos (name) VALUES ($1) RETURNING *", [name])
      return result
    } catch (err) {
      throw err
    }
  }

  public Update = async (id: number, isDone?: boolean) => {
    try {
      const result = await this.db.client.query("UPDATE todos SET is_done = $1 WHERE id = $2 RETURNING *", [isDone, id])
      return result
    } catch (err) {
      throw err
    }
  }

  public Delete = async (id: number) => {
    try {
      const result = await this.db.client.query("DELETE FROM todos where id = $1 RETURNING *", [id])
      return result
    } catch (err) {
      throw err
    }
  }
}

export default Crud


/* EXAMPLE: new promise
 * In this example we return a new promise with a callback inside the query
   * =====================================================================================
  public GetById = (todos_id: number) => {
    return new Promise((resolve, reject) => {
      this.db.query("SELECT * FROM todos WHERE id = $1", [todos_id], (err: any, res: any) => {
        if (err) {
          console.log(err)
          return reject(err)
        }
        console.log(res)
        return resolve(res)
      });
    })
  };
    ===================================================================================== */


/* EXAMPLE: new promise minificated
 * In this example we return a new promise and use then for rescue the resolve an catch the
 * error 
   * =====================================================================================
  public GetById2 = (todos_id: number) => {
    return new Promise((resolve, reject) => {
      this.db.query("SELECT * FROM todos WHERE id = $1", [todos_id])
        .then((res: any) => resolve(res))
      .catch(reject)
    })
  };
   ===================================================================================== */

  /* EXAMPLE: function that returns a promise
   * =====================================================================================
  public GetById3 = (todos_id: number) => {
    return this.db.query("SELECT * FROM todos WHERE id = $1", [todos_id])
  } 
  ===================================================================================== */


  /* EXAMPLE: async/await with try/catch for the errors
   * =====================================================================================
  public GetById4 = async (todos_id: number) => {
    try {
      const result = await this.db.query("SELECT * FROM todos WHERE id = $1", [todos_id])
      return result
    } catch (err) {
      throw err
    }
  }
  ===================================================================================== */
