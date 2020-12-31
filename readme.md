# Andrew's Project Overview

## Project Schedule
This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`..
|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete

## Project Description
A personal portfolio website which emulates my progress becoming a Software Developer. I will be using HTML, CSS, JavaScript, jQuery, and other possible libraries. I aim for a responsive, reliable website that offers clean and simple dynamics to make a proper statement. With a well thought out Project Worksheet, I will be able to incorporate multiple resources to send a solid message to perspective clients.
## Google Sheet
Here is my [Google Sheet](https://docs.google.com/spreadsheets/d/1nkqxGiQQqLYrhYJf3PPX4E41jCEUxImH-Yxgf1fbWGA/edit?usp=sharing).

## Portfolio I want to Emulate
Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.
Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [eloise-ress-barrow.surge.sh](http://eloise-ress-barrow.surge.sh/#writing) | navigation logo pop up when in mobile version
|[spotify.com](https://www.spotify.com/us/) | arrow button transition under the header |
| [excision.ca](https://excision.ca/) |  unique nav styling links
---

## Wireframes

[Mobile](https://res.cloudinary.com/dfltkqotn/image/upload/v1608520070/IMG_4685_dihc9a.heic) Wireframe Mockup.
[Desktop](https://res.cloudinary.com/dfltkqotn/image/upload/v1608520191/370CA2B7-6926-47B1-B822-19A10BFA9769_ezzkh7.heic) Wireframe Mockup.
## Time/Priority Matrix 
[Link](https://res.cloudinary.com/dfltkqotn/image/upload/v1608520236/6BC8B792-765B-47E6-BD08-89A132761F2E_lt4dfk.heic) for Time/Priority Matrix.

 
### MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  
#### MVP (examples)
- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase
#### PostMVP 
- Anything else that is not MVP
## Functional Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.
#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Nav | H | 1hr | 2.5hr |
| Nav Aesthetics | L | 3hr | 1.5hr |
| Nav Links | H | 2hr | 1hr |
| Nav Logo | H | 2hr | 2hr |
| Hamburger | H | 2hr | 2.5hr |
| Grid Layout | H | 2hr | 3hr |  
| Flex Box | H | 2.5hr|  2.5hr | 
| CSS Grid Layout| H | 2.5hr | 2.5hr |
| CSS Styling | H | 2hr | 3.5hr |
| Adding Format | H | 2hrs|  2hr | 
| Dynamic Transitions | L | 2.5hr | 1.5hr |
| Mobile Responsive | H | 2.5hr | 2.5hr |
| Tablet Responsive | H | 2hr | 2.5hr |
| Desktop Responsive | H | 2.5hr | 2.5hr |
| API | L | 2.5hr | hr |
| Total | H | 15.5hrs| hrs |
#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Personal Icon | H | 1.5hr | 2hr |
| Social Media Icons | L | 1.5hr | 3hr |
| Nav High Light | L | 2hr | 2hr |
| Smooth Scroll | H | 2hr | 2hr |
| Project Review | H | 3hr | hr |
| Total | H | 20hrs| hrs |
## Additional Libraries
 W3Schools- Helped with techniques for coding.
 
 Stack Overflow- Helped solved an array of questions many developers have, including mine. It helps having an abundant resource guide.

 Google Fonts- Gave me an appealing, modern format.
 
 Bootstrap- I incorporated Bootstrap along with my navigation for a full, functioning Nav Bar with accessible links and scroll down.
 
 Font Awesome- I attached Font Awesome to my Social Media Icons (links) located in my footer.
 
 Markdown Lecture- The lectures provided to us help me better understand Markdown and the significance of making a solid, thorough Project Worksheet.

 CSS-Tricks- Is a great resource solving CSS problems, including Flex Box.

## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description:  
```
#navbarNav {
    display: inline-flex;
    justify-content: flex-end;
  }
```
I don't recall learning about "display: inline-flex" which made it very easy to move my nav bar to the right. Instead of starting off with "display: flex" in block format and than working back to an inline format on the opposite side of the page.
## Issues and Resolutions
I had basic issues with my Icons from Font Awesome not working. I tried using Bootstrap but still continued to have the same problem of the link working, but the icon would not appear. After hours of problem solving I realized it was not reading the correct link. I tried different links to Font Awesome & Bootstrap and had success finally.

Another issue I had was with the not being able to increase the width to 100% in tablet and desktop in my container class. After talking to Alex about it, it could have been a couple of things, such as, the Bootstrap format was causing the issue/ my Media Query's were written incorrectly. We ended up forcing the code with !important in order to bypass the parent element that was wouldn't get rid of the extra margin.

Another issue I had was when I used Flex Box to move content to the other side of the page(in desktop mode), my scroll down in tablet stayed down and would not scroll back up. I realized the Max in tablet and the Min in desktop were overlapping each other which was causing the scroll down to malfunction.