import Airport from "../src/Airport.js";
import Plane from "../src/Plane.js";


describe('Airport Tests', () => {

    let plane, airport, actual, expected;

    // Set Up before every test
    beforeEach(() => {
        plane = new Plane();
        airport = new Airport();

    });

    // Clean Up after every test
    afterEach(() => {
        plane = undefined;
        airport = undefined;
        actual = undefined;
        expected = undefined;
    });


    //=====================TEST1====================\\

    it('does isAirportFull return a boolean when airport is full', () => {

        // Arrange
        expected = 'boolean';

        // Act
        airport.changeAirportSize(3);
        airport.addPlane(1);
        airport.addPlane(2);
        airport.addPlane(3);
        actual = typeof airport.isAirportFull();

        // Assert
        expect(actual).toBe(expected);

    });

    //=====================TEST2====================\\

    it('TEST 2:  does isAirportFull return true when airport is full', () => {

        // Arrange
        expected = true

        // Act
        airport.changeAirportSize(3);
        airport.addPlane(1);
        airport.addPlane(2);
        airport.addPlane(3);
        actual = airport.isAirportFull();

        // Assert
        expect(actual).toBe(expected);

    });



    //=====================TEST3====================\\

    it('if airport is full planes are unable to land', () => {

        // Arrange
        expected = 1;

        // Act
        airport.addPlane(1);
        actual = airport.airportPlanes.length;

        // Assert
        expect(actual).toBe(expected);

    });


    //=====================TEST4====================\\

    it('if airport is not full planes are able to land', () => {

        // Arrange
        expected = 3;
        airport.changeAirportSize(10);

        // Act
        airport.addPlane(1);
        airport.addPlane(2);
        airport.addPlane(3);
        actual = airport.airportPlanes.length;

        // Assert
        expect(actual).toBe(expected);

    });
});

