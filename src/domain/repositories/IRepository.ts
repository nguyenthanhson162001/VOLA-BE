
import EntityID from '@domain/value-objects/EntityID';
import { IEntity } from '../entities/Entity';


export default interface IRepository<T extends IEntity> {
	add(entity: T): Promise<T>;
	delete(entity: T): Promise<T>;
	update(entity: T): Promise<T>;
	findOneById(id: EntityID): Promise<T | null>;
	all(): Promise<Array<T>>;
}
