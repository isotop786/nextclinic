import { connect } from "@/config/dbConfig";
import Doctor from "@/models/doctorModel";
import { NextResponse} from "next/server"

connect();

export async function GET() {
    try {
        const doctors = await Doctor.find({}).sort({ _id: -1 })
        
        return NextResponse.json({
            doctors: doctors
        })
    } catch (error) {
        console.log(error)
    }
}