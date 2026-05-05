import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect(
    "mongodb://raetherzy_db_user:rayhanrayhan@ac-7g36i8m-shard-00-00.efgswdn.mongodb.net:27017,ac-7g36i8m-shard-00-01.efgswdn.mongodb.net:27017,ac-7g36i8m-shard-00-02.efgswdn.mongodb.net:27017/RealState?ssl=true&replicaSet=atlas-btca24-shard-0&authSource=admin&appName=Cluster0",
    {
        serverSelectionTimeoutMS: 10000
    }
)
        console.log("DB CONNECTED");
    } catch (err) {
        console.error("DB CONNECTION ERROR:", err.message);
        process.exit(1);
    }
}