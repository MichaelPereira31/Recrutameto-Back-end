import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "../../../cliente/typeorm/entities/Client";
import Ponto from "../../../ponto/typeorm/entities/Ponto";



@Entity()
export default class Address{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    logradouro:string;

    @Column()
    bairro:string;

    @Column()
    numero:number

    @CreateDateColumn()
    data_criacao: Date;
  
    @UpdateDateColumn()
    data_atualizacao: Date | null;

    @OneToMany(() => Ponto, ponto =>ponto.endereco_id)
    pontos:Ponto;


}