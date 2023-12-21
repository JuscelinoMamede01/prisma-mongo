import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   //   CREATE AN USER
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Juscelino Mamede",
  //       email: "jk@gmail.com",
  //     },
  //   });

  // //   GET ALL USERS
  //   const users = await prisma.user.findMany({
  //     include: { article: true }, //mostra os article com seu user user
  //   });

  // //   CREATE an ARTICLE and associate with user
  //   const articles = await prisma.article.create({
  //     data: {
  //       title: "Primeiro artigo de Thais",
  //       body: "Jesus o filho do Deus vivo",
  //       author: {
  //         connect: {
  //           userId: "658440aa55429f40a3d2ba4b",
  //         },
  //       },
  //     },
  //   });
  // //   GET ALL ARTICLES
  //   const allArticles = await prisma.article.findMany();
  // //   CREATE  ARTICLE AND USER and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "José Belo",
  //       email: "josé@gmail.com",
  //       article: {
  //         create: {
  //           title: "Joses first article",
  //           body: "This is his 1 article",
  //         },
  //       },
  //     },
  //   });
  console.log(allArticles);

  // //   CREATE ANOTHER ARTICLE
  //     const article = await prisma.article.create({
  //       data: {
  //         title: "Sample article",
  //         body: "this is a sample article",
  //         author: {
  //           connect: {
  //             userId: "6583898cd1580ae1bfdd3a95",
  //           },
  //         },
  //       },
  //     });
  //     console.log(allArticles);
  // //   LOOP OVER jUSCELINOS ARTICLES
  //     users.forEach((user) => {
  //       console.log("====================================");

  //       console.log(`User: ${user.name}, Email: ${user.email}`);
  //       console.log(`Articles:`);
  //       user.article.forEach((article) => {
  //         console.log(`Title: ${article.title}, Body: ${article.body}`);
  //       });
  //       console.log("====================================");
  //     });

  // //   UPDATE METHOD
  //     const updatedUser = await prisma.user.update({
  //       where: { userId: "6583898cd1580ae1bfdd3a95" },
  //       data: { name: "Jose Maria" },
  //     });

  // //   DELETE ARTICLE
  //     const articleDeleted = await prisma.article.delete({
  //       where: { articleId: "65838c4fa78d3a29e6b177e4" },
  //     });
  //     console.log(articleDeleted);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
