# About app

It's a simple front-end budget application implemented using html, css and javascript. You can see it running on [Git-pages](http://dvoitekh.github.io/#).

## Features
1. `Add` button to add items with `sum` and `puspose` fields
2. `Sum up` button to replace all existing items with one, containing total sum of all items and description stating that it's a sum up item with current date
3. `Delete` button to delete any existing item
4. In radio button group there are `Search tools`:
  * `Search by description` to find items by their description (or part of description)
  * `Search by sum absolute value` to find items by absolute value of their sum (find all items with absolute value bigger than entered)  
5. Results of search are depicted in the separate table
6. Validation for all kind of input: empty field, non-numeric value in the `sum` field, negative absolute sum value etc.

## How to run this app
If you want to run this app on your computer follow these steps:
- download this repository
-	open `index.html` file in it using your browser

Now you will see the app web page.

## How to use this app
- Add items by filling `sum` and `puspose` fields and clicking on `Add` button
- Sum up all existing items using `Sum up` button (warning: this action removes all items and produces one with aggregate sum and current date as description)
- Delete items using `Delete` button
- Search amoung created items upon two different criteria by filling an appropriate search field (absolute sum value or description).
