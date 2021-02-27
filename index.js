const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-1" }); 
exports.handler = async function (event) {
  const params = {
    Destination: {
      ToAddresses: [event.email],
    },
    Message: {
      Body: {
        Text: { Data: event.text },
      },

      Subject: { Data: event.subject },
    },
    Source: event.sourceEmail,
  };
 
  return ses.sendEmail(params).promise()
};