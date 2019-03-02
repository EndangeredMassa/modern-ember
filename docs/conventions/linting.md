# Linting

Linting is enforced at the CI level. You can run the linting rules locally if you like, but the intent for development is to run the functionality test suite often and rely on your IDE to show you linting issues.

When running tests, you can disable the linting tests by adding a `nolint` query param: http://localhost:4200/tests?nolint
