const conn = new Mongo();
const db = conn.getDB("errbit");

db.users.insertOne({
  email: "admin@example.com",
  admin: true,
  name: "Errbit Admin",
  // password
  // https://bcrypt-generator.com/
  encrypted_password:
    "$2y$12$9C.h.FIsxF6RRTJKi.gHp.iC3RTgXA3Tb7bV0a4rTV//M.uXQKmc.",
});

db.apps.insertOne({
  _id: "5f8b475bbf17229f54313f07",
  name: "deno-test",
  api_key: "fd8dc33455afb0a2fc702b967667a70c",
});
