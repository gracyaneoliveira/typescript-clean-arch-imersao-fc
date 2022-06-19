import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./routeMemory.repository";

describe('RouteInMemoryRepository', () => {
    it('should insert a new route', async () => {
        const repository = new RouteInMemoryRepository();
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 0, lng: 1},
        }

        const route = new Route(routeProps);
        await repository.insert(route);
        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route]);
    });
});