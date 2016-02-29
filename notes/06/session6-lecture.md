name:inverse
layout: true
class: center, middle, inverse
---

template: inverse

class: center, middle

# Creative Coding for the Web
## Session 06
## 02.29.16

---
layout: false

.left-column[
	# Agenda
]

.right-column[
1. Javascript Objects, Intro

2. API, introduction

3. Workshop: API play

]

---

template: inverse

## Cool and Critical

---
.left-column[
# Grammar School
]

.right-column[
## What are nouns?
]

--

.right-column[
_Nouns_ = person, animal, place, thing or idea
]

--

.right-column[
## properties and attributes
Nouns can be made up of other nouns.  E.g:
* A person has body parts.
* Each body part is a noun. 
* An idea can be about something or related to another idea.  
* An animal can have offspring
]
---

.left-column[
#Nouns
]

.right-column[
## Adjectives
Nouns can also have descriptions:
* A person can be tall.
* A person's eyes can be green
* An idea can be bad or big
* An animal can be furry

## Actions
Verbs are actions:
_Go, run, dance, talk_

Nouns can perform actions or have them performed on them:
* A person can talk, a person can be talked to  
* An idea can be brainstormed  
* An animal can eat  
]
---
.left-column[
## Nouns & Code
]

.right-column[
## Objected Oriented Programming

OOP is a style of programming that models the worlds as nouns.  The idea is that you think of the concepts in the problem that you are trying to solve. Using the syntax of your language concepts (nouns) can be represented in code.

Complex concepts can be represented by objects with different properties.  Objects can be made to perform different tasks (i.e. like verbs)
]

---
.left-column[
## OOP examples
]

.right-column[
## Whodat example
Remember our homey Whodat.  Let's look at how we might model whodat's beak:

```javascript
var beak = {
    color: 'goldenrod',
    length: medium
}

```

in javascript objects are denoted by:
```
{
  propertyName: propertyValue
}

//propertyName is always a string
//propertyValue can be anything: string, number, function even another object
```

]


---

## Web From 1996-2000

"Fowler, Jordan, Mikaela"  
"Park, Suha"  
"Toth, Sydney, Christine"  
---

## Web From 2000-2004

"Heilbron Allara, Susana, Maria"  
"Peng, Dorothy, C."  
"Viramontes, David, William"
---

## Web From 2004-2007

"Kozlowski, Michael, Paul"  
"Rhodes, Alexa, Wayland"  
"Watson, Thomas"
---

## Web From 2007-2014

"Leet, Chang, Matyse"  
"Rosenberg, Allegra, Madalyn"  
"Wen, Janelle, Christina"  
---

## Web From 2015-??

"Lin, Yazon"
"Shaffer, Sarah, Elizabeth"


---

template: inverse

## 2. UI and UX

---

layout: false

.left-column[
# UI/UX
]

.right-column[
# Terms and Terminology
* What is UI / UX? Are they different?
]

---

class: center, middle

“User Experience (UX) and User Interface (UI) are some of the most confused and misused terms in our field. A UI without UX is like a painter slapping paint onto canvas without thought; while UX without UI is like the frame of a sculpture with no paper mache on it. A great product experience starts with UX followed by UI. Both are essential for the product’s success.”  

_Rahul Varshney, co-creator of Foster.fm_

---

.left-column[
# UI/UX
]

