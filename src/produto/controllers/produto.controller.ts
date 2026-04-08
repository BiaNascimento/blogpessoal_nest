import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { Produto } from "../entities/produto.entity";

@Controller("/produtos")
export class ProdutosController{
    constructor(private readonly produtoService: ProdutoService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll()
    }

    @Get('/:id')
    findById(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findAllByNome(@Param('nome') nome: string): Promise<Produto[]>{
        return this.produtoService.findAllByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto>{
        return this.produtoService.update(produto)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.produtoService.delete(id)
    }
    
}