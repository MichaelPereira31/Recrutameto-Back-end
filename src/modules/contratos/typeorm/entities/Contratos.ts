import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Ponto from "../../../ponto/typeorm/entities/Ponto";


export enum UserType {
    VIGOR = "Em vigor",
    DESATIVADO_TEMPORARIO = "Desativado Temporario",
    CANCELADO = "especial"

}

@Entity()
export default class Contratos{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({
        type: "enum",
        enum: UserType,
        default: UserType.VIGOR
      })
      tipo: UserType
    
    @ManyToOne(type => Ponto, ponto => ponto.contratos)
    ponto_id:Ponto[];
}