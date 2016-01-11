name:inverse
layout: true
class: center, middle, inverse
---

template: inverse

class: center, middle

# Creative Coding for the Web
## Session 01
## 01.11.16

---
layout: false

.left-column[
	# Agenda
]

.right-column[

1. Introductions

2. Syllabus Review

3. Overview:
  - The web
  - This course
  - Expectations (yours and mine)

4. Technical Details

5. Workshop

6. Research Methods  

]

---

template: inverse

## 1. Introductions

---
layout: false

class: middle, center

## ?? Do you know _pecha kucha_ ??

---
class: middle, center

.left-column[
## Pecha Kucha
]


.right-column[


## "PechaKucha 20x20 is a simple presentation format where you show 20 images, each for 20 seconds. The images advance automatically and you talk along to the images."

[Pecha Kucha](http://www.pechakucha.org/)

]

---

.left-column[
## Pecha Kucha
]

.right-column[

## Format
* 120 seconds  
  1. Call me ...  
  2. I am a ... year, studying ...  
  3. Skillz (Design, HTML, CSS, JS/programming)
  4. When I grow up I want to
  5. Best christmas/channukah/kwanzaa/winter-holiday/woo-hoo-no-class gift
  6. an interesting piece of media: (beats, visuals, website, book, ??? )
]

---


template: inverse

## 2. Syllabus Review

---

template: inverse

## 3. Course Overview

---

layout: false
.right-column[

# What is this class about?

The web is an integral part of contemporary culture. It is a foundation for entertainment, connection, communication, social action, commerce, and descension. As members of society we are automatically participants in the web. As media designers and artists we can be more than consumers of digital culture we can be be producers, innovators and critics.

The good news is that the path to acquire these skills is accessible to anyone with an interest and the desire to learn. In addition to making you more marketable for jobs these skills and this knowledge can you help you **create** your own jobs.
]

---

.right-column[

# Course objectives

* Become familiar with contemporary web technologies  
[Contemporary Web](http://blog.differential.com/14-technologies-every-web-developer-should-be-able-to-explain/)

* Think critically about the internet as a tool for intervention and change

* Learn and enhance your skills as front-end developers and designers. (i.e. creative technologists)

* Have a play with your ideas and concepts
]

???

## The history of the web is not boring. It turns out that what we consider the web today is a shadow of what it was originally envisioned to be. By reviewing the history we can shake up our concepts and ideas of what the net can be and what it can provide

---
.right-column[

# Expectations

Technology is a contact sport. You can only learn by doing so I expect participation and effort. The faster you can run into problems the faster your skills will grow.

* Don't get frustrated

* You are not not-smart, untechnical, non-mathy, non-coder ....

* Anyone can learn this stuff and plenty have
]

---

template: inverse

## 4. Let's Get Started ...

---

layout: false

.left-column[

## DubDubDub
## what is the web?
]

---

.left-column[
## DubDubDub
## what is the web?
]

.right-column[
  Imagine if we gave everyone in the world:  

  a monitor ...    

  a keyboard ...     

  3 USB thumb drives ...
]

---

.left-column[
## DubDubDub
## what is the web?
]

.right-column[

... and all over the world we installed adaptors for our USB sticks

![DeadDrops](/images/deaddrops.jpg)
[Dead Drops](https://deaddrops.com/)


]

---

<!--
.left-column[
## DubDubDub
### what is the web?
]
-->

.right-column[

# The Web ...
... is a collection of connected file directories that remote user's can access (create, read, update and delete resources)
]

---

.right-column[
# Web Architecture ...
.. the design of the structure of a set of networks, a particular network or a single website.

Web architecture can loosely be divided into 2 main classes:

1. Front End
2. Back End

]


---

.right-column[ 
# Web Architecture ...

1. Client request resources  __(Front End)__

2. "Internet plumbing" take those request and find out which computer has the requested files  

3. The computer that has the file "serves" the client's "request"  __(Back End)__

4. The client computer has a program that can interpret what to do with the file that was requested (display an image, play an audio file, etc. ) __(Front End)__

]

---

.right-column[ 
# Web Architecture ...

1. Client request resources  __(Front End)__

2. "Internet plumbing" take those request and find out which computer has the requested files  

3. The computer that has the file "serves" the client's "request"  __(Back End)__

4. The client computer has a program that can interpret what to do with the file that was requested (display an image, play an audio file, etc. ) __(Front End)__

_we will have to do a little back end work (step 3) to get our resources onto the server_
]

---

.left-column[
## In this class our concerns are...
]

.right-column[

## 1. Client requests resources  

We will investigate:

  - Standard resources requests
  - In page requests
  - Accessing APIs 
]

---

.left-column[
## In this class our concerns are...
]

.right-column[

## 4. The client computer interprets the resource returned from the server 

  - Effective design strategies for presentation
  - Static presentation of content
  - Dynamic presentation of content
  - Design strategies for dynamic presentation and interaction  
]

---

.right-column[
# Web Architecture ...

Another characteristic of web architecture is "Separation of Concerns"  

### Separation of concerns
 is the idea that each component in your system is responsible for performing one task. This allows for a "kit of parts". 

 ### A kit of parts 
 supports the concept of reuse: resusing components in different combimations to create custom solutions to problems. 
]

---

.left-column[
## Separation of Concerns
]

.right-column[
##Front End Concerns

- __Content__  
what is the information that you want to display

- __Presentation__    
how should the content be styled

- __Interaction__    
how should the content and presentation change when the user does things

]

---

.left-column[
## Separation of Concerns
]

.right-column[
##Front End Concerns

- __Content__  
what is the information that you want to display
_Hyper Text Markup Language (HTML)_

- __Presentation__    
how should the content be styled  
_Cascading Style Sheets (CSS)_

- __Interaction__    
how should the content and presentation change when the user does things  
_Javascript (JS)_

]

---

.left-column[
## Separation of Concerns
]

.right-column[

Example, 

[Remark JS](http://remark.js) 

Remark is a web based slide presentation framework. Write your presentation in [Markdown](http://markdowntutorial.com/) and serve it on the web in a custom application.

]

???
This is a note to show off cool stuff...

---

.left-column[
## Development Tools
]

.right-column[

1. A server to serve files; tools for managing the file system  
_storm_; _unix_; _github_; _node js_

2. Tools to create the files  
any text editor, _sublime_, _light table_, _atom_, _brackets_

3. Tools for troubleshooting  
_chrome developer tools_ 

4. Tools for managing files and collaboration  
_github_
]

---

template: inverse

## 5. Workshop

---
layout: false
class: center, middle

## today we are going to get introduced to Git and setup your course sites

---

.left-column[
## Git Account  
]

.right-column[
## Sign-up for Git
1. Get a [git account](http://github.com) if you do not have one already
2. Send me an email with: 
  1. a subject of '__IML400__',
  2. your preferred name if it is different than what I have on the roster,  
  and
  3. your Github userId  
   
]

---

.left-column[
## Install Git  
]

.right-column[
## Instructions:
[Git Installation](http://github.com/bytezen/IML400/wiki/install-git)
]

---

.left-column[
## Git 001
]

.right-column[
## In class...
we are going to walk through some of the basics of Git using the command line.  
This will be both a tutorial on the CLI and Git

* Let's:
1. Make a small change to your Readme file
2. Clone the class repo so that you have the course site on your machine 

## Resources
Additional resources to help you outside of class:
* [Try Git](https://try.github.io)  

* [Mac Command Line Basics](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)  

* [Windows Basic DOS Commands](https://www.sophos.com/en-us/support/knowledgebase/13195.aspx)

]


---

.left-column[
## Setting up your site
]

.right-column[
  ## Github Pages

  1. Navigate to [Github Pages](https://pages.github.com/)
  2. Follow the instructions to create an 'User or Organization Site'
  3. Let's clone your site to your machine and walk through a small change

]



---

template: inverse

## 6. For Next Time

