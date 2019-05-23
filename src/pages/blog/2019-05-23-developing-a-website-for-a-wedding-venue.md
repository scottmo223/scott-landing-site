---
templateKey: blog-post
title: Developing a Website For a Wedding Venue
date: 2019-05-23T17:17:10.940Z
description: >-
  I was contacted by a client to develop a website for a wedding venue. This is
  my story.
tags:
  - Gastby
  - WordPress
  - AMPSS
  - Web Development
---
## Started Out With Gatsby
Once again I decided to use Gatsby to build the wedding venue website. It came together really quickly and worked like a charm. I am not a designer by any means, but I was very happy with the way it looked. I spend way too much time on the CSS. In fact, I found some information on using CSS to build an interactive menu and tried it out. It wasn’t exactly what I wanted, but it worked. 

## Client Expectations
At first the client was ok with whatever I wanted to do. They just wanted a simple website for the sake of having one. But as time went on and I was close to finishing the website, more requests started to come in. Things like Facebook integration and events. The last request took me by surprise though, the request for WordPress access to start updating the site. I know I could use WordPress as a CMS through Gatsby, similar to how I’m using Netlify CMS. But I decided to take this as an opportunity to work with WordPress, as I have not messed with it before.

## I Dove Headlong Into WordPress
I setup a local environment to develop using WordPress on my computer, as I don’t always have internet access when I’m traveling. I used AMPPS (which is an Apache, Mysql, PHP, Perl, Python and Softaculous auto-installer) to quickly set up the environment – easily downloaded from [ampps.com](http://ampps.com). Then I downloaded and moved the WordPress folder into the “www” folder of my local AMPPS install. Once you start up the server, you can navigate to the local host port in your browser and see it working. I got comfortable with all of the files in the WordPress install for a while before working on the client’s website.

## The Final WordPress Version
It took me two days to get the wedding venue site set up and working similar to what I had developed with Gatsby. I ran into some noob issues that were easily resolved. First thing was figuring out how to move my WordPress install on the server to the root domain, as I had installed it under "www.thedomain.com/wp" when I wanted the homepage to be "www.thedomain.com". [This article from askwpgirl.com was perfect!](https://askwpgirl.com/move-wordpress-from-subdirectory-to-root-directory/) Very easy. You can check out my final version of the website: [bellevuetyler.com](https://bellevuetyler.com)
