'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
    
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
  console.log('Article is visible');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = ''){
  console.log('Title Lists are just generated');

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';

  for(let article of articles){
    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('HTML of link was created!');

    /* insert link into titleList */
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;
  
  const links = document.querySelectorAll('.titles a');
  console.log('what is it?');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(link);
  }
}

generateTitleLinks();

function generateTags(){
  /* find all articles */
	const articles = document.querySelectorAll(optArticleSelector);
	
  /* START LOOP: for every article: */
	for(let article of articles) {
		
	
    /* find tags wrapper */
	const titleList = article.querySelector(optArticleTagsSelector);
		
    /* make html variable with empty string */
	let html = '';
		
    /* get tags from data-tags attribute */
	const articleTags = article.getAttribute('data-tags');
	console.log(articleTags);
	
    /* split tags into array */
	const articleTagsArray = articleTags.split(' ');
	console.log(articleTagsArray);
		
    /* START LOOP: for each tag */
		for(let tag of articleTagsArray){
		console.log(tag);
		
      /* generate HTML of the link */
		const taglinkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
		console.log(taglinkHTML);
			
      /* add generated code to html variable */
		html = html + taglinkHTML;
    	console.log(html);
			
    /* END LOOP: for each tag */
		}
    /* insert HTML of all the links into the tags wrapper */
	titleList.innerHTML = html;
		
  /* END LOOP: for every article: */
	}
}

generateTags();