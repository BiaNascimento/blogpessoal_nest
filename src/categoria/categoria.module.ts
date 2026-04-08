import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaController } from "./controllers/categoria.controllers";
import { CategoriaService } from "./services/categoria.service";
import { ProdutoModule } from "../produto/produto.module";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [CategoriaService]
})

export class CategoriaModule {}