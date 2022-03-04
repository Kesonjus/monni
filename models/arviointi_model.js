const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Paivamaara,Arvosana,idOpiskelija) values(?,?,?,?)',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Paivamaara=?,Arvosana=?, idOpiskelija=?, idOpintojakso=? where idarviointi=?',
      [arviointi.Paivamaara, arviointi.Arvosana, arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.idArviointi],
      callback
    );
  }
};
module.exports = arviointi;