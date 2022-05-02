import sdk from "./../../../appwrite.config";

export default function sendConfirmationMail(
  { params: { userId, secret } },
  res
) {
  if (method === "PUT") {
    let promise = sdk.account.updateVerification(userId, secret);

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  } else {
    res.send("Invalid request!");
  }
}
