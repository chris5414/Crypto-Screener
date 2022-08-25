# Crypto-Screener

Simple Crypto React app which screens a list of 30 top ranked coins with live updates.

You can also search for the coins right away, it will filter out the list as you type.

All the coins shown are clickable links, you can click them to get more detailed information on the individual coin.

# Technology Used
Using React-Router-Dom v6.2 to create Routes for the pages, Gecko API to generate the live data of the coins, and Axios to fetch the data.

Standard functions like States, useEffect and useParams are also used at various components of the app. 


# Difficulties Faced
The initial planning was crucial to determine which how to structure the components and place for the State to be in. 

It was redesigned at some point, as the inital plan looked quite messy and did not demonstrate proper Props and Lifting functions. 

The Search form is quite tricky as I want it to filter the coins depending on the content in the field box, which includes when users type and delete
the initial selection halfway. 

But once the Search was filtered, it doesn't render the fetch again to update the correct list. It was fixed but doing keydown and field empty functions.

As this was the first React App created, so it is normal for hicups to happen so the important part is to learn from the mistakes.




# Further Improvements

Certainly there are plenty of rooms for improvements, and these are the following:

1. To optimize the Search, so that it will display the correct list when users type and delete.

2. Display more coins with Pagnation to make it clean.

3. Beautify the individual coin page with CSS.

4. Includes Fav feature for users to add coins for better user experience. 

5. Back button to be included so that users do not need to use browser back & refresh functions.

6. Includes the display of chart for each individual coin.



# Credits
GA SEI-37 instructor (Desmond) and IA (ZhenHao & Nyna)
