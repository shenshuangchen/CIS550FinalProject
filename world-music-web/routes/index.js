var express = require('express');
var router = express.Router();
var path = require('path');
  var mysql = require('mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  template = require('jade').compileFile(path.join(__dirname, '../', '/source/templates/homepage.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

router.get('/find', function(req, res, next) {
  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/findpage.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'reference.html'));
  try {
    var html = template({ title: 'Find' })
    res.send(html)
  } catch (e) {
    next(e)
  }

});

router.get('/recommend', function(req, res, next) {
  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendpage.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  try {
    var html = template({ title: 'Recommend' })
    res.send(html)
  } catch (e) {
    next(e)
  }

});

router.get('/addition', function(req, res, next) {
  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/additionpage.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  try {
    var html = template({ title: 'Addition' })
    res.send(html)
  } catch (e) {
    next(e)
  }

});

router.post('/findsearchnew', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });
  console.log(req.body.song);
  var songname = req.body.song;



  //var sql = 'SELECT title from genres';
  var sql = 'SELECT artist_name from songs where title ="'+ songname+ '"';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/findsearchnewpage.jade'));
  
  //res.send(html);
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'L\'équipe', rows: rows })
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });


});

router.get('/recommendmusic1', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  //var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';
  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage1.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    //console.log(rows[1].title);
    //var rows = rows[1];
    //var row2 = rows.rows.item(1);
    //console.log(rows.rows.item(1));
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic2', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage2.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic3', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage3.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic4', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage4.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic5', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage5.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic6', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage6.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic7', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage7.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic8', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage8.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});

router.get('/recommendmusic9', function(req, res, next) {
  var connection = mysql.createConnection({
    host     : "cis550project.cod7doq3mxuo.us-west-1.rds.amazonaws.com",
    user     : "CIS550Project",
    password : "CIS550Project",
    port     : "3306",
    database : "innodb"
  });

  //var sql = 'select title, artist_name, year, artist_hotttnesss from songs order by artist_hotttnesss desc limit 1';
  var sql = 'select DISTINCT title, artist_name, year, artist_hotttnesss, artist_mbtag.mbtag from songs LEFT JOIN artist_mbtag ON songs.artist_id = artist_mbtag.artist_id GROUP BY artist_name order by artist_hotttnesss desc limit 9';

  template = require('jade').compileFile(path.join(__dirname, '../',  '/source/templates/recommendmusicpage9.jade'));
  //res.sendFile(path.join(__dirname, '../', 'views', 'insert.html'));
  connection.query(sql, function(err, rows, fields) {
    if (err) throw err;
    var html = template({ title: 'MUSIC', rows: rows})
    res.send(html);
    //res.render('findsearchnew', { title: 'Users', rows: rows });
  });

});



// router.get('/data/:email', function(req,res) {
//   // use console.log() as print() in case you want to debug, example below:
//   // console.log("inside person email");
//   var query = 'SELECT * from (SELECT Person.login, name, sex, relationshipStatus, birthyear, COUNT(DISTINCT friend) AS numberOfFriends from Person LEFT JOIN Friends ON Person.login = Friends.login GROUP BY Person.login) AS tempTable';
//   // you may change the query during implementation
//   var email = req.params.email;
//   if (email != 'undefined') query = query + ' where login ="' + email + '"';
//   console.log(query);
//   connection.query(query, function(err, rows, fields) {
//     if (err) console.log(err);
//     else {
//         res.json(rows);
//     }  
//     });
// });

// // ----Your implemention of route handler for "Insert a new record" should go here-----

// router.get('/insert/:param', function(req, res) {
//   // use console.log() as print() in case you want to debug, example below:
//   // console.log("inside person email");
//   var query = 'INSERT INTO Person VALUES(';
//   // you may change the query during implementation
//   //var login = req.params.login;
//   //var name = req.params.name;
//   //var sex = req.params.sex;
//   //var RelationshipStatus = req.params.RelationshipStatus;
//   //var Birthyear = req.params.Birthyear;
//   var param = req.params.param;
//   //query = query + 'VALUES("'+login+'","'+name+'","'+sex+'","'+RelationshipStatus+'","'+Birthyear+'")';
//   query = query + param + ')';
//   console.log(query);
//   connection.query(query, function(err, rows, fields) {
//     if (err) console.log(err);
//     else {
//         res.json(rows);
//     }  
//     });
// });


module.exports = router;