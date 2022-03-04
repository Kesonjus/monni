const db = require('../database');

const opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from opintojakso where idopintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (Koodi,laajuus,Nimi) values(?,?,?)',
      [opintojakso.Koodi, opintojakso.laajuus, opintojakso.Nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idopintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set Koodi=?,laajuus=?, Nimi=? where idopintojakso=?',
      [opintojakso.Koodi, opintojakso.laajuus, opintojakso.Nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;