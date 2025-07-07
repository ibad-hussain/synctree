import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";


export async function POST(request) {

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('synctree');
    const collection = db.collection('links');

    const reservedHandles = ['products', 'templates', 'marketplace', 'learn', 'pricing', 'about', 'generate'];

    // Check if Handle already exists
    const doc = await collection.findOne({ handle: body.handle });
    if (doc) {
        return NextResponse.json({ success: false, error: true, message: 'Handle already exists. Try another' });
    }

    // Check if Handle includes reserved routes
    if (reservedHandles.includes(body.handle)) {
        return NextResponse.json({ success: false, error: true, message: "You can't choose reserved keyword. Try another" });
    }

    await collection.insertOne({
        handle: body.handle
    })

    return NextResponse.json({ success: true, error: false, message: 'Handle reserved for you successfully. Now click NEXT button' });

}
