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

Your challenge is to build out this **article preview component** and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go 👍.

The only JavaScript you'll need for this challenge is to initiate the share options when someone clicks the share icon.

**Preview** 👓

![Design preview for the Loopstudios landing page coding challenge](./design/overview.png)

## The challenge 
Users should be able to:
  
| Challenge | Newbie | Junior | Intermediate | Advanced |
| --- | :---: | :---: | :---: | :---: |
| View the optimal layout for the component depending on their device's screen size | ⭕ |  |  |  |
| See the social media share links when they click the share icon |  | ⭕ |  |  |

[![🐬 Newbie Difficulty List](https://img.shields.io/badge/Difficulty-Newbie-3F54A3?style=for-the-badge&logo=frontendmentor "Newbie Difficulty")](https://www.frontendmentor.io/challenges?difficulties=1)

## Links
- Solution URL: [Frontend Mentor Solution]()
- Live Site URL: [Gituhb Pages]()

## My process
> ⌛ I challenge my self to finish this for ***~2 days*** <br>
> ▐ <br>
> 🧑‍💻 ***Day 1:*** Code basic layout with [**HTML**](https://developer.mozilla.org/en-US/docs/Web/HTML) & [**Sass**](https://sass-lang.com/) <br>
> ▐ <sub>Studying the design <kbd>0.5 hour</kbd></sub> <br>
> ▐ <sub>Import style guide <kbd>0.5 hour</kbd></sub> <br>
> ▐ <sub>Start mobile first <kbd>2.5 hours</kbd></sub> <br>
> ▐ <br>
> 🎄 ***Day 2:*** Christmas holiday <br>
> ▐ <sub>Rewrite mobile first to desktop first <kbd>~2.5 hours</kbd></sub> <br>
> ▐ <br>
> 🧑‍💻 ***Day 3:*** Working with [**Javascript**](https://www.javascript.com/)<br>
> ▐ <sub>Make small change for phone layout <kbd>~0.25 hour</kbd></sub> <br>
> ▐ <sub>Javascript logic for active state <kbd>~1.5 hours</kbd></sub> <br>
> ▐ <sub>CSS clip path <kbd>~1 hour</kbd></sub> <br>
> ▐ <br>
> 🗓️ ***Day 4 onwards:*** Continue some unfinished task & submit the solution to [**Frontend Mentor**]( "Solution") 🚩 <br>
> ▐ <br>
> 🗓️ 

## Built with
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML "developer.mozilla")
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html "W3C")

## What I learned 🥳

<details>
    <summary>☑️ <b>CSS object-fit</b></summary> <br>
  
`object-position: left` has the same idea of ` background-position: left`
###### stylesheets/scss/\_preview.scss
```scss
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}
```
</details>

<details>
    <summary>☑️ <b>CSS clip-path</b></summary> <br>
  
`clip-path` can show some part of our element by clip-in it
###### stylesheets/scss/\_preview.scss
```scss
&--active {
  filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1));
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    62% 75%,
    56% 100%,
    49% 75%,
    0% 75%
  );
}
```
</details>

## Difficult Things 😓
Things were difficult for me and I finally gave up 😓😓
- [ ] **HTML5** Semantic
- [ ] Not know how to work with `<svg/>`
- [ ] Not figured out how to implement `border-radius`
- [ ] Not making `box-shadow` on share links
- [ ] Some _DRY_ **CSS** code

## Author
| [<img src="https://avatars.githubusercontent.com/u/47988956?v=4" alt="xvferdy" width="100px"/><br><sub><samp>Berlianto</samp></sub>](https://github.com/xvferdy)  |
|:---:|

## Acknowledgments
- [Wes Bos](https://www.youtube.com/watch?v=F1anRyL37lE&t=201s "JavaScript Event Capture, Propagation and Bubbling")

<h3 align="right">
      <a href="#readme">To Top ⤴️</a>
</h3>
