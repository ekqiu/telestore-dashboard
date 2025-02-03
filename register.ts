import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { getUser } from '@/auth';

export async function register(formData: FormData) {
    const parsedFormData = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(Object.fromEntries(formData.entries()));
    
    if (parsedFormData.success) {
        const { email, password } = parsedFormData.data;
        const user = await getUser(email);
        if (user) {
        return 'User already exists.';
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`
        INSERT INTO users (email, password)
        VALUES (${email}, ${hashedPassword})
        `;
    }
    return null;
}