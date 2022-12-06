import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './modules/Files/files.module';
import { ormconfig } from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), FilesModule],
})
export class AppModule {}
