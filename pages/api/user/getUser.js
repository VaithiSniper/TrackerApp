import sdk from "./../../../appwrite.config";

export default function register({ body, method }, res) {
  if (method === "GET") {
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
