import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { GithubService } from './github.service';

@ApiTags('github')
@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('users/:username')
  @ApiOperation({ summary: 'Obtiene el perfil público de un usuario de GitHub' })
  @ApiParam({ name: 'username', example: 'XxDextroxX' })
  async getUser(@Param('username') username: string) {
    const data = await this.githubService.getUser(username);
    return { data };
  }

  @Get('users/:username/repos')
  @ApiOperation({ summary: 'Lista los repositorios públicos de un usuario' })
  @ApiParam({ name: 'username', example: 'XxDextroxX' })
  async getUserRepos(@Param('username') username: string) {
    const data = await this.githubService.getUserRepos(username);
    return { data };
  }

  @Get('users/:username/summary')
  @ApiOperation({
    summary: 'Resumen del perfil: nombre, bio, repos públicos y seguidores',
  })
  @ApiParam({ name: 'username', example: 'XxDextroxX' })
  async getUserSummary(@Param('username') username: string) {
    const data = await this.githubService.getUserSummary(username);
    return { data };
  }

  @Get('repos/:username/:repo/commits')
  @ApiOperation({ summary: 'Lista los commits de un repositorio' })
  @ApiParam({ name: 'username', example: 'XxDextroxX' })
  @ApiParam({ name: 'repo', example: 'bomber-app' })
  async getRepoCommits(
    @Param('username') username: string,
    @Param('repo') repo: string,
  ) {
    const data = await this.githubService.getRepoCommits(username, repo);
    return { data };
  }

  @Get('repos/:username/:repo')
  @ApiOperation({ summary: 'Obtiene el detalle de un repositorio' })
  @ApiParam({ name: 'username', example: 'XxDextroxX' })
  @ApiParam({ name: 'repo', example: 'bomber-app' })
  async getRepo(
    @Param('username') username: string,
    @Param('repo') repo: string,
  ) {
    const data = await this.githubService.getRepo(username, repo);
    return { data };
  }
}
