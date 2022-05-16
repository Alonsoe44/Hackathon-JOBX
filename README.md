# Gift List Section


https://user-images.githubusercontent.com/78975724/168687604-7018ded2-0767-4fb3-9f90-4a4dd879d79d.mp4


Hellow clean code consumers, looking for an example of atomic design and good practices in react and typescript? Look no more

## What is this ?

This is a section component that showcases gift lists in cards, a presentational component to visualize data, an example with a robust documentation , accesible design that adapts to any screen and that has lot of testing.

https://gift-list-hackathon.netlify.app/ ==> Live app

## Ussage

`npm install` before all don't forget about the basics

- ` npm run start` and you now have a webpack dev server
- `npm run storybook` will let you see all the documentation and components
- `npm run test` starts jest testing and pass all test
- `npm run test-coverage` you have a table with the coverage of tests in the proyect

## What technologies can I find in this proyect?

That's a very good question dear reader, usually I just wanna go with me most simple and lightweight stack possible when developing.

### For code quality

- **Eslint** static code analysis tool to find follow best practices and find
- **SonarQube** another static code analysis that finds all kind of code smells and gives the neccesary feedback to reach that 100% coverage
- **Jest** this is the go to for unitary and integration testing , very handy with react-testing-library
- **TypeScript** all the power of strong typing in JavaScript , no more words needed
- **StoryBook** totally a new tool for me that gave me a lot headaches with the mdx format, but still gave some great results, brings a new perspective when developing, because i was able to find some visual bugs when i rendered my components in isolation
- **LightHouse** Even with smalls project it can help you find accesibility problems with the colors you use, great tool.

### Main stack

- **React** The king of front-end , unopinionated with a package for everything
- **Tailwind** This is by far the best tool I used for styling, you have an utility class for any css property , inline css so you don't have to worry about extra css files, speeds up the workflow and you have consistent units to create a cohesive design with tailored style for components.
- **TypeScript** Since I use Typescript I reduced my chrome devtools debugging by a lot, it simply makes life easier.

## Why so many tests ?

ok ok now I have to be honest with you, I usually don't write that many tests, and with less reason when they are just presentational component that just render data from props. When I build my apps I tend to do the trophy pattern, some unitary test,
many integration tests, and again some end to end ones. It's all about being efficient with the time and resources you have.

## Then why you did it?

Because it's a very small project and unitary test are quick and easy, here you cand find everything tested with unitary tests, some integration tests for the final parent components and a small spy test for the function of the parent container.

## Folder structure

Pretty basic here just a folder for each component and nested atomic components inside the more complexes ones

Probably if in the future if I would like to create a project with storybook in it i would put inside each component folder the stories.mdx file
