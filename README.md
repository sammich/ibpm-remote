# ibpm-remote

A little package you can use in conjunction with a 'conduit' Process Application (`./resources/*.twx`) to make testing
BPM services a little easier (since they're not exposed).

## How it Works

Install the provided `.twx` (twix?) file to your Process Center or SIT environment.

Copy the provided template below for common environment variables and configure in your project.

## Warnings

The provided Process Application is by definition a security hole - *do not install this any higher than necessary*
than is needed to do you testing.

## Envs

```

# required
BPM_SERVER_HOST=
BPM_SERVER_APP_PORT=

# optional
BPM_SERVER_PROTOCOL=
BPM_REST_CONTEXT=
```
