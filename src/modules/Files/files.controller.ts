import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { FileInfoDto } from './files.dto';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  async getFiles(): Promise<FileInfoDto[]> {
    return await this.filesService.getAllFiles();
  }

  @Get('/:secret')
  async getFile(@Param('secret') secret: string) {
    const res = await this.filesService.getFile(secret);

    return new StreamableFile(res.pdf_data, {
      type: 'application/pdf',
      disposition: `filename=${encodeURIComponent(res.title)}.pdf`,
    });
  }
}
