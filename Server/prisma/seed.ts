import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const jackie = await prisma.user.create({
    data: {
      email: `jackie@prisma.io`,
      username: "JackieChang",
      firstname: "Jackie",
      lastname: "Chan",
      password: "6tyX9yc0et9bSxvWjyHuVYOAj2c31bXtmNO2uJlBEN4",
      posts: {
        create: {
          title: "new jackie's title",
          content: "https://naver.com",
          published: false,
        },
      },
    },
  });

  const bruce = await prisma.user.create({
    data: {
      email: `bruce@prisma.io`,
      username: "bruceLee",
      firstname: "bruce",
      lastname: "Lee",
      password: "6tyX9yc0et9bSxvWjyHuVYOAj2c31bXtmNO2uJlBEN4",
      posts: {
        create: [
          {
            title: "new bruce's title",
            content: "https://naver.com",
            published: false,
          },
          {
            title: "new bruce's title2",
            content: "https://naver.com",
            published: true,
          },
          {
            title: "new bruce's title3",
            content: "https://naver.com",
            published: true,
          },
          {
            title: "new bruce's title4",
            content: "https://naver.com",
            published: true,
          },
          {
            title: "new bruce's title5",
            content: "https://naver.com",
            published: true,
          },
        ],
      },
    },
  });
  console.log({ bruce, jackie });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
