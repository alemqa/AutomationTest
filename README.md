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

YOU SHOULD BE ALL SET NOW!

Running the tests:

1. In terminal type in: cypress open
Hit enter
Wait for cypress to open
In cypress app select the folder called 'AutomationTest', (you cloned it on your desktop)

2. Now you should see couple of different spec files
If you want to run the API automation, just click on API_spec.js (in top right corner, you can switch browsers)
If you want to run the e2e test, just click on test.spec.js

3. If you want to run the tests via console
Go into AutomationTest folder, right click and click on GitBash Here
In terminal, type in: npm run test
Wait for test to finish (both API and e2e test will run this way)
When test run is completed, mochawesome reporting tool will activate.
It will create .json reports for each specs and combine the into .html file.
Now you can open AutomationTest folder, go into Cypress folder, go into reports folder, go into mochareports folder. There you will see report.html file.
Open it with browser (Chrome) and you will see full report of the test run.
Also if you go back into Cypress folder, you can see folder called Videos. Inside that you will have a video of the last run.

