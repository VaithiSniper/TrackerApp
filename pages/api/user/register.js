import sdk from "./../../../appwrite.config";

export default function register(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    let promise = sdk.account.create("unique()", email, password, name);
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
