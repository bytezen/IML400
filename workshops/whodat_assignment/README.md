# Whodat Assignment

### 1. Setup
To do this you need to update your __CLASS__ repository. 
1. Go to your directory that has the class repository  
2. Enter:  

```
git pull

```

this will pull the new files from the repository to your computer. You will find the files that you need in this folder:


```
whodat_assignment
```

Go into that directory. (Rememeber the linux command to change directories??)

```
cd
```

shortcut to go to the parent directory of the directory that you are in:  

```
cd ..
```

From inside the whodat_assignment folder enter:

```
npm start
```

this will start your browser-sync session and open your default web browser. Make sure that you are using Chrome. From here you can open the Chrome Web Developer console and start working.

To set up your Chrome Web Developer Session as an editor:
Follow the instructions here:  
[Setup](https://developer.chrome.com/devtools/docs/workspaces)

follow the instructions for: 'Add local source files to workspace'


### 2. Assignment
I am giving you a series of "challenges" of increasing difficulty. Accomplish as many as you can and we will review then in class. See below for handin instructions.

#### Workshop Resources
To find help on the different methods that you can call and what they do go here:

##### Setting Attributes
* [SetAttributeMethod](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute  

##### Accessing Elements on the page
There are different methods to do this as we explored in class. Feel free to use any that you are comfortable with. __Rememeber__ that if the method returns a list you will have to access the list item that you want!  

* [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)  
* [getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)  
* [getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)  




#### Workshop Handin instructions
Copy the whodat_assignment folder to __YOUR__ IML400 class repository. If you completed the first homework assignment then you set up a workshops directory. Create an index.html page in the workshops directory that has a link to the whodat\_assignment/index.html. In short what you are simply adding your assignment to your website. Remember that in order to see your assignment on your website you will have to run

```
git add .
git commit -m"some message"
git push
```

You will enter that command from inside your class repository.

#### Workshop Process
If you look at _main.js_ inside of _whodat\_assignment/public/scripts_ you willl see that there are commented sections for you to put your code.

I would suggest that you use an iterative process like the one that we used in class. That is:

1. Use the console in Chrome Developer to enter commands and test the results. Once you have a series of commands that work then you can cut and paste the code that you entered into _main.js_.  

Note: when you do this the next time you reload the webpage the script in _main.js_ will automaticall run.  

Do the best you can. I expect that you may struggle with some or all of this. Don't get frustrated, or at least keep your frustration in perspective: learning only happens when you get unstuck. But to get unstuck (and therefore learn) you first have to get stuck. Alright I ain't a poet...and I know it...(ha!) but just chill, try to have fun with it and realize that by next week this time this assignment will be easy for all of you once we review your attempts in class. 


