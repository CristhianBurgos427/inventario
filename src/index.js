import app from "./app.js";

const main = () => {
    app.set("port", process.env.PORT || 5000); // Configura el puerto
    app.listen(app.get("port"), () => {
        console.log(`The company's super web server is running on port ${app.get("port")}`);
    });
};

main();



