import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

setInterval(async () => {
  await prisma.session.deleteMany({
    where: {
      expires_at: { lt: new Date() },
    }
  });
}, 1000 * 60 * 60 * 24)

export default prisma;
