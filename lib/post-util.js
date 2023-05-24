import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/posts');

export function getPostFiles() {
  //Gives all post file names but with the extensions included.
  return fs.readdirSync(contentDirectory);
}

export function getContentData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); //Regex to remove the file extension. Leaves a slug without the .md extension.
  const filePath = path.join(contentDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8'); //Need to add encoding to read all the unicode characters.
  const { data, content } = matter(fileContent); //Matter returns an object with data and content properties. Must use these names.

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const contentFiles = getPostFiles();

  //   for(const postFile of contentFiles) {
  //     const postData = getContentData(postFile);
  //   }

  //Easier way to do the above for loop and put the iterables into an array.
  const allPostArray = contentFiles.map((postFile) => getContentData(postFile));

  //Default JS sort method. Sorts by date. -1 and 1 are used to sort in descending order.
  const sortedPosts = allPostArray.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
