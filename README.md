# Pin-up
A chromium based browser extension for web monitoring and getting notified through email whenever there is an update.

## Getting Started

### Prerequisites

 * NodeJs
 * Chromium based browser (Chrome, Brave etc)


Step 1: Enable the extension.

* Go to your browser's setting option.
* Locate the 'extension' option and select 'manage extensions'.
* then select the 'Load unpacked' option, select it and then find the folder with the project files.
* Now, An icon of the extension will appear on the browser window beside the menu option.

Step 2: Starting the server

* Open Nodejs terminal inside the 'server' folder of the project.
* Edit the server file, Add your secondary email details to the following code in the file.
```
function notifyUser(email,url){

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: "Your email", //your email
          pass: "your password" //your password
          //for better security you can use environment variables instead
        }
      });
```
* Then run the folowing command in node terminal start the server.
```
node server.js
```
* The server will be running at localhost:8000/

Step 3: Start using the extension :)

* Go to your suitable website and then open the extension by clicking on the icon.
* Add your email
* Click Pin this page! Now whenever there is an update to the pinned website you will be notified through an email.


## Built With

* [NodeJs](https://nodejs.org/)
* [ExpressJs](https://expressjs.com/)
* [Request](https://www.npmjs.com/package/request)
* [Cheeriojs](https://cheerio.js.org/)
* [Nodemailer](https://nodemailer.com/about/)

## Authors

* **Aman Dev Chowdhary**
