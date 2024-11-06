import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(
        process.env.MONGO_URL,
         { dbName: "Event_Management_Users"})
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(() => {
        console.log("Some error occured while connecting to Database", err);
    });
};