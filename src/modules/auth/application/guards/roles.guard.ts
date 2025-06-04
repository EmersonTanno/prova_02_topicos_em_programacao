import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/shared/application/enum/roles.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserService } from 'src/modules/user/application/services/user.service';
import { UserRepository } from 'src/modules/user/infrastructure/repositories/user.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector
    ) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role == role);
    }
}