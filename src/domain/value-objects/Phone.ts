import ValueObject from './ValueObject';

export interface IText {
	value: string;
}

export default class Text extends ValueObject<IText> {
	public static create(props: IText, require?:boolean) {
		const { value } = props;

		if ((value === null || value === undefined || typeof value !== 'string' || value.trim() === '') && require) {
				throw new Error('Text is invalid');
		}
		return new Text(props);
	}

	get value() {
		return this._props.value;
	}

	equalTo(name: Text) {
		return this._props.value == name._props.value;
	}
}
