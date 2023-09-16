# This project has got various features. Few of them are discussed below:

- ## Showing added courses

_If the "Select" button of any course is clicked, the name of the course will be instantly shown_

- ## No Duplication

_Once a course is selected, it can not be selected again_

- ## Warning if credit limit exceeds
  _If any user exceeds the credit limit which is 20 at most, an alert will be shown and he won't be able to add more courses_

# State management of this project:

Multiple states have been used to manage this whole project. Some of them are for cart items, for credit hours, price and also for all the cards. Each states are being described below how they have been managed:

1.  State to fetch data: A state has been used to fetch the data from api and to store the data. An useEffect hook has played a vital role in this scenario. 'cards' parameter is used to store tha initial value and 'setCards' parameter is used to update the value of 'cards'.

2.  State to manage cart items: A state to manage the cart items have been used in the Home component. It is used to keep track of the courses that have been selected. 'cartItems' is the first parameter whose initial value is an empty array. 'setCartItems' parameter is used to update the value of 'cartItems'. Then 'cartItems' is sent to Cart component and from Cart to CartItems component via prop drilling.

3.  States to manage remaining credit, acquired credit and total price: Three states have been used to manage these three operations. For remaining credit, 'remaining' is the first parameter whose initial value is 20 because at the very beginning everyone can acquire 20 credits. 'setRemaining' is used to update the value of 'remaining'. For acquired credit, 'credit' is the first parameter whose initial value is 0 and 'setRemaining' is the second parameter which is used to update the value of remaining. Finally for price calculation, 'price' is the first parameter whose initial value is 0 and 'setPrice' parameter is used to update the 'price' over selecting each course. All three components have been sent to Cart items via props.

This is all about the state management of this project.
