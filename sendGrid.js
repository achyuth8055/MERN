
const sendGrid = require('@sendgrid/mail')

const API_KEY = "oYviUY1XTyGl6B2_NjNbBA.XB9GJB0_P8dQx6v-ZrC3-R9Io2a8UggzVt2LYuR7aZw"

sendGrid.setApiKey(API_KEY)
const email = "achyuthkumar64@gmail.com" // recivers mail id
sendGrid.send({
        from:'achyuthkumark2***@gmail.com', //sender mail id
        to:email,
        subject:'Mail From Tom',
        html:`<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Registration Successful</title>
            <style>
              /* Reset styles */
              body, html {
                margin: 0;
                padding: 0;
                height: 100%;
              }
        
              /* Email styles */
              body {
                background-color: #f5f5f5;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
                height: 100%;
                width: 100%;
              }
        
              table {
                width: 100%;
                border-collapse: collapse;
              }
        
              td {
                vertical-align: top;
              }
        
              /* Header styles */
              .header {
                background-color: #ffffff;
                padding: 20px;
                text-align: center;
                border-bottom: 1px solid #dddddd;
              }
        
              /* Content styles */
              .content {
                background-color: #ffffff;
                padding: 20px;
              }
        
              /* Footer styles */
              .footer {
                background-color: #eeeeee;
                padding: 20px;
                border-top: 1px solid #dddddd;
                text-align: center;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <table>
              <tr>
                <td>
                  <div class="header">
                    <h1>Registration Successful</h1>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="content">
                    <p>Dear ${email},</p>
                    <p>Thank you for registering with our website. Your account has been successfully created.</p>
                    <p>Please keep your login credentials secure and do not share them with anyone.</p>
                    <p>If you have any questions or concerns, please don't hesitate to contact us.</p>
                    <br>
                    <p>Best regards,</p>
                    <p>The TOM Team</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="footer">
                    <p>You are receiving this email because you have registered with TOM WHO CODES.</p>
                    <p>&copy; 2023 TOM. All rights reserved.</p>
                  </div>
                </td>
              </tr>
            </table>
          </body>
        </html>
        `
})
.then(res => {
    console.log("sucessful sent")
})
.catch(err=> console.log(err))

