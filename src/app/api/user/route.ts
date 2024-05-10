import { connect } from "@/config/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";

connect()

export async function GET(req: NextRequest)
{
    try {
        const userID = await getDataFromToken(req);

        const user = await User.findOne({ _id: userID }).select("-password")
        
        return NextResponse.json({
            message: "User found",
            data: user
        })

    } catch (err: any) {
        return NextResponse.json({error: err.message},{status:400})
    }
}