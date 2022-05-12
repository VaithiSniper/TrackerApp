import sdk from "./../../../appwrite.config";

export default function login(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    let promise = sdk.account.createSession(email, password);

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
