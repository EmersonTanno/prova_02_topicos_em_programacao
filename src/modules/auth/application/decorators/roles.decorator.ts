import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/shared/application/enum/roles.enum';

export const ROLES_KEY = 'roles';
export const Role = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);