# Development

### Link to Deployed Website
https://drowsyshiba824.github.io/development/


### Goal and Value of the Application
This application is a website representing a cafe, Shiba Cafe. This small cafe often has daily specials, seasonal items, as well as regular items that quickly run out! Because of that, customers can only grab one of each item to make sure the supply lasts for more customers. 

The goal of this website is for users to explore the menu and add what items they want to the cart. They can see specific types of items like sandwiches, desserts, or drinks, and even filter by what type of menu item they are (regular, seasonal, daily) to make sure they get the specials while they last. The cart will display the items added as well as the total price. They can also sort by popularity (high to low), price (low to high), and calories (low to high). 

The value to users is a site which allows them to enjoy this cafe's food and everchanging menu. With the filtering, they can make sure to never miss out on limited items, and with sort, they can make sure what they're getting is good and fits their requirements!

### Usability Principles Considered
This page is entirely contained in a single scroll page. The menu items are always displayed on the right while the filtering and cart are displayed on the left. The site is designed responsively so that users on most average screen sizes can still use it. 

The sidebar for sorting remains on the top left to make sure the sorting and filtering is easy to access. This prevents users from having to scroll when they can instead filter and get a smaller amount of results to look through. The filters also begin as checked to provide a visual indicator for what is being shown to users. The sorting dropdown also displays what sort it is set on, so users know what kind of sorting is happening.


To indicate what users have added to their cart, the buttons beneath each item change color and text to indicate whether its been added, and a cart list also exists below the filters, indicating how many items and which items are within the cart, at what total price so that users don't necessarily need to scroll down to see what they have added to their cart.

I also made sure my colors passed the color contrast test, with the black on beige background passing, and the white on green and white on orange for the buttons passing at their bolded and larger font size.


### Organization of Components
Within the App component, we import Filters, Cart, and Items which are all components. 

Filters represents the section containing our sort, and two filters. 

Cart represents our aggregator which contains the list of items, how many items are in the cart, and the total price. 

Items is a component representing all our items. Within Items, is another component called Item representing a single item card, each of which consists of the image, name, price, calories, popularity ranking, type, menu, and our button that adds and removes from cart. 

### How Data is Passed Down Through Components
App
This component is where we actually made our itemsData array, most of our states and functions setting those states, and global structure of the page. Because of this, much of this data needs to be sent to other components, including Filters, Cart, and Items. To do so, we use props. When we call these function components, we simply pass in any functions, states, and date needed as props to make sure everything is linked.

Filters
For filters, we pass in our SelectFilterType function and type state, since clicking the input within the Filters component is what should trigger these functions and setting of the state. We also pass in SelectFilterMenu function and menu state for the Menu filtering, and the selectSort function which the dropdown in Filters selects what sorting option we are sorting by.


Cart
In cart, we pass in all our various cart states, including the cartPrice (the total price of items in cart), itemCount (the number of items in the cart), and cartList (an updating list of items in the cart). We also pass in the cart icon which we use to demonstrate the item count. Cart is a component to simply display the aggreageted items, so we pass in every state we wish to display as they update.

Items
In Items, we pass in itemsData, alternateInCart, and isInCart. itemsData is just the array of our items, which we need so that we can then pass it on to the Item component, and can properly display each item. However, we pass in the filtered version of the itemsData, so that only the items we wish to display will show up. alternateInCart and isInCart are functions that are responsible for setting all the states of the cart. They will be triggered when the add to cart or rremove from cart button is pressed, which is located in the Item component. Thus, we need to pass these functions in so that the component within Items will also have access.

Item
In Item, we pass in the same information passed to Items: itemsData, alternateInCart, and isInCart. In Items, we create each item card consisting of the information within itemData and also display the add to cart/remove from cart button. Here, we need itemsData (the filtered and sorted version) so that we can properly display that unique information for each item. We use alternateInCart and isInCart, so that the button can call these functions and trigger the state changes needed to update the cart back in our app component (itemData is also passed back into these functions).

### How the User Triggers State Changes
Sort
- To sort, I used a select dropdown. When it senses a change to the input (what option has been selected or clicked on), the sort state is set to whatever option has been selected. Then, we sort our item data based on that newly set state through .sort() and another sorting function.

Type & Menu Filter
- To filter, I used checkboxes. When it senses a change to the input (a click which can be selecting or unselecting), it selects the type, or menu item is is being filtered on, setting the type to whatever has been selected. I make sure to also keep track of whether or not the box is checked or not using a boolean so it doesn't filter if the checkbox is being unselected. This happens in the same way for both the Type and Menu filtering.

Add & Remove from Cart
- The cart had multiple states in order to keep track of, and update, the list of items in the cart, the item count, and the cart price. When the button on the Item card is clicked on, this triggered a function which would indicate whether or not the item was in the cart (was it being added or removed), and set 4 states. 
1. It set the item count to increment by one (if the item was being added to the cart), and decrease by one if the item was being removed.
2. It set the cart price to increment by the item added price, (if the item was being added to the cart), and decrease by the item price if the item was being removed. 
3. It updated the whether or not an item was in the cart (booleans) with another state.
4. It finally updated the cart list, by setting the state to append any new items by name.

All these state changes were again, triggered by clicking the add to cart, or remove from cart button.




