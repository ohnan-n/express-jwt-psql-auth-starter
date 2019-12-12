var express = require('express');
var router = express.Router();
const jwt = require('jwt-simple');
const jwtCheck = require('express-jwt');
const passport = require('../passport-config/passport')
const config = require('../passport-config/config');
const User = require('../models').User;

/* GET users listing. */
router.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      res.json({ users })
    })
});

/* SIGNUP a user. */
router.post('/signup', (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user) {
          User.create(newUser)
            .then(user => {
              console.log(user)
              res.json({ user })
            })
        } else {
          console.log("line 33")
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) {
          if (user.password === req.body.password) {
            const payload = {
              id: user.id
            }
            const token = jwt.encode(payload, config.jwtSecret)
            res.json({ token, user })
          } else {
            res.sendStatus(401)
          }
        } else {
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

router.post('/', (req, res) => {
  console.log(req.headers)
  var decoded = jwt.decode(req.headers.authorization, config.jwtSecret);
  console.log(decoded);
  User.findByPk(decoded.id)
    .then(user => {
      res.json({ user })
    })
})

router.get('/:id', jwtCheck({ secret: config.jwtSecret }), (req, res) => {
  let decoded = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecret)

  User.findByPk(req.params.id)
    .then(user => {
      if (user.id === decoded.id) {
        res.json(user)
      } else {
        res.json({ message: "You are not authorized to see that" })
      }
    })
})

module.exports = router;
