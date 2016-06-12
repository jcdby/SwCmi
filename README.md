# SwCmi
## Description
SwCmi is an open source Project. It is a website for Su Won Missionary Church. We decided to use React js as its view framework and to use Redux as its architecture pattern.

### source code organized as follow

1. app is the front-end code for development
⋅⋅* components gathers the logical components of the application
⋅⋅* actions keeps the actions that can be associated to a component e.g. get user data
⋅⋅* containers is the folder for containers which control the data state.
⋅⋅* layouts it the folder for layouts of the APP e.g. static views that are repeated on many pages
⋅⋅* views is the visual part of a component. This is where markup is written.
⋅⋅* reducers is where the states of each component is kept. This is part of the redux pattern
⋅⋅* router is the where we define the routes of the app i.e. how the components are mapped to one another
⋅⋅* store is the unique place where the state of the application can be modified. This is part of the redux pattern. It imports the reducers.
2. gulp is the task runner e.g. building the application
3. public is the folder with the static built files,
4. server is the folder for the dev web server

### Features of SwCmi
* Gallery: It is the place for showing pictures uploaded by users. When user upload their pics, it is required to write down description and title for its pic. Gallery should show pictures according to their created time. Gallery is made of a lot of items which contain title, description, picture, created time and so on. When user click each of these items, show users a detail page or modal, etc.
* Video: It is the place for showing videos uploaded by users. When user upload their video, it is required to write down description and title for its vides. Video should show videos according to their created time. 
* Forum: It is the place for communication for users. Users can write down post here(no picture attached here. only text for first version. ). They are showed according to their created time.
* Login: Login funciton is a requisite funciton for Gallery, Video and Forum. If user didn`t log in, they would not have authority to created, upload and delete any contents, but have Get List.  



#installation
precondition:
1. node -> 6.2
2. npm -> 3.8.9

###--------------------------------------

1. open terminal(console in windows)
2. Installing development packages: input command  ---> npm install
3. Building the application: input command --> gulp
4. Starting the web-server: input command --> npm run start

