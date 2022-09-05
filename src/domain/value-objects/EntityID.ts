import ValueObject from './ValueObject';

export interface IEntityIDProps {
	value: string;
}

export default class EntityID extends ValueObject<IEntityIDProps> {
	public static create(props: IEntityIDProps) {
		const { value } = props;
		if (value === null || value === undefined || typeof value !== 'string') {
			throw new Error('id is invalid');
		}

		return new EntityID(props);
	}

	get value() {
		return this._props.value;
	}
	equalTo(id: EntityID) {
		return this.value === id.value;
	}
}
