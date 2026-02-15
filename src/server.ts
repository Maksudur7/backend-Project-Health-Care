import app from "./app";


// const port = process.env.PORT
const port = 5000
const bootstrap = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to lode server', error)
    }
}

bootstrap()