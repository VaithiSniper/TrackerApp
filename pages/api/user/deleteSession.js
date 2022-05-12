import sdk from "../../../appwrite.config";

export default function register({ body, method }, res) {
  if (method === "DELETE") {
    let promise = sdk.account.deleteSession("current");

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
