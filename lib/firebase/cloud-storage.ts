import firebaseApp from "./firebaseConfig";
import { getStorage } from "@firebase/storage";

const storage = getStorage(firebaseApp);
export default storage;
