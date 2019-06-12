
get = (req, res, next) => {
  var query;
  if(req.query.city) {
    query = req.models.Listing.find({city: req.query.city})
  }
  else
  {
    query = req.models.Listing.find()
  }

  query.exec().then((listings) => {
      return res.send(listings);
    }).catch((error) => {
      next(error)
    })
}

getById = (req, res, next) => {
  req.models.Listing.findById(req.params._id).then((listings) => {
    return res.send(listings);
  }).catch((error) => {
    next(error)
  })
}


post = (req, res, next) => {
  req.models.Listing.create({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    street: req.body.street,
    city: req.body.city,
    municipality: req.body.municipality,
    summary: req.body.summary,
    price: req.body.price,
    monthlyFee: req.body.monthlyFee,
    bidding: req.body.bidding
  }).then((listing) => {
    return res.status(201).send(listing)
  }).catch((error) => {
    next(error)
  })
}

put = (req, res, next) => {
  req.models.Listing.updateOne({_id: req.params},
    {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      street: req.body.street,
      city: req.body.city,
      municipality: req.body.municipality,
      summary: req.body.summary,
      price: req.body.price,
      monthlyFee: req.body.monthlyFee,
      bidding: req.body.bidding
    },
    {
      new: true,
      upsert: true,
      runvalidators: true
    }).then((status) => {
      console.log("status: ", status)
      if (status.upserted)
        res.status(201)
      else if (status.nModified)
        res.status(200)
      else
        res.status(204)
    res.send()
    }).catch((error) => next(error))
}

// deleteing = (req, res, next) => {
//   req.models.Listing.findByIdAndDelete(req.params.id).then((listing)=> {
//     if (listing)
//       return res.send(listing).status(200)
//     res.sendStatus(204)
//   }).catch((error) => next(error))
// }

deleteById = (req, res, next) => {
  req.models.Listing.findByIdAndDelete(req.params.id).then((deleted)=> {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}



module.exports = {
  get,
  getById,
  post,
  put,
  deleteById
}
