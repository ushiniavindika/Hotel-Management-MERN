import mongoose from 'mongoose'

const tableBookingSchema = mongoose.Schema({
      userid: {
            type: String,
            required: true
      },

      restaurantid: {
            type: String,
            required: true,     
      },
     
      date: {
            type: Date,
            required: true,
      },
      phoneNo: {
            type: String,
            required: true,
      },
      adults: {
            type: Number,
            required: true,
      },
      childrens: {
            type: Number,
            required: true,
      },
      time: {
            type: String,
            required: true,
      },
     

}, {
      timestamps: true
})

const TBookings = mongoose.model('tableBookings', tableBookingSchema)

export default TBookings