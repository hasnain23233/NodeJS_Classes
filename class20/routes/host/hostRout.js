const express = require('express')
const path = require('path')

const fs = require('fs')
const hostRoute = express.Router()
const rootDirector = require('../../utility/pathUtils')

const HomeData = []

hostRoute.get('/add_home', (req, res, next) => {
  console.log('add home page ')
  res.render('add_home', { HomeData })
})
hostRoute.post('/add_home', (req, res, next) => {
  const content = `name: ${req.body.name} . Email is ${req.body.email} and your house is ${req.body.home} `
  HomeData.push({
    name: req.body.name,
    email: req.body.email,
    home: req.body.home,
    img: req.body.img
  })
  fs.writeFileSync(`airbnd/HomeData/${req.body.name}.txt`, content)
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Home Registered</title>
          <link rel="stylesheet" href="/output.css" />
        </head>
        <body class="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
          <div class="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
            <h1 class="text-3xl font-bold text-green-600 mb-4">Your home was registered 🎉</h1>
            <p class="text-lg text-gray-700 mb-2"><span class="font-semibold">Name:</span> ${req.body.name}</p>
            <p class="text-lg text-gray-700 mb-2"><span class="font-semibold">Email:</span> ${req.body.email}</p>
            <p class="text-lg text-gray-700 mb-6"><span class="font-semibold">Home:</span> ${req.body.home}</p>
            <a href='/' class="inline-block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">View Your Home</a>
          </div>
        </body>
        </html>
      `)
})



module.exports = { hostRoute, HomeData }