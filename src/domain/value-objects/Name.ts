import ValueObject from './ValueObject';

export interface IName {
	value: string;
}

export default class Name extends ValueObject<IName> {
	public static create(props: IName) {
		const { value } = props;

		if ((value === null || value === undefined || typeof value !== 'string' || value.trim() === '')) {
				throw new Error('Name is invalid');
		}
		return new Name(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: Name) {
		return this._props.value == name._props.value;
	}
}
