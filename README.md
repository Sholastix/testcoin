# testcoin

Demo app for monitoring exchange course (based on coingecko.com) between cryptocurrencies 'bitcoin' and 'ethereum'. User set the value and get notifications (in console.log), when exchange rate > or < of that value.

    Back:       Node + Express
    Database:   MongoDB + Mongoose
__________________________________________________________________

1.  Active MongoDB server's needed.

2.  Rename file '.env.example' into '.env' and setup enviroment variables.

3.  Use following commands from terminal/console:
   
        3.1. npm install - needed modules installation;
        3.2. npm start - code start.

ATTENTION!!! After server's start you'll need to wait 1 minute. Then fetching and comparison begins (and repeats every 1 minute) 
and you'll see result in console output.