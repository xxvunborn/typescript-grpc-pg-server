class Crud {
  db: any;

  public constructor (db: any) {
    this.db = db;
  }

  public async GetById(todo_id: number) {
    this.db.client.query("SELECT * FROM todo WHERE db = $1", todo_id, (err: any, res: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    });
  };

  public async GetAll() {
    this.db.client.query("SELECT * from todo", [], (err: any, res: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    });
  };

  public async Create(name: string) {
    this.db.client.query("INSERT INTO todo VALUES $1", name, (err: any, res: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    });
  };

  public async Update(id: number, isDone?: boolean) {
      this.db.client.query("UPDATE todos SET is_done = $1 WHERE id = $2", [id, isDone], (err: any, res: any) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
  }

  public async Delete(id: number) {
    this.db.client.query("SELECT * FROM todo where id = $1", id, (err: any, res: any) => {
      if (err) {
        console.log(err)
      } else {
        console.log(res)
      }
    })
  }
}

export default Crud
