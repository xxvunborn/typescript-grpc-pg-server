// Return one TODO
async function Get(req: any, client: any) {
  client.query("SELECT $1 FROM $2", [req.id, "todo"], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
}
