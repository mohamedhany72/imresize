[comment]: <> (# fwd_project1)
[comment]: <> (A repo for my first project in FWD)

# My Image Processing API Project

## scripts to run
"start": "nodemon src/index.ts"

"build": "npx tsc"

"lint": "eslint src/**/*.ts"

"lintf": "eslint src/**/*.ts --fix"

"prettier": "prettier --config .prettierrc \"src/**/*.js\" --write"

"jasmine": "jasmine"

"test": "npm run build && npm run jasmine"


## URL to write
    in this project I used express params instead of queries so to 
    type the correct url enter "api/images/name/width/heigh" instead of 
    "api/images/?filename=name&width=width&height=height"
        
## list of urls of this api
    the [main page](#) contain description
    ["/api/images/nameofimage"](#) will preview the full image
    ["/api/images/name/width/height"](#) will preview the resized image
       
## what my api does?<
       
    The api take image name, width and height and then resize the image using sharp and save it to thumbnails folder.
    If the user enters the same url again the api won't resize the image but instead it will grab it from 
    Thumbnails folder and thus save time.
    If the user enter a name of an image that doesn't exist the api will throw a 404 error 
    If the user enter bad url parameters like a string in width or in height or be entering a negative number
    it will throw a 500 error 
 
## functionality description
      
    The app has routes for scalability of the app. 
    Image route handles two get requests; one for the full image and one for the resized image. 
    The get request which handle the resized image has three middelwares, 
    the first to check existance of the full image, 
    the second to validate width and height parameters, 
    and the third to check existance of the resized image, 
    if the request passes the three middlewares, then the resizing function will be called to resize 
    the image, save it to the thumbnails folder, and return the path to that resized image. 
    All of the middlewares and the resizing functions are separated in files in util folder. 
   


## test that I made
    test for the the resizing function
    test for the main page endpoint
    test for api/image end point with image name only
    test for throwing an error when entering a file name that doesn't exist
    test for api/image end point with good params
    test for api/image end point with bad params
        
