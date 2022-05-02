import sdk from "./../../../appwrite.config";

export default function register({ body: { email, password }, method }, res) {
  if (method === "POST") {
    let promise = sdk.account.create("unique()", email, password);

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
