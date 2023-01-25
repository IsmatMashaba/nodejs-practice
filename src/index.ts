import  {IncomingMessage, ServerResponse} from "http";
import * as http from "http";


const requestListener = function (req: IncomingMessage,res:ServerResponse){
    if (req.method === "GET" && req.url === "/users") {
        res.write("user list");
        res.end();
    }
    if (req.method === "POST" && req.url === "/users") {
        res.write("create a new product");
        res.end();
    }
    if (req.method === "DELETE" && req.url === "/users/1") {
        res.write("delete user by id");
        res.end();
    }
    res.writeHead(404);
    res.end("No router found!");
}

const server= http.createServer(requestListener)
const port=5000
server.listen(port,()=>{
    console.log(`Server is running  http://localhost:${port}`)
})
