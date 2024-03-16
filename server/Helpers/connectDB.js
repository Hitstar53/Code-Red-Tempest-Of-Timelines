import mongoose from 'mongoose';

const connectDB = async (app) => {
    await mongoose.connect(process.env.MONGO_URI).then((res) => {
        console.log("Database Connected Successfully to:",res.connection.host);
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port:",process.env.PORT);
        });
    }).catch((err) => console.log("Error Connecting to db:",err));
};

export default connectDB;