import { connect } from "@/config/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
    try {
        
        const reqBody = await request.json();
        const { email, password } = reqBody;

        /// Check if the user exists
        const user = await User.findOne({ email })
        
        if (!user) {
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        // Checking password
        const vaildPassword = await bcryptjs.compare(password, user.password);

        if (!vaildPassword) {
            return NextResponse.json({error:"Invalid password"},{status:400})
        }

        // Creating a token with 1 day validity
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        // returning JSON response with jwt for mobile app
        const response = NextResponse.json({
            message: "Log in successful",
            token: token,
            success: true,
        })

        // setting HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response;

    } catch (error) {
        console.log("Login error: "+error)
    }
}