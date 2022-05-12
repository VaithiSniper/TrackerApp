import { Appwrite } from "appwrite";

const api_end = "http://150.230.140.97/v1";
const id = "626fab2b4a82dbb03d88";

const appwrite = new Appwrite();

appwrite
  .setEndpoint(api_end) // Your Appwrite Endpoint
  .setProject(id); // Your project ID

export default appwrite;
