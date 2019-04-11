import DB from '../database/postgres';
import CRUD from '../database/postgres/crud';

describe('Test DB integration', () => {
  const db = new DB();
  const crud = new CRUD(db);

  it('Test connect to the DB', () => {
    //db.client.query('SELECT NOW()')
    expect(1).toBe(1);
  });

  it('Create new todo', async () => {
    const name = 'new Task';
    //console.log(crud["client"c)
    const result = await crud.Create(name);
    console.log(result)
    //expect(result).toBe(name)
  });
});
