# ISBN Data Hub
- A React app that takes a list of ISBNs and returns information about each book

## Issues
- A ghost magically fills converts an ISBN into a book object despite the fact that function hasn't been called yet. handleSubmit in App.js
- the Books array contains objects. If I print the whole array I see the objects. If I index into the array I recieve a string instead. App.js around ln 40-45