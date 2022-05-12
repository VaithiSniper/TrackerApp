import sdk from "./../../../appwrite.config";

export default function getUser(req, res) {
  if (req.method === "GET") {
    let promise = sdk.account.get();

    promise.then(
      function (response) {
        res.send(response); // Success
      },
      function (error) {
        res.send(error); // Failure
      }
    );
  } else {
    res.send("Invalid request!");
  }
}
