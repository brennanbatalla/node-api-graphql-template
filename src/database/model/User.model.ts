import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    Unique,
    AutoIncrement,
    HasMany
} from 'sequelize-typescript'
import Pet from "./Pet.model";

@Table({
    timestamps: true,
    createdAt: true,
    updatedAt: true
})
export default class User extends Model {

    @Column
    firstName!: string

    @Column
    lastName!: string

    @HasMany(() => Pet)
    pets!: Pet[]

}
