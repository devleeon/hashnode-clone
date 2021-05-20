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
        image: faker.image.image(),
      },
      create: {
        name: tagName,
        followCount: Math.floor(Math.random() * 100000),
        createdAt: faker.date.past(),
        postsThisweek: Math.floor(Math.random() * 300),
        explain: faker.lorem.sentences(),
        image: faker.image.image(),
      },
    });
  }
  for (let i = 0; i < 60; i++) {
    let userEmail = faker.internet.email();
    let userName = faker.name.findName();
    let user = await prisma.user.upsert({
      where: {
        email: userEmail,
      },
      update: {
        username: userName,
        password: faker.random.word(),
        avatar: faker.image.avatar(),
        cover: faker.image.city(),
        blog: {
          create: {
            name: `${userName}'s blog`,
            address: faker.internet.domainName(),
            monthlyScore: Math.ceil(Math.random() * 4000),
            weeklyScore: Math.ceil(Math.random() * 1000),
          },
        },
      },
      create: {
        email: userEmail,
        username: userName,
        password: faker.random.word(),
        avatar: faker.image.avatar(),
        cover: faker.image.city(),
        blog: {
          create: {
            name: `${userName}'s blog`,
            address: faker.internet.domainName(),
            monthlyScore: Math.ceil(Math.random() * 4000),
            weeklyScore: Math.ceil(Math.random() * 1000),
          },
        },
      },
    });

    for (let j = 0; j < Math.ceil(Math.random() * 10); j++) {
      await prisma.post.create({
        data: {
          text: faker.lorem.paragraphs(),
          createdAt: faker.date.recent(180),
          title: faker.lorem.words(),
          photo: faker.image.image(),
          likesCount: Math.floor(Math.random() * 1000),
          published: true,
          content: faker.internet.domainName(),
          authorId: user.id,
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
