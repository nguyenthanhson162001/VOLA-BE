import { injectable, inject } from 'inversify';
import EventDispatcher from './EventDispatcher';
import ErrorCollector from '../../presentation/utilities/ErrorCollector';

@injectable()
export default abstract class RequestHandler<Request, Response> extends EventDispatcher {
	@inject('ErrorCollector') protected _ec!: ErrorCollector;

	protected async validate(request: Request): Promise<any> { }

	public abstract handle(request: Request): Promise<Response | null>;
}
