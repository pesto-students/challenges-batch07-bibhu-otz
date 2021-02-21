# Git Excercise insights
1. 
   - echo "sample">>test.txt
   - git add test.txt
   - git  commit -m "Added a test file"

   - .git
     -.git is initialized by git init.
     - The .git folder contains all the information that is   necessary for your project in version control and all the information about commits, remote repository address, etc. All of them are present in this folder. It also contains a log that stores your commit history so that you can roll back to history.
     - The basic structure looks like this:
            .
            |-- COMMIT_EDITMSG
            |-- FETCH_HEAD
            |-- HEAD
            |-- ORIG_HEAD
            |-- branches
            |-- config
            |-- description
            |-- hooks
            |   |-- applypatch-msg
            |   |-- commit-msg
            |   |-- post-commit
            |   |-- post-receive
            |   |-- post-update
            |   |-- pre-applypatch
            |   |-- pre-commit
            |   |-- pre-rebase
            |   |-- prepare-commit-msg
            |   `-- update
            |-- index
            |-- info
            |   `-- exclude
            |-- logs
            |   |-- HEAD
            |   `-- refs
            |-- objects
`-- refs
    |-- heads
    |-- remotes
    |-- stash
    `-- tags
     - 4 sub-directories:
          hooks/ : example scripts
           info/ : exclude file for ignored patterns
        objects/ : all "objects"
           refs/ : pointers to commit objects
     - 4 files:
            HEAD : current branch
          config : configuration options
          description
           index : staging area
     Here "object" includes:
     blobs(files)
     trees(directories)
     commits(reference to a tree, parent commit, etc)
    
2.  
   git cat-file -t c754fac
     - show the object type identified by object.

   git cat-file -p c754fac
     - print the contents of object based on its type.
3. 
   git ls-files -s 
   - It is short form of --state
   - Used to show Staged Content
     'Object Name,Mode Bits and Staged number' in the content

4. git reset Unstaged changes after reset: M batch7_day_1/hello.txt