require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
// const mongoose = require('mongoose');

const router = express.Router();

// const PaymentDetailsSchema = mongoose.Schema({
//   razorpayDetails: {
//     orderId: String,
//     paymentId: String,
//     signature: String,
//   },
//   success: Boolean,
// });

// const PaymentDetails = mongoose.model('PatmentDetail', PaymentDetailsSchema);

router.post('/orders', async(req, res) => {
    // console.log(req.query)
    // console.log(req.query.amount)
    console.log(req.body)
    console.log(req.body.amount)
    let amountReq = req.body.amount
    let currencyReq = req.body.currency
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID, // YOUR RAZORPAY KEY
            key_secret: process.env.RAZORPAY_SECRET, // YOUR RAZORPAY SECRET
        });

        const options = {
            amount: amountReq, //comes from form or backend for 500rps it is 50000 that is multiplies by 100
            currency: currencyReq,
            receipt: 'receipt_order_74394',
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send('Some error occured');

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/success', async(req, res) => {
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        const shasum = crypto.createHmac('sha256', 'SfVH8mcfWw7KgwoJzB3yIu7S');
        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
        const digest = shasum.digest('hex');

        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: 'Transaction not legit!' });

        // const newPayment = PaymentDetails({
        //   razorpayDetails: {
        //     orderId: razorpayOrderId,
        //     paymentId: razorpayPaymentId,
        //     signature: razorpaySignature,
        //   },
        //   success: true,
        // });

        // await newPayment.save();
        const d=new Date()
        res.json({
            msg: 'success',
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
            created:d
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;