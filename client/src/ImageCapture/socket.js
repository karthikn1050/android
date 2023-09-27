import io from "socket.io-client";
import { PythonSocket } from "../config";

// const socket = io(`http://localhost:5004`);
const socket = io(`${PythonSocket}`);

export default socket;
