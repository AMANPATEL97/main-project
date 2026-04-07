
import fs from 'fs'
import DateHelper from './Datehelper.js';
import Path from 'path'
var html = fs.readFileSync(Path.resolve()+"/template.html", "utf8");

let createOption = (body, user, product)=>{
    console.log("-----------",body)
    console.log("+++++++++++",user)
    console.log("########", product)
    // return;
    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: `<div style="max-width:800px; margin:auto; background:#ffffff; padding:20px; ">

    <!-- Header -->
    <div style="border-bottom:2px solid #333; padding-bottom:10px; margin-bottom:20px;">
        <img src="${Path.resolve()}/images/logo.png" style="height: 50px; width : 250px" />
        <p style="margin:5px 0;">Invoice No: <b>${body.razorpay_order_id}</b></p>
        <p style="margin:5px 0;">Invoice Date: <b>${DateHelper()}</b></p>
    </div>

    <!-- Company & Customer Details -->
    <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
        <tr>
            <td style="width:50%; vertical-align:top;">
                <h3 style="margin-bottom:5px;">From</h3>
                <p style="margin:0;">ABC Fashion Pvt Ltd</p>
                <p style="margin:0;">123 Business Street</p>
                <p style="margin:0;">Mumbai, India</p>
                <p style="margin:0;">GSTIN: 27ABCDE1234F1Z5</p>
                <p style="margin:0;">Phone: 9876543210</p>
            </td>
            <td style="width:50%; vertical-align:top;">
                <h3 style="margin-bottom:5px;">Bill To</h3>
                <p style="margin:0; text-transform:capitalize">${user.name}</p>
                <p style="margin:0;">${user.address}</p>
                <p style="margin:0;">${user.city}</p>
                <p style="margin:0;">Phone: ${user.contact}</p>
            </td>
        </tr>
    </table>

    <!-- Product Table -->
    <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
        <tr style="background:#333; color:#fff;">
            <th style="border:1px solid #ddd; padding:8px;">#</th>
            <th style="border:1px solid #ddd; padding:8px;">Product Name</th>
            <th style="border:1px solid #ddd; padding:8px;">Qty</th>
            <th style="border:1px solid #ddd; padding:8px;">Price</th>
            <th style="border:1px solid #ddd; padding:8px;">Total</th>
        </tr>

        <tr>
            <td style=" padding:8px; text-align:center;">1</td>
            <td style="border:1px solid #ddd; padding:8px;">${product.title}</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">1</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹${product.price}</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹${product.price}</td>
        </tr>
        <tr>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">2</td>
            <td style="border:1px solid #ddd; padding:8px;">Discount</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">1</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">${product.discount}%</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹${product.price*product.discount/100}</td>
        </tr>
        <tr>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">3</td>
            <td style="border:1px solid #ddd; padding:8px;">Delivery Charge</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:center;">1</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹${body.charge}</td>
            <td style="border:1px solid #ddd; padding:8px; text-align:right;">₹${body.charge}</td>
        </tr>

        
    </table>

    <!-- Amount Summary -->
    <table style="width:100%; border-collapse:collapse;">
        <tr>
            <td style="width:70%;"></td>
            <td style="width:30%;">
                <table style="width:100%; border-collapse:collapse;">
                    
                    <tr style="font-weight:bold; background:#f2f2f2;">
                        <td style="padding:8px;">Grand Total</td>
                        <td style="padding:8px; text-align:right;">₹${body.amount}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- Payment Details -->
    <div style="margin-top:20px;">
        <h3>Payment Details</h3>
        <p style="margin:5px 0;">Payment Method: UPI</p>
        <p style="margin:5px 0;">Transaction ID: ${body.razorpay_payment_id}</p>
        <p style="margin:5px 0;">Payment Status: <b>Paid</b></p>
    </div>`
        
        }
    };
    
    var document = {
      html: html,
      data : {},
      path: Path.resolve()+"/assets/invoices/"+body.razorpay_order_id+"_invoice.pdf",
      type: "",
    };

    return { options, document }
}

export default createOption