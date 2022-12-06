import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'files' })
export class FilesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ generated: 'uuid' })
  secret: string;

  @Column({ type: 'bytea' })
  pdf_data: Buffer;
}
