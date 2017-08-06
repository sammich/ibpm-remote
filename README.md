# ibpm-remote

A little package you can use in conjunction with with the 'Remote' Process Application (`./resources/Remote - #.twx`)
to make testing BPM services a far less cumbersome.


## Warning

*Do not deploy the provided Process Application any higher than is needed to do your testing*.

This exposes some APIs which are impossibly dangerous in the wrong hands.


## What you need

- Node.js 8
- An IBM BPM environment (I'm

This package was built and tested against `8.5.7.201706` but there is no reason why it shouldn't work for versions
going as far back as `8.0`.


## Background

This package uses the 'Remote' Process app's exposed services to invoke scripts and services within the BPM environment.

Normally, artefacts such as Integration and General System Services can only be called within their respective apps or
by a dependent app (if it is a toolkit). However, that can mean:

- you must write and run your tests within BPM, and/or
- you must ship your test code with your app *into Production*.

Neither of the above is desirable, least of which is that the authoring tool and environment are not conducive to
developer productivity (or sanity).

By externalising the writing of the tests, we can free ourselves to use any framework we wish to write our tests.


## Setup

1. Install the provided `.twx` (twix?) file to your Process Center.
1. Configure the environment variables (see below for list)
1. Create a new script in your package and copy the sample script and run it to confirm your settings are correct.

That's it, really.

More examples to come. Meanwhile, you can look at the integration tests (ones ending in `.intr.js`) for some additional
examples.

I'd recommend you use a test harness (e.g.: `jest`) to run your test suites.


## API

There are only two endpoints, since they're all you need.

### Executor

Uses the JS API's `executeService`-like methods to execute any arbitrary service on the system.

It accepts a single object argument:

| Property | Required? | Example | Description |
|----------|-------------|------|----|
| name | yes           | Add Two Numbers | The exact name of the target service |
| appAcronym | No (but recommended)      | RMTE | The short name of the process application or toolkit |
| snapshotId | No      | 1080ded6-d153-4654-947c-2d16fce170ed | The snapshot ID |
| snapshotAcronym | No | 123 | The snapshot acronym (the text in parenthesis to the right of the snapshot name) |
| snapshotName | No    | 1.2.3 | The snapshot name |

The following rules apply when selecting a service to be called:

1. If `name` is provided without `appAcronym`, then an unbounded `executeServiceByName` is used. It's not likely
   to find your target service unless it's a dependency of RMTE.
   Without providing `appAcronym`, none of the `snapshot-` properties are used.
1. If `name` and `appAcronym` are only defined, then the service is looked for in the `tip` snapshot
1. if the above and one of the three snapshot specifiers are defined (only one of the three are necessary), then the
   version of that service in that snapshot will be called, provided it exists.

#### Limitations

- You cannot use this with Complex Objects containing lists of Integers/Decimals, Booleans or Dates. If you have these
  types of objects, you will need to use the `Executor` API below and build the object in script and invoke the service.
- Complex object inputs follow a special input format - see `./api/remote/executor.intr.js` for a full example.
  The Remote service requires a hint about the type of the complex object that is to be created.

### Evaluator

This is `eval`. Use this power wisely.

When you need to perform more complex operations such as invoking the JS API without needing to wrap it up in a
system service.

It also works around some issues with the Executor API and passing in complex objects.

See `./api/remote/evaluator.intr.js` for an example.


## Sample Script

    const executor = require('ibpm-remote').api.remote.executor;

    (async function check() {

        // run a BPM service named 'Add Two Numbers' in the Process app 'RMTE' and pass in the two named inputs
        // a = 1, and b = 2
        const result = await executor({
            name: 'Add Two Numbers',
            appAcronym: 'RMTE'
        }, {
            a: 1,
            b: 2
        })

        // log the results
        console.log('1 + 2 = ' + result.total);
    })()


## Environment Variables

This package uses `dotenv` to read environment variables from a `.env` file in your working directory.

```
# default: localhost
BPM_SERVER_HOST=

# default: 80
BPM_SERVER_APP_PORT=

# default: https
BPM_SERVER_PROTOCOL=

# default /rest/bpm/wle/v1
BPM_REST_CONTEXT=
```

## TODOs

- As you may have noticed, there are other undocumented folders inside `./api`. These are the beginnings of writing
  wrappers for BPM APIs. The aim is to write wrappers as I use them/have time.
- (stretch) To write semi-stateful classes for Process/Task to make it far easier to work with the APIs.
  For example:

        const p1 = new Process('My Process')
        await p1.start({ input1: 'Sam' })
        await pause(1000)
        expect(p1.tasks.length).toBe(1)
        expect(p1.tasks[0].name).toBe('Say Hi')
        p1.tasks[0].complete({ signUpForNewsletter: true })
        await pause(1000)
        expect(p1.openTasks().length).toBe(1)
        expect(p1.activeTimers().length).toBe(1)
        p1.fireTimer(p1.activeTimers()[0])
        expect(p1.openTasks()[0].name).toBe('Signup Expired')

  Names of methods are just illustrative for now.


## Contributing

By all means.

Bugs, and filling out the commonly used API wrappers for process and tasks.

