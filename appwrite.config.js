import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
  .setEndpoint("http://150.230.140.97/v1") // Your Appwrite Endpoint
  .setProject("626fab2b4a82dbb03d88"); // Your project ID

export default appwrite;
