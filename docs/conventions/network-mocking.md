# Network Mocking

[Mirage](http://www.ember-cli-mirage.com/docs) is all about simulating your API server.
You define route handlers to respond to your Ember app's AJAX requests.

## Usage

Here's a simple example of a handler:

```
// mirage/config.js
export default function() {
  this.namespace = 'api';

  this.get('/authors', () => {
    return {
      authors: [
        {id: 1, name: 'Zelda'},
        {id: 2, name: 'Link'},
        {id: 3, name: 'Epona'},
      ]
    };
  });
}
```

Now whenever your Ember app makes a GET request to /api/authors, Mirage will respond with this data.
