import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./service/produto.service";
import { ProdutosController } from "./controllers/produto.controller";
import { CategoriaModule } from "../categoria/categoria.module";

@Module({
    imports:[TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService],
    controllers: [ProdutosController],
    exports: [TypeOrmModule],
})

export class ProdutoModule {}