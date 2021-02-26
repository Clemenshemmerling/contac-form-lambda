const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-west-1" });
exports.handler = async function (event, req) {
  const params = {
    Destination: {
      ToAddresses: [req.email],
    },
    Message: {
      Body: {
        Text: { Data: req.text },
      },

      Subject: { Data: req.subject },
    },
    Source: req.sourceEmail,
  };
 
  return ses.sendEmail(params).promise()
};