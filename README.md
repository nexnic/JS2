# Smedia 

This is a Social media Platform

## Description 
Social media platforms are online platforms that allow users to create, share and interact with content and information in a virtual community. These platforms are designed to facilitate communication and social networking between individuals, groups or organizations. Users can create personal profiles, share photos, videos, and other types of content, and connect with friends, family members, and other users.

### Build With

-   [SASS](https://sass-lang.com/)
-   [Bootstrap](https://getbootstrap.com/)
-   [Jsdoc](https://jsdoc.app/)
-   [postman](https://www.postman.com/)
-   [git-scm](https://git-scm.com/)

## Getting started

    ### Installing 
        To use this application, follow these steps

            1. Clone the repository to your local machine
                ```
                git clone git@github.com:nexnic/JS2.git
                ```
            2. Install the necesssary dependencies:
                ```
                npm 
                ```
            
        ### Sass & Bootstrap 
            Sass (short for Syntactically Awesome Style Sheets)
            Bootstrap is a popular front-end development framework 

                1. To run and watch site & seeing error 
                    ```
                    npm run watch 
                    ```
                2. after change something in sass files
                    ```
                    npm run build
                    ```
        ### jsdoc
            JSDoc is a tool for generating documentation for JavaScript code.

                1. After change something in one of the js files
                    ```
                    npm run jsdoc 
                    ```

    ## Using Git 

        ### Connect using SSH
            SSH can be used with GitHub to securely connect and authenticate with a GitHub account. This is useful for performing various actions, such as pushing and pulling code, cloning repositories, and managing issues, among others

                See documentation 
                - [GITHUB-SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
        
        ### How to use Git

            #### Clone 
                When you want to clone a repository it's 2 way let's check them out 
                
                1. Clone default 

                    This way get every thing.

                    ```
                    git clone git@github.com:repository.name.git
                    ```
                2. Clone removing root folder 

                    This way you will remove th root folder.

                    ```
                    git clone git@github.com:repository.name.git . 
                    ```

            #### New branch 
                In Git, a branch is a separate line of development that allows developers to work on different features or parts of a project in parallel. 

                1. New-branch
                    Creating a new branch in Git is a simple process that can be done using the 
                    ```
                    git branch New-feature
                    ```
                2. Checkout
                    You can then switch to this branch using the
                    ```
                    git checkout new-feature
                    ```
            
            #### Add & commit 
                When you have edit, or make i folder/file need to add it to git

                1. ADD
                    After doing changes or add new item, let´s add to git 
                    ```
                    git add folderName/fileName
                    ```
                2. Commit 
                    Need to add description to the file/folder 
                    ```
                    git commit -m "description"
                    ```
            
            #### Before push 
                This is import when working in team, 

                1. Fetch 
                    is a command that allows you to retrieve changes from a remote repository without merging them into your local repository.
                    ```
                    git fetch 
                    ```
                2. pull 
                    Git will automatically merge the changes from the remote branch into your current branch.
                    ```
                    git pull
                    ```

            #### push 
                is a useful command when you want to upload your changes to a remote repository and share them with other developers.

                1. push 
                ```
                git push 
                ```

More content will come 