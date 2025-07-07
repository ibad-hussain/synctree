import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";


export async function POST(request) {

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('synctree');
    const collection = db.collection('links');

    // Check if Handle exists or not
    const doc = await collection.findOne({ handle: body.handle });
    if (doc) {
        await collection.updateOne(
            { handle: body.handle },
            { $set: { avatar: body.avatar } }
        );
        return NextResponse.json({ success: true, error: false, message: 'Avatar selected successfully. Now click NEXT button' });
    } else {
        return NextResponse.json({ success: false, error: true, message: 'Handle already exists. Try another' });
    }

}
