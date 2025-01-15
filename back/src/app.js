import { enviroment } from "./config/dotenv.js";
import { app } from "./server.js";

app.listen(enviroment.PORT, () => {

    console.log(`App running on: ${enviroment.PORT}`)

});