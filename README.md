# android
##Prerequisites:
##Install Nodejs :
    Ubuntu:
        curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
        sudo apt -y install nodejs
##To Run the APP:
  - go to client
  - type npm install
  - go to server
  - type npm install
  - type npm start on both location to start client and server
###Socket server details:
  - socket server will be running on localhost:5001
  - if connection made on server it shows a user connected
  - you need to provide which key/endpoint you are sending data to
  - on server/index.js line:36 you need to change as per your data
###Client Details(optional):
  - its just to visualize the images
  - once we get the images on server the server send images to react frontend to visualize it
