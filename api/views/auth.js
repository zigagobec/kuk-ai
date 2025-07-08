import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { useReducer } from 'react';

export async function register(req, res) {
    const { email, name, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
        data: {email, name, password: hashedPassword}
    });

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
    )

    res.json({
        token, user
    })
}