import {MinLength} from 'class-validator'

export class CreateDeckDto {
    @MinLength(3)
    name: string;
}
