import { injectable } from 'inversify';
import Event from '../../domain/events/Event';

@injectable()
export default abstract class EventDispatcher {
	public async onDispatchEvent(event: Event<any>): Promise<void> {}

	public async dispatchEvent(event: Event<any>) {
		if (this.onDispatchEvent !== null || this.onDispatchEvent instanceof Function) {
			this.onDispatchEvent(event);
		}
	}
}
