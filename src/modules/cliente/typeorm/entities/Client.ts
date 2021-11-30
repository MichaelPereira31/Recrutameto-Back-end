import { Column, CreateDateColumn, Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Ponto from "../../../ponto/typeorm/entities/Ponto";

export enum UserType {
  JURIDICO = "juridico",
  FISICO = "fisico",
  ESPECIAL = "especial"
}



@Entity('Client')
export class Client{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_atualizacao: Date | null;

  @Column()
  nome: string;

  @Column({nullable: true})
  data_remocao: Date | null;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.FISICO
  })
  tipo: UserType

  @OneToMany(type => Ponto, cliente_id => Client)
  pontos:Ponto;

}
