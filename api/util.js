import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function jwtMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            'error': 'Missing token'
        });
    }

    try {

    } catch (error) {
        return res.status(401).json({ 'error': 'Invalid token'})
    }
}

export { prisma };