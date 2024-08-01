import { Thing } from "../models/thing.js"

async function index(req, res) {
  // look up things
  // render index
  const things = await Thing.find({})

  res.render('things/index', {
    things
  })
}

async function newThing(req, res) {
  res.render('things/new')
}

async function create(req, res) {
  const newThing = await Thing.create(req.body)
  console.log(newThing)
  res.redirect('/things')
}

async function deleteThing(req, res) {
  await Thing.findByIdAndDelete(req.params.thingId)
  res.redirect('/things')
}

async function show(req, res) {
  const thing = await Thing.findById(req.params.thingId)
  res.render('things/show', {
    thing
  })
}

async function edit(req, res) {
  const thing = await Thing.findById(req.params.thingId)
  res.render('things/edit', {
    thing
  })
}

async function update(req, res) {
  await Thing.findByIdAndUpdate(req.params.thingId, req.body, {new: true})
  res.redirect(`/things/${req.params.thingId}`)
}

export {
  index,
  newThing as new,
  create,
  deleteThing as delete,
  show,
  edit,
  update
}