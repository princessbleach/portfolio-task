# Week 2 Advanced Programming

Zoe Efstathiou

2423029

## Websites


The live portfolio website is available at:

https://princessbleach.github.io/portfolio-task/

The generated JavaScript documentation should be available at:


https://princessbleach.github.io/portfolio-task/docs/


## Dev Log

My aim was to create a simple but effective portfolio to showcase my sound design/implementation work. I am not aiming to use this portfolio beyond this task as I would lke to make my portfolio with a different method. However, I enjoyed using GitHub Pages regardless. I planned to use CSS to create a consistent style that matches my personal brand. I also made sure to include clear sound design examples and options to contact.

I used HTML to structure the website, CSS for layout and design and some JavaScript to control automatic copyright date updating. Interesting features include; the "contact me" button which uses a mailto **href="mailto:myemail@example.com"**. This opens their mail with my email already in the send to section. I also integrated Soundcloud using the copy embed link provided. This allows viewers to easily listen to example music on the website without having to go to another site.  

I encountered some issues with layout, some sections ended up blending together. This was due to me incorrectly ending and dividing sections within the html with </div>. This taught me that even small syntax errors within HTML can cause big issues and to always proof read my code. 

I also realised I hadn't added links to my itch pages from the feedback given, so adjusted accordingly. I used GitHub Actions to automate the process of building and deploying my portfolio website. I created a workflow that runs when changes are pushed to the main branch. It prepares the website files, installs the required dependencies and uses JSDoc to generate documentation from my JavaScript source files. The workflow then uploads the prepared files and deploys them through GitHub Pages. This helped me understand how automation can reduce manual work and keep a website and its documentation updated when changes are made.

I was able to improve on my HTML and CSS skills, even though I used help from an AI, I was able to read and understand most of my code which proved useful when debugging and making adjustments. Especially within CSS where I improved the visual aesthetic of my site. I'd never used JSDoc before, so found the process of documenting the JavaScript initially difficult. Although, I had used Sphinx previously which worked quite similar. I have realised the importance of automated documentation and how helpful it can be on larger scale projects when working with/managing larger groups of individuals who may not understand the source code. 

If I was progressing this portfolio further, I would consider adding more features. Accessibility features would be useful - giving dark or light mode options so that viewers can enjoy their viewing experience. Maybe I would also find a way to  integrate Itch games into the website so they can play the games without leaving the site. 




## Building the Documentation Locally

This project uses JSDoc to generate documentation from JavaScript source files. Node.js and npm must be installed first.

Install the project dependencies:

```bash
npm install
```

Generate the documentation:

```bash
npx jsdoc -c .jsdoc.json -r src -d docs
```

The generated documentation will appear in the `docs/` folder. Open `docs/index.html` in a browser to view it.



## How the GitHub Actions Workflow Works

The project uses GitHub Actions to automatically build and deploy the portfolio website and its JavaScript documentation.

The workflow is located at:

```text
.github/workflows/pages.yml
```

When changes are pushed to the `main` branch, the workflow:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs the project dependencies using npm.
4. Copies the website files into a deployment directory.
5. Generates JavaScript documentation using JSDoc.
6. Uploads the website and documentation as a GitHub Pages artifact.
7. Deploys the artifact to GitHub Pages.

The workflow can also be triggered manually from the **Actions** tab on GitHub.

## Enabling GitHub Pages

To enable GitHub Pages:

1. Open the repository on GitHub.
2. Go to Settings.
3. Select Pages from the sidebar.
4. Under Build and deployment**, select Actions as the source.
5. Open the Actions tab and check that the deployment workflow completes successfully.
x

## Building the Documentation Locally

Make sure Node.js and npm are installed.

Install the dependencies:

```bash
npm install
```

Generate the documentation:

```bash
npx jsdoc -c .jsdoc.json -r src -d docs
```

The generated files will appear in the local `docs/` directory. Open `docs/index.html` in a browser to view the documentation.


## AI DECLARATION

I used ChatGPT (OpenAI) as an AI assistance tool during the development of my portfolio.

AI assistance was used to help write the code and provide guidance on using GitHub Actions and JSDoc.

I reviewed and tested the generated code, adding my own improvements and changes where necessary .

The creative direction, design decisions, and final implementation were guided by my own work and judgement.

AI tool used: ChatGPT (OpenAI)