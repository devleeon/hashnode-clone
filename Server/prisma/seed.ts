import faker from "faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 20; i++) {
    let tagName = faker.lorem.word();
    await prisma.tags.upsert({
      where: { name: tagName },
      update: {
        followCount: Math.floor(Math.random() * 100000),
        createdAt: faker.date.past(),
        postsThisweek: Math.floor(Math.random() * 300),
        explain: faker.lorem.sentences(),
      },
      create: {
        name: tagName,
        followCount: Math.floor(Math.random() * 100000),
        createdAt: faker.date.past(),
        postsThisweek: Math.floor(Math.random() * 300),
        explain: faker.lorem.sentences(),
      },
    });
    let userEmail = faker.internet.email();
    let user = await prisma.user.upsert({
      where: {
        email: userEmail,
      },
      update: {
        username: faker.name.findName(),
        password: faker.random.word(),
        avatar: faker.image.avatar(),
      },
      create: {
        email: userEmail,
        username: faker.name.findName(),
        password: faker.random.word(),
        avatar: faker.image.avatar(),
      },
    });
    for (let j = 0; j < Math.ceil(Math.random() * 5); j++) {
      await prisma.post.create({
        data: {
          text: faker.lorem.paragraphs(),
          createdAt: faker.date.recent(180),
          title: faker.lorem.sentences(),
          authorId: user.id,
          photo: faker.image.image(),
          likesCount: Math.floor(Math.random() * 1000),
          published: true,
          content: faker.internet.domainName(),
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
