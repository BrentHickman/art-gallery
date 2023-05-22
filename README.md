# Art Gallery
#### An interactive art gallery 

#### By Brent Hickman

## Technologies Used

* C#
* Dotnet 6
* Entity Framework Core
* MySQL
* Html
* Css
* React
* Firebase
* Swagger UI


## The purpose of this project is to create a visually pleasing way to quickly see an art collection and give users a way to see trends and tailor their gallery experience by sorting based on color pallet, mediums used, subject, date, etc. This project implements a C# API backend interfaced with a React frontend client and Firebase authentication. 

## Setup/Installation Requirements

* Open a terminal window and clone this repository by entering into the command line:
> git clone https://github.com/BrentHickman/art-gallery.git
* First Initialize the API:
* In the terminal, navigate to the project with the command:
> cd art-gallery/art-gallery-app/ImageGalleryApi
* Once in the "ImageGalleryApi" directory, create a new file called appsettings.json
* Within appsettings.json, put in the following code, replacing the [YOURUSERNAME] and [YOURPASSWORD] values with your own username and password for MySQL.
>{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "Server=localhost;Port=3306;database=gallery_api;uid=[YOURUSERNAME];pwd=[YOURPASSWORD];"
  }
}
* Next, enter the following into the command line:
> dotnet restore
* then:
> dotnet ef database update
* To launch the application in development mode, enter the following lines into the command line:
> dotnet watch run
* The API should now be accessable through Swagger UI here:
> http://localhost:5261/swagger/index.html

* Endpoints for ImageGalleryApi V1 :
>GET http://localhost:5261/v1/Images

>GET http://localhost:5261/v1/Images/{id}

>GET http://localhost:5261/v1/Images?color1={color1}

>POST http://localhost:5261/v1/Images

>PUT http://localhost:5261/v1/Images/{id}

>DELETE http://localhost:5261/v1/Images/{id}

* Once the API is running Initialize the Gallery CLient:
> cd ../ClientApp
* then:
> npm install
* Next, enter the following into the command line:
> npm build
* To launch the application in development mode
> npm run start
* The application should the be available at:
> https://localhost:44454/
* Click the "Enter Gallery" button to get started.


## Known Bugs
* Work in progress


## License

* [MIT](https://opensource.org/licenses/MIT)
* Brent Hickman 4/28/2023