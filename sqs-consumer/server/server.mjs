import app from '../app.mjs';

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});