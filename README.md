# SwCmi
## Description
SwCmi is a open sourced Projcet. It is a website for Su Won Missionary Church. We prefer React js as its view framework and to use Redux as its architecture pattern. 

### source code organized as follow
* components is the folder for React views.
* containers is the folder for containers which control the data state.
* page is the folder for these composed views. You can think each page composed by many views. but page is the unit for users to see at every time.
* public is the folder for storing static files. 
* Redux Part is comming soon.....

### Fetures of SwCmi
* Gallery: It is the place for showing pictures uploaded by users. When user upload their pics, it is required to write down description and title for its pic. Gallery should show pictures according to their created time. Gallery is made of a lot of items which contain title, description, picture, created time and so on. When user click each of these items, show users a detail page or modal, etc.
* Video: It is the place for showing videos uploaded by users. When user upload their video, it is required to write down description and title for its vides. Video should show videos according to their created time. 
* Forum: It is the place for communication for users. Users can write down post here(no picture attatched here. only text for first version. ). They are showed according to their created time. 
* Login: Login funciton is a requisite funciton for Gallery, Video and Forum. If user didn`t log in, they would not have authority to created, upload and delete any contents, but have Get List.  



#installation
precondition:
1. node -> 6.2
2. npm -> 3.8.9

###--------------------------------------

1. open terminal(console in windows)
2. input command  ---> npm install 
3. input command --> gulp 
4. input command --> node index.js (for running)


