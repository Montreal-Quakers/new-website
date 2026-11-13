- [About this website](#about-this-website)
- [The short version](#the-short-version)
- [Where to find stuff](#where-to-find-stuff)
- [Some basics](#some-basics)
- [For beginners](#for-beginners)
- [How to create a new page](#how-to-create-a-new-page)
- [Adding images](#adding-images)
- [Troubleshooting](#troubleshooting)
  - [Build errors or missing pages](#build-errors-or-missing-pages)

# About this website

This GitHub hosts the Montreal Quaker meeting website using a system that converts text into webpages. It shouldn't be too tricky to add pages and blog posts, or edit existing pages.

# The short version

The only thing people are likely to need to change regularly are blog posts. This section contains everything you need to know to do so.

No need to memorize **any** of this information. Throughout this README, if you're planning to do a task, just look up the instructions one step at a time as you're doing the task.

The blog posts are in the ```src/content/posts``` [folder](https://github.com/Montreal-Quakers/website/tree/master/src/content/posts). Existing posts are organized chronologically and end in ```.md```. Click a file in that folder and then near the top, click ```Raw``` to see what a blog post looks like.

In order to create a new post, follow these steps.

1. Login to Github with an account that has permission to change the page
2. Open the [```src/content/posts```]([https://github.com/Montreal-Quakers/website/tree/master/src/content/posts](https://github.com/Montreal-Quakers/website/tree/master/src/content/posts)) folder.
3. Click on ```Create new file```.
4. Name the file, beginning with the date, in this format: ```YYYY-MM-DD-your-title.md```. For instance, you could name a post ```2026-05-24-hello-world.md```.
5. Copy and paste the front matter below. This front matter is explained in detail in this README, but all you need to do is copy and paste this at the tippy top of your file:

```yaml
--- 
title: "Introduction to Quakers Event"
description: "Monthly Events Introducing Quakers"
tags: ["introduction", "learning"]
lang: "en"
translationID: "intro2us"
author: "clerk"
pubDate: 2026-05-24
---
Write your post here!
```
1. In the "front matter" (the text separated by three dashes ```---```)

- Change:
  - The title (for instance to ```title: "Hello World"```)
  - Description (for instance to ```description: "My first post"```, or leave it blank)
  - Tags (for instance to ```tags: ["announcements", "testing"]```)
  - The ```lang``` -- this tells the system which language to display a page in, either in English (```lang: "en"```) or in French (```lang: "fr"```). Default is English so you can leave this blank)
  - Author (to your name, for instance ```author: "Shelly"```)
  - Publication Date (`pubDate: 2026-05-24`)
  - If you do not have a translated version of the post, you don't need to worry about the ```translationID``` line. You can 1) delete it, 2) leave it blank, or 3) put in a random value. If you do have a translated version of the post, choose a unique code for ```translationID``` (for instance, ```translationID: "helloworld"```), and the website will automatically link between English and French pages that have the same ```translationID``` code.  
1. Write your blog post after the second three dashes (```---```) the way you would write an email. GitHub will translate this into HTML.

The full sample blog post would look like this (```src/content/posts/2026-05-24-hello-world.md```):

```yaml
---
title: "Hello World!"
description: "My first post"
tags: ["announcements", "testing"]
lang: "en"
translationID: "hello-world"
author: "Shelly"
pubDate: 2026-05-24
---
Hello world!
This is my first blog post.
```

Once created, your new post will automatically appear in the news section with the post title and date extracted from the filename and the front matter.

There are only four things you need to know about writing a blog post using this system. Usually you just write normal text like an email:

- To format a header, that is, to format large bold text at the top of paragraphs, put a few ```#``` symbols in front of your header like so: ```# About this website``` which will look like [this](#about-this-website). Less hashtags (```#```) makes for a bigger header, and more hashtags (```######```) makes for a smaller header.
- _Format_ **text** ~~like~~ _this_ ```_Format_ **text** ~~like~~ _this_```. _Italics_, **bold**, ~~strikethrough~~, ```_Italics_, **bold**, ~~strikethrough~~```.
- Links like so: ```[your text describing Google](https://google.ca)```, which will look like this: [your text describing Google](https://google.ca). Description in brackets (```[description]```), link in parentheses (```(example.com)```)
- Images like so (after the image has been uploaded to GitHub): ```![](/images/yourimage.png)```. Same format as links except with an exclamation mark (```!```) at the beginning.
Most of the pages and posts on this website are just plain text, just like Wordpress.

So you could make that sample post above a bit more fancy by adding a bit of formatting:

```yaml
---
title: "Hello World!"
description: "My first post"
tags: ["announcements", "testing"]
lang: "en"
translationID: "hello-world"
author: "Shelly"
pubDate: 2026-05-24
---
# Hello world!
This is my _first_ blog post.

Go back to the [home](/home) page.
```

# Where to find stuff

All the major pages, except for the index pages, are in the [```src/pages```]([https://github.com/Montreal-Quakers/website/tree/master/src/pages](https://github.com/Montreal-Quakers/website/tree/master/src/pages)) directory. Posts (blog updates) can be found in [```src/content/posts```]([https://github.com/Montreal-Quakers/website/tree/master/src/content/posts](https://github.com/Montreal-Quakers/website/tree/master/src/content/posts)).

This site is designed so that it's fairly easy to change text as needed. Minor modifications can be easily made to any of the markdown files without any specialized knowledge, because this site uses a simplified markdown language to translate normal text into website-readable HTML.

# Some basics

Some basics about how this website works:
- A [tutorial](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository) on how to change files on GitHub.
- Posts are in the simplified [Markdown](https://guides.github.com/features/mastering-markdown/) format.
- You don't need to memorize any of that, just look it up anytime you need it. Besides, there are really only four things you are likely to need:
  - Headers like so: ```### Your header-3 text here``` which will look like [this](#about-this-website)
  - Images like so: ```![](/images/yourimage.png)```
  - Links like so: ```[your text describing Google](https://google.ca)```, which will look like this: [your text describing Google](https://google.ca)
  - _Format_ **text** ~~like~~ _this_ ```_Format_ **text** ~~like~~ _this_```
- Most of the pages and posts on this website are just plain text, just like Wordpress.

# For beginners

No HTML is needed to make basic changes to the site, but it's good to know one thing: HTML works by putting "tags" around text to tell your browser how to render the text. Tags in HTML begin and end with these greater-than, lesser-than symbols ```<>```. For instance, text with ```<b>bold</b>``` around it will appear, well, <b>bold</b>. So a ```<b>``` means that the bold is beginning and a ```</b>``` with a slash before it means that that the bold is ending. You don't need to code in HTML to make changes, you just need to not feel intimidated by the bits of code that are on various pages.

When making changes in Github, remember that it saves everything you do. You can always go back and restore the previous version.

Moreover, you'll see that as you try to save changes to a Github file, it asks you if you want to label changes you're making. If you're unsure, label them as ```unsure``` or something and you will be able to search for them later. But if you check your work, everything will be ok.

# How to create a new page

Create a new ```.md``` (or ```.astro```) file in the [```src/pages```]([https://github.com/Montreal-Quakers/website/tree/master/src/pages](https://github.com/Montreal-Quakers/website/tree/master/src/pages)) directory, write your content, and insert the "front matter" as explained here. For instance, I created a new file at [```src/pages/covid-19.md```]([https://github.com/Montreal-Quakers/website/blob/master/src/pages/covid-19.md](https://github.com/Montreal-Quakers/website/blob/master/src/pages/covid-19.md)) and then I wrote some text. Then I made a translated version at [```src/pages/covid-19-fr.md```]([https://github.com/Montreal-Quakers/website/tree/master/src/pages/covid-19-fr.md](https://github.com/Montreal-Quakers/website/tree/master/src/pages/covid-19-fr.md)). Finally, in both files I set the "front matter".

To the top of the English file, above the text I'd written, I added:

```yaml
---
title: "COVID-19 Updates"
lang: "en"
translationID: "covid"
---
As a COVID-19 prevention measure, the Sunday Quaker meeting...
```

For the French translation ([```covid-19-fr.md```]([https://github.com/Montreal-Quakers/website/tree/master/src/pages/covid-19-fr.md](https://github.com/Montreal-Quakers/website/tree/master/src/pages/covid-19-fr.md))) I added:

```yaml
---
title: "Mises à jour COVID-19"
lang: "fr"
translationID: "covid"
---
Comme mesure préventive contre la COVID-19...
```

Here's what all this means:

```yaml
--- (this is required, it just means that the "front matter" is beginning)
title: "COVID-19 Updates" (This is a title that will appear at the top and isn't required)
lang: "en"   (This tells the system which language you're writing in, "en" for English and "fr" for French)
translationID: "covid"   (This a codeword that helps the system find a translation for this page, if one exists)
---  (This is required and just means that the front matter is ending)
```

For the automated translation linking system to work properly, you just need to properly indicate in the "front matter" the ```lang:``` and make up a unique translation code and put it after ```translationID:```.

# Adding images

To add an image, upload it on this site to ```public/images``` (anywhere in that folder is fine), and then we can call images using ```![image_text](/images/CYM.jpg)```

# Troubleshooting

## Build errors or missing pages

If your page isn't showing up or the build fails, check two things:

1. **Front matter dashes:** Make sure your front matter starts and ends with exactly three dashes (`---`) and that you didn't leave a quote unclosed.
2. **File location:** Make sure blog posts are inside `src/content/posts` and regular pages are inside `src/pages`.
