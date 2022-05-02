import sdk from "./../../../appwrite.config";

export default function register({ body, method }, res) {
  if (method === "GET") {
    let promise = sdk.database.listDocuments("62703a729172e084b759");

    promise.then(
      function (response) {
        res.json(response); // Success
      },
      function (error) {
        res.send(error); // Failure
      }
    );
  } else {
    res.send("Invalid request!");
  }
}
