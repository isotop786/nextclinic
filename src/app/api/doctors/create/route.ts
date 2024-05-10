import { connect } from "@/config/dbConfig";
import Doctor from "@/models/doctorModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest)
{
    try {
        const reqBody = await request.json();
        
        const post = await Doctor.create(reqBody);

        const resposne = NextResponse.json({
            message: "Doctor added successfully",
            success: true,
        })

        return resposne;
        
    } catch (error) {
        console.log(error)
    }
}