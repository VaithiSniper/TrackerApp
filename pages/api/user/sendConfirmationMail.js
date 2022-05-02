import sdk from "./../../../appwrite.config";

export default function sendConfirmationMail(req, res) {
  if (method === "POST") {
    let promise = sdk.account.createVerification("https://example.com");

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
