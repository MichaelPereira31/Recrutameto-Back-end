import { CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "../../../cliente/typeorm/entities/Client";
import Contratos from "../../../contratos/typeorm/entities/Contratos";
import Address from "../../../endereco/typeorm/entities/Address";

@Entity()
export default class Ponto {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_atualizacao: Date | null;

    @ManyToOne(type => Client, pontos => Ponto)
    cliente_id: Client[];

    @ManyToOne(type => Address, pontos => Ponto)
    endereco_id: Address[];

    @OneToMany(type => Contratos, contratos => contratos.ponto_id)
    contratos: Contratos;

}