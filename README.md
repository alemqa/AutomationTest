Setting up cypress framework:

1. Make sure you have installed node.js on your machine
https://nodejs.org/en/

2. Download git bash
https://git-scm.com/downloads
If you are familiar with Command Prompt, you don't need GitBash

3. On your desktop, right click and click on GitBash here
This will open a terminal, with path already set to desktop

4. Clone repository
In terminal type in: git clone https://github.com/alemqa/AutomationTest.git
Hit enter

5. Switch to master branch:
In terminal type in: git checkout master
Hit enter

6. Now pull the changes:
In terminal type in: git pull
Hit enter

7. Install cypress on your machine
In  terminal type in: npm install cypress
Hit enter

8. Install xpath for cypress
In terminal type in: npm i cypress-xpath
Hit enter

YOU SHOULD BE ALL SET NOW!

Running the tests:

1. In terminal type in: cypress open
Hit enter
Wait for cypress to open
In cypress app select the folder called 'AutomationTest', (you cloned it on your desktop)

2. Now you should see couple of different spec files
If you want to run the API automation, just click on API_spec.js (in top right corner, you can switch browsers)
If you want to run the e2e test, just click on test.spec.js
If you want to run all the integration spec files, just click on 'Run integration specs' button, in top right corner.


Those are steps for basic users. On my machine I set up the reporting tool also, called mochawesome.
It can generate .html reports, so the team can visualy see everything. How long did it take to run the test, on which browser did I ran it,
what passed, what failed....etc.
But for this if you want it to set up on your machine, contact me directly.



