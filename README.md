# Article preview component

> 🔖 This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## 🌈 ✨ 🎉 Have Fun Building! 🚀 🎊 🎈
> 🖥️ **Welcome** <br>
> Thanks for checking out this front-end coding challenge.
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.
***To do this challenge, you need a basic understanding of HTML, CSS and a tiny bit of JavaScript.*** Press <kbd>Enter</kbd> 🚀 to start the game!!

## 🥷 Table of Contents
- [Brief](#brief)
- [The challenge](#the-challenge)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned-)
- [Difficult Things](#difficult-things-)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Brief
Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.

Your challenge is to build out this article preview component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go 👍.

The only JavaScript you'll need for this challenge is to initiate the share options when someone clicks the share icon.

**Preview** 👓

![Design preview for the Loopstudios landing page coding challenge](./src/assets/design/desktop-preview.jpg)

## The challenge 
Users should be able to:
  
| Challenge | Newbie | Junior | Intermediate | Advanced |
| --- | :---: | :---: | :---: | :---: |
| View the optimal layout for the component depending on their device's screen size | ⭕ |  |  |  |
| See the social media share links when they click the share icon |  | ⭕ |  |  |

[![🐬 Newbie Difficulty List](https://img.shields.io/badge/Difficulty-Newbie-3F54A3?style=for-the-badge&logo=frontendmentor "Newbie Difficulty")](https://www.frontendmentor.io/challenges?difficulties=1)

## Links
- Solution URL: [Frontend Mentor Solution]()
- Live Site URL: [Netlify]()

## My process
> ⌛ I challenge my self to finish this for ***~2 days*** <br>
> ▐ <br>
> 🧑‍💻 ***Day 1.*** Code basic layout with [**Sass**](https://sass-lang.com/) <br>
> ▐ <sub>Studying the design <kbd>0.5 hour</kbd></sub> <br>
> ▐ <sub>Import style guide <kbd>0.5 hour</kbd></sub> <br>
> ▐ <sub>Start mobile first <kbd>2.5 hours</kbd></sub> <br>
> ▐ <br>
> 🎄 ***Day 2.*** Christmas holiday, rewrite mobile first to desktop first <kbd>~2.5 hours</kbd><br>
> ▐ <br>
> 🧑‍💻 ***Day 3.*** Working with [**Javascript**](https://www.javascript.com/)<br>
> ▐ <sub>Make small change for phone layout <kbd>~0.25 hour</kbd></sub> <br>
> ▐ <sub>Javascript logic for active state <kbd>~1.5 hours</kbd></sub> <br>
> ▐ <sub>CSS clip path <kbd>~1 hour</kbd></sub> <br>
> ▐ <br>
> 🗓️ ***From day 4 onwards.*** Continuing unfinished task & submit solution to [**Frontend Mentor**]( "Solution") 🚩 <br>
> ▐ <br>
> 🗓️ 

## Built with
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML "developer.mozilla")
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html "W3C")

## What I learned 🥳

<details>
    <summary>☑️ <b>Prevent for showing leading zero after typing some number inside input</b></summary> <br>
  
The `value={input.toString()` prevent us for showing leading zero after typing some number
###### src/pages/Home.js
```javascript
<input type="number" value={input.toString()} onChange={change} />
```
</details>

<details>
    <summary>☑️ <b>Hide input slider</b></summary> <br>
  
Hide HTML `<input/>` slider
###### src/stylesheets/pages/\_home.scss
```scss
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
```
</details>

<details>
    <summary>☑️ <b>Respect deadlines</b></summary> <br>
  
Should have left some extra time for testing the production sites and write some documentation

</details>

## Difficult Things 😓
Things were difficult for me and I finally gave up 😓😓
- [ ] **HTML5** Semantic
- [ ] Not know how to work with `<svg/>`
- [ ] _DRY_ **CSS** code

## Author
| [<img src="https://avatars.githubusercontent.com/u/47988956?v=4" alt="xvferdy" width="100px"/><br><sub><samp>Berlianto</samp></sub>](https://github.com/xvferdy)  |
|:---:|

## Acknowledgments
- [Wes Bos](https://www.youtube.com/watch?v=F1anRyL37lE&t=201s)

<h3 align="right">
      <a href="#readme">To Top ⤴️</a>
</h3>
