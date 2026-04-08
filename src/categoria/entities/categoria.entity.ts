import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "../../produto/entities/produto.entity"
import { IsNotEmpty } from "class-validator"

@Entity({name: "tb_categoria"})

export class Categoria {

    @PrimaryGeneratedColumn()
    id!: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao!: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto!: Produto[]

}