.right-column[
# Terms and Terminology
* What is UI / UX? Are they different?

  * often interchanged and confused
  
  [UX is not UI](http://www.helloerik.com/ux-is-not-ui)
]

---
class: center, middle

## Case Study
### Slice of Lime


---
background-image: url(../../images/sliceoflimebanner.png)

---

.left-column[
## Case Study

]

.right-column[
![](../../images/sliceoflimelogo.png)

### [LikeFolio](https://vimeo.com/60272332)  

### Write-ups on the Project

* [Slice of Lime- LikeFolio](http://www.sliceoflime.com/projects/likefolio/)  

*  [UX Magazine Writeup](http://uxmag.com/articles/rapid-prototyping-for-early-stage-start-ups)  
[Nike Accelerator w/ POP](https://vimeo.com/66576683)
]

---

.left-column[
## Definitions
]

.right-column[
# User experience design
"user experience encompasses all aspects of the end-user's interaction with the company, its service and its product"  

_Don Norman, author Emotional Design, The Design of Everyday Things, ..._

[TED: Don Norman](http://www.ted.com/talks/don_norman_on_design_and_emotion?language=en)

]

---

.left-column[
##Definitions
]

.right-column[
## UX is _NOT_ usability
[UX defined from the man](http://www.nngroup.com/articles/definition-user-experience/)

]

---

.left-column[
##Definitions
]

.right-column[
## UX is _NOT_ usability
[UX Defined from the man](http://www.nngroup.com/articles/definition-user-experience/)  

...but usability is a major factor of our experience (and the success of a product's interaction)...  

"In the experience economy...technology is a given, and the question of 'what are the specs?' has been replaced by 'what is it like to use?'

[Apple v. Sony](http://gizmodo.com/5905192/user-experience-the-reason-apple-towers-over-sony)

]

--

.right-column[
[Apple v. Windows](http://www.laptopmag.com/articles/windows-10-vs-os-x)  
]

--
.right-column[
[Linux???](http://ubuntu.com)  
[Linux???](http://elementary.io)    
[Linux???](http://www.makeuseof.com/tag/five-stunning-ubuntu-alternatives-youve-never-heard/)
]


---


.left-column[
## Defintions
]

.right-column[
## Ok, so what is User Interface Design then?
.center["...A UI without UX is like a painter slapping paint onto canvas without thought; while UX without UI is like the frame of a sculpture with no paper mache on it..."]  
]

---

.left-column[
## Defintions
]

.right-column[
## Ok, so what is User Interface Design then?  
]

.right-column[
  .center[  

  "...A UI without UX is like a painter slapping paint onto canvas without thought; while UX without UI is like the frame of a sculpture with no paper mache on it..."  
  ]  

_UI_  is the consideration and architecture of how the user interacts with the product.  

The presentation of the product and how the user can alter its presentation are the chief concerns of UI.  

UI tactics adhere to the themes of UX design strategy.
]

---

layout: false

.left-column[
## What do they do?
## UXD
]

.right-column[
## Defining a user-oriented strategy
* who are our competitors, what are they doing?
* who are our customers, what do they want, need?
  * what do they need that they don't know they need???
  * what do they want that they don't know that they want???
* what is our product structure and strategy
  * how does our content development relate
* wireframes and prototypes ideas and concepts
  .footnote[
source: [Career Foundry](http://blog.careerfoundry.com/the-difference-between-ux-and-ui-design-a-laymans-guide/)
  ]
]

---

layout: false

.left-column[
## What do they do?
## UID
]

.right-column[

## Defining LNF (look and feel)
* visual design
* patterns of interactions
* coordinate with developers for implementation
* _design for multiple devices_
]

---

.left-column[
# UI/UX
## Tools and Resources
]

.right-column[
in understanding the roles it is often useful to look at the tools that are used by practitioners  

* [Axure](http://www.axure.com)
* [Eight Shapes Unify](http://unify.eightshapes.com)
* [Google Web Fundamentals](https://developers.google.com/web/fundamentals/)
* [P.O.P](https://popapp.in/)
]

---

.left-column[
# UI/UX
## Tools and Resources
]

.right-column[

## Design Patterns
* [Pattern Tap](http://zurb.com/patterntap)
* [Patterny](http://patternry.com/patterns/)
* [UI Patterns](http://ui-patterns.com/patterns)
* [Yahoo Design Patterns](https://developer.yahoo.com/ypatterns/)
* [Media Queries](http://mediaqueri.es)

]

---

.left-column[
# UI/UX
## Tools and Resources
]

.right-column[

## Front End Development
Development frameworks are reusable HTML/CSS/JS components and associated plumbing that makes developing front end systems across devices that integrate with back-end systems easy(ier).  

As you could tell from the case studies above there is a tight integration between ux designers, ui designers and front-end developers.  

For reasons of efficiency and collaboration the tool workflow used by modern design shops tends to blur the lines bettween teams. Being savvy with the different phases of design will make you a better specialist in your particular area of focus.  

* [Front End Dev Resource](https://github.com/dypsilon/frontend-dev-bookmarks)  

]


---
.left-column[
## Web Experience Design
]

.right-column[
## Responsive Design
Arguably a dominant theme in modern experience design for the web is the challenge of designing experiences and visual aesthetics across a wide variety of devices and conditions.  

]

--
.right-column[
![Hulu](../../images/hululogosmall.jpg)

 How many different devices and viewing scenarios are supported by Hulu?
* web - Hulu.com  
* mobile  
  * iOS, Android
* tablets
* smartTV
* gaming systems (xbox, ps4, steamOS )
]

---
.left-column[
## Web Experience Design
]

.right-column[
## Responsive Design
Arguably a dominant theme in modern experience design for the web is the challenge of designing experiences and visual aesthetics across a wide variety of devices and conditions.  

[Android OS](https://www.android.com/versions/lollipop-5-0/)

]
---
background-image: url(../../images/android.png)
---

.left-column[
## Responsive Design
]

.right-column[
## Responsive Design Strategy

The central idea of responsive design was to focus on the desktop environment. But to design sites acknowledging that they should scale well for viewing and interacting on other devices.  

Essentially, this was information hiding.  

Smaller screen = show less content.
]

---
.left-column[
## Responsive Design 
]

.right-column[
## ... vs. Mobile First

A mobile first strategy designs and develops for mobile devices.  Conceptually the big difference compared to responsive design is that you think about the content creation not just content removal for the lowest common denominator device.  
In mobile first strategies you consciously design for minimalistic space.  

Mobile is the future of the web:  

[Making a Case for Mobile First Designs](http://www.sitepoint.com/making-case-mobile-first-designs/)

]

---

.left-column[
## Responsive Design
]

.right-column[
### Getting to code
No matter the strategy chosen the design process is structured to get to code as soon as possible.  

Modern design and development is centered on fast, short iterative cycles.  

One benefit of this approach is the development of tools to support collaborative iterative processes.
]

---
.left-column[
## Responsive Design Tools]

.right-column[
## Technologies 
* [CSS Media Queries](http://www.w3schools.com/css/css3_mediaqueries.asp)  
* [Media Queries](http://mediaqueri.es)  

## Tools and Toolkits  
* [Bootstrap](http://getbootstrap.com/)  
* [Yahoo Pure CSS](http://purecss.io/)  
* [jQuery UI](http://jqueryui.com/)  

]
--

.right-column[
## Device Mode in Chrome
[Chrome Developer Tools Mobile Device_ Device Mode](https://developers.google.com/web/tools/chrome-devtools/iterate/device-mode/)

]

---


template: inverse

## 3. Workshop

---

layout: false

.left-column[
## Robot Unicorn Attack
]

.right-column[
## Have you played??
[Robot Unicorn Attack](http://games.adultswim.com/robot-unicorn-attack-twitchy-online-game.html)
]

---

.left-column[
## Robot Unicorn Attack
]

.right-column[

[Scott Stoddard Lecture](https://vimeo.com/22255368)
]

---

template: inverse

## 4. Assignment 

---

## 1. UX and your site

### wireframes
Prepare a UX/UI design document for your class site. The design document should have a wireframes for your proposed redesign. The wireframes should at least detail: 

* the landing page
* navigation
* the overall style for subpages (readings, workshops, etc.)

  
Use the web and some of the links in the notes to see examples of wireframes and UX deliverables. You do not have to use formal wireframe tools any image editor program will suffice. You can even do hand sketches and scan them if that is better for your process.


### concepts
Provide a short description of the experience design concept for your redesign. Who is your intended audience? What are you trying to convey? How do your UX/UI design decisions reinforce these concepts?

---

## Bonus: 

### implement
Implement at least one of your design ideas on the site. Make sure that your redesign functions at different resolutions.  
 
Note: you are welcome to redesign your entire site, however, the minimum is to implement __one__ of your ideas.

---

### 2. Readings

Do the following reading and write a response on your findings. In particular I am interested if you learned new things from the readings, if you disagree with any of the points and how the authors findings compare to your portfolio of design work thus far in your career. I.e. do your projects tend to have good UX? Are you following these principles even if you didn't know their formal names?  

1. Ben Shneiderman - [Eight Golden Rules of Interface Design](http://www.designprinciplesftw.com/collections/shneidermans-eight-golden-rules-of-interface-design)

2. Charles L. Mauro - [Why Angry Birds is so successful and popular](http://www.mauronewmedia.com/blog/why-angry-birds-is-so-successful-a-cognitive-teardown-of-the-user-experience/)

3. Apple OS X Human Interface Guidelines - [Design Principles](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/DesignPrinciples.html#//apple_ref/doc/uid/20000957-CH18-SW1)  
__ OR __  
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html#)  
__OR__  
[Elementary.IO - through 'Minimal Documentation'](https://elementary.io/docs/human-interface-guidelines#human-interface-guidelines)

4. Apple OS X Human Interface Guidelines - [User-Centered Design](https://developer.apple.com/library/mac/documentation/UserExperience/Conceptual/OSXHIGuidelines/Strategies.html#//apple_ref/doc/uid/20000957-CH19-SW1)

5. Jakob Nielsen - [How Users Read on the Web](http://www.nngroup.com/articles/how-users-read-on-the-web/)


---

