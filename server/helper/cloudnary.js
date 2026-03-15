import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

// Cloudinary configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
});

// Multer setup
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Image upload utility
export async function imageUploadUtil(file) {
    if (!process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET) {
        throw new Error('Cloudinary configuration is missing in .env file');
    }

    const result = await cloudinary.uploader.upload(file, { resource_type: 'auto' });
    return result;
}