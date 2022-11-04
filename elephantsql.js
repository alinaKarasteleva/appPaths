const pg = require('pg');

const conString = "postgres://xbcbcqwb:Ccb5H8jWFLMB0Ui23PyqIcH9QTzNw4Aq@mouse.db.elephantsql.com/xbcbcqwb" 
// const conString = "postgres://pathsdb_user:HAG9XBnRZyULTIqbhaXv5ySUrnG9vxQ5@dpg-cdhr3uirrk06v9sdsjl0-a.frankfurt-postgres.render.com/pathsdb" 
const client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});