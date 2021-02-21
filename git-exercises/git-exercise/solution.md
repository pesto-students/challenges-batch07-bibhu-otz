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

4. git reset Unstaged changes after reset: test.txt

5.
   git stash push -m "my work"

   git stash list
         - stash@{0}: On Day-01: my work
   
   git stash apply stash@{0}
   
6.  
   Git supports two types of tags: lightweight and annotated.
   - A lightweight tag is very much like a branch that doesn’t  
     change — it’s just a pointer to a specific commit.
   - This is basically the commit checksum stored in a file — no 
     other information is kept.
   - $git tag v1.0
     
     $git tag
     v1.0

     $ git show v1.0
     commit 84c895caa927231595a4b1f8a9f8d72f7ec7a5c6 (HEAD -> exercise-solutions/Day-01, tag: v1.0)

7. 

   Annotated tags, however, are stored as full objects in the Git database. They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG).

   git tag -a v1.1 -m "my version 1.1"


   git show v1.1
    
8.  
   git branch -b feature
   echo "sample text">> test.txt
   git add test.txt
   git commit -m "start a feature"
   echo "Some More Text">> test.txt
   git add test.txt
   git commit -m "Finish Feature"
   git checkout master
   git merge feature


9.


10.

   echo 'Hello, World!' | git hash-object --stdin

   b14aa207f059a4e91827baa8d701781d2667bb39

   echo 'blob 14\0Hello, World!' | openssl sha1
     'openssl' is not recognized as an internal or external command,operable program or batch file.
    
11.
    $ git log  
    $ git log --oneline  
    $ git log --stat  
    $ git log --patch  
    $ git log --graph  
    $ git log --graph --oneline  
    Filtering the Commit History
    a. By Amount:
       $git log -3
    b. By Date
       $git log --after="2021-10-2"
       $git log --after="yesterday"
       $git log --after="2014-7-1" --before="2021-10-2"
    c. By Author
       $git log --author="bibhu-otz"
      
    d. By Message
       $git log --grep="Added a test file"
    e. By File
       $git log -- test.txt
    g. By Content
       $git log -S"Hello, World!"
    h. By Range
       $git log ..
       $git log master..feature
 

 12. 
     