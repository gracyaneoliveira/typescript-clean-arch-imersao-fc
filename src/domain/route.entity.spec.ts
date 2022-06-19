import { LatLng, Route, RouteProps } from "./route.entity"

describe('Route tests', () => {
    test('constructor', () => {
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 0, lng: 1},
        }

        let route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points:[]
        })

        routeProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 0, lng: 1},
            points:[
                {lat: 10, lng: 11}
            ]
        }

        route = new Route(routeProps);
        expect(route.id).toBeDefined()
        expect(route.props).toStrictEqual({
            ...routeProps, points:[{lat: 10, lng: 11}]
        })
    });

    test('update title method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 0, lng: 1},
        }

        const route = new Route(routeProps);
        route.updateTitle('title updated');
        expect(route.title).toBe('title updated');
    });

    test('updatePosition method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 0, lng: 1},
        }

        const route = new Route(routeProps);
        const startPosition = { lat: 10, lng: 20}
        const endPosition = { lat: 40, lng: 30}
        route.updatePosition(startPosition, endPosition);
        expect(route.startPosition).toBe(startPosition);
        expect(route.endPosition).toBe(endPosition);
    });

    test('updatePoints method', () => {
        const routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {lat: 0, lng: 1},
            endPosition: {lat: 0, lng: 1},
        }

        const route = new Route(routeProps);
        const points: LatLng[] = [{ lat: 10, lng: 20}]
        route.updatePoints(points);

        expect(route.points).toHaveLength(1);
        expect(route.points).toStrictEqual(points);
    });
});