export default abstract class Event<T> {
	protected _data: T;

	public constructor(data: T) {
		this._data = data;
	}

	public get data() {
		return this._data;
	}
}
