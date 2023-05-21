Test task.
Goal: Create tweet cards and add interactivity at the click of a button.
Used: React, React ToolKit, React Persist, React Router.

Execution Criteria:

The layout should be fixed in pixels, semantic, and valid.
There should be no errors in the browser console.
The task should be implemented in native JS using bundlers or in React.
The interactivity should work according to the technical task.
The code should be formatted and free of comments.
The repository should have a README.md file.
Technical Task:

According to the design, implement user cards.
Link to the design https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?type=design&node-id=0-1&t=3feXoh6Ik3Md2F9r-0

On clicking the Follow button, the text should change to Following. Additionally, the button color should change. The follower count should increase by one. For example, if the initial count is 100,500 followers, clicking the button will make it 100,501.

The final user action result should persist when the page is refreshed. So, if the button is clicked and the page is refreshed, the button should remain in the Following state with the corresponding color, and the follower count should not revert to the initial value.

Clicking the button again should revert its text, color, and the follower count. The count should decrease by one (100,500).

The number 100,500 should be represented by a single value in the code (100500). It should be displayed with a comma in the UI (100,500).

Create your own backend for development using the UI service mockapi.io.
Create a resource called "users." Use the resource constructor and describe the user object as follows:
{"user":"Margarita","tweets":"9","followers":8,"avatar":"https://.../582.jpg","id":"1"}

User:

Create a user in Mockapi with the following fields: id, user, tweets, followers, avatar.
The avatar images should be specified as separate URLs in the "avatar" property. You can choose the URLs yourself.
There should be 12 users with different values (at your discretion) in the database. Implement pagination. Each pagination page should display 3 tweets, and the rest should load when clicking "Load More."
Other requirements are similar to the technical task mentioned above.
