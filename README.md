Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

---airport.spec.js---

//| Class   || Objects         | Properties                   |     Messages           | Outputs  |
//| ------- || --------------- | --------------------------   | -----------------      |  ------- |
//| airport || plane@id        | airportPlanes @array[@plane] | addPlane(@plane)       | @Void    |

// TEST 1: Can addPlane add a plane to airportPlanes
// TEST 2: addPlane add's a plane with the id: 'Plane - 1'
// TEST 3: addPlane does not add a plane with an undefined id
// TEST 4: multiple planes can be added to airportPlanes





---airportCapacity.spec.js---

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

//| Class   || Objects           | Properties                   |     Messages                       | Outputs  |
//| ------- || ---------------   | --------------------------   | -----------------                  |  ------- |
//| Airport ||  airport          | airportCapacity @integer     | changeAirportSize(integer)         | @Void    |

// TEST 1: airport capacity has a capacity
// TEST 2: changeAirportSize increases airportCapacity to 50
// TEST 3: changeAirportSize decreases airportCapacity to 5
// TEST 4: changeAirportSize can not change airportCapacity to less than 0
// TEST 5: changeAirportSize can not be undefined





---isAirportFull.spec.js---

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

//| Class   || Objects           | Properties                   |     Messages                       | Outputs  |
//| ------- || ---------------   | --------------------------   | -----------------                  |  ------- |
//| Airport ||  airport          | airportCapacity @integer     | isAirportFull(boolean)             | @Void    |
//|         ||                   |                              | stopLanding                        | @void    |

// TEST 1: does isAirportFull return a boolean when airport is full
// TEST 2: does isAirportFull return true when airport is full
// TEST 3: if airport is full planes are unable to land
// TEST 4: if airport is not full planes are able to land





---takeOff.spec.js---

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

//| Class   || Objects           | Properties                   |     Messages                       | Outputs  |
//| ------- || ---------------   | --------------------------   | -----------------                  |  ------- |
//| airport || plane@id          | airportPlanes @array[@plane] |  takeOff(@plane)                   | @Void    |
//| takeOff || plane@id          | planeTakeOff@plane           |                                    | @Void    |

// TEST 1: can a plane be selected from the list of planes at the airport
// TEST 2: does a plane remove one plane from the list after takeoff
// TEST 3: after takeoff does the plane appear in the airport list





---takeOffLand.spec.js---

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

//| Class   || Objects           | Properties                   |     Messages                       | Outputs                               |
//| ------- || ---------------   | --------------------------   | -----------------                  |  -------                              |
//|         || takeOff           | isAtAirport@boolean          |  canNotTakeOff                     | "This plane is not at the airport."   |
//|         || addPlane          | isAtAirport@boolean          |  canNotLand                        | "This Plane is already here.          |

// TEST 1: if plane is not at the airport and asked to take off output will trigger
// TEST 2: if plane is at airport and asked to take off output won\'t trigger
// TEST 3: if plane is at the airport and asked to land output will trigger
```

#### Extended Acceptance Criteria
```

---isStormy.spec.js---

As an air traffic controller
To ensure safety
I want to prevent takeoff and landing when weather is stormy

//| Class   || Objects           | Properties                   |     Messages                       | Outputs  |
//| ------- || ---------------   | --------------------------   | -----------------                  |  ------- |
//| Airport ||  airport          | takeOff@plane                | isStormy@boolean                   | @Void    |
//|         ||                   | isStormy@boolean             |                                    | @Void    |
//|         ||                   | randomNumber@int             |                                    | @Void    |

// TEST 1: does isStormy call when requested
// TEST 2: when isStormy is called does it return a boolean
// TEST 3: a plane does not takeOff if isStormy is true
// TEST 4: a plane does not land if isStormy is true



---isAtAirport.spec.js---

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport


//| Class   || Objects             | Properties                   |     Messages                       | Outputs  |
//| ------- || ---------------     | --------------------------   | -----------------                  |  ------- |
//| takeOff || plane(airportPlanes)| isAtAirport@plane            | isAtAirport@plane                  | @void

// TEST 1: does isAtAirport call when requested
// TEST 2: when called does isAtAirport return a boolean
// TEST 3: when isAtAirport returns true can take off
// TEST 4: when isAtAirport returns false a plane can land



//====//====//====//INSTALLATION NOTES\\====\\====\\====\\

Required:
Jasmine
node.js










Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
