import EntityID from '@domain/value-objects/EntityID';

export interface IEntity {
	id?: EntityID ;
	props: any;
}

export default abstract class Entity<T> implements IEntity {
	protected readonly _id?: EntityID;
	protected _props: T;

	protected constructor(props: T, id?: EntityID) {
		this._id = id ;
		this._props = props;
	}

	get id() {
		return this._id ;
	}

	get props() {
		return this._props;
	}
}
