# Pin-up
A chromium based browser extension for web monitoring and getting notified through email whenever there is an update.

## Getting Started

### Prerequisites

 * NodeJs
 * Chromium based browser (Chrome, Brave etc)


Step 1: Enable the extension.

* Go to your browser's setting option.
* Locate the 'extension' options and select 'manage extensions'.
* then select the 'Load unpacked' option, select it and then find the folder with the project files.
* Now, An icon of the extension will appear on the browser window besides the menu option.

Step 2: Strting the server
* Open Nodejs terminal inside the 'server' folder of the project.
* Edit the server file, Add your secondary email details.
```
function notifyUser(email,url){

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: "Your email", //your email
          pass: "your password" //you can encrypt this or use a global node variable instead
        }
      });
```
* The server will be running at localhost:8000/

Step 3: Start using the extension :)
* Go to your suitable website and then open the extension by clicking on the icon.
* Add your email
* Click Pin this page! Now when


## Built With

* NodeJs
* ExpressJs
* Request
* Cheeriojs
* Nodemailer

## Authors

* **Aman Dev Chowdhary**
