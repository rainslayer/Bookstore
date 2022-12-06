import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileInfoDto } from './files.dto';
import { FilesEntity } from './files.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FilesEntity)
    private readonly filesRepository: Repository<FilesEntity>,
  ) {}

  getAllFiles(): Promise<FileInfoDto[]> {
    return this.filesRepository.find({ select: ['title', 'secret'] });
  }

  async getFile(secret: string): Promise<FileInfoDto> {
    const res = await this.filesRepository.findOne({
      where: { secret },
    });

    if (!res) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }

    return res;
  }
}
