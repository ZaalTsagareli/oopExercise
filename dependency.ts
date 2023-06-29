import crypto from "crypto";

class hash {
  hashPassword(password, cb: (res) => void) {
    const salt = crypto.randomBytes(16);

    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
      if (err) {
        throw err;
      }

      cb(derivedKey.toString("base64"));
    });
  }
}

const hasher = new hash();
hasher.hashPassword("zaali", (res) => {
  console.log(res);
});
