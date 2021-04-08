import {
    Table,
    Column,
    Model,
    Default,
    BelongsTo, ForeignKey
} from 'sequelize-typescript'
import User from "./User.model";

@Table({
    timestamps: true,
    createdAt: true,
    updatedAt: true
})
export default class Pet extends Model {

    @Column
    name!: string

    @Default("Dog")
    @Column
    type!: string

    @ForeignKey(() => User)
    @Column
    ownerId!: number

    @BelongsTo(() => User)
    owner!: User

}
