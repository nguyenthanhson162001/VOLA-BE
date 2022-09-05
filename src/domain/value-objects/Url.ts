import ValueObject from './ValueObject';

export interface IUrlProps {
	value: string;
}

export default class Url extends ValueObject<IUrlProps> {
	public static readonly PATTERN = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

	public static create(props: IUrlProps) {
		const { value } = props;

		if (value === null || value === undefined || typeof value !== 'string' || value.trim() === '' || !Url.PATTERN.test(value)) {
			throw new Error('Url is invalid');
		}

		return new Url(props);
	}

	get value() {
		return this._props.value;
	}
}
