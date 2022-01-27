import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";



async function start() {
  const PORT = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
  .setTitle('')
  .setDescription('documentation REST API')
  .setVersion('1.0.0')
  .addTag('NEST_SERVER')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swager',app,document)

  await app.listen(PORT, () => console.log(`server started on port = ${PORT}`))
}

start()