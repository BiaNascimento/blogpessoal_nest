import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Tema } from "../../tema/entities/tema.entity"
import { Usuario } from "../../usuario/entities/usuario.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: 'tb_postagem'})

export class Postagem{

    @ApiProperty() 
    @PrimaryGeneratedColumn() // Cria chave primaria e auto increment
    id!: number

    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    titulo!: string

    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 10000, nullable: false})
    texto!: string
    
    @ApiProperty()
    @UpdateDateColumn()
    data!: Date

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema!: Tema
    
    @ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {onDelete: "CASCADE"})
    usuario!: Usuario
}