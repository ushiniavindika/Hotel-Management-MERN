import asyncHandler from 'express-async-handler'
import Reservation from '../models/tableBookingModel.js'




const createTBooking = asyncHandler(async (req, res) => {
    const {
        userid,
        restaurantid,
        date,
        phoneNo,
        adults,
        childrens,
        time

    } = req.body

    const newReserve = new Reservation({

        userid,
        restaurantid,
        date,
        phoneNo,
        adults,
        childrens,
        time

    })
    try {
        await newReserve.save()
        res.send('Successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
})



const getAlltableBookings = asyncHandler(async (req, res) => {
    const Tbookings = await Reservation.find({})
    res.json(Tbookings)
})

export { createTBooking, getAlltableBookings